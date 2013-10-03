/**
 * Created with IntelliJ IDEA.
 * User: filiperp
 * Date: 12/02/13
 * Time: 20:30
 * To change this template use File | Settings | File Templates.
 */
package view {
import com.greensock.TweenMax;

import flash.display.MovieClip;
import flash.text.TextField;

import managers.buttons.ButtonManager_OLD;

public class Question  extends MovieClip{
    public var txtCaption:TextField;
    public var btnOK:BtnPopup;
    public var btnCancel:BtnPopup;
    public var onClickFn:Function;
    public function Question() {
        this.visible=false;
        this.alpha = 0;



    }
    public function initialize():void{
        btnOK= new BtnPopup();
        btnOK.label.text = 'OK';
        btnOK.x = 316;
        btnOK.y = 300;
        this.addChild(btnOK);

        btnCancel = new BtnPopup();
        btnCancel.label.text = 'Cancelar';
        btnCancel.x = 460;
        btnCancel.y = 300;
        this.addChild(btnCancel);



        ButtonManager_OLD.setButton('Question.btnOK',btnOK,onClick,0.3);
        ButtonManager_OLD.setButton('Question.btnCancel',btnCancel,onClick,0.3);

    }

    public function showQuestion(question:String, onClick:Function):void{
        this.onClickFn=onClick;
        this.txtCaption.text = question;
        TweenMax.to(this,0.4,{autoAlpha:1});
    }


     public function destroy():void {
         ButtonManager_OLD.removeButton('Question.btnOK');
         ButtonManager_OLD.removeButton('Question.btnCancel');
    }
    private function onClick(btn:MovieClip):void{
        TweenMax.to(this,0.4,{autoAlpha:0,onComplete:onClickFn, onCompleteParams:[btn ==btnOK]});

    }

}
}
