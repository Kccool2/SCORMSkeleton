/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 01/02/13
 * Time: 14:56
 * To change this template use File | Settings | File Templates.
 */
package view {
import com.greensock.TweenMax;

import flash.display.MovieClip;
import flash.events.MouseEvent;

public class MovieTest extends ViewElement {
    public var fundo:MovieClip;
    public var frente:MovieClip;

    public function MovieTest() {

        frente.addEventListener(MouseEvent.MOUSE_DOWN, onClick);
        fundo.addEventListener(MouseEvent.MOUSE_DOWN, onClick);
        this.visible = false;
        this.alpha = 0;
    }

    override public function config(vo:*, onCompleteFn:Function = null, ...rest):void {
        super.config(vo, onCompleteFn, rest);

        animateIn();
    }

    override public function destroy():void {
        frente.removeEventListener(MouseEvent.MOUSE_DOWN, onClick);
        fundo.removeEventListener(MouseEvent.MOUSE_DOWN, onClick);
    }

    override public function animateIn(_onComplete:Function = null):void {

        TweenMax.to(this, 0.4, {autoAlpha: 1});
    }

    override public function animateOut(_onComplete:Function = null):void {
        TweenMax.to(this, 0.4, {autoAlpha: 1, onComplete: _onComplete});
    }

    private function onClick(event:MouseEvent):void {
        this.onCompletion();
    }

    private function foo():void {
        trace("fooo Movie");
    }
}
}
