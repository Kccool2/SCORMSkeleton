/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 31/01/13
 * Time: 21:20
 * To change this template use File | Settings | File Templates.
 */
package controller {
import com.greensock.events.LoaderEvent;
import com.greensock.loading.LoaderMax;

import flash.display.DisplayObject;
import flash.display.MovieClip;
import flash.events.KeyboardEvent;

import managers.AssetsManager;
import managers.EventManager;
import managers.LipSyncManager;
import managers.TimeTickerManager;
import managers.buttons.ButtonManager_OLD;
import managers.soundalize.SoundManager;

import model.HudVo;

import preloader.PreloaderManager;

import view.Hud;
import view.YoutubeController;

public class GameController {
    public var mapController:MapController;
    public var hudController:HudController;
    public var popUpController:PopUpController;

    public static var ticker:TimeTickerManager;
    public static var hud:Hud;

    public static var currentContent:MovieClip;
    public static var currentLipSync:String = '';
    public static var currentYT:YoutubeController;
    public static var btnsOnContent:Array = [];
    public static var status:String = EMPTY;

    public static const STOPPED:String = 'stopped';
    public static const PAUSED:String = 'paused';
    public static const PLAYING_PAUSE:String = 'playingPaused';
    public static const PLAYING:String = 'playing';
    public static const EMPTY:String = 'empty';

    public static var isMute:Boolean = false;

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

        EventManager.addListener("GameController.onItemClick", "GameController.onItemClick", onMapaCursoClick);
        EventManager.addListener("GameController.onMapaFecharClick", "GameController.onMapaFecharClick", onMapaFecharClick);
       StateController.save.ultimaTela=2;
       StateController.save.telaAtual=0;

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
        forceRemoveContent();
        StateController.save.telaAtual = bt.indice;
        startPlay();
    }

    public function onMapaFecharClick(bt:MovieClip = null):void {
        trace('onMapaFecharClick', status)
        if (status == PLAYING_PAUSE) {
            if (currentLipSync != '') {
                SoundManager.play(currentLipSync)
            }else if (currentYT!=null){
                currentYT.play();
            }else{
                stopLipSync();
                clearListenertnsContent();
                currentContent.play();
                status = PLAYING;
            }
        } else {
            if (currentLipSync != '') {
                SoundManager.play(currentLipSync)
            }else if (currentYT!=null){
                currentYT.play();
            }

        }

    }

    public function clickHome():void {
        forcePause();
        EventManager.dispatch(this, "PopUpController.showMapa");
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
        isMute = !enable;
        trace(isMute)
    }

    public function clickPrev():void {

        if (StateController.save.telaAtual > 0) {
           if(currentContent.currentFrame>15){
               clearListenertnsContent();
               stopLipSync();
               stopYoutubeVideo();
               currentContent.gotoAndStop(1);
           } else{
               forceRemoveContent();
               StateController.save.telaAtual--;
           }
        }else{
            forceRemoveContent();
        }
        startPlay();
    }

    public function clickNext():void {
        trace(status)
        switch (status) {
            case PLAYING_PAUSE:
            case PAUSED:
                if (currentContent.currentFrame == currentContent.totalFrames) {
                    forceRemoveContent();
                    walkToNextStep();
                    startPlay();
                } else {
                    stopLipSync();
                    stopYoutubeVideo();
                    continueAnimation();
                }
                break;
            case PLAYING:
                if (StateController.save.ultimaTela > StateController.save.telaAtual) {
                    forceRemoveContent();
                    walkToNextStep();
                    startPlay();
                }
                break;
            case STOPPED:
            case EMPTY:
            default:
                if (currentContent != null) {
                    if (currentContent.currentFrame == currentContent.totalFrames) {
                        forceRemoveContent();
                        walkToNextStep();
                    }
                }
                startPlay();
                break;
        }
    }

    private function forcePause():void {
        if (currentLipSync != '') {
            SoundManager.pause(currentLipSync);
        }
         if (currentYT!=null){
            currentYT.pause();
        }
        status = status == PLAYING||PLAYING_PAUSE ? PLAYING_PAUSE : PAUSED;
        if (currentContent != null) {
            currentContent.stop();
        }
        trace('forcePause', status)
    }

    public static function continueAnimation():void {
        if (status == PLAYING_PAUSE) {
            stopLipSync();
            stopYoutubeVideo();
            clearListenertnsContent();
            currentContent.play();
        } else {
            if (currentLipSync != '') {
                SoundManager.play(currentLipSync)
            }else if (currentYT!=null){
                currentYT.play();
            }

        }
        status = PLAYING;


    }

    private function forceStop():void {
        stopLipSync();
        stopYoutubeVideo();
        clearListenertnsContent();
        status = STOPPED;
        if (currentContent != null) {
            currentContent.gotoAndStop(1);
        }
    }

    private function forceRemoveContent():void {
        stopLipSync();
        stopYoutubeVideo();
        clearListenertnsContent();
        var _do:DisplayObject;
        while (hud.content.numChildren > 0) {
            _do = hud.content.removeChildAt(0);
            if (_do is MovieClip) {
                MovieClip(_do).stop();
            }
        }
        currentContent = null;
        status = EMPTY;
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
        PreloaderManager.setVisible(true);
        if (LoaderMax.getContent(StateController.telaAtual) == null) {
            AssetsManager.loadSWFAsset('telas/' + StateController.telaAtual + '.swf', {name: StateController.telaAtual, onComplete: doPlay},null)
        } else {
            if( LoaderMax.getContent(StateController.telaAtual)!=null){
                if(   LoaderMax.getContent(StateController.telaAtual).rawContent["content"]!=null){
                    forceRemoveContent();
                    stopCourse();
                    LoaderMax.getContent(StateController.telaAtual).rawContent["content"].gotoAndStop(1);

                }
            }

            doPlay();
        }
    }

    public function doPlay(event:LoaderEvent = null):void {

        PreloaderManager.setVisible(false);
        currentContent = LoaderMax.getContent(StateController.telaAtual).rawContent["content"];
        hud.content.addChild(currentContent);
        hud.txtTitle.htmlText = StateController.titutloAtual;
        hud.txtTitle2.htmlText =StateController.titutlo2Atual;
        hud.txtTelas.htmlText = StateController.telaAtual + ' - ' + (StateController.save.telaAtual + 1).toString() + '/' + StateController.qtyTelas.toString();
        hud.txtPagina.htmlText ='Página: '+ (StateController.save.telaAtual + 1).toString() + '/' + StateController.qtyTelas.toString();
        status = PLAYING;
        currentContent.play();


    }

    private static function clearListenertnsContent():void {
        for (var i:int = 0; i < btnsOnContent.length; i++) {
            var key:String = btnsOnContent[i];
            ButtonManager_OLD.removeButton(key);
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

    public static function stopYoutubeVideo():void {
        if (currentYT != null) {
            currentYT.destroyButtonClickHandler();
            currentYT =null;
        }
    }

    public static function onCompleteLipSync(o:Object = null) {
        status = PLAYING_PAUSE;
        stopLipSync();
    }


    public static function addVideoYoutube(id:String,  container:MovieClip):void{
        stopYoutubeVideo();
        var yt:YoutubeController= new YoutubeController();
       currentYT = yt;
        yt.setupPlayerLoader(id,container);
    }

    public static function stopCourse():void {
        status = PLAYING_PAUSE;
        if(currentContent!=null)
        currentContent.stop();

        ButtonManager_OLD.addOverEffect(hud.btnNext);
    }

    public static function addButton(key:String, btn:MovieClip, fn:Function):void {
        if (btnsOnContent.indexOf(btnsOnContent.indexOf(key)) == -1) {
            btnsOnContent.push(key);
            ButtonManager_OLD.setButton(key, btn, fn, Main.DELAY_BUTTON);
        }
    }

    public static function startLipSync(mouth:MovieClip, sound:String):void {
        stopLipSync();
        LipSyncManager.enableLipsync(mouth);
        currentLipSync = sound;
        SoundManager.addExternalSound(sound, 'falas/' + sound + '.mp3', 2000, false, {onComplete: onCompleteLipSync});
        SoundManager.play(sound, isMute ? 0 : 1);
    }

    public static function finalTela():void {
        stopCourse();

    }

    public static function finalCurso():void {
        stopCourse();
    }

    private function onKeyDown(event:KeyboardEvent):void {
        if (event.ctrlKey && event.altKey) {
            stopYoutubeVideo();
            stopLipSync();
            walkToNextStep();
            startPlay();
        }
    }
}
}

//addButton, startLipSync  stopCourse  finalTela finalCurso
