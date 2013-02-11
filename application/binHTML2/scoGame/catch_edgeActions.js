/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.setParameter("counter", 0);
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_play_sym}", "click", function(sym, e) {
         sym.$("splash").fadeOut(500, 0); //Fade out the splash screen
         sym.getSymbol("play_sym").getSymbol("blurry_sym").stop(); // Stops the sparkle animation on the play button
         sym.getSymbol("seconds_sym").play(0);
         
         (function makeDiv(){ // Create a function to create the symbol "birdfly"
             var divsize = ((Math.random()*100) + 50).toFixed(); // Some math set up to randomize the position
             var newdiv = sym.createChildSymbol("bird_sym", "birdfly"); // Declare a variable to create the symbol instance of "bird_sym" inside the element "birdfly"
             if (newdiv != null) {
              var newdivEle = newdiv.getSymbolElement(); // Declare a variable to get the the newly created instances od "bird_sym"
              if(newdivEle != null) {
         	  newdivEle.css({
         			  'width':divsize+'px',
         			  'height':divsize+'px',
            	});
             }
            }
         
             // Some math to randomly position the new bird elements inside birdfly. #Stage_birdfly refers to the element name as it appears in the DOM
             var posx = (Math.random() * ($("#Stage_birdfly").width() - divsize)).toFixed();
             var posy = (Math.random() * ($("#Stage_birdfly").height() - divsize)).toFixed();
         	 if(newdivEle !=null) {
					 newdivEle.css({ // Set the CSS positioning for the new bird elements
						  'position':'absolute',
						  'left':posx+'px',
						  'top':posy+'px',
						  'display':'none'
					 }).appendTo('#Stage_birdfly').fadeIn(1200, function(){ // Creates a bird!
						 makeDiv();
					 });
            
         
			
					 newdivEle.delay(12000).fadeOut(100, function(){ // Fades out the bird after 12 seconds of flight
					 newdiv.deleteSymbol(); // Deletes the bird element from the DOM after it fades out
					 });
             }
         
             // Some fun to create random colours for the bird wings and eyes. 
           var hue = 'rgb(' + (Math.floor((256-0)*Math.random()) + 50) + ',' + // Always add 50 to the RGB colour to create a pastel range
           (Math.floor((256-0)*Math.random()) + 50) + ',' + 
           (Math.floor((256-0)*Math.random()) + 50) + ')';
           if(newdiv !=null) {
           newdiv.getSymbol("birdsprite_sym").$("wing").css("background-color", hue); // Gets the bird symbol and changes the wing colour
           newdiv.getSymbol("birdsprite_sym").$("eye").css("background-color", hue); // Gets the bird symbol and changes the eye colour
           }
         })();
         
         // Create a timer for the counter
         
         var timerCount=30; // This is the variable set for the timer display
         
         var tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
         function timer()
         {
           timerCount=timerCount-1;
           if (timerCount <= -1)
           {
              clearInterval(tCounter);
              sym.$("birdfly").remove(); // Action taken when the timer reaches 0 - deletes the instance of "birdfly" so the birds disappear
              sym.$("timer_sym").fadeOut(100, 0);
              sym.$("count_sym").fadeOut(100, 0);
              sym.getSymbol("finalscore_sym").play();
              sym.$("finalscore_sym").show();
         
              return;
           }
         
         sym.getSymbol("timer_sym").$("timer_txt").html(timerCount); // Display the timer value 
         
           }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bird_sym'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_birdsprite_sym}", "click", function(sym, e) {
         sym.getSymbol("birdsprite_sym").play("net"); // Plays from the label "net" when a bird is clicked
         
         var offset = sym.$('birdsprite_sym').offset(); // Gets the offset position of birdsprite
         var leftOffset = Math.round(offset.left) // Rounds the left position to the nearist whole
         
         
         
         if (leftOffset <= 250) { // If the left position is equal to or less than 250px from the left, the bird is worth 107pts
         var countDisplay = sym.composition.getStage().getParameter("counter");
         countDisplay = countDisplay + 107; // Add 107 to the point counter
         sym.composition.getStage().setParameter("counter", countDisplay);
         sym.getComposition().getStage().getSymbol("count_sym").$("count").html(countDisplay);
         sym.getComposition().getStage().getSymbol("finalscore_sym").$("fCount").html(countDisplay);
         sym.getComposition().getStage().getSymbol("count_sym").play(0);
         }
         
         else if (leftOffset >= 251) { // If the left position is equal to or greater than 251px from the left, the bird is worth 55pts
         var countDisplay = sym.composition.getStage().getParameter("counter");
         countDisplay = countDisplay + 55;
         sym.composition.getStage().setParameter("counter", countDisplay); 
         sym.getComposition().getStage().getSymbol("count_sym").$("count").html(countDisplay);
         sym.getComposition().getStage().getSymbol("finalscore_sym").$("fCount").html(countDisplay);
         sym.getComposition().getStage().getSymbol("count_sym").play(0);
         }
         
         sym.$("birdsprite_sym").unbind("click");

      });
      //Edge binding end

   })("bird_sym");
   //Edge symbol end:'bird_sym'

   //=========================================================
   
   //Edge symbol: 'bg_animate'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.play(0);
         
         

      });
      //Edge binding end

   })("bg_animate");
   //Edge symbol end:'bg_animate'

   //=========================================================
   
   //Edge symbol: 'birdsprite_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1570, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("birdsprite_sym");
   //Edge symbol end:'birdsprite_sym'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("bg_trees");
   //Edge symbol end:'bg_trees'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("count_sym");
   //Edge symbol end:'count_sym'

   //=========================================================
   
   //Edge symbol: 'play_sym'
   (function(symbolName) {   
   
   })("play_sym");
   //Edge symbol end:'play_sym'

   //=========================================================
   
   //Edge symbol: 'blurry_sym'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("blurry_sym");
   //Edge symbol end:'blurry_sym'

   //=========================================================
   
   //Edge symbol: 'timer_sym'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.play(0);
         

      });
      //Edge binding end

   })("timer_sym");
   //Edge symbol end:'timer_sym'

   //=========================================================
   
   //Edge symbol: 'seconds_sym'
   (function(symbolName) {   
   
   })("seconds_sym");
   //Edge symbol end:'seconds_sym'

   //=========================================================
   
   //Edge symbol: 'seconds_sym_1'
   (function(symbolName) {   
   
   })("finalscore_sym");
   //Edge symbol end:'finalscore_sym'

   //=========================================================
   
   //Edge symbol: 'play_sym_1'
   (function(symbolName) {   
   
      

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play}", "click", function(sym, e) {
         document.location.reload(true);

      });
      //Edge binding end

      })("playagain_sym");
   //Edge symbol end:'playagain_sym'

   //=========================================================
   
   //Edge symbol: 'blurry_sym_1'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      })("blurryblue_sym");
   //Edge symbol end:'blurryblue_sym'

})(jQuery, AdobeEdge, "EDGE-127901775");