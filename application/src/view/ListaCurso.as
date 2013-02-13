/**
 * Created with IntelliJ IDEA.
 * User: filiperp
 * Date: 12/02/13
 * Time: 22:17
 * To change this template use File | Settings | File Templates.
 */
package view {
import com.demonsters.debugger.MonsterDebugger;
import com.greensock.TweenMax;
import com.greensock.core.PropTween;

import controller.StateController;

import flash.display.MovieClip;

import managers.ButtonManager;

import view.scroller.Scroll;
import view.scroller.ScrollParameter;

public class ListaCurso extends MovieClip{
    public var fundo:MovieClip;
    public var area:MovieClip;
    public var tracker:MovieClip;
    public var track:MovieClip;
    private var scroll:Scroll;
    public var currentContent:MovieClip;
    public function ListaCurso() {


    }
    public function inicialize():void{
        this.visible=false;
        this.alpha=0;
        ButtonManager.setButton("ListaCurso.fundo",fundo, hide, 0.3);
        var param:ScrollParameter= new ScrollParameter();

        currentContent= new MovieClip();
        for (var i:int = 0; i < StateController.qtyTelas*100; i++) {
            var o:ItemLista =new ItemLista();
            o.label.text = StateController.gameData.telas[0].titulo;
            o.x = 0;
            o.y = (o.height+3)*i;
            ButtonManager.setButton('ListaCurso.ItemLsita.'+ i.toString(),o, clickItem,0.3) ;
            currentContent.addChild(o);

        }
        currentContent.x = 0;
        currentContent.y = 0
        //MonsterDebugger.inspect(content)

        scroll= new Scroll(currentContent, area,param);
        scroll.setScrollTracks(track, tracker);
        scroll.initialize();
        this.addChild(scroll);

    }

    public function clickItem(bt:MovieClip):void {
       trace(bt.label.text)
    }
    public function hide(mc:MovieClip=null):void {
        TweenMax.to(this,0.4,{autoAlpha:0});
    }
    public function show():void{
        TweenMax.to(this,0.4,{autoAlpha:1});
    }
}
}
