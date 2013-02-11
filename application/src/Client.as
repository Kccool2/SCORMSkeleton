/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 31/01/13
 * Time: 15:21
 * To change this template use File | Settings | File Templates.
 */
package {
import flash.display.MovieClip;
import flash.display.Stage;
import flash.system.Security;
import flash.text.TextField;

[SWF(width="869", height="540", backgroundColor="#cccccc", frameRate="24", pageTitle="BLAHBLASDF")]
public class Client extends MovieClip {

    public function Client() {

        var m:Main = new Main(this.stage);

        this.addChild(m);

    }



}
}
