/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 13/03/13
 * Time: 18:08
 * To change this template use File | Settings | File Templates.
 */
package view {
import ToolLib.ToolMath;

import com.demonsters.debugger.MonsterDebugger;
import com.fraktalo.SCORM.SCORMInteracitions;
import com.greensock.events.LoaderEvent;
import com.greensock.loading.LoaderMax;

import flash.display.DisplayObject;

import flash.display.MovieClip;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.events.MouseEvent;
import flash.net.URLLoader;
import flash.net.URLRequest;
import flash.net.URLVariables;

import flash.system.Security;

import flashx.textLayout.container.TextContainerManager;

import managers.AssetsManager;
import managers.DebuggerManager;

public class YoutubeController {

    // CONSTANTS.

    private static const PLAYER_URL:String = "http://www.youtube.com/apiplayer?version=3";
    private static const SECURITY_DOMAIN:String = "http://www.youtube.com";
    private static const YOUTUBE_API_PREFIX:String =
            "http://gdata.youtube.com/feeds/api/videos/";
    private static const YOUTUBE_API_VERSION:String = "2";
    private static const YOUTUBE_API_FORMAT:String = "5";
    private static const WIDESCREEN_ASPECT_RATIO:String = "widescreen";
    private static const QUALITY_TO_PLAYER_HEIGTH:Object = {
        small: 240,
        medium: 360,
        large: 480,
        hd720: 720
    };
    private static const STATE_ENDED:Number = 0;
    private static const STATE_PLAYING:Number = 1;
    private static const STATE_PAUSED:Number = 2;
    private static const STATE_CUED:Number = 5;

    private var isWidescreen:Boolean;
    private var leVideoId:String = "WOQbOdFxxco";
    private var leVideoContainer:MovieClip;
    private var leVideoPlayer:Object;
    private var leMask:MovieClip;
    private var leProgress:MovieClip;
    private var leVideoLoaded:MovieClip;
    private var defaultQuality:String = "small";

    private var containersize:Object;

    public function YoutubeController() {
        Security.allowDomain(SECURITY_DOMAIN);
    }

    public function pause():void {
        leVideoPlayer.pauseVideo();
    }

    public function play():void {
        leVideoPlayer.playVideo();
    }

    public function destroyButtonClickHandler():void {
        leVideoPlayer.stopVideo();
        leMask.removeEventListener(MouseEvent.CLICK, pauseContinue);
        leVideoPlayer.removeEventListener(Event.ENTER_FRAME, updatePlayer);
        leVideoPlayer.removeEventListener("onError", onPlayerError);
        leVideoPlayer.removeEventListener("onStateChange", onPlayerStateChange);
        leVideoPlayer.removeEventListener("onPlaybackQualityChange", onVideoPlaybackQualityChange);
        leVideoContainer.removeChild(leVideoPlayer as DisplayObject);
        leVideoContainer = null;
        leVideoPlayer.destroy();
    }

    public function setupPlayerLoader(id:String, container:MovieClip):void {
         leVideoId=id;
        containersize= { w:container.width,h:container.height};
        leVideoContainer = container;
        if (containersize.h >= QUALITY_TO_PLAYER_HEIGTH.medium) {
            defaultQuality = 'medium';
        }

        if (containersize.h >= QUALITY_TO_PLAYER_HEIGTH.large) {
            defaultQuality = 'large';

        }

        if (LoaderMax.getContent("leYoutubePlayer") == null) {
            DebuggerManager.debug("CARREGOU PLAYER","");
            AssetsManager.loadSWFAsset(PLAYER_URL, {name: "leYoutubePlayer", autoPlay: false, onComplete: onLoadPlayer});
        } else {
            DebuggerManager.debug(" NAAAAAOOO CARREGOU PLAYER","");
            onLoadPlayer();
        }
    }

    private function onLoadPlayer(event:LoaderEvent = null):void {

        if (LoaderMax.getContent("leYoutubeAPI") == null) {
            var request:URLRequest = new URLRequest(YOUTUBE_API_PREFIX + leVideoId);
            var urlVariables:URLVariables = new URLVariables();
            urlVariables.v = YOUTUBE_API_VERSION;
            urlVariables.format = YOUTUBE_API_FORMAT;
            request.data = urlVariables;
            DebuggerManager.debug("CARREGOU API","");
            AssetsManager.loadXMLAssets(request, {name: "leYoutubeAPI", autoPlay: false, onComplete: onLoadAPI});
        } else {
            DebuggerManager.debug(" NAAAAAOOO CARREGOU API","");
            onLoadAPI();
        }
    }

    private function onLoadAPI(loaderEvent:LoaderEvent = null):void {

        leVideoPlayer = LoaderMax.getContent("leYoutubePlayer").rawContent;
        leVideoPlayer.x = 0;
        leVideoPlayer.y = 0;
        leVideoPlayer.visible = false;
        leVideoPlayer.setPlaybackQuality(defaultQuality);
        leVideoContainer.addChild(leVideoPlayer as DisplayObject);

        leVideoLoaded = new MovieClip();
        leVideoLoaded.graphics.beginFill(0x333333, 1);
        leVideoLoaded.graphics.drawRect(0, 0, leVideoPlayer.width, 5);
        leVideoLoaded.graphics.endFill();
        leVideoContainer.addChild(leVideoLoaded);

        leProgress = new MovieClip();
        leProgress.graphics.beginFill(0xffffff, 1);
        leProgress.graphics.drawRect(0, 0, leVideoPlayer.width, 3);
        leProgress.graphics.endFill();
        leVideoContainer.addChild(leProgress);

        leMask = new MovieClip();
        leMask.buttonMode = true;
        leMask.addEventListener(MouseEvent.CLICK, pauseContinue);
        leMask.graphics.beginFill(0xcccccc, 0.3);
        leMask.graphics.drawRect(0, 0, leVideoPlayer.width, leVideoPlayer.height);
        leMask.graphics.endFill();
        leVideoContainer.addChild(leMask);





        MonsterDebugger.inspect(leVideoPlayer);
        var atomData:String = LoaderMax.getContent("leYoutubeAPI");
        DebuggerManager.debug("leAtom", LoaderMax.getContent("leYoutubeAPI"))
        // Parse the YouTube API XML response and get the value of the
        // aspectRatio element.
        var atomXml:XML = new XML(atomData);
        var aspectRatios:XMLList = atomXml..*::aspectRatio;
        trace('teste',aspectRatios.toString() )
        isWidescreen = aspectRatios.toString() == WIDESCREEN_ASPECT_RATIO;
        // Cue up the video once we know whether it's widescreen.
        // Alternatively, you could start playing instead of cueing with
        // player.loadVideoById(videoIdTextInput.text);
        leVideoPlayer.visible = true;
        leVideoPlayer.addEventListener("onError", onPlayerError);
        leVideoPlayer.addEventListener("onStateChange", onPlayerStateChange);
        // leVideoPlayer.addEventListener("onPlaybackQualityChange",onVideoPlaybackQualityChange);
        leVideoPlayer.cueVideoById(leVideoId);
        leVideoPlayer.addEventListener(Event.ENTER_FRAME, updatePlayer);
        resizePlayer();
        leVideoPlayer.playVideo();


    }

    private function onPlayerReady(event:Event):void {

    }

    private function pauseContinue(e:MouseEvent):void {
        leVideoPlayer.getPlayerState() == STATE_PAUSED ? play() : pause();
    }

    private function updatePlayer(e:Event):void {
        leVideoLoaded.width = (leVideoPlayer.getVideoBytesLoaded() / leVideoPlayer.getVideoBytesTotal()) * leMask.width;
     //  trace(leVideoPlayer.getVideoBytesLoaded(),leVideoPlayer.getVideoBytesTotal())
        //sets the fullness ratio
        leProgress.width = (leVideoPlayer.getCurrentTime() / leVideoPlayer.getDuration()) * leMask.width;
    }

    private function onPlayerError(event:Event):void {
        trace("Player error:", Object(event).data);
    }

    private function onPlayerStateChange(event:Event):void {

        switch (Object(event).data) {
            case STATE_ENDED:
                break;

            case STATE_PLAYING:
                break;

            case STATE_PAUSED:
                break;

            case STATE_CUED:
                // resizePlayer();
                leVideoPlayer.visible = true;
                break;
        }
    }

    private function onVideoPlaybackQualityChange(event:Event):void {
        // resizePlayer();
    }

    private function resizePlayer():void {
        var newWidth:Number =containersize.w;//0;

        var newHeight:Number= containersize.h;//QUALITY_TO_PLAYER_HEIGTH[defaultQuality];
        trace("size:", containersize.w, containersize.h,isWidescreen)
       if (isWidescreen) {
            // Widescreen videos (usually) fit into a 16:9 player.
           newHeight = newWidth *(9 / 16);
        } else {
            // Non-widescreen videos fit into a 4:3 player.
           newHeight = newWidth *( 3 / 4);
        }

        // trace("isWidescreen is", isWidescreen, ". Size:", newWidth, newHeight);
        leVideoPlayer.scaleX = 1;
        leVideoPlayer.scaleY = 1;
        leVideoPlayer.setSize(newWidth, newHeight);
       // leVideoPlayer.width=newWidth;
       // leVideoPlayer.height=newHeight;


        // Center the resized player on the stage.
        leVideoPlayer.x = 0;//(leVideoContainer.width - newWidth) / 2;
        leVideoPlayer.y = 0;//(leVideoContainer.height - newHeight) / 2;

        leMask.graphics.clear();
        leMask.graphics.beginFill(0xff0000, 0.3);
        leMask.graphics.drawRect(0, 0, newWidth, newHeight);
        leMask.graphics.endFill();

        leVideoLoaded.graphics.clear();
        leVideoLoaded.graphics.beginFill(0x333333, 1);
        leVideoLoaded.graphics.drawRect(0, 0, containersize.w, 5);
        leVideoLoaded.graphics.endFill();


        leProgress.graphics.clear();
        leProgress.graphics.beginFill(0xffffff, 1);
        leProgress.graphics.drawRect(0, 0, containersize.w, 3);
        leProgress.graphics.endFill();


        leMask.x = leVideoPlayer.x;
        leMask.y = leVideoPlayer.y;
        leProgress.y = leMask.height - leProgress.height - 1;
        leVideoLoaded.y = leMask.height - leVideoLoaded.height;

    }

    private function youtubeApiLoaderErrorHandler(event:IOErrorEvent):void {
        trace("Error making YouTube API request:", event);
    }

}
}
