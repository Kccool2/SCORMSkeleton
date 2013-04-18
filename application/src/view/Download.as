/**
 * Created with IntelliJ IDEA.
 * User: filiperp
 * Date: 31/03/13
 * Time: 18:34
 * To change this template use File | Settings | File Templates.
 */
package view {
import com.adobe.protocols.dict.events.ErrorEvent;

import flash.display.MovieClip;
import flash.errors.IllegalOperationError;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.events.MouseEvent;
import flash.events.ProgressEvent;
import flash.net.FileReference;
import flash.net.URLRequest;
import flash.text.TextField;

public class Download extends MovieClip {
    public var txtLabel:TextField;

    // Create a new instance of the FileReference class to work with.
    public var myfileReference:FileReference = new FileReference();
    public var myRequest:URLRequest;
    public var onCompleteFn:Function;

    public function Download() {
        txtLabel.htmlText = "";
    }

    public function startDownload(file:String, oncomplete:Function):void {
        this.onCompleteFn = oncomplete;
        //trace(file)
        myRequest = new URLRequest(file);

        myfileReference.addEventListener(IOErrorEvent.IO_ERROR, ioError);
        myfileReference.addEventListener(Event.SELECT, fileSelected);
        myfileReference.addEventListener(ProgressEvent.PROGRESS, fileDownloadProgress);
        myfileReference.addEventListener(Event.COMPLETE, fileDownloadCompleted);

        // 2nd level SecurityError error checking
        // Use the try-catch block
        try {

            // Call the download method with the URLRequest object as the parameter.
            myfileReference.download(myRequest);

        } catch (error:SecurityError) {

            // catch the error here if any
            // Display error message to user in case of loading error.
            txtLabel.text = "Ocorreu um erro 1, tente novamente.";
            // txtLabel.text = "Sorry that there is a Security error during the file downloading. The error is:" + "\n" + error;
            trace(error)

        } catch (error:IllegalOperationError) {

            // catch the error here if any
            // Display error message to user in case of loading error.
            //output_txt.text = "Sorry that there is an operation error during the file downloading. The error is:" + "\n" + error;
            txtLabel.text = "Ocorreu um erro 2, tente novamente.";
            trace(error)

        }
    }

    function ioError(event:ErrorEvent):void {
        txtLabel.text = "3Ocorreu um erro, tente novamente.";

    }

    function fileSelected(evt:Event):void {
        txtLabel.text = "Arquivo: " + evt.target.name;
    }

    function fileDownloadProgress(evt:ProgressEvent):void {

        // Show file size
        //myRequest.text = "File size: " + evt.bytesTotal + " Bytes";

        //Calculate the loading percentage
        //Declare the loading percentage
        var percent:Number = Math.round((evt.bytesLoaded / evt.bytesTotal) * 100);

        //Display the loading percentage to visitors
        txtLabel.htmlText = "Baixando arquivo: " + String(percent) + "%";
    }

    function fileDownloadCompleted(evt:Event):void {
        txtLabel.htmlText = "Download Completo!";
        destroy();
    }

    public function destroy():void {
        if (myfileReference != null) {
            myfileReference.cancel();

            myfileReference.removeEventListener(IOErrorEvent.IO_ERROR, ioError);
            myfileReference.removeEventListener(Event.SELECT, fileSelected);
            myfileReference.removeEventListener(ProgressEvent.PROGRESS, fileDownloadProgress);
            myfileReference.removeEventListener(Event.COMPLETE, fileDownloadCompleted);

            myRequest = null;
            myfileReference = null;

            var f:Function = onCompleteFn;
            onCompleteFn = null;
            f();
        }

    }

}
}
