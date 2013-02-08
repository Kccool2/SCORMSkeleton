/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 31/01/13
 * Time: 15:21
 * To change this template use File | Settings | File Templates.
 */
package {
import flash.display.MovieClip;

[SWF(width="849", height="600", backgroundColor="#222222", frameRate="24", pageTitle="BLAHBLASDF")]
public class Client extends MovieClip {

    public function Client() {

        var m:Main = new Main(this.stage);

        this.addChild(m);

    }

}
}
