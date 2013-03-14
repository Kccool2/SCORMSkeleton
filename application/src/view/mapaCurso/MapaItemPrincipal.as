/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 08/03/13
 * Time: 17:38
 * To change this template use File | Settings | File Templates.
 */
package view.mapaCurso {
import flash.display.MovieClip;
import flash.text.TextField;

import managers.buttons.ButtonManager_OLD;

public class MapaItemPrincipal extends MovieClip {
    public static const FECHADO:int = 1;
    public static const ABERTO:int = 2;
    public var texto:TextField;

    public var status:int = -1;
    private var id:String;
    private var onClickFn:Function;
    public var btExpandir:MovieClip;
    public var childs:Array;

    public function MapaItemPrincipal() {
        childs = [];
        btExpandir.gotoAndStop(FECHADO);
        this.status = FECHADO;
        this.buttonMode = true;
    }

    public function config(titulo:String, id:int, onClick:Function):void {
        this.id = "view.mapaCurso.MapaItemPrincipal." + id.toString();
        this.onClickFn = onClick;
        ButtonManager_OLD.setButton(this.id, this, onClickMe, .1, 0xcccccc);
        this.texto.htmlText=titulo;
    }

    public function setStatus(st:int):void {
        this.status = st;
        btExpandir.gotoAndStop(st);

    }

    private function onClickMe(bt:MovieClip):void {
        this.status = this.status == FECHADO ? ABERTO : FECHADO;
        this.btExpandir.gotoAndStop(this.status);
        onClickFn(bt);

    }
}
}
