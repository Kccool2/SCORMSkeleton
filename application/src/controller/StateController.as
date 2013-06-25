/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 31/01/13
 * Time: 21:20
 * To change this template use File | Settings | File Templates.
 */
package controller {
import ToolLib.CompressUtil;

import com.adobe.serialization.json.JSON;
import com.demonsters.debugger.MonsterDebugger;
import com.fraktalo.SCORM.SCORMLessonStatus;
import com.fraktalo.SCORM.SCORMManager;
import com.fraktalo.SCORM.events.ScormEventCommit;
import com.fraktalo.SCORM.events.ScormEventInitialize;
import com.fraktalo.SCORM.events.ScormEventTerminate;
import com.greensock.loading.DataLoader;
import com.greensock.loading.LoaderMax;

import managers.AssetsManager;

import managers.DataManager;
import managers.DebuggerManager;
import managers.EnvironmentManager;

import managers.SerializerManager;
import managers.SerializerManager;
import managers.tk.EventManager_OLD;

import model.ControleTelaVo;
import model.SaveObject;

import preloader.PreloaderManager;

public class StateController {
    private static var config:DataManager;
    private static var texts:DataManager;
    public static var gameData:ControleTelaVo;
    public static var save:SaveObject;
    public var gameDataName:String='_gameData';

    private var serverTest:String = "192.168.0.5";
    public var offlineJSON:String = '{"___id":"1","___propertiesOrder":["suspend_data","objectives","comments","core"],"___className":"com.fraktalo.SCORM.vo.CMI","suspend_data":"","comments":"","core":{"___id":"5","___propertiesOrder":["lesson_location","student_name","session_time","score","lesson_status","total_time","student_id"],"___className":"com.fraktalo.SCORM.vo.Core","student_name":"","lesson_location":"","student_id":"","session_time":"","score":{"___id":"6","___propertiesOrder":["min","raw","max"],"___className":"com.fraktalo.SCORM.vo.Score","min":"","raw":"","max":""},"lesson_status":"","total_time":""},"objectives":{"___className":"Array","___id":"2","___value":[{"___id":"3","___propertiesOrder":["id","score","status"],"___className":"com.fraktalo.SCORM.vo.Objective","id":"","score":{"___id":"6","___propertiesOrder":["min","raw","max"],"___className":"com.fraktalo.SCORM.vo.Score","min":"","raw":"","max":""},"status":""}]}}';
    public static var scorm:SCORMManager;

    public function StateController() {
        var _gameConfig:Object = JSON.decode(LoaderMax.getContent("_gameConfig"));
        config = new DataManager(_gameConfig, "ConfigManager",false);
        var _gameText:Object = JSON.decode(LoaderMax.getContent("_gameText"));
        texts = new DataManager(_gameText, "TextsManager",false);


        //  this.mode =  ConfigController.getConfig("mode");
    }





    public function reset():void{
        save =  new SaveObject();
    }

    public static function getTest(id:String):String {
        return String(texts.getData(id));
    }

    public static function getConfig(id:String):String {
        return String(config.getData(id));
    }

    public static function get titutloAtual():String{
         return gameData.telas[save.telaAtual].titulo;
    }
    public static function get titutlo2Atual():String{
        return gameData.telas[save.telaAtual].titulo2;
    }
    public static function get telaAtual():String{
        return gameData.telas[save.telaAtual].tela;
    }
    public static function get hudSkin():String{
        return gameData.telas[save.telaAtual].skin ||"";
    }
    public static function get qtyTelas():int{
        return gameData.telas.length;
    }

    public function initialize():void {
        PreloaderManager.setTextLabel('aguarde...');
        if(config.getData('modulo')){
            gameDataName = '_gameData'+config.getData('modulo');
            AssetsManager.loadDataAssets('data/'+gameDataName+ '.txt', { name:gameDataName, estimatedBytes: 4800, onComplete: continueInitialize });
        }else{
            continueInitialize()
        }
    }

    public function continueInitialize(r:*=null):void{
        trace(gameDataName)
        var _gameData:Object = JSON.decode(LoaderMax.getContent(gameDataName));
        gameData= new ControleTelaVo();
        gameData.telas=_gameData["telas"];

        scorm =  new SCORMManager();
        scorm.addEventListener(ScormEventInitialize.TYPE, onInitialize);
        scorm.addEventListener(ScormEventCommit.TYPE, onCommit);
        scorm.addEventListener(ScormEventTerminate.TYPE, onTerminate);
        DebuggerManager.debug("isSCORM",EnvironmentManager.isSCORM);
        scorm.initialize(DebuggerManager.debug,EnvironmentManager.isSCORM?"":offlineJSON,PreloaderManager.setVisible);
    }

    private function onTerminate(event : ScormEventTerminate) : void {

    }

    private function onCommit(event : ScormEventCommit) : void {
        PreloaderManager.setVisible(false);

    }

    public static function terminate():void {
        scorm.terminate();
    }


    private function onInitialize(event : ScormEventInitialize) : void {
        save =  new SaveObject();

        if(scorm.cmi.suspend_data!=''){
            var leObj:Object =  JSON.decode(CompressUtil.decompress(scorm.cmi.suspend_data));

            save= SerializerManager.convertToOriginalObject(leObj);

        }
        dataLoaded();
        // this.cmi.decodeJsonField(event._cmi);
        //this.txtReceive.text += "\n INICIALIZED";
    }



    public static function saveGame():void {
        PreloaderManager.setVisible(true);
        var o:Object= SerializerManager.convertToSerializableObject(save);
        var srlzd:String =   CompressUtil.compress(JSON.encode(o));
        scorm.cmi.core.score.max="100";
        scorm.cmi.core.score.min="0";
        var vlr:int = (((save.telaAtual+1)*100)/gameData.telas.length);
        if(vlr>95)vlr = 100;
        scorm.cmi.core.score.raw= vlr.toFixed(2);
        scorm.cmi.suspend_data= srlzd;
      //  DebuggerManager.debug("ultima tela", save.ultimaTela);
      //  DebuggerManager.debug("=gameData.telas.length-1", gameData.telas.length-1);
      //  DebuggerManager.debug("telaAtual", save.telaAtual);
        scorm.cmi.core.lesson_status =save.telaAtual>=gameData.telas.length-1? SCORMLessonStatus.COMPLETED:SCORMLessonStatus.INCOMPLETE;
        scorm.commit();
    }

    public function dataLoaded():void {
        EventManager_OLD.dispatch(this, "dataLoaded");

    }

}
}
