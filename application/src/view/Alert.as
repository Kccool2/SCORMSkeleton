/**
 * Created with IntelliJ IDEA.
 * User: filiperp
 * Date: 12/02/13
 * Time: 21:38
 * To change this template use File | Settings | File Templates.
 */
package view {
import com.greensock.TweenMax;

import flash.display.MovieClip;
import flash.text.TextField;

import managers.buttons.ButtonManager_OLD;

public class Alert extends MovieClip {
    public var txtCaption:TextField;
    public var btnOK:BtnPopup;
    public var onClickFn:Function;
    public function Alert() {
        this.visible=false;
        this.alpha = 0;
    }

    public function initialize():void {
        btnOK= new BtnPopup();
        btnOK.label.text = 'OK';
        btnOK.x = 316;
        btnOK.y = 300;
        this.addChild(btnOK);
        ButtonManager_OLD.setButton('Alert.btnOK',btnOK,onClick,0.3);

    }
    public function showAlert(question:String, onClick:Function):void{
        this.onClickFn=onClick;
        this.txtCaption.text = question;
        TweenMax.to(this,0.4,{autoAlpha:1});
    }
    private function onClick(btn:MovieClip):void{
        TweenMax.to(this,0.4,{autoAlpha:0,onComplete:onClickFn, onCompleteParams:[true]});
    }
}
}
