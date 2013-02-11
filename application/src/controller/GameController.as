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
import com.greensock.loading.SWFLoader;

import flash.display.MovieClip;

import flash.display.MovieClip;
import flash.events.MouseEvent;

import managers.AssetsManager;
import managers.ButtonManager;
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

    public var stateMachine:StateController;

    public static var ticker:TimeTickerManager;

    public static var hud:Hud;
    public static var currentContent:MovieClip;
    public static var currentLipSync:String = '';
    public static var btnsOnContent:Array = [];

    public function GameController(mapLayer:MovieClip, hudLayer:MovieClip, popupLayer:MovieClip) {
        ticker = new TimeTickerManager();
        ticker.timerStart();
        mapController = new MapController(mapLayer);
        hudController = new HudController(hudLayer);
        popUpController = new PopUpController(popupLayer);
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

        startPlay();
        /*Main.mainStage.addEventListener(MouseEvent.MOUSE_WHEEL, play);
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

    public function clickSound(enable:Boolean):void {

    }

    public function clickHome():void {

    }

    public function clickPrev():void {

    }

    public function clickNext():void {
        if (currentContent.currentFrame == currentContent.totalFrames) {
            StateController.save.telaAtual++;
            startPlay();
        } else {
          continuePlay();
        }

    }

    public function clickPlay():void {

        //  AssetsManager.
        // var loader:SWFLoader = new SWFLoader('telas/'+StateController.telaAtual+ '.swf', {name:StateController.telaAtual,onComplete:completeHandler});
        // loader.load();
    }

    public function startPlay():void {
        if (LoaderMax.getContent(StateController.telaAtual) == null) {
            AssetsManager.loadSWFAsset('telas/' + StateController.telaAtual + '.swf', {name: StateController.telaAtual, onComplete: doPlay}, PreloaderManager.setVisible)
        }
    }
    public function continuePlay():void{
        stopLipSync();
        currentContent.play();
    }

    public function doPlay(event:LoaderEvent):void {
      trace('REGISTERED', ButtonManager.regiteredButtons())
        clearListenertnscontent();
        trace('CLEARED', ButtonManager.regiteredButtons())
        stopLipSync();
        if (currentContent != null) {
            hud.content.removeChild(currentContent);
            currentContent = null;
        }

        currentContent = LoaderMax.getContent(StateController.telaAtual).rawContent["content"];
        currentContent.x = 50;
        currentContent.y = -50;
        hud.txtTitle.text = StateController.telaAtual;
        hud.content.addChild(currentContent);
        currentContent.play();
    }

    public static function startLipSync(mouth:MovieClip, sound:String):void {

        LipSyncManager.enableLipsync(mouth);
        currentLipSync = sound;
        SoundManager.addExternalSound(sound, 'falas/' + sound + '.mp3');
        SoundManager.play(sound);
    }

    public function stopLipSync():void {
        if (currentLipSync != '') {
            LipSyncManager.disableLipsync();
            SoundManager.stop(currentLipSync);
            currentLipSync = '';
        }
    }

    public static function addButton(key:String ,btn:MovieClip,fn:Function):void{
        if(btnsOnContent.indexOf(btnsOnContent.indexOf(key))==-1){
            btnsOnContent.push(key);
          ButtonManager.setButton(key, btn, fn, 0.2);
        }
    }

    public function clearListenertnscontent():void{
        for (var i:int = 0; i < btnsOnContent.length; i++) {
            var key:String = btnsOnContent[i];

             ButtonManager.removeButton(key);
        }
        btnsOnContent=[];
    }

}
}
