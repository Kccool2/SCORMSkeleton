/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 13/03/13
 * Time: 21:15
 * To change this template use File | Settings | File Templates.
 */
package view {
import flash.display.MovieClip;
import flash.text.TextField;

public class VideoPlayer extends  MovieClip{
    public var btnPlay:MovieClip;
    public var timer:TextField;

    public function VideoPlayer() {
      timer.text='';
        btnPlay.gotoAndStop(1);
    }

}
}
