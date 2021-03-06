/**
 * Created with IntelliJ IDEA.
 * User: filipe
 * Date: 08/03/13
 * Time: 17:20
 * To change this template use File | Settings | File Templates.
 */
package view.mapaCurso {
import com.greensock.TweenMax;

import controller.StateController;

import flash.display.MovieClip;

import managers.buttons.ButtonManager_OLD;
import managers.tk.EventManager_OLD;

import view.scroller.Scroll;
import view.scroller.ScrollParameters;

public class MapaCurso extends MovieClip {
    public var container:MovieClip;
    public var track:MovieClip;
    public var tracker:MovieClip;
    public var btFechar:MovieClip;

    private var mapaItens:Array;
    private var mapaItensPrincipals:Array;
    private var content:MovieClip;
    private var initialized:Boolean = false;
    private var scroller:Scroll;

    private var multiplesTitles:Boolean = false;

    public function MapaCurso() {
        content = new MovieClip();
        mapaItens = [];
        mapaItensPrincipals = [];
        this.visible = false;
        this.alpha = 0;
        this.addChild(content);
    }

    public function close(bt:MovieClip = null):void {
        TweenMax.to(this, 0.4, {autoAlpha: 0});
        if (bt != null) {
            TweenMax.delayedCall(.4, EventManager_OLD.dispatch, [this, "GameController.onMapaFecharClick", bt]);
        }
    }

    public function show():void {
        TweenMax.to(this, .4, {autoAlpha: 1});
        if (!initialized) {
            ButtonManager_OLD.setButton('MapaCurso.btFechar', btFechar, close, .2, 0x999999);
            initialized = true;
            loadItens();
        }
        refreshIrens();
    }

    public function loadItens():void {
        mapaItens = [];
        mapaItensPrincipals = [];

        var itens:Array = StateController.gameData.telas;
        var lastTitle:String = '';
        var lastItemPrincipal:MapaItemPrincipal = null;

        lastTitle = itens[i]['titulo'];
        for (var k:int = 0; k < itens.length; k++) {
            var object2:Object = itens[i];
            if (lastTitle != object2.titulo) {
                multiplesTitles = true;
            }
        }

        lastTitle = '';

        for (var i:int = 0; i < itens.length; i++) {
            var object:Object = itens[i];

            if (object.titulo != lastTitle) {
                lastTitle = object.titulo;
                var ip:MapaItemPrincipal = new MapaItemPrincipal();
                lastItemPrincipal = ip;
                ip.x = 0;
                ip.config(object.titulo, i, refreshIrens);
                mapaItensPrincipals.push(ip);
            }

            var mapItem:MapaItem = new MapaItem();
            mapItem.texto.htmlText = 'Pág:<b>' + (i + 1).toString() + '</b> - ' + object.titulo2;
            mapItem.config(i, onItemClick);
            mapItem.x = 0;
            mapaItens.push(mapItem);
            lastItemPrincipal.childs.push(mapItem);
        }

        var sp:ScrollParameters = new ScrollParameters();
        sp.relativeTrackerV = false;
        sp.repositionAll = false;
        sp.paddingV = 0;
        sp.relativeTrackers = false;

        scroller = new Scroll(content, container, sp);
        scroller.setScrollTracks(track, tracker);
        scroller.initialize(Main.mainStage);

        //this.addChild();
    }

    public function onItemClick(bt:MovieClip):void {
        close();
        TweenMax.delayedCall(.4, EventManager_OLD.dispatch, [this, "GameController.onItemClick", bt]);
    }

    public function refreshIrens(bt:MovieClip = null):void {
        while (content.numChildren > 0) {
            content.removeChildAt(0);
        }
        var last:int = StateController.save.ultimaTela;
        var atual:int = StateController.save.telaAtual;

        for (var k:int = 0; k < mapaItens.length; k++) {
            var mapaItem1:MapaItem = mapaItens[k];
            mapaItem1.setEnabled(k < last);
        }
        for (var i:int = 0; i < mapaItensPrincipals.length; i++) {
            var mapaItemPrincipal:MapaItemPrincipal = mapaItensPrincipals[i];
            if(!multiplesTitles){
            //    mapaItemPrincipal.status = MapaItemPrincipal.ABERTO
            }
            mapaItemPrincipal.y = content.numChildren * 34;
            content.addChild(mapaItemPrincipal);
            if (mapaItemPrincipal.status == MapaItemPrincipal.ABERTO) {
                for (var j:int = 0; j < mapaItemPrincipal.childs.length; j++) {
                    var mapaItem:MapaItem = mapaItemPrincipal.childs[j];
                    mapaItem.y = content.numChildren * 34;
                    content.addChild(mapaItem);
                }
            }

        }
        scroller.update();
    }

}
}
