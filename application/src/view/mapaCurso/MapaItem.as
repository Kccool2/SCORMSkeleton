/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 08/03/13
 * Time: 17:46
 * To change this template use File | Settings | File Templates.
 */
package view.mapaCurso {
import flash.display.MovieClip;

import flash.text.TextField;

import managers.ButtonManager;



public class MapaItem extends MovieClip {
    public static const UNCHECKED:int = 1;
    public static const CHECK:int = 2;
    public var check:MovieClip;
    public var texto:TextField;
    public var indice:int = -1;

    private var onClickFn:Function;

    public function MapaItem() {
        check.gotoAndStop(UNCHECKED);
        this.check.gotoAndStop(1);

    }
    public function config(indice:int, onClick:Function):void{
         this.indice=indice;
        this.onClickFn=onClick;

    }

    public function setEnabled(enabled:Boolean = true):void {
        check.gotoAndStop(enabled? MapaItem.CHECK : MapaItem.UNCHECKED);

        if(enabled){
            if(ButtonManager.regiteredButtons().indexOf('view.mapaCurso.MapaItem'+indice.toString())==-1){
                ButtonManager.setButton('view.mapaCurso.MapaItem'+indice.toString(),this, onClickMe, .1, 0xcccccc) ;
            }
        } else{
            ButtonManager.removeButton('view.mapaCurso.MapaItem'+indice.toString());
        }

           /* if(enabled && !this.enabled && (indice!=-1)){
                this.enabled=enabled;
                ButtonManager.setButton('view.mapaCurso.MapaItem'+indice.toString(),this, onClickMe, .1, 0xcccccc) ;
            }else{
                this.enabled=false;
                ButtonManager.removeButton('view.mapaCurso.MapaItem'+indice.toString());
            } */


    }
    private function onClickMe(bt:MovieClip):void {
        onClickFn(bt);
    }
}
}
