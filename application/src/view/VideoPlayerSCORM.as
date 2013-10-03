/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 13/03/13
 * Time: 21:15
 * To change this template use File | Settings | File Templates.
 */
package view {
import fl.video.FLVPlayback;

import flash.display.MovieClip;


public class VideoPlayerSCORM extends  MovieClip{
     var leVideoPlayer:FLVPlayback;
    var container:MovieClip;

    public function VideoPlayerSCORM() {


        //leVideo.

    }
    public function pause():void{
        leVideoPlayer.pause();
    }


    public function destroyButtonClickHandler():void {
        leVideoPlayer.stop();
        container.removeChild(leVideoPlayer);
        container=null;
        leVideoPlayer=null;


    }

    public function setupPlayerLoader(id:String, container:MovieClip):void {
        this.container= container;
        leVideoPlayer= new FLVPlayback();
        leVideoPlayer.name='leVideoPlayer';
        leVideoPlayer.skinAutoHide=true;
        leVideoPlayer.skinBackgroundColor = 0xcccccc;
        leVideoPlayer.x = 0;
        leVideoPlayer.y = 0;
        leVideoPlayer.width=container.width;
        leVideoPlayer.height=container.height;
        leVideoPlayer.skin = "data/assets/SkinOverPlaySeekStop.swf";
        leVideoPlayer.scaleMode= 'maintainAspectRatio';
        container.addChild(leVideoPlayer);
        leVideoPlayer.source='videos/'+id;
    }

}
}
