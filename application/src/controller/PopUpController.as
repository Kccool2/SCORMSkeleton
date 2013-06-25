package controller {

import bases.LayerControllerBase;

import flash.display.MovieClip;

import managers.tk.EventManager_OLD;

import view.Alert;
import view.Question;
import view.mapaCurso.MapaCurso;

/**
 * @author bona
 */

public class PopUpController extends LayerControllerBase {
    public var question:Question;
    public var alert:Alert;
    public  var mapa:MapaCurso;
    public function PopUpController(inPlaceHolder:MovieClip) {
        super(inPlaceHolder);
        question= new Question();
        question.initialize();
        this.addChildOnPlaceHolderPos(question,"PopUpController.question",0,0);

        alert= new Alert();
        alert.initialize();
        this.addChildOnPlaceHolderPos(alert,"PopUpController.alert",0,0);
        this.mapa = new MapaCurso();
        this.addChildOnPlaceHolderPos(mapa,"PopUpController.mapa",0,0);
        EventManager_OLD.addListener('PopUpController.showMapa','PopUpController.showMapa',showMapa);
    }
    public function showMapa():void{
        mapa.show()
    }

}

}