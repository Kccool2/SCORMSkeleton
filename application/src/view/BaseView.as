/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 30/01/13
 * Time: 13:54
 * To change this template use File | Settings | File Templates.
 */
package view {
import flash.display.FrameLabel;
import flash.display.MovieClip;
import flash.events.Event;

public class BaseView extends MovieClip implements IView {

    public const FRAME_SCRIPT_LABEL:String = '_FrameScript';

    protected var onComplete:Function;
    protected var onCompleteParams:Array;

    protected var configModel:*;

    public function BaseView() {
        this.addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
    }

    protected function onAddedToStage(e:Event):void {
        this.removeEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
    }

    protected function onCompletion():void {
        if (onComplete != null) onComplete.apply(null, onCompleteParams);
        onComplete = null;
        onCompleteParams = null;
    }

    public function config(vo:*, onCompleteFn:Function = null, ...onCompleteParams):void {
        this.onComplete = onCompleteFn;
        this.onCompleteParams = onCompleteParams[0];
        this.configModel = vo;
    }


    public function destroy():void {
    }

    public function addLabelScript(labelName:String, script:Function):IView {
        for each (var label:FrameLabel in this.currentLabels) {
            if (label.name === labelName) {
                this.addFrameScript(label.frame - 1, script);
                return this;
            }
        }
        throw new Error('mc.addLabelScript: label "' + labelName + '" not found on target ' + this);
        return this;
    }

    public function addLabelScripts(labelNames:Array, scripts:Array):IView {
        for (var i:int = 0; i < labelNames.length; i++) {
            for each(var label:FrameLabel in this.currentLabels) {
                if(label.name == labelNames[i]) {
                    this.addFrameScript(label.frame - 1, scripts[i]);
                    break;
                }
            }
        }
        return this;
    }

    public function everyLabelScript(script:Function):IView {
        for each (var label:FrameLabel in this.currentLabels) {
            this.addFrameScript(label.frame - 1, script);
        }
        return this;
    }

    public function everyFrameScript(script:Function):IView {
        for (var i:uint = 0; i < this.totalFrames; ++i) {
            this.addFrameScript(i, script);
        }
        return this;
    }

    public function setupTimelineScripts():IView {
        for each (var label:FrameLabel in this.currentLabels) {
            if (label.name.lastIndexOf(FRAME_SCRIPT_LABEL) === label.name.length - FRAME_SCRIPT_LABEL.length) {
                if (this.hasOwnProperty(label.name)) {
                    this.addFrameScript(label.frame - 1, this[label.name]);
                } else {
                    throw new Error('mc.setupTimelineScripts: script "' + label.name + '" not found on target' + this);
                }
            }
        }
        return this;
    }

}
}
