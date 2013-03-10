/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 31/01/13
 * Time: 21:20
 * To change this template use File | Settings | File Templates.
 */
package controller {
import com.greensock.TweenMax;
import com.greensock.events.LoaderEvent;
import com.greensock.loading.LoaderMax;

import flash.display.MovieClip;
import flash.events.KeyboardEvent;

import managers.AssetsManager;
import managers.ButtonManager;
import managers.EventManager;
import managers.LipSyncManager;
import managers.TimeTickerManager;
import managers.soundalize.SoundManager;

import model.HudVo;

import preloader.PreloaderManager;

import view.Hud;

public class GameController {
    public var mapController:MapController;
    public var hudController:HudController;
    public var popUpController:PopUpController;

    public static var ticker:TimeTickerManager;
    public static var hud:Hud;

    public static var currentContent:MovieClip;
    public static var currentLipSync:String = '';
    public static var btnsOnContent:Array = [];
    public static var contentPlaying:Boolean = false;

    public function GameController(mapLayer:MovieClip, hudLayer:MovieClip, popupLayer:MovieClip) {
        ticker = new TimeTickerManager();
        ticker.timerStart();
        mapController = new MapController(mapLayer);
        hudController = new HudController(hudLayer);
        popUpController = new PopUpController(popupLayer);
        Main.mainStage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
    }

    public function initialize():void {
        var o:HudVo = new HudVo();
        o.clickSound = clickSound;
        o.clickHome = clickHome;
        o.clickPrev = clickPrev;
        o.clickNext = clickNext;
        o.clickPlay = clickPlay;
        hud = Hud(hudController.addViewScheme(Hud, o, "test", null, 0, 0, "PopUpController.Hud"));
        hud.showHud();
        PreloaderManager.setVisible(false);
        StateController.save.ultimaTela = 12;

        EventManager.addListener("MapaCurso.onItemClick", "MapaCurso.onItemClick", onMapaCursoClick);
        startPlay();

       /*popUpController.question.showQuestion("alo teste",onClickQuestion)
        Main.mainStage.addEventListener(MouseEvent.MOUSE_WHEEL, play);
         var m2:MovieTest = new MovieTest();
         var p:Point = ToolGame.calcQuadrantPos(m2, m2.fundo, 1, 1);

         trace('initialized GC')
         for (var i:int = 0; i < 3; i++) {
         var movieTestVo:MovieTestVo = new MovieTestVo();
         var m:MovieTest = new MovieTest();
         }

         // EventManager.dispatch(this, "MovieTest");
         var i3:IView =  popUpController.addViewScheme(MovieTest, new MovieTestVo(), "test", uhulll,p.x,p.y, "William");
         var i2:IView =  popUpController.addViewScheme(MovieTest, new MovieTestVo(), "test2", uhulll,0,0, "William");
         */
        //PreloaderManager.setVisible(false);
        /* var c:CMI= new CMI();
         c.objectives.push(new Objective());
         var o:Object =  SerializerManager.convertToSerializableObject(c);
         trace(JSON.encode(o)); */
        //PreloaderManager.setTextLabel("Aguarde, carregando SCORM...");
    }

    public function onMapaCursoClick(bt:MovieClip):void {

        StateController.save.telaAtual = bt.indice;
        popUpController.mapa.close();
        TweenMax.delayedCall(.5, startPlay);

    }

    public function onClickQuestion(option:Boolean):void {
        trace('option onClickQuestion: ', option);
        popUpController.alert.showAlert('adfadfad', onClickAlert)
    }

    public function onClickAlert(option:Boolean):void {
        trace('option onClickAlert:  ', option);
        popUpController.question.showQuestion("alo teste", onClickQuestion)
    }

    public function clickSound(enable:Boolean):void {
        enable ? SoundManager.unmuteAll() : SoundManager.muteAll();
    }

    public function clickHome():void {
        forceSTOP();
        EventManager.dispatch(this, "PopUpController.showMapa");
    }

    public function clickPrev():void {
        if (StateController.save.telaAtual > 0) {
            StateController.save.telaAtual--;
            stopLipSync();
            startPlay();
        }
    }

    public function clickNext():void {

        if (StateController.save.ultimaTela > StateController.save.telaAtual) {

            if (currentContent.currentFrame == currentContent.totalFrames) {
                StateController.save.telaAtual++;
                stopLipSync();
                startPlay();
            }
            else {
                if (!contentPlaying) {
                    continuePlay();
                }
            }

        } else {
            if (!contentPlaying) {
                if (currentContent.currentFrame == currentContent.totalFrames) {
                    stopLipSync();
                    walkToNextStep();
                    startPlay();
                } else {
                    continuePlay();
                }
            }
        }
    }

    public function forceSTOP():void {
        contentPlaying = false;
        stopLipSync();
        clearListenertnscontent();
    }

    private function walkToNextStep():void {
        StateController.save.telaAtual++;
        if (StateController.qtyTelas == StateController.save.telaAtual)   StateController.save.telaAtual--;
        if (StateController.save.ultimaTela < StateController.save.telaAtual)StateController.save.ultimaTela = StateController.save.telaAtual;

    }

    public function clickPlay(isPlaying:Boolean):void {
        //notImplemented

    }

    public function startPlay():void {
        if (LoaderMax.getContent(StateController.telaAtual) == null) {
            AssetsManager.loadSWFAsset('telas/' + StateController.telaAtual + '.swf', {name: StateController.telaAtual, onComplete: doPlay}, PreloaderManager.setVisible)
        } else {
            LoaderMax.getContent(StateController.telaAtual).rawContent["content"].gotoAndStop(1);
            doPlay();
        }
    }

    public function continuePlay():void {

        StateController.save.ultimaTela = StateController.save.telaAtual;
        clearListenertnscontent();
        continueAnimation();
    }

    public function doPlay(event:LoaderEvent = null):void {
        clearListenertnscontent();
        if (currentContent != null) {
            contentPlaying = false;
            currentContent.stop();
            hud.content.removeChild(currentContent);
            currentContent = null;
        }
        currentContent = LoaderMax.getContent(StateController.telaAtual).rawContent["content"];

        hud.content.addChild(currentContent);
        hud.txtTitle.htmlText = StateController.titutloAtual;
        hud.txtTelas.htmlText = StateController.telaAtual + ' - ' + (StateController.save.telaAtual + 1).toString() + '/' + StateController.qtyTelas.toString();
        contentPlaying = true;
        currentContent.play();
        if (StateController.save.telaAtual == StateController.save.ultimaTela)
            hud.setButtonsEnabled(false);

    }

    public function clearListenertnscontent():void {
        for (var i:int = 0; i < btnsOnContent.length; i++) {
            var key:String = btnsOnContent[i];
            ButtonManager.removeButton(key);
        }
        btnsOnContent = [];
    }

    public static function stopLipSync():void {
        if (currentLipSync != '') {
            LipSyncManager.disableLipsync();
            SoundManager.stop(currentLipSync);
            currentLipSync = '';
        }
    }

    public static function continueAnimation():void {
        contentPlaying = true;
        stopLipSync();
        currentContent.play();
        if (StateController.save.telaAtual == StateController.save.ultimaTela)
            hud.setButtonsEnabled(false);

    }

    public static function addButton(key:String, btn:MovieClip, fn:Function):void {
        if (btnsOnContent.indexOf(btnsOnContent.indexOf(key)) == -1) {
            btnsOnContent.push(key);
            ButtonManager.setButton(key, btn, fn, Main.DELAY_BUTTON);
        }
    }

    public static function startLipSync(mouth:MovieClip, sound:String):void {

        LipSyncManager.enableLipsync(mouth);
        currentLipSync = sound;
        SoundManager.addExternalSound(sound, 'falas/' + sound + '.mp3');
        SoundManager.play(sound);
    }

    public static function stopCourse():void {
        contentPlaying = false;
        currentContent.stop();
        hud.setButtonsEnabled(true);
        ButtonManager.addOverEffect(hud.btnNext);

    }

    public static function finalTela():void {
        hud.setButtonsEnabled(true);
        ButtonManager.addOverEffect(hud.btnNext);

    }

    public static function finalCurso():void {

        hud.setButtonsEnabled(true);
    }

    private function onKeyDown(event:KeyboardEvent):void {
        if (event.ctrlKey && event.altKey) {

            stopLipSync();
            walkToNextStep();
            startPlay();
        }
    }
}
}
