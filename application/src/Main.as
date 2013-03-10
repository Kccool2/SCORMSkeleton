/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 30/01/13
 * Time: 15:42
 * To change this template use File | Settings | File Templates.
 */
package {
import com.demonsters.debugger.MonsterDebugger;
import com.greensock.events.LoaderEvent;
import com.greensock.loading.LoaderMax;

import controller.GameController;
import controller.StateController;

import flash.display.MovieClip;
import flash.display.Sprite;
import flash.display.Stage;
import flash.events.Event;
import flash.system.Security;
import flash.text.TextField;
import flash.ui.ContextMenu;
import flash.ui.ContextMenuItem;

import managers.AssetsManager;
import managers.ClientManager;
import managers.DebuggerManager;
import managers.EnvironmentManager;
import managers.EventManager;
import managers.soundalize.SoundManager;

import preloader.PreloaderManager;

import view.MaximizeButton;

public class Main extends MovieClip {
    /*------------------------------------------------FORGET THIS VARS -----------------*/
    private static var _instance:Main = null;
    private static var _mainStage:Stage = null;

    //public var _gameController:GameController;
    private var _baseSprite:Sprite;
    private var _mapLayer:MovieClip;
    private var _hudLayer:MovieClip;
    private var _popUpLayer:MovieClip;
    private var stateMachine:StateController;
    private var gameController:GameController;


    /*----------------------------PLEASE CONFIGURE THIS VARIABLES---------------------*/
    private var gameName:String = "Game Name";
    private var version:String = "1.0.0";
    private var date:String = "12/12/1998 - 18:00";
    private var serverTest:String = "192.168.0.5"; //can be empty
    private var allowedDomain:String = "*";
    private var hasCustomPreloader:Boolean = true;
    private var hasSound:Boolean = true;
    public static var DELAY_BUTTON:Number = 0.3;

    public function Main(mainStage:Stage):void {
        if (mainStage == null || undefined) throw new Error("It's impossible to instantiate the Main game over and null or undefined Stage object.");
        if (_mainStage != null) throw new Error("It's impossible to instantiate a singleton. Use Main.instance");
        _mainStage = mainStage;
        _instance = this;
        addEventListener(Event.ADDED_TO_STAGE, init);


    }

    public static function get instance():Main {
        return _instance;
    }

    public static function get mainStage():Stage {
        return _mainStage;
    }

    private function init(e:Event = null):void {
        removeEventListener(Event.ADDED_TO_STAGE, init);
        //security access
        Security.allowDomain(allowedDomain);
        Security.allowInsecureDomain(allowedDomain);

        //debuggin mode
        MonsterDebugger.initialize(this);
        DebuggerManager.initialize(MonsterDebugger.trace);

        //to the Managers get the game dimensions
        Utils.initialize(_mainStage.stageWidth, _mainStage.stageHeight);

        //control the resize window game
        ClientManager.initialize(mainStage, this);

        //identifying the Environment of the game (wem, offline, scorm....)
        EnvironmentManager.initialize(loaderInfo.url, serverTest);

        setCustomMenu(gameName, version, date);

        //starting loaders
        if (hasSound) SoundManager.initialize();
        AssetsManager.initialize(showLoadError);

        if (hasCustomPreloader) {
            var path:String = computePath("data/preloader.swf");
            AssetsManager.loadSWFAsset(path, { name: "preloader", estimatedBytes: 4800, onComplete: onLoadPreloader });
        } else {
            PreloaderManager.initialize(this.stage, null);
            PreloaderManager.setVisible(true);
            loadXMLAssets();
        }

        /*  trace(loaderInfo.url);
         PreloaderManager.initialize(this.stage);
         PreloaderManager.setTextLabel("1"+EnvironmentManager.isLocalServer.toString()+""+ EnvironmentManager.isWeb.toString()+""+ EnvironmentManager.isDebuggerPlayer.toString());
         PreloaderManager.setVisible(true);
         trace("asdasdf");  */
    }

    public static function teste():void {
        trace("DEU CERTO!");
    }

    private function onLoadPreloader(loaderEvent:LoaderEvent):void {
        PreloaderManager.initialize(this.stage, LoaderMax.getContent("preloader").rawContent["preLoader"]);

        PreloaderManager.setVisible(true);

        loadXMLAssets();
    }

    private function loadXMLAssets():void {
        var path:String = computePath("data/assets.xml");
        AssetsManager.loadXMLAssets(path, { name: "xmlAssets", onComplete: onLoadXMLAssets, estimatedBytes: 50000000 }, updatePreloaderLabel);
    }

    private function updatePreloaderLabel(percent:Number):void {
        var p:String = (percent * 100).toFixed(2) + "%";
        PreloaderManager.setTextLabel("carregado: " + p);
    }

    private function onLoadXMLAssets(loaderEvent:LoaderEvent):void {
        //XML extra treatment
        var xmlAssets:XML = LoaderMax.getContent("xmlAssets");
        for (var i:int = 0; i < xmlAssets.child(0).children().length(); i++) {
            var xmlPropertyName:String = xmlAssets.child(0).children()[i].name();
            switch (xmlPropertyName) {
                case "MP3Loader":
                {
                    if (hasSound) {
                        var _name:String = String(xmlAssets.child(0).children()[i].@name);
                        SoundManager.addPreloadedSound(_name, LoaderMax.getContent(_name));
                    }
                    break;
                }
            }
        }

        initializeBase();
    }

    private function initializeBase():void {
        ClientManager.addFullScreenButton(new MaximizeButton());

        //STARTING THE GAME STRUCTURE
        _baseSprite = new Sprite();
        _baseSprite.graphics.beginFill(0x0, 0);
        _baseSprite.graphics.drawRect(0, 0, Utils.gameWidth, Utils.gameHeight);
        _baseSprite.graphics.endFill();
        this.addChild(_baseSprite);

        //MapLayer
        _mapLayer = new MovieClip;
        this.addChild(_mapLayer);

        //HudLayer
        _hudLayer = new MovieClip;
        this.addChild(_hudLayer);

        //PopUpLayer
        _popUpLayer = new MovieClip;
        this.addChild(_popUpLayer);

        gameController = new GameController(_mapLayer, _hudLayer, _popUpLayer);
        stateMachine = new StateController();
        EventManager.addListener('dataLoaded', "dataLoaded", initializeGame);
        stateMachine.initialize();
    }

    private function initializeGame():void {
        EventManager.removeEventType('dataLoaded');
        gameController.initialize();

    }

    /*---------------------------------------------------------------------------------------------*/
    public function debug(caller:*, object:*, person:String = "", label:String = "", color:uint = 0, depth:int = 5):void {
        MonsterDebugger.trace(caller, object, person, label, color, depth);
    }

    private function setCustomMenu(name:String, version:String, data:String):void {
        var gameMenu:ContextMenu = new ContextMenu();
        gameMenu.hideBuiltInItems();
        var menuItem1:ContextMenuItem = new ContextMenuItem(name);
        gameMenu.customItems.push(menuItem1);
        var menuItem2:ContextMenuItem = new ContextMenuItem('Version: ' + version);
        gameMenu.customItems.push(menuItem2);
        var menuItem3:ContextMenuItem = new ContextMenuItem('Date: ' + data);
        gameMenu.customItems.push(menuItem3);
        this.contextMenu = gameMenu;
    }

    public function computePath(path:String):String {
        /*
         if(mdm.Application && mdm.Application.path){
         path = "file://"+mdm.Application.path.split("\\").join("/")+path;
         }
         */
        return path;
    }

    public function showLoadError():void {
        var container:Sprite = new Sprite();
        container.x = 0;
        container.y = 0;
        var fundo:Sprite = new Sprite();
        fundo.graphics.beginFill(0x0066ff, 1);
        fundo.graphics.drawRect(0, 0, Utils.gameWidth, Utils.gameWidth);
        fundo.graphics.endFill();
        fundo.x = 0;
        fundo.y = 0;
        container.addChild(fundo);

        var texto:TextField = new TextField();
        texto.multiline = true;

        texto.width = Utils.gameWidth;

        texto.htmlText = "<p align='center'><font size='20' face='verdana,tahoma'> Atenção, erro de conexão, verifique sua conexão e reinicie o jogo." +
                "<br>Se o erro persistir contacte o administrador de rede." +
                "<br> Código:AssetsLoadingERROR" +
                "</font></p>";

        texto.y = Utils.gameWidth / 2 - texto.height / 2;
        texto.x = Utils.gameWidth / 2 - texto.width / 2;
        container.addChild(texto);
        this.addChild(container);
    }

    private function doNothing():void {

    }

}

}

