/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['adelle']='<script type=\"text/javascript\" src=\"//use.typekit.net/lyx0ley.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'background',
            type:'group',
            rect:['0px','0px','100%','100%','auto','auto'],
            transform:[],
            c:[
            {
               id:'vignette',
               type:'image',
               rect:['0px','0px','100%','100%','auto','auto'],
               fill:["rgba(0,0,0,0)",'artwork/bg.png'],
               transform:[]
            },
            {
               id:'bg_trees',
               type:'rect',
               rect:['0','0','auto','auto','auto','auto']
            }]
         },
         {
            id:'teal_round',
            type:'group',
            rect:['61.4%','auto','247px','96.3%','-82px','auto'],
            transform:[],
            c:[
            {
               id:'teal_stem',
               type:'rect',
               rect:['px','px','5px','100%','auto','auto'],
               fill:["rgba(101,142,108,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'teal_ball',
               type:'rect',
               rect:['px','px','247px','247px','auto','auto'],
               borderRadius:["160px 160px","160px 160px","160px 160px","160px 160px"],
               fill:["rgba(101,142,108,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],[],[],['0.413','0.413']]
            }]
         },
         {
            id:'blue_round',
            type:'group',
            rect:['38%','161px','247px','655px','auto','auto'],
            transform:[],
            c:[
            {
               id:'blue_stem',
               type:'rect',
               rect:['px','246px','5px','100%','auto','auto'],
               fill:["rgba(119,176,223,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'blue_ball',
               type:'rect',
               rect:['px','px','247px','247px','auto','auto'],
               borderRadius:["160px 160px","160px 160px","160px 160px","160px 160px"],
               fill:["rgba(119,176,223,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],[],[],['0.65','0.65']]
            }]
         },
         {
            id:'purple_round',
            type:'group',
            rect:['22.2%','70px','247px','96.3%','auto','auto'],
            transform:[],
            c:[
            {
               id:'purple_stem',
               type:'rect',
               rect:['px','px','5px','100%','auto','auto'],
               fill:["rgba(124,128,181,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'purple_ball',
               type:'rect',
               rect:['px','px','247px','247px','auto','auto'],
               borderRadius:["160px 160px","160px 160px","160px 160px","160px 160px"],
               fill:["rgba(124,128,181,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],[],[],['0.9','0.9']]
            }]
         },
         {
            id:'magenta_round',
            type:'group',
            rect:['auto','76px','247px','96.3%','auto','2.4%'],
            transform:[],
            c:[
            {
               id:'magenta_stem',
               type:'rect',
               rect:['px','px','5px','100%','auto','auto'],
               fill:["rgba(158,30,98,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'magenta_ball',
               type:'rect',
               rect:['px','px','247px','247px','auto','auto'],
               borderRadius:["160px 160px","160px 160px","160px 160px","160px 160px"],
               fill:["rgba(158,30,98,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],[],[],['0.85','0.85']]
            }]
         },
         {
            id:'count_sym',
            type:'rect',
            rect:['883','523','auto','auto','auto','auto']
         },
         {
            id:'timer_sym',
            type:'rect',
            rect:['auto','-54px','auto','auto','auto','-0.7%']
         },
         {
            id:'birdfly',
            type:'rect',
            rect:['px','0pxundefined','1024px','86.9%','auto','auto'],
            fill:["rgba(123,198,143,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'green_stem',
            type:'rect',
            rect:['auto','138px','5px','96.3%','auto','363px'],
            fill:["rgba(123,198,143,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'green_ball',
            type:'rect',
            rect:['auto','-22px','351px','351px','auto','188px'],
            borderRadius:["175.32px 175.32px","175.32px 175.32px","175.32px 175.32px","175.32px 175.32px"],
            fill:["rgba(123,198,143,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['0.413','0.413']]
         },
         {
            id:'yellow_stem',
            type:'rect',
            rect:['auto','117px','5px','100%','auto','253px'],
            fill:["rgba(255,239,148,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'yellow_ball',
            type:'rect',
            rect:['auto','-42px','247px','247px','auto','131px'],
            borderRadius:["160px 160px","160px 160px","160px 160px","160px 160px"],
            fill:["rgba(255,239,148,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['0.347','-0.347']]
         },
         {
            id:'salmon_stem',
            type:'rect',
            rect:['auto','259px','5px','100%','auto','441px'],
            fill:["rgba(243,122,97,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'salmon_ball',
            type:'rect',
            rect:['auto','152px','247px','247px','317px','319px'],
            borderRadius:["160px 160px","160px 160px","160px 160px","160px 160px"],
            fill:["rgba(243,122,97,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['0.413','0.413']]
         },
         {
            id:'orange_stem',
            type:'rect',
            rect:['153px','271px','5px','100%','auto','auto'],
            fill:["rgba(247,147,29,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'orange_ball',
            type:'rect',
            rect:['33px','26px','247px','247px','auto','auto'],
            borderRadius:["160px 160px","160px 160px","160px 160px","160px 160px"],
            fill:["rgba(247,147,29,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'finalscore_sym',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'seconds_sym',
            type:'rect',
            rect:['-2px','-160px','auto','auto','auto','auto']
         },
         {
            id:'splash',
            type:'group',
            rect:['0px','-2px','100%','100%','auto','auto'],
            c:[
            {
               id:'splash_bg2',
               type:'image',
               rect:['-2px','2px','100%','100%','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"splash_bg.jpg",'0px','0px']
            },
            {
               id:'bg_trees2',
               type:'rect',
               rect:['274','2px','auto','auto','auto','auto']
            },
            {
               id:'cracidaes',
               type:'image',
               rect:['auto','auto','446px','292px','1%','-0.6%'],
               fill:["rgba(0,0,0,0)",im+"cracidaes.png",'0px','0px'],
               transform:[[],['-5deg']]
            },
            {
               id:'gradient',
               type:'image',
               rect:['-20.6%','0.2%','100%','665px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"gradient.png",'0px','0px']
            },
            {
               id:'title',
               type:'image',
               rect:['-6px','0px','425px','301px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"title.png",'0px','0px']
            },
            {
               id:'Text',
               type:'text',
               rect:['46px','306px','70.8%','185px','auto','auto'],
               text:"The cracidae are running wild! Catch as many as you can before the timer runs out - the faster you catch them, the more points you get.",
               font:['adelle',18,"rgba(39,39,39,1.00)","normal","none",""],
               textShadow:["rgba(255,255,255,1.00)",3,3,5]
            },
            {
               id:'play_sym',
               type:'rect',
               rect:['48px','auto','auto','auto','4.9%','auto']
            }]
         }],
         symbolInstances: [
         {
            id:'bg_trees',
            symbolName:'bg_trees'
         },
         {
            id:'bg_trees2',
            symbolName:'bg_trees'
         },
         {
            id:'play_sym',
            symbolName:'play_sym'
         },
         {
            id:'seconds_sym',
            symbolName:'seconds_sym'
         },
         {
            id:'timer_sym',
            symbolName:'timer_sym'
         },
         {
            id:'count_sym',
            symbolName:'count_sym'
         },
         {
            id:'finalscore_sym',
            symbolName:'finalscore_sym'
         }
         ]
      },
   states: {
      "Base State": {
         "${_salmon_ball}": [
            ["color", "background-color", 'rgba(243,122,97,1.00)'],
            ["style", "border-top-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.41385'],
            ["style", "right", '316.77px'],
            ["style", "border-top-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '247.83334350586px'],
            ["style", "top", '152.38px'],
            ["style", "border-bottom-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.41385'],
            ["style", "height", '247.83334350586px'],
            ["style", "left", 'auto']
         ],
         "${_bg_trees}": [
            ["style", "opacity", '0.40483566810345']
         ],
         "${_green_ball}": [
            ["color", "background-color", 'rgba(123,198,143,1.00)'],
            ["style", "border-top-left-radius", [175.32,175.32], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [175.32,175.32], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.41385'],
            ["style", "right", '188px'],
            ["style", "border-top-right-radius", [175.32,175.32], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '350.65336086713px'],
            ["style", "top", '-21.78px'],
            ["style", "border-bottom-left-radius", [175.32,175.32], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.41385'],
            ["style", "height", '350.65336086713px'],
            ["style", "left", 'auto']
         ],
         "${_teal_stem}": [
            ["color", "background-color", 'rgba(101,142,108,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "top", '246px'],
            ["style", "left", '120px'],
            ["style", "width", '5px']
         ],
         "${_title}": [
            ["style", "top", '0px'],
            ["style", "height", '301.49387636081px'],
            ["style", "left", '-5.52px'],
            ["style", "width", '425.1328125px']
         ],
         "${_play_sym}": [
            ["style", "top", 'auto'],
            ["style", "left", '47.62px'],
            ["style", "bottom", '4.89%']
         ],
         "${_birdfly}": [
            ["color", "background-color", 'rgba(123,198,143,0.00)'],
            ["style", "height", '100%'],
            ["style", "left", '-101px'],
            ["style", "width", '98px']
         ],
         "${_purple_round}": [
            ["style", "top", '70px'],
            ["transform", "scaleY", '1'],
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "left", '22.17%'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_cracidaes}": [
            ["style", "top", 'auto'],
            ["transform", "rotateZ", '-5deg'],
            ["style", "bottom", '0.96%'],
            ["style", "height", '292.29013039569px'],
            ["style", "right", '-0.55%'],
            ["style", "left", 'auto'],
            ["style", "width", '446.39151719456px']
         ],
         "${_orange_stem}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", 'auto'],
            ["style", "height", '100%'],
            ["style", "top", '271px'],
            ["style", "left", '153.02px'],
            ["style", "width", '5px']
         ],
         "${_timer_txt}": [
            ["style", "text-align", '']
         ],
         "${_magenta_ball}": [
            ["color", "background-color", 'rgba(158,30,98,1.00)'],
            ["style", "border-top-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.85089'],
            ["style", "border-top-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '247.83334350586px'],
            ["style", "top", '30px'],
            ["style", "border-bottom-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.85089'],
            ["style", "height", '247.83334350586px'],
            ["style", "left", '0px']
         ],
         "${_magenta_stem}": [
            ["color", "background-color", 'rgba(158,30,98,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "top", '246px'],
            ["style", "left", '120px'],
            ["style", "width", '5px']
         ],
         "${_blue_ball}": [
            ["color", "background-color", 'rgba(119,176,223,1.00)'],
            ["style", "border-top-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.65025'],
            ["style", "border-top-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '247.83334350586px'],
            ["style", "top", '74px'],
            ["style", "border-bottom-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.65025'],
            ["style", "height", '247.83334350586px'],
            ["style", "left", '1px']
         ],
         "${_yellow_stem}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "background-color", 'rgba(255,239,148,1.00)'],
            ["style", "top", '117.17px'],
            ["style", "bottom", 'auto'],
            ["style", "height", '100%'],
            ["style", "right", '252.8px'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_teal_round}": [
            ["style", "top", 'auto'],
            ["transform", "scaleY", '1'],
            ["style", "bottom", '-81.97px'],
            ["transform", "scaleX", '1'],
            ["style", "right", 'auto'],
            ["style", "left", '61.43%'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_bg_trees2}": [
            ["style", "left", '-2px'],
            ["style", "top", '2px']
         ],
         "${_salmon_stem}": [
            ["color", "background-color", 'rgba(243,122,97,1.00)'],
            ["style", "top", '259.37px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", 'auto'],
            ["style", "height", '100%'],
            ["style", "right", '440.62px'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_teal_ball}": [
            ["color", "background-color", 'rgba(101,142,108,1.00)'],
            ["style", "border-top-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.41385'],
            ["style", "border-top-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '247.83334350586px'],
            ["style", "top", '137px'],
            ["style", "border-bottom-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.41385'],
            ["style", "height", '247.83334350586px'],
            ["style", "left", '0px']
         ],
         "${_count_sym}": [
            ["style", "left", '2px'],
            ["style", "top", '-2px']
         ],
         "${_timer_sym}": [
            ["style", "top", '-53.87px'],
            ["transform", "scaleY", '0.57426'],
            ["transform", "scaleX", '0.57426'],
            ["style", "right", '-0.68%'],
            ["style", "left", 'auto']
         ],
         "${_blue_stem}": [
            ["color", "background-color", 'rgba(119,176,223,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", 'auto'],
            ["style", "height", '100%'],
            ["style", "top", '246px'],
            ["style", "left", '120px'],
            ["style", "width", '5px']
         ],
         "${_magenta_round}": [
            ["style", "top", '76px'],
            ["transform", "scaleY", '1'],
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "right", '2.43%'],
            ["style", "left", 'auto'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_orange_ball}": [
            ["color", "background-color", 'rgba(247,147,29,1.00)'],
            ["style", "border-top-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '247.83334350586px'],
            ["style", "top", '26px'],
            ["style", "border-bottom-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '247.83334350586px'],
            ["style", "left", '33.02px']
         ],
         "${_vignette}": [
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_green_stem}": [
            ["color", "background-color", 'rgba(123,198,143,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '138px'],
            ["style", "height", '96.32%'],
            ["style", "right", '362.63px'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_splash}": [
            ["style", "height", '100%'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_blue_round}": [
            ["transform", "scaleX", '1'],
            ["style", "top", '161px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '37.99%']
         ],
         "${_gradient}": [
            ["style", "top", '0.15%'],
            ["style", "bottom", 'auto'],
            ["style", "height", '664.53332519531px'],
            ["style", "right", 'auto'],
            ["style", "left", '-20.58%'],
            ["style", "width", '100%']
         ],
         "${_splash_bg2}": [
            ["style", "top", '2px'],
            ["style", "height", '100%'],
            ["style", "left", '-2px'],
            ["style", "width", '100%']
         ],
         "${_Text}": [
            ["subproperty", "textShadow.blur", '5px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(39,39,39,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '46.3px'],
            ["style", "width", '70.78%'],
            ["style", "top", '306px'],
            ["style", "font-family", 'adelle'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_finalscore_sym}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(228,250,255,1.00)'],
            ["style", "min-width", '0px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_purple_stem}": [
            ["color", "background-color", 'rgba(124,128,181,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "top", '246px'],
            ["style", "left", '120px'],
            ["style", "width", '5px']
         ],
         "${_purple_ball}": [
            ["color", "background-color", 'rgba(124,128,181,1.00)'],
            ["style", "border-top-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.90022'],
            ["style", "border-top-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '247.83334350586px'],
            ["style", "top", '25px'],
            ["style", "border-bottom-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.90022'],
            ["style", "height", '247.83334350586px'],
            ["style", "left", '0px']
         ],
         "${_yellow_ball}": [
            ["color", "background-color", 'rgba(255,239,148,1.00)'],
            ["style", "border-top-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.34757'],
            ["style", "right", '130.95px'],
            ["style", "border-top-right-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '247.83334350586px'],
            ["style", "top", '-41.82px'],
            ["style", "border-bottom-left-radius", [160,160], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '-0.34758'],
            ["style", "height", '247.83334350586px'],
            ["style", "left", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid1320", tween: [ "style", "${_count_sym}", "left", '2px', { fromValue: '2px'}], position: 1000, duration: 0 },
            { id: "eid269", tween: [ "style", "${_timer_txt}", "text-align", '', { fromValue: '0'}], position: 5157, duration: 0 },
            { id: "eid633", tween: [ "style", "${_finalscore_sym}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid1339", tween: [ "style", "${_count_sym}", "top", '-2px', { fromValue: '-2px'}], position: 1000, duration: 0 }         ]
      }
   }
},
"bird_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'birdsprite_sym',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['0px','2','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'birdsprite_sym',
      symbolName: 'birdsprite_sym'
   }   ]
   },
   states: {
      "Base State": {
         "${_birdsprite_sym}": [
            ["style", "top", '2px'],
            ["style", "cursor", 'pointer'],
            ["style", "clip", [-92,142,986,-60], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84.142394822006px'],
            ["style", "width", '1024px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         timeline: [
            { id: "eid112", tween: [ "style", "${symbolSelector}", "width", '1024px', { fromValue: '1024px'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_birdsprite_sym}", "top", '0px', { fromValue: '2px'}], position: 0, duration: 12000 },
            { id: "eid79", tween: [ "style", "${_birdsprite_sym}", "clip", [-92,142,986,-60], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-92,142,986,-60]}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid111", tween: [ "style", "${symbolSelector}", "height", '84.142394822006px', { fromValue: '84.142394822006px'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_birdsprite_sym}", "left", '1965.09px', { fromValue: '0px'}], position: 0, duration: 12000 }         ]
      }
   }
},
"bg_animate": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','100.2%','100%','auto','auto'],
      transform: {},
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(207,255,220,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(230,255,237,1.00)'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8249,
         autoPlay: true,
         timeline: [
            { id: "eid110", tween: [ "style", "${_Rectangle2}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
            { id: "eid145", tween: [ "style", "${_Rectangle2}", "height", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(227,247,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(230,255,237,1.00)'}], position: 0, duration: 2062 },
            { id: "eid16", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(233,230,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(227,247,255,1.00)'}], position: 2062, duration: 2062 },
            { id: "eid17", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(254,235,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,230,255,1.00)'}], position: 4125, duration: 2062 },
            { id: "eid18", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(230,255,237,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,235,255,1.00)'}], position: 6187, duration: 2062 }         ]
      }
   }
},
"birdsprite_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['392px','99px','22px','30px','auto','auto'],
      transform: [{1:0,0:0},['21deg'],{},['1.082','1.337']],
      id: 'wing',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['px','72px','10px','10px','auto','auto'],
      transform: {},
      id: 'eye',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: {},
      type: 'image',
      id: 'birdsprite',
      rect: ['-1120px','-3251px','792px','65px','auto','auto'],
      clip: ['rect(0px 99px 65px 0px)'],
      fill: ['rgba(0,0,0,0)','artwork/birdsprite.png','0px','0px']
   },
   {
      rect: ['px','px','154px','124px','auto','auto'],
      transform: {},
      id: 'net2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','artwork/net.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_wing}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "rotateZ", '21deg'],
            ["transform", "scaleX", '1.08288'],
            ["style", "opacity", '1'],
            ["style", "left", '41px'],
            ["style", "width", '22.28254699707px'],
            ["style", "top", '18px'],
            ["transform", "scaleY", '1.33751'],
            ["style", "height", '30.80859375px'],
            ["style", "display", 'block']
         ],
         "${_birdsprite}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "background-position", [0,0.026123], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,99,65,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_eye}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '70px'],
            ["style", "top", '9px']
         ],
         "${_net2}": [
            ["style", "top", '-43px'],
            ["style", "opacity", '0'],
            ["style", "left", '-25px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '64px'],
            ["style", "width", '792px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1570,
         autoPlay: true,
         labels: {
            "net": 810
         },
         timeline: [
            { id: "eid122", tween: [ "style", "${_net2}", "display", 'none', { fromValue: 'block'}], position: 1570, duration: 0 },
            { id: "eid1", tween: [ "style", "${_birdsprite}", "background-position", [0,0.026123], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0.026123]}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_birdsprite}", "background-position", [-100,0.026123], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0.026123]}], position: 35, duration: 0 },
            { id: "eid8", tween: [ "style", "${_birdsprite}", "background-position", [-200,0.026123], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-100,0.026123]}], position: 71, duration: 0 },
            { id: "eid9", tween: [ "style", "${_birdsprite}", "background-position", [-300,0.026123], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-200,0.026123]}], position: 107, duration: 0 },
            { id: "eid10", tween: [ "style", "${_birdsprite}", "background-position", [-400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0.026123]}], position: 142, duration: 0 },
            { id: "eid11", tween: [ "style", "${_birdsprite}", "background-position", [-500,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-400,0]}], position: 178, duration: 0 },
            { id: "eid12", tween: [ "style", "${_birdsprite}", "background-position", [-600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-500,0]}], position: 214, duration: 0 },
            { id: "eid13", tween: [ "style", "${_birdsprite}", "background-position", [-700,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,0]}], position: 250, duration: 0 },
            { id: "eid82", tween: [ "style", "${_birdsprite}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_birdsprite}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_birdsprite}", "top", '737.58px', { fromValue: '0px'}], position: 810, duration: 760, easing: "easeInQuad" },
            { id: "eid124", tween: [ "style", "${_eye}", "display", 'none', { fromValue: 'block'}], position: 1570, duration: 0 },
            { id: "eid103", tween: [ "style", "${_net2}", "top", '694.58px', { fromValue: '-43px'}], position: 810, duration: 760, easing: "easeInQuad" },
            { id: "eid137", tween: [ "style", "${_wing}", "opacity", '0', { fromValue: '1'}], position: 1410, duration: 160 },
            { id: "eid136", tween: [ "style", "${_birdsprite}", "opacity", '0', { fromValue: '1'}], position: 1410, duration: 160 },
            { id: "eid125", tween: [ "style", "${_wing}", "display", 'none', { fromValue: 'block'}], position: 1570, duration: 0 },
            { id: "eid123", tween: [ "style", "${_birdsprite}", "display", 'none', { fromValue: 'block'}], position: 1570, duration: 0 },
            { id: "eid135", tween: [ "style", "${_eye}", "opacity", '0', { fromValue: '1'}], position: 1410, duration: 160 },
            { id: "eid104", tween: [ "style", "${_wing}", "top", '756.14px', { fromValue: '18px'}], position: 810, duration: 760, easing: "easeInQuad" },
            { id: "eid106", tween: [ "style", "${_eye}", "top", '746.58px', { fromValue: '9px'}], position: 810, duration: 760, easing: "easeInQuad" },
            { id: "eid120", tween: [ "style", "${_net2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid121", tween: [ "style", "${_net2}", "opacity", '1', { fromValue: '0'}], position: 810, duration: 0, easing: "easeInQuad" },
            { id: "eid134", tween: [ "style", "${_net2}", "opacity", '0', { fromValue: '1'}], position: 1410, duration: 160 }         ]
      }
   }
},
"bg_trees": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      id: 'mountains',
      type: 'image',
      rect: ['0px','auto','100%','362px','0px','auto'],
      fill: ['rgba(0,0,0,0)','images/mountains.png','0px','0px']
   },
   {
      rect: ['26.8%','75px','125','100%','auto','auto'],
      id: 'tree7',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['-64%','-53px','286px','286px','auto','auto'],
         borderRadius: ['142.75px 142.75px','142.75px 142.75px','142.75px 142.75px','142.75px 142.75px'],
         id: 'green2_ballCopy7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(199,41,80,1.00)']
      },
      {
         rect: ['47.2%','125px','5px','100%','auto','auto'],
         id: 'gren2_stemCopy7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(199,41,80,1.00)']
      }]
   },
   {
      rect: ['6%','39','125','100%','auto','auto'],
      id: 'tree1',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['0%','0px','125px','125px','auto','auto'],
         borderRadius: ['62.5px 62.5px','62.5px 62.5px','62.5px 62.5px','62.5px 62.5px'],
         id: 'yellow_ball1',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,234,116,1.00)']
      },
      {
         rect: ['47.2%','125px','5px','100%','auto','auto'],
         id: 'yellow_stem1',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,234,116,1)']
      }]
   },
   {
      rect: ['20.4%','88px','125','100%','auto','auto'],
      id: 'tree2',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['-18.4%','-41px','175px','175px','auto','auto'],
         borderRadius: ['87.57px 87.57px','87.57px 87.57px','87.57px 87.57px','87.57px 87.57px'],
         id: 'yellow_ball1Copy3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,206,86,1.00)']
      },
      {
         rect: ['47.2%','125px','5px','100%','auto','auto'],
         id: 'orange_Stem',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,206,86,1.00)']
      }]
   },
   {
      rect: ['1.9%','379px','125','100%','auto','auto'],
      id: 'tree3',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['6.4%','17px','108px','108px','auto','auto'],
         borderRadius: ['53.92px 53.92px','53.92px 53.92px','53.92px 53.92px','53.92px 53.92px'],
         id: 'green2_ball',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(194,255,149,1.00)']
      },
      {
         rect: ['47.2%','125px','5px','100%','auto','auto'],
         id: 'gren2_stem',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(194,255,149,1.00)']
      }]
   },
   {
      rect: ['auto','135px','125','100%','52px','auto'],
      id: 'tree8',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','17px','108px','108px','9px','auto'],
         borderRadius: ['53.92px 53.92px','53.92px 53.92px','53.92px 53.92px','53.92px 53.92px'],
         id: 'green2_ballCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(194,255,149,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','61px','auto'],
         id: 'gren2_stemCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(194,255,149,1.00)']
      }]
   },
   {
      rect: ['518px','290px','125','100%','auto','auto'],
      id: 'tree9',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['8px','17px','108px','108px','auto','auto'],
         borderRadius: ['53.92px 53.92px','53.92px 53.92px','53.92px 53.92px','53.92px 53.92px'],
         id: 'green2_ballCopy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(194,255,149,1.00)']
      },
      {
         rect: ['59px','125px','5px','100%','auto','auto'],
         id: 'gren2_stemCopy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(194,255,149,1.00)']
      }]
   },
   {
      rect: ['auto','172px','125','100%','217px','auto'],
      id: 'tree10',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','-31px','175px','175px','-26px','auto'],
         borderRadius: ['87.57px 87.57px','87.57px 87.57px','87.57px 87.57px','87.57px 87.57px'],
         id: 'green2_ballCopy3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(187,41,199,1.00)']
      },
      {
         rect: ['59px','125px','5px','100%','auto','auto'],
         id: 'gren2_stemCopy3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(187,41,199,1.00)']
      }]
   },
   {
      rect: ['15.6%','206px','125','100%','auto','auto'],
      id: 'tree11',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['-19.2%','-31px','175px','175px','auto','auto'],
         borderRadius: ['87.57px 87.57px','87.57px 87.57px','87.57px 87.57px','87.57px 87.57px'],
         id: 'green2_ballCopy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(187,41,199,1.00)']
      },
      {
         rect: ['47.2%','125px','5px','100%','auto','auto'],
         id: 'gren2_stemCopy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(187,41,199,1.00)']
      }]
   },
   {
      rect: ['38.1%','295px','125','100%','auto','auto'],
      id: 'tree12',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['-19.2%','-31px','175px','175px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'green2_ballCopy5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(187,41,199,1.00)']
      },
      {
         rect: ['59px','125px','5px','100%','auto','auto'],
         id: 'gren2_stemCopy5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(187,41,199,1.00)']
      }]
   },
   {
      rect: ['auto','75px','125','100%','105px','auto'],
      id: 'tree13',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','-53px','286px','286px','-80px','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'green2_ballCopy6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(199,41,80,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','61px','auto'],
         id: 'gren2_stemCopy6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(199,41,80,1.00)']
      }]
   },
   {
      rect: ['auto','88px','125','100%','auto','31.1%'],
      id: 'tree4',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','-41px','175px','175px','auto','-21.3%'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'yellow_ball1Copy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,206,86,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','auto','48.7%'],
         id: 'orange_StemCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,206,86,1.00)']
      }]
   },
   {
      rect: ['auto','39px','125','100%','43.2%','43.2%'],
      id: 'tree5',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','0px','125px','125px','auto','0%'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'yellow_ball1Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,234,116,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','auto','48.7%'],
         id: 'yellow_stem1Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,234,116,1)']
      }]
   },
   {
      rect: ['auto','auto','125','100%','-28.4%','38.9%'],
      id: 'tree14',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','46px','79px','79px','0%','20.1%'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'yellow_ball1Copy5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(115,211,255,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','48.7%','auto'],
         id: 'yellow_stem1Copy3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(115,211,255,1.00)']
      }]
   },
   {
      rect: ['auto','auto','125','100%','-21.4%','86.8%'],
      id: 'tree15',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','46px','79px','79px','20.1%','0%'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'yellow_ball1Copy6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(115,211,255,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','auto','48.7%'],
         id: 'yellow_stem1Copy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(115,211,255,1.00)']
      }]
   },
   {
      rect: ['auto','auto','125','100%','2.6%','-0.7%'],
      id: 'tree16',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','46px','79px','79px','0%','20.1%'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'yellow_ball1Copy7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(115,211,255,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','48.7%','auto'],
         id: 'yellow_stem1Copy5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(115,211,255,1.00)']
      }]
   },
   {
      rect: ['auto','auto','125','100%','-25.3%','17.3%'],
      id: 'tree17',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','46px','79px','79px','20.1%','0%'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'yellow_ball1Copy8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(115,211,255,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','auto','48.7%'],
         id: 'yellow_stem1Copy6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(115,211,255,1.00)']
      }]
   },
   {
      rect: ['auto','auto','125','100%','-16.2%','58.2%'],
      id: 'tree18',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','46px','79px','79px','0%','20.1%'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'yellow_ball1Copy9',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(115,211,255,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','48.7%','auto'],
         id: 'yellow_stem1Copy7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(115,211,255,1.00)']
      }]
   },
   {
      rect: ['auto','auto','125','100%','-3.1%','29.2%'],
      id: 'tree19',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','46px','79px','79px','20.1%','0%'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'yellow_ball1Copy10',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(115,211,255,1.00)']
      },
      {
         rect: ['auto','125px','5px','100%','auto','48.7%'],
         id: 'yellow_stem1Copy8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(115,211,255,1.00)']
      }]
   },
   {
      rect: ['auto','27px','125','100%','auto','19%'],
      id: 'tree6',
      opacity: 0.5,
      type: 'group',
      c: [
      {
         rect: ['auto','0px','108px','108px','auto','0%'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'yellow_ball1Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,234,116,1.00)']
      },
      {
         rect: ['auto','108px','5px','100%','auto','45.8%'],
         id: 'yellow_stem1Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,234,116,1)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gren2_stemCopy5}": [
            ["style", "top", '124.88px'],
            ["color", "background-color", 'rgba(187,41,199,1.00)'],
            ["style", "height", '100%'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '59.1px'],
            ["style", "width", '5px']
         ],
         "${_green2_ballCopy4}": [
            ["color", "background-color", 'rgba(187,41,199,1.00)'],
            ["style", "height", '175.14999389648px'],
            ["style", "top", '-31.45px'],
            ["style", "left", '-19.46%'],
            ["style", "width", '175.14999389648px']
         ],
         "${_yellow_ball1Copy4}": [
            ["color", "background-color", 'rgba(255,206,86,1.00)'],
            ["style", "top", '-41px'],
            ["style", "height", '175.16650390625px'],
            ["style", "right", '-21.34%'],
            ["style", "left", 'auto'],
            ["style", "width", '175.16650390625px']
         ],
         "${_yellow_ball1}": [
            ["style", "top", '0px'],
            ["style", "left", '0%'],
            ["color", "background-color", 'rgba(255,234,116,1.00)']
         ],
         "${_orange_Stem}": [
            ["style", "top", '124.88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(255,206,86,1.00)'],
            ["style", "left", '47.28%'],
            ["style", "width", '5px']
         ],
         "${_yellow_ball1Copy}": [
            ["style", "top", '0px'],
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["color", "background-color", 'rgba(255,234,116,1.00)']
         ],
         "${_yellow_stem1Copy8}": [
            ["style", "top", '124.88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "height", '100%'],
            ["style", "right", '48.72%'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_yellow_ball1Copy6}": [
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "top", '45.73px'],
            ["style", "height", '79.4375px'],
            ["style", "right", '20.11%'],
            ["style", "left", 'auto'],
            ["style", "width", '79.4375px']
         ],
         "${_yellow_ball1Copy2}": [
            ["color", "background-color", 'rgba(255,234,116,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '107.859375px'],
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["style", "width", '107.859375px']
         ],
         "${_tree6}": [
            ["style", "top", '27.42px'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '19.02%']
         ],
         "${_tree8}": [
            ["style", "top", '135px'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '51.95px']
         ],
         "${_tree18}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-16.18%'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '58.2%']
         ],
         "${_gren2_stemCopy4}": [
            ["style", "top", '124.88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(187,41,199,1.00)'],
            ["style", "left", '47.28%'],
            ["style", "width", '5px']
         ],
         "${_yellow_stem1Copy5}": [
            ["style", "top", '124.88px'],
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "right", '48.72%'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_tree17}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-25.29%'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '17.34%']
         ],
         "${_green2_ballCopy2}": [
            ["color", "background-color", 'rgba(194,255,149,1.00)'],
            ["style", "height", '107.84999847412px'],
            ["style", "top", '17.03px'],
            ["style", "left", '7.92px'],
            ["style", "width", '107.84999847412px']
         ],
         "${_tree3}": [
            ["style", "top", '379px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '1.87%'],
            ["style", "height", '100%']
         ],
         "${_tree19}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-3.09%'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '29.2%']
         ],
         "${_yellow_stem1Copy7}": [
            ["style", "top", '124.88px'],
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "right", '48.72%'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_tree13}": [
            ["style", "top", '75px'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '104.78px']
         ],
         "${_tree12}": [
            ["style", "top", '295px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '38.09%'],
            ["style", "height", '100%']
         ],
         "${_yellow_stem1Copy6}": [
            ["style", "top", '124.88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "height", '100%'],
            ["style", "right", '48.72%'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_gren2_stemCopy2}": [
            ["style", "top", '124.88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(194,255,149,1.00)'],
            ["style", "left", '59.1px'],
            ["style", "width", '5px']
         ],
         "${_yellow_ball1Copy8}": [
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "top", '45.73px'],
            ["style", "height", '79.4375px'],
            ["style", "right", '20.11%'],
            ["style", "left", 'auto'],
            ["style", "width", '79.4375px']
         ],
         "${_gren2_stemCopy3}": [
            ["style", "top", '124.88px'],
            ["color", "background-color", 'rgba(187,41,199,1.00)'],
            ["style", "height", '100%'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '59.1px'],
            ["style", "width", '5px']
         ],
         "${_orange_StemCopy}": [
            ["style", "top", '124.88px'],
            ["color", "background-color", 'rgba(255,206,86,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "right", '48.72%'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_tree9}": [
            ["style", "top", '290.41px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '518px'],
            ["style", "height", '100%']
         ],
         "${_gren2_stemCopy6}": [
            ["style", "top", '124.88px'],
            ["color", "background-color", 'rgba(199,41,80,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "right", '60.9px'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_green2_ballCopy3}": [
            ["color", "background-color", 'rgba(187,41,199,1.00)'],
            ["style", "top", '-31.45px'],
            ["style", "height", '175.14999389648px'],
            ["style", "right", '-25.82px'],
            ["style", "left", 'auto'],
            ["style", "width", '175.14999389648px']
         ],
         "${_yellow_ball1Copy3}": [
            ["color", "background-color", 'rgba(255,206,86,1.00)'],
            ["style", "height", '175.16650390625px'],
            ["style", "top", '-41px'],
            ["style", "left", '-18.78%'],
            ["style", "width", '175.16650390625px']
         ],
         "${_tree11}": [
            ["style", "top", '206px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '15.65%'],
            ["style", "height", '100%']
         ],
         "${_green2_ball}": [
            ["color", "background-color", 'rgba(194,255,149,1.00)'],
            ["style", "height", '107.84999847412px'],
            ["style", "top", '17.03px'],
            ["style", "left", '6.33%'],
            ["style", "width", '107.84999847412px']
         ],
         "${_yellow_ball1Copy7}": [
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "top", '45.73px'],
            ["style", "height", '79.4375px'],
            ["style", "right", '20.11%'],
            ["style", "left", 'auto'],
            ["style", "width", '79.4375px']
         ],
         "${_mountains}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "height", '362px'],
            ["style", "left", '0.07px'],
            ["style", "width", '100%']
         ],
         "${_yellow_ball1Copy10}": [
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "top", '45.73px'],
            ["style", "height", '79.4375px'],
            ["style", "right", '20.11%'],
            ["style", "left", 'auto'],
            ["style", "width", '79.4375px']
         ],
         "${_yellow_ball1Copy5}": [
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "top", '45.73px'],
            ["style", "height", '79.4375px'],
            ["style", "right", '20.11%'],
            ["style", "left", 'auto'],
            ["style", "width", '79.4375px']
         ],
         "${_tree14}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-28.36%'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '38.91%']
         ],
         "${_yellow_stem1Copy4}": [
            ["style", "top", '124.88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "height", '100%'],
            ["style", "right", '48.72%'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_gren2_stem}": [
            ["style", "top", '124.88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(194,255,149,1.00)'],
            ["style", "left", '47.28%'],
            ["style", "width", '5px']
         ],
         "${_green2_ballCopy5}": [
            ["color", "background-color", 'rgba(187,41,199,1.00)'],
            ["style", "height", '175.14999389648px'],
            ["style", "top", '-31.45px'],
            ["style", "left", '-19.46%'],
            ["style", "width", '175.14999389648px']
         ],
         "${_green2_ballCopy}": [
            ["color", "background-color", 'rgba(194,255,149,1.00)'],
            ["style", "top", '17.03px'],
            ["style", "height", '107.84999847412px'],
            ["style", "right", '9.23px'],
            ["style", "left", 'auto'],
            ["style", "width", '107.84999847412px']
         ],
         "${_yellow_stem1Copy}": [
            ["style", "top", '124.88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "right", '48.72%'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_yellow_stem1Copy3}": [
            ["style", "top", '124.88px'],
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "right", '48.72%'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_tree5}": [
            ["style", "height", '100%'],
            ["style", "right", '43.22%'],
            ["style", "left", 'auto'],
            ["style", "opacity", '0.5']
         ],
         "${_gren2_stemCopy7}": [
            ["style", "top", '124.88px'],
            ["color", "background-color", 'rgba(199,41,80,1.00)'],
            ["style", "height", '100%'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '47.28%'],
            ["style", "width", '5px']
         ],
         "${_tree4}": [
            ["style", "top", '88px'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '31.05%']
         ],
         "${_tree7}": [
            ["style", "top", '75px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '26.76%'],
            ["style", "height", '100%']
         ],
         "${_tree10}": [
            ["style", "top", '171.92px'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '216.66px']
         ],
         "${_gren2_stemCopy}": [
            ["style", "top", '124.88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "background-color", 'rgba(194,255,149,1.00)'],
            ["style", "height", '100%'],
            ["style", "right", '60.9px'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_tree2}": [
            ["style", "top", '88px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '20.46%'],
            ["style", "height", '100%']
         ],
         "${_yellow_stem1}": [
            ["style", "top", '124.88px'],
            ["style", "height", '100%'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '47.28%'],
            ["style", "width", '5px']
         ],
         "${_green2_ballCopy6}": [
            ["color", "background-color", 'rgba(199,41,80,1.00)'],
            ["style", "top", '-53.5px'],
            ["style", "height", '285.50936889648px'],
            ["style", "right", '-80.28px'],
            ["style", "left", 'auto'],
            ["style", "width", '285.50936889648px']
         ],
         "${_tree16}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '2.57%'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '-0.68%']
         ],
         "${_yellow_ball1Copy9}": [
            ["color", "background-color", 'rgba(115,211,255,1.00)'],
            ["style", "top", '45.73px'],
            ["style", "height", '79.4375px'],
            ["style", "right", '20.11%'],
            ["style", "left", 'auto'],
            ["style", "width", '79.4375px']
         ],
         "${_tree1}": [
            ["style", "height", '100%'],
            ["style", "opacity", '0.5']
         ],
         "${_green2_ballCopy7}": [
            ["color", "background-color", 'rgba(199,41,80,1.00)'],
            ["style", "height", '285.50936889648px'],
            ["style", "top", '-53.5px'],
            ["style", "left", '-64.18%'],
            ["style", "width", '285.50936889648px']
         ],
         "${_yellow_stem1Copy2}": [
            ["style", "top", '107.58px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "right", '45.76%'],
            ["style", "left", 'auto'],
            ["style", "width", '5px']
         ],
         "${_tree15}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-21.4%'],
            ["style", "height", '100%'],
            ["style", "opacity", '0.5'],
            ["style", "left", 'auto'],
            ["style", "right", '86.82%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"count_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'score',
      type: 'group',
      rect: ['auto','auto','113','150','3.3%','1.5%'],
      c: [
      {
         transform: [{},['-5deg']],
         rect: ['auto','auto','auto','auto','2px','5px'],
         align: 'right',
         font: ['adelle',100,'rgba(109,0,22,1.00)','700','none','normal'],
         id: 'count',
         text: '0',
         textShadow: ['rgba(38,38,38,0.507813)',7,7,27],
         type: 'text'
      },
      {
         rect: ['313','569','auto','auto','99px','23px'],
         align: 'right',
         font: ['adelle',100,'rgba(109,0,22,1)','400','none','normal'],
         id: 'adelle2',
         text: 'score',
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_score}": [
            ["style", "top", 'auto'],
            ["style", "right", '3.33%'],
            ["style", "left", 'auto'],
            ["style", "bottom", '1.48%']
         ],
         "${_adelle2}": [
            ["subproperty", "textShadow.blur", '14px'],
            ["subproperty", "textShadow.offsetH", '5px'],
            ["transform", "rotateZ", '-6deg'],
            ["color", "color", 'rgba(255,250,172,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "right", '22.77px'],
            ["subproperty", "textShadow.color", 'rgba(3,0,71,0.648438)'],
            ["style", "bottom", '98.84px'],
            ["subproperty", "textShadow.offsetV", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_count}": [
            ["subproperty", "textShadow.blur", '27px'],
            ["subproperty", "textShadow.offsetH", '7px'],
            ["style", "bottom", '2.35px'],
            ["color", "color", 'rgba(167,35,62,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", 'auto'],
            ["style", "font-size", '100px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["subproperty", "textShadow.offsetV", '7px'],
            ["subproperty", "textShadow.color", 'rgba(38,38,38,0.507813)'],
            ["style", "right", '5.45px'],
            ["transform", "rotateZ", '-5deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 186,
         autoPlay: true,
         timeline: [
            { id: "eid201", tween: [ "color", "${_count}", "color", 'rgba(236,91,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(167,35,62,1)'}], position: 0, duration: 122 },
            { id: "eid202", tween: [ "color", "${_count}", "color", 'rgba(167,35,62,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(236,91,121,1.00)'}], position: 122, duration: 64 }         ]
      }
   }
},
"play_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'blurry_sym',
      type: 'rect',
      rect: ['0','-16','auto','auto','auto','auto']
   },
   {
      rect: ['0%','auto','115px','73px','auto','0px'],
      font: ['adelle',55,'rgba(75,75,75,1.00)','normal','none','normal'],
      textShadow: ['rgba(109,81,0,0.648438)',3,3,35],
      align: 'left',
      id: 'play',
      text: 'Play',
      cursor: ['pointer'],
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'blurry_sym',
      symbolName: 'blurry_sym'
   }   ]
   },
   states: {
      "Base State": {
         "${_play}": [
            ["subproperty", "textShadow.blur", '35px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(75,75,75,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0.01%'],
            ["style", "width", '115.484375px'],
            ["style", "top", 'auto'],
            ["style", "height", '73.0625px'],
            ["subproperty", "textShadow.color", 'rgba(109,81,0,0.65)'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '73.050003051758px'],
            ["style", "width", '115.48332977295px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"blurry_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['20px','30px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,255,255,1.00)']
   },
   {
      rect: ['100px','50px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'EllipseCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,255,255,1.00)']
   },
   {
      rect: ['-8px','40px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'EllipseCopy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,255,255,1.00)']
   },
   {
      rect: ['44px','48px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'EllipseCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,255,255,1.00)']
   },
   {
      rect: ['78px','36px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'EllipseCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,255,255,1.00)']
   },
   {
      rect: ['84px','73px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'EllipseCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,255,255,1.00)']
   },
   {
      rect: ['16px','67px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'EllipseCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.blur", '9px'],
            ["style", "opacity", '1'],
            ["style", "left", '20px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '30px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)']
         ],
         "${_EllipseCopy2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.blur", '9px'],
            ["style", "opacity", '1'],
            ["style", "left", '44.24px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '48.22px'],
            ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.offsetV", '0px']
         ],
         "${_EllipseCopy4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '84.14px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '73.44px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '5.8166666030884px'],
            ["style", "width", '5.8166666030884px']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.blur", '9px'],
            ["style", "opacity", '1'],
            ["style", "left", '100px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '50px'],
            ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.offsetV", '0px']
         ],
         "${_EllipseCopy5}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.blur", '9px'],
            ["style", "opacity", '1'],
            ["style", "left", '77.62px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '36px'],
            ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.offsetV", '0px']
         ],
         "${_EllipseCopy6}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '-8px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '40px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '9px']
         ],
         "${_EllipseCopy3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '16px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '67.05px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '9px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2842,
         autoPlay: true,
         timeline: [
            { id: "eid218", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 671, duration: 671 },
            { id: "eid219", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 1342, duration: 671 },
            { id: "eid226", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 1342, duration: 671 },
            { id: "eid227", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 2013, duration: 671 },
            { id: "eid224", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 671 },
            { id: "eid229", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0.000000'}], position: 1171, duration: 671 },
            { id: "eid230", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '1'}], position: 1842, duration: 0 },
            { id: "eid210", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 671 },
            { id: "eid211", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 671, duration: 671 },
            { id: "eid220", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 857, duration: 671 },
            { id: "eid221", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 1528, duration: 671 },
            { id: "eid222", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 671 },
            { id: "eid223", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 2171, duration: 671 },
            { id: "eid214", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 186, duration: 671 },
            { id: "eid215", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 857, duration: 671 }         ]
      }
   }
},
"timer_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-101px','111px','234px','234px','auto','auto'],
      borderRadius: ['117.03px 117.01px','117.03px 117.01px','117.03px 117.01px','117.03px 117.01px'],
      boxShadow: ['',4,12,38,0,'rgba(0,0,48,0.65)'],
      id: 'Ellipse',
      stroke: [1,'rgb(167, 167, 167)','none'],
      type: 'ellipse',
      fill: ['rgba(199,255,252,1.00)']
   },
   {
      id: 'timer',
      type: 'image',
      rect: ['16px','229px','119px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/timer.png','0px','0px']
   },
   {
      rect: ['-36px','162px','104px','133px','auto','auto'],
      align: 'center',
      font: ['adelle',100,'rgba(52,52,52,1.00)','normal','none','normal'],
      id: 'timer_txt',
      text: '30',
      textShadow: ['rgba(0,51,47,0.65)',3,3,9],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(199,255,252,1.00)'],
            ["subproperty", "boxShadow.blur", '38px'],
            ["style", "border-style", 'none'],
            ["style", "left", '-101.02px'],
            ["style", "width", '234.05px'],
            ["style", "top", '110.98px'],
            ["style", "height", '234.03125px'],
            ["subproperty", "boxShadow.offsetV", '12px'],
            ["subproperty", "boxShadow.offsetH", '4px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,48,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '118px'],
            ["style", "width", '150px']
         ],
         "${_timer_txt}": [
            ["subproperty", "textShadow.blur", '9px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(52,52,52,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '-36px'],
            ["style", "font-size", '100px'],
            ["style", "top", '161.81px'],
            ["style", "text-align", 'center'],
            ["style", "height", '132.80522918701px'],
            ["subproperty", "textShadow.color", 'rgba(0,51,47,0.65)']
         ],
         "${_timer}": [
            ["style", "-webkit-transform-origin", [1,1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [1,1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [1,1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [1,1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [1,1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-1'],
            ["transform", "rotateZ", '270deg'],
            ["style", "height", '93.65625px'],
            ["style", "top", '229px'],
            ["style", "left", '15.95px'],
            ["style", "width", '119.05455508475px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid236", tween: [ "style", "${_timer}", "-webkit-transform-origin", [1,1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [1,1]}], position: 0, duration: 0 },
            { id: "eid1356", tween: [ "style", "${_timer}", "-moz-transform-origin", [1,1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [1,1]}], position: 0, duration: 0 },
            { id: "eid1357", tween: [ "style", "${_timer}", "-ms-transform-origin", [1,1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [1,1]}], position: 0, duration: 0 },
            { id: "eid1358", tween: [ "style", "${_timer}", "msTransformOrigin", [1,1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [1,1]}], position: 0, duration: 0 },
            { id: "eid1359", tween: [ "style", "${_timer}", "-o-transform-origin", [1,1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [1,1]}], position: 0, duration: 0 },
            { id: "eid232", tween: [ "transform", "${_timer}", "rotateZ", '629deg', { fromValue: '270deg'}], position: 0, duration: 1000 },
            { id: "eid1059", tween: [ "transform", "${_timer}", "scaleY", '-1', { fromValue: '-1'}], position: 0, duration: 0 }         ]
      }
   }
},
"seconds_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      rect: ['2px','303px','99.7%','86px','auto','auto'],
      text: 'You have 30 seconds!',
      id: 'Text3',
      opacity: 0.43249760841837,
      align: 'center',
      font: ['adelle',70,'rgba(0,1,79,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '-85.35px'],
            ["style", "font-size", '70px'],
            ["color", "color", 'rgba(0,1,79,1.00)'],
            ["transform", "rotateZ", '-5deg'],
            ["style", "height", '86.433334350586px'],
            ["style", "opacity", '0.43249760841837'],
            ["style", "left", '2px'],
            ["style", "width", '99.65%']
         ],
         "${symbolSelector}": [
            ["style", "height", '174.74px'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid377", tween: [ "style", "${_Text3}", "top", '303.43px', { fromValue: '-85.35px'}], position: 645, duration: 1000, easing: "easeOutElastic" },
            { id: "eid446", tween: [ "style", "${_Text3}", "top", '-70.5px', { fromValue: '303.43px'}], position: 3250, duration: 750, easing: "easeOutElastic" },
            { id: "eid379", tween: [ "transform", "${_Text3}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 645, duration: 667 },
            { id: "eid380", tween: [ "transform", "${_Text3}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1312, duration: 167 },
            { id: "eid381", tween: [ "transform", "${_Text3}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1479, duration: 167 }         ]
      }
   }
},
"finalscore_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      rect: ['2px','303px','99.7%','86px','auto','auto'],
      align: 'center',
      id: 'timesup_txt',
      text: 'Time\'s up!',
      opacity: 0.43249760841837,
      font: ['adelle',70,'rgba(0,1,79,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['2px','303px','99.7%','86px','auto','auto'],
      align: 'center',
      id: 'yourscore_txt',
      text: 'Your score:',
      opacity: 0.43249760841837,
      font: ['adelle',70,'rgba(0,1,79,1.00)','normal','none','normal']
   },
   {
      font: ['adelle',100,'rgba(109,0,22,1.00)','700','none','normal'],
      rect: ['-4px','auto','100%','auto','auto','-346px'],
      type: 'text',
      align: 'center',
      id: 'fCount',
      text: '0',
      textShadow: ['rgba(38,38,38,0.507813)',7,7,27],
      transform: [{1:0,0:0},['-5deg']]
   },
   {
      id: 'playagain_sym',
      type: 'rect',
      rect: ['0px','410px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'playagain_sym',
      symbolName: 'playagain_sym'
   }   ]
   },
   states: {
      "Base State": {
         "${_playagain_sym}": [
            ["style", "top", '-238.95px'],
            ["style", "left", '0.24px'],
            ["transform", "rotateZ", '-5deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_fCount}": [
            ["subproperty", "textShadow.blur", '27px'],
            ["subproperty", "textShadow.offsetH", '7px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(167,35,62,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '-3.63px'],
            ["style", "font-size", '100px'],
            ["style", "top", '-172.37px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "width", '100%'],
            ["transform", "rotateZ", '-5deg'],
            ["subproperty", "textShadow.color", 'rgba(38,38,38,0.507813)'],
            ["style", "right", 'auto'],
            ["subproperty", "textShadow.offsetV", '7px']
         ],
         "${_yourscore_txt}": [
            ["style", "top", '174.85px'],
            ["style", "font-size", '70px'],
            ["color", "color", 'rgba(0,1,79,1)'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '86.433334350586px'],
            ["style", "opacity", '0'],
            ["style", "left", '1.83px'],
            ["style", "width", '99.65%']
         ],
         "${_timesup_txt}": [
            ["style", "top", '-130.71px'],
            ["style", "width", '99.65%'],
            ["style", "height", '86.433334350586px'],
            ["transform", "rotateZ", '-5deg'],
            ["color", "color", 'rgba(0,1,79,1.00)'],
            ["style", "opacity", '0.43249760841837'],
            ["style", "left", '1.83px'],
            ["style", "font-size", '70px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5500,
         autoPlay: false,
         timeline: [
            { id: "eid622", tween: [ "style", "${_timesup_txt}", "opacity", '0', { fromValue: '0.43249762058258057'}], position: 2645, duration: 855, easing: "easeOutElastic" },
            { id: "eid379", tween: [ "transform", "${_timesup_txt}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 645, duration: 667 },
            { id: "eid380", tween: [ "transform", "${_timesup_txt}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1312, duration: 167 },
            { id: "eid381", tween: [ "transform", "${_timesup_txt}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1479, duration: 167 },
            { id: "eid615", tween: [ "style", "${_yourscore_txt}", "opacity", '0.43249762058258057', { fromValue: '0'}], position: 2645, duration: 855, easing: "easeOutElastic" },
            { id: "eid512", tween: [ "transform", "${_fCount}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 3500, duration: 667 },
            { id: "eid513", tween: [ "transform", "${_fCount}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 4167, duration: 167 },
            { id: "eid514", tween: [ "transform", "${_fCount}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 4333, duration: 167 },
            { id: "eid780", tween: [ "transform", "${_playagain_sym}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 4500, duration: 667 },
            { id: "eid781", tween: [ "transform", "${_playagain_sym}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 5167, duration: 166 },
            { id: "eid782", tween: [ "transform", "${_playagain_sym}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 5333, duration: 167 },
            { id: "eid515", tween: [ "style", "${_fCount}", "top", '246px', { fromValue: '-172.37px'}], position: 3500, duration: 1000, easing: "easeOutElastic" },
            { id: "eid377", tween: [ "style", "${_timesup_txt}", "top", '174.85px', { fromValue: '-130.71px'}], position: 645, duration: 1000, easing: "easeOutElastic" },
            { id: "eid779", tween: [ "style", "${_playagain_sym}", "top", '380.87px', { fromValue: '-238.95px'}], position: 4500, duration: 1000, easing: "easeOutElastic" }         ]
      }
   }
},
"playagain_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0%','auto','100%','73px','auto','0px'],
      font: ['adelle',55,'rgba(75,75,75,1.00)','normal','none','normal'],
      textShadow: ['rgba(109,81,0,0.648438)',3,3,35],
      align: 'center',
      id: 'play',
      text: 'Play Again<br>',
      cursor: ['pointer'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_play}": [
            ["subproperty", "textShadow.blur", '35px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(75,75,75,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0.01%'],
            ["style", "width", '100%'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'center'],
            ["style", "height", '73.050003051758px'],
            ["subproperty", "textShadow.color", 'rgba(109,81,0,0.65)'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '55px']
         ],
         "${symbolSelector}": [
            ["style", "height", '73.050003051758px'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"blurryblue_sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['80px','33px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,252,189,1.00)'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,252,189,1.00)']
   },
   {
      rect: ['263px','42px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,252,189,1.00)'],
      id: 'EllipseCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,252,189,1.00)']
   },
   {
      rect: ['20px','61px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,252,189,1.00)'],
      id: 'EllipseCopy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,252,189,1.00)']
   },
   {
      rect: ['132px','48px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,252,189,1.00)'],
      id: 'EllipseCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,252,189,1.00)']
   },
   {
      rect: ['165px','48px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,252,189,1.00)'],
      id: 'EllipseCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,252,189,1.00)']
   },
   {
      rect: ['206px','86px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,252,189,1.00)'],
      id: 'EllipseCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,252,189,1.00)']
   },
   {
      rect: ['100px','74px','6px','6px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(255,252,189,1.00)'],
      id: 'EllipseCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',0,0,9,6,'rgba(255,252,189,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,252,189,1.00)'],
            ["subproperty", "boxShadow.blur", '9px'],
            ["style", "opacity", '1'],
            ["style", "left", '80.18px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '33px'],
            ["subproperty", "boxShadow.color", 'rgba(255,252,189,1.00)'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.offsetV", '0px']
         ],
         "${_EllipseCopy2}": [
            ["color", "background-color", 'rgba(255,252,189,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,252,189,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '132.43px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '48px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '9px']
         ],
         "${_EllipseCopy4}": [
            ["color", "background-color", 'rgba(255,252,189,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,252,189,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '206.49px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '86.3px'],
            ["subproperty", "boxShadow.blur", '9px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '6px']
         ],
         "${symbolSelector}": [
            ["style", "height", '106px'],
            ["style", "width", '286px']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(255,252,189,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,252,189,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '263.18px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '42.18px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '9px']
         ],
         "${_EllipseCopy5}": [
            ["color", "background-color", 'rgba(255,252,189,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,252,189,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '165.18px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '48px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '9px']
         ],
         "${_EllipseCopy6}": [
            ["color", "background-color", 'rgba(255,252,189,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,252,189,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '20.34px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '60.5px'],
            ["subproperty", "boxShadow.blur", '9px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '6px']
         ],
         "${_EllipseCopy3}": [
            ["color", "background-color", 'rgba(255,252,189,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,252,189,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '99.97px'],
            ["style", "width", '5.8250007629395px'],
            ["style", "top", '73.98px'],
            ["subproperty", "boxShadow.blur", '9px'],
            ["style", "height", '5.8250007629395px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2842,
         autoPlay: true,
         timeline: [
            { id: "eid224", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 671 },
            { id: "eid229", tween: [ "style", "${_EllipseCopy5}", "opacity", '0.9934231505102', { fromValue: '0.000000'}], position: 1171, duration: 671 },
            { id: "eid230", tween: [ "style", "${_EllipseCopy5}", "opacity", '0.9934231505102', { fromValue: '0.9934231505102'}], position: 1842, duration: 0 },
            { id: "eid226", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 1342, duration: 671 },
            { id: "eid227", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 2013, duration: 671 },
            { id: "eid214", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 186, duration: 671 },
            { id: "eid215", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 857, duration: 671 },
            { id: "eid210", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 671 },
            { id: "eid211", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 671, duration: 671 },
            { id: "eid220", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 857, duration: 671 },
            { id: "eid221", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 1528, duration: 671 },
            { id: "eid222", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 671 },
            { id: "eid223", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 2171, duration: 671 },
            { id: "eid218", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 671, duration: 671 },
            { id: "eid219", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 1342, duration: 671 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-127901775");
