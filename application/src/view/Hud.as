/**
 * Created with IntelliJ IDEA.
 * User: filiperp
 * Date: 10/02/13
 * Time: 22:55
 * To change this template use File | Settings | File Templates.
 */
package view {
import com.greensock.TweenMax;

import flash.display.MovieClip;
import flash.text.TextField;

import managers.ButtonManager;
import managers.ClientManager;

import model.HudVo;

public class Hud  extends BaseView{
    public var btnHome:MovieClip;
    public var btnPrev:MovieClip;
    public var btnNext:MovieClip;
    public var btnPlay:MovieClip;
    public var btnSound:MovieClip;
    public var content:MovieClip;
    public var txtTitle:TextField;
    public var txtTelas:TextField;

    public var hasSound:Boolean= true;
    public var isPlaying:Boolean= true;

    public var btns:Array = ['btnHome','btnPrev', 'btnNext', 'btnPlay','btnSound'];

    public function Hud() {
         btnSound.gotoAndStop(1);
    }
    override public function config(vo:*, onCompleteFn:Function = null, ...rest):void {
        super.config(vo, onCompleteFn, rest);
        this.visible=false;
        this.alpha = 0;
        this.btnPlay.gotoAndStop(2);
        for (var i:int = 0; i < btns.length; i++) {
            ButtonManager.setButton("IndexBone."+btns[i],this[btns[i]],this['onClick_'+btns[i]],0.3)
        }
        btnPlay.visible=false;

    }

    override public function destroy():void {
        for (var i:int = 0; i < btns.length; i++) {
            ButtonManager.removeButton("IndexBone."+btns[i]);
        }
    }


    public function showHud(_onComplete:Function = null):void {
        TweenMax.to(this, 0.4, {autoAlpha: 1, onComplete: _onComplete});
    }

    public function hideHud(_onComplete:Function = null):void {
        TweenMax.to(this, 0.4, {autoAlpha: 1, onComplete: _onComplete});
    }

    private function onClick_btnHome(mc:MovieClip):void {
        HudVo(this.configModel).clickHome();
    }
    private function onClick_btnPrev(mc:MovieClip):void {
        HudVo(this.configModel).clickPrev();

    }
    private function onClick_btnNext(mc:MovieClip):void {
        HudVo(this.configModel).clickNext();
    }
    private function onClick_btnPlay(mc:MovieClip):void {
        isPlaying = !isPlaying;
        btnPlay.gotoAndStop(isPlaying?2:1);

        HudVo(this.configModel).clickPlay(isPlaying);
    }
    private function onClick_btnSound(mc:MovieClip):void {
        hasSound= !hasSound;
        btnSound.gotoAndStop(hasSound?1:2);
        HudVo(this.configModel).clickSound(hasSound);
    }

}
}
