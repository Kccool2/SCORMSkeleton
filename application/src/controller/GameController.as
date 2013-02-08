/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 31/01/13
 * Time: 21:20
 * To change this template use File | Settings | File Templates.
 */
package controller {
import flash.display.MovieClip;
import flash.events.MouseEvent;

import managers.TimeTickerManager;

public class GameController {
    public var mapController:MapController;
    public var hudController:HudController;
    public var popUpController:PopUpController;

    public var stateMachine:StateController;
    public static var ticker:TimeTickerManager;

    public function GameController(mapLayer:MovieClip, hudLayer:MovieClip, popupLayer:MovieClip) {
        ticker = new TimeTickerManager();
        ticker.timerStart();
        mapController = new MapController(mapLayer);
        hudController = new HudController(hudLayer);
        popUpController = new PopUpController(popupLayer);
    }


    public function initialize():void {
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


    private var nclick:int = 0;
    private function play(e:MouseEvent):void {
        switch (nclick) {
            case 0:   break;
            case 1:   break;
            case 2:   break;
            case 3:   break;
        }
        nclick++;
    }



    public function uhulll(msg:String):void {
        trace('acabou ' + msg);
    }
}
}
