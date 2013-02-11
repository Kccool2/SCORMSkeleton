package controller {
import bases.LayerControllerBase;

import flash.display.MovieClip;

import view.Hud;

/**
 * @author bona
 */
public class HudController extends LayerControllerBase {

    public function HudController(inPlaceHolder:MovieClip) {
        super(inPlaceHolder);

        /* this.addChildOnPlaceHolderPos(hud, "com.aennova.view.Hud",0,0);
         EventController.addListener("HudController.hudVisible",hudVisible);  */
    }

   // public function hudVisible(arg:Boolean) {
        //   TweenMax.to(hud,.4,{autoAlpha:arg?1:0});
   // }

}
}