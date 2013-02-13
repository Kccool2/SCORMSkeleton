package controller {

import bases.LayerControllerBase;

import flash.display.MovieClip;

import managers.EventManager;

import view.Alert;

import view.Hud;
import view.ListaCurso;
import view.Question;

/**
 * @author bona
 */

public class PopUpController extends LayerControllerBase {
    public var question:Question;
    public var alert:Alert;
    public  var lista:ListaCurso;
    public function PopUpController(inPlaceHolder:MovieClip) {
        super(inPlaceHolder);
        question= new Question();
        question.initialize();
        this.addChildOnPlaceHolderPos(question,"PopUpController.question",0,0);

        alert= new Alert();
        alert.initialize();
        this.addChildOnPlaceHolderPos(alert,"PopUpController.alert",0,0);


        EventManager.addListener('PopUpController.ShowLista','PopUpController.ShowLista',showLista);
    }
    public function showLista():void{
        if(lista ==null){
            lista =  new ListaCurso();


            lista.inicialize();

            this.addChildOnPlaceHolderPos(lista,"PopUpController.lista",0,0);

        }
        lista.show()
    }

}

}