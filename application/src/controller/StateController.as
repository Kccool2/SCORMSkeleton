/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 31/01/13
 * Time: 21:20
 * To change this template use File | Settings | File Templates.
 */
package controller {
import com.adobe.serialization.json.JSON;
import com.greensock.loading.LoaderMax;

import managers.DataManager;
import managers.DebuggerManager;
import managers.EventManager;

public class StateController {
    private static var config:DataManager;
    private static var texts:DataManager;

    public function StateController() {
        var _gameConfig:Object = JSON.decode(LoaderMax.getContent("_gameConfig"));
        config = new DataManager(_gameConfig, "ConfigMAnager");
        var _gameText:Object = JSON.decode(LoaderMax.getContent("_gameText"));
        texts = new DataManager(_gameText, "TextsMAnager");

        var _gameData:Object = JSON.decode(LoaderMax.getContent("_gameData"));
        DebuggerManager.debug("game", _gameData);

        //  this.mode =  ConfigController.getConfig("mode");
    }

    public static function getTest(id:String):String {
        return texts.getData(id);
    }

    public static function getConfig(id:String):String {
        return config.getData(id);
    }

    public function initialize():void {
        loadGame();
    }

    public function loadGame():void {
        /*  GameController.aviso.showAviso("Aguarde, carregando o jogo....");
         var parametros : Object = LoaderInfo(Main.instance.getStage().root.loaderInfo).parameters;
         codCand = parametros["CodCand"];
         codPend = parametros["CodPend"];
         dataPend = parametros["DataPend"];
         */
        dataLoaded();
    }

    public function dataLoaded():void {
        trace("dataloaded");
        EventManager.dispatch(this, "dataLoaded");

    }

}
}
