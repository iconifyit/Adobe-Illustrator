//==================================================HOBO SWATCHES by Vasily ===========================================//
// BETA
/**
* @@@BUILDINFO@@@ Hobo Swatches_v1.jsx !Version! Sat Jan 18 2014 22:36:40 GMT-0600
*/


function swatchPalette(){
//===================================================Icon Resources========================//
var infoBtnSrc='({total:2, '+
'shape_1:{fillColor:[0.11, 0.18, 1], name:"", tag:"", strokeColor:null, pathPoints:[10, 3, 5, 5], ellipsePath:true, closed:true}, '+
'shape_0:{fillColor:[0.11, 0.18, 1], name:"", tag:"", strokeColor:null, pathPoints:[[15, 15], [15, 11], [18, 11], [18, 9], [13, 9], [8, 9], [8, 11], [11, 11], [11, 15], [7, 15], [7, 17], [19, 17], [19, 15]], ellipsePath:false, closed:true}})';
var addBtnSrc='({total:1, '+
'group_0:{'+
'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0, 0.14, 1], pathPoints:[[19, 9], [14, 9], [14, 4], [12, 4], [12, 9], [7, 9], [7, 11], [12, 11], [12, 16], [14, 16], [14, 11], [19, 11]], ellipsePath:false, closed:true, strokeWidth:2}, '+
'shape_0:{fillColor:[1, 1, 0], name:"", tag:"", strokeColor:null, pathPoints:[[19, 9], [14, 9], [14, 4], [12, 4], [12, 9], [7, 9], [7, 11], [12, 11], [12, 16], [14, 16], [14, 11], [19, 11]], ellipsePath:false, closed:true}, total:2}})';
var rmvBtnSrc='({total:2, '+
'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0, 0.22, 0], pathPoints:[[20, 9], [6, 9], [6, 11], [20, 11]], ellipsePath:false, closed:true, strokeWidth:3}, '+
'shape_0:{fillColor:[0.27, 1, 0], name:"", tag:"", strokeColor:null, pathPoints:[[20, 9], [6, 9], [6, 11], [20, 11]], ellipsePath:false, closed:true}})';
var rstBtnSrc='({total:2, '+
'group_1:{'+
'shape_1:{fillColor:[1, 0, 0], name:"", tag:"", strokeColor:[0.14, 0.12, 0.13], pathPoints:[45, 4, 12, 12], ellipsePath:true, closed:true, strokeWidth:2}, '+
'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.14, 0.12, 0.13], pathPoints:[[51, 12], [51, 2]], ellipsePath:false, closed:false, strokeWidth:3}, total:2}, '+
'group_0:{'+
'shape_7:{fillColor:null, name:"", tag:"", strokeColor:[0.75, 0.36, 0], pathPoints:[[5, 16], [5, 5], [11, 5], [11, 10], [7, 10], [12, 15]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_6:{fillColor:null, name:"", tag:"", strokeColor:[0.75, 0.36, 0], pathPoints:[[20, 5], [15, 5], [15, 15], [19, 15]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_5:{fillColor:null, name:"", tag:"", strokeColor:[0.75, 0.36, 0], pathPoints:[[14, 10], [18, 10]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_4:{fillColor:null, name:"", tag:"", strokeColor:[0.75, 0.36, 0], pathPoints:[[34, 5], [29, 5], [29, 15], [34, 15]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_3:{fillColor:null, name:"", tag:"", strokeColor:[0.75, 0.36, 0], pathPoints:[[29, 10], [32, 10]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.75, 0.36, 0], pathPoints:[[21, 15], [26, 15], [26, 10], [22, 10], [22, 5], [27, 5]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.75, 0.36, 0], pathPoints:[[39, 16], [39, 5]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.75, 0.36, 0], pathPoints:[[35, 5], [42, 5]], ellipsePath:false, closed:false, strokeWidth:2}, total:8}})';
var labModelSrc='({total:3, '+
'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[1, 1, 1], pathPoints:[[4, 2], [4, 8], [7, 8]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0, 1, 1], pathPoints:[[12, 3], [12, 8], [9, 8], [9, 5], [12, 5]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[1, 1, 0], pathPoints:[[15, 2], [15, 8], [18, 8], [18, 5], [15, 5]], ellipsePath:false, closed:false, strokeWidth:2}})';
var cmykModelSrc='({total:4, '+
'shape_3:{fillColor:[0, 1, 1], name:"", tag:"", strokeColor:null, pathPoints:[[2, 9], [5, 9], [5, 8], [3, 8], [3, 3], [5, 3], [5, 2], [2, 2]], ellipsePath:false, closed:true}, '+
'shape_2:{fillColor:[1, 0, 1], name:"", tag:"", strokeColor:null, pathPoints:[[10, 3], [9, 3], [9, 4], [8, 4], [8, 3], [7, 3], [7, 2], [6, 2], [6, 3], [6, 5], [6, 9], [7, 9], [7, 5], [8, 5], [8, 6], [9, 6], [9, 5], [10, 5], [10, 9], [11, 9], [11, 2], [10, 2]], ellipsePath:false, closed:true}, '+
'shape_1:{fillColor:[1, 1, 0], name:"", tag:"", strokeColor:null, pathPoints:[[16, 2], [16, 3], [15, 3], [15, 4], [14, 4], [14, 3], [13, 3], [13, 2], [12, 2], [12, 4], [13, 4], [13, 5], [14, 5], [14, 9], [15, 9], [15, 5], [16, 5], [16, 4], [17, 4], [17, 2]], ellipsePath:false, closed:true}, '+
'group_0:{'+
'shape_4:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[19, 5], [19, 2], [18, 2], [18, 9], [19, 9], [19, 6], [20, 6], [20, 5]], ellipsePath:false, closed:true}, '+
'shape_3:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[20, 8], [21, 8], [21, 6], [20, 6]], ellipsePath:false, closed:true}, '+
'shape_2:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[22, 9], [22, 8], [21, 8], [21, 9]], ellipsePath:false, closed:true}, '+
'shape_1:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[21, 3], [20, 3], [20, 5], [21, 5]], ellipsePath:false, closed:true}, '+
'shape_0:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[22, 2], [21, 2], [21, 3], [22, 3]], ellipsePath:false, closed:true}, total:5}})';
var rgbModelSrc='({total:5, '+
'shape_4:{fillColor:[1, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[2, 2], [2, 9], [3, 9], [3, 3], [5, 3], [5, 5], [3, 5], [3, 7], [4, 7], [4, 6], [6, 6], [6, 2]], ellipsePath:false, closed:true}, '+
'shape_3:{fillColor:[1, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[5, 8], [5, 7], [4, 7], [4, 8]], ellipsePath:false, closed:true}, '+
'shape_2:{fillColor:[1, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[6, 9], [6, 8], [5, 8], [5, 9]], ellipsePath:false, closed:true}, '+
'shape_1:{fillColor:[0, 1, 0], name:"", tag:"", strokeColor:null, pathPoints:[[7, 9], [11, 9], [11, 6], [9, 6], [9, 7], [10, 7], [10, 8], [8, 8], [8, 3], [10, 3], [10, 4], [11, 4], [11, 2], [7, 2]], ellipsePath:false, closed:true}, '+
'shape_0:{fillColor:[0, 0, 1], name:"", tag:"", strokeColor:null, pathPoints:[[13, 5], [13, 3], [15, 3], [15, 5], [16, 5], [16, 2], [12, 2], [12, 9], [16, 9], [16, 6], [15, 6], [15, 8], [13, 8], [13, 6], [15, 6], [15, 5]], ellipsePath:false, closed:true}})';
var grayModelSrc='({total:7, '+
'shape_6:{fillColor:[0.57, 0.58, 0.59], name:"", tag:"", strokeColor:null, pathPoints:[[7, 2], [7, 9], [8, 9], [8, 3], [10, 3], [10, 5], [8, 5], [8, 7], [9, 7], [9, 6], [11, 6], [11, 2]], ellipsePath:false, closed:true}, '+
'shape_5:{fillColor:[0.57, 0.58, 0.59], name:"", tag:"", strokeColor:null, pathPoints:[[10, 8], [10, 7], [9, 7], [9, 8]], ellipsePath:false, closed:true}, '+
'shape_4:{fillColor:[0.57, 0.58, 0.59], name:"", tag:"", strokeColor:null, pathPoints:[[11, 9], [11, 8], [10, 8], [10, 9]], ellipsePath:false, closed:true}, '+
'shape_3:{fillColor:[0.82, 0.82, 0.83], name:"", tag:"", strokeColor:null, pathPoints:[[2, 9], [6, 9], [6, 6], [4, 6], [4, 7], [5, 7], [5, 8], [3, 8], [3, 3], [5, 3], [5, 4], [6, 4], [6, 2], [2, 2]], ellipsePath:false, closed:true}, '+
'shape_2:{fillColor:[0.35, 0.36, 0.38], name:"", tag:"", strokeColor:null, pathPoints:[[15, 3], [13, 3], [13, 2], [15, 2]], ellipsePath:false, closed:true}, '+
'shape_1:{fillColor:[0.35, 0.36, 0.38], name:"", tag:"", strokeColor:null, pathPoints:[[15, 3], [15, 5], [13, 5], [13, 3], [12, 3], [12, 9], [13, 9], [13, 6], [15, 6], [15, 9], [16, 9], [16, 3]], ellipsePath:false, closed:true}, '+
'shape_0:{fillColor:[0.2, 0.22, 0.24], name:"", tag:"", strokeColor:null, pathPoints:[[21, 2], [21, 3], [20, 3], [20, 4], [19, 4], [19, 3], [18, 3], [18, 2], [17, 2], [17, 4], [18, 4], [18, 5], [19, 5], [19, 9], [20, 9], [20, 5], [21, 5], [21, 4], [22, 4], [22, 2]], ellipsePath:false, closed:true}})';
var noteMarkSrc='({total:4, '+
'shape_3:{fillColor:[0.53, 0.33, 0.26], name:"", tag:"", strokeColor:[0.14, 0.12, 0.13], pathPoints:[[11, 21], [11, 14], [4, 14]], ellipsePath:false, closed:true, strokeWidth:1}, '+
'shape_2:{fillColor:[1, 0.97, 0.62], name:"", tag:"", strokeColor:[0.14, 0.12, 0.13], pathPoints:[[11, 21], [1, 21], [1, 14], [7, 14], [11, 19]], ellipsePath:false, closed:true, strokeWidth:1}, '+
'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.14, 0.12, 0.13], pathPoints:[[1, 17], [6, 17]], ellipsePath:false, closed:false, strokeWidth:1}, '+
'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.14, 0.12, 0.13], pathPoints:[[1, 19], [6, 19]], ellipsePath:false, closed:false, strokeWidth:1}})';
var okBtnSrc='({total:2, '+
'group_1:{'+
'shape_5:{fillColor:null, name:"", tag:"", strokeColor:[0.39, 0.31, 0], pathPoints:[[11, 5], [5, 5], [5, 15], [11, 15]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_4:{fillColor:null, name:"", tag:"", strokeColor:[0.39, 0.31, 0], pathPoints:[[28, 5], [22, 5], [22, 15], [28, 15]], ellipsePath:false, closed:true, strokeWidth:2}, '+
'shape_3:{fillColor:null, name:"", tag:"", strokeColor:[0.39, 0.31, 0], pathPoints:[[14, 4], [14, 15], [19, 15]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.39, 0.31, 0], pathPoints:[[45, 5], [40, 5], [40, 15], [45, 15]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.39, 0.31, 0], pathPoints:[[40, 10], [43, 10]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.39, 0.31, 0], pathPoints:[[31, 15], [36, 15], [36, 10], [32, 10], [32, 5], [37, 5]], ellipsePath:false, closed:false, strokeWidth:2}, total:6}, '+
'group_0:{'+
'shape_2:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:[0.57, 0.58, 0.59], pathPoints:[47, 2, 15, 15], ellipsePath:true, closed:true, strokeWidth:1}, '+
'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.93, 0.11, 0.14], pathPoints:[[51, 13], [58, 6]], ellipsePath:false, closed:false, strokeWidth:2}, '+
'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.93, 0.11, 0.14], pathPoints:[[58, 13], [51, 6]], ellipsePath:false, closed:false, strokeWidth:2}, total:3}})';
var addToDocBtnSrc='({total:5, '+
'shape_4:{fillColor:[1, 1, 0.59], name:"", tag:"", strokeColor:[0.14, 0.12, 0.13], pathPoints:[[22, 16], [13, 16], [13, 9], [17, 5], [22, 5]], ellipsePath:false, closed:true, strokeWidth:2}, '+
'shape_3:{fillColor:[0.14, 0.12, 0.13], name:"", tag:"", strokeColor:null, pathPoints:[[11, 13], [8, 13], [8, 4], [11, 4]], ellipsePath:false, closed:true}, '+
'shape_2:{fillColor:[0.14, 0.12, 0.13], name:"", tag:"", strokeColor:null, pathPoints:[[5, 10], [5, 7], [14, 7], [14, 10]], ellipsePath:false, closed:true}, '+
'shape_1:{fillColor:[1, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[13, 9], [6, 9], [6, 8], [13, 8]], ellipsePath:false, closed:true}, '+
'shape_0:{fillColor:[1, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[10, 5], [10, 12], [9, 12], [9, 5]], ellipsePath:false, closed:true}})';
//===================================================Basic Functions========================//
    var UIElements=[Window,Group,EditText,Panel];
    for(var i=0; i<UIElements.length; i++){
        UIElements[i].prototype.setBg=function(rgb){
            this.graphics.backgroundColor=this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR,[rgb[0],rgb[1],rgb[2]]);
        }
    }
    function round2(num){
        return Math.round(num*100)/100;
    }
    var env=ScriptUI.environment;
    
    function convertAppColor(src,dest,clrArr){
        return app.convertSampleColor(ImageColorSpace[src], clrArr, ImageColorSpace[dest], ColorConvertPurpose.defaultpurpose);
    }
    function currentTime(){
        var time=new Date();
        var hours=time.getHours();
        var minutes=time.getMinutes();
        var seconds=time.getSeconds();
        if(seconds<10){seconds='0'+seconds;}
        if(minutes<10){minutes='0'+minutes;}
        var ampm=function(){
            if(hours>12){
                hours-=12;
                return 'pm';
            } else {
                if(hours==0){hours=1;}
                return 'am';
            }
        }();
        return (hours)+":"+minutes+":"+seconds+" "+ampm;
    }
    function getUIRGB(type, clr){
        for(var x=0; x<clr.length; x++){
            clr[x]=clr[x]*1;
        }
        if(type=="RGB"){
            return [round2(clr[0]/255),round2(clr[1]/255),round2(clr[2]/255)]; 
        } else if(type=="CMYK"){
            var newArr=convertAppColor("CMYK","RGB",[clr[0],clr[1],clr[2],clr[3]]);
            return [round2(newArr[0]/255),round2(newArr[1]/255),round2(newArr[2]/255)];
        } else if(type=="GRAY"){
            var newArr=convertAppColor("GrayScale","RGB",[clr[0]]);
            return [round2(newArr[0]/255),round2(newArr[1]/255),round2(newArr[2]/255)];
        } else if(type=="LAB"){
            var newArr=convertAppColor("LAB","RGB",[clr[0],clr[1],clr[2]]);
            return [round2(newArr[0]/255),round2(newArr[1]/255),round2(newArr[2]/255)];
        } else {
            return [0.5,0.5,0.5];
        }
    }
//===================================================Advanced Functions========================//
    //===================================XML=============//
    function wrapCDATA(str, propNm){
        str = '<data>'+str+'</data>';
        str = str.replace(/(\<data\>)/g, '<'+propNm+'><![CDATA[');
        str = str.replace(/(\<\/data\>)/g,']]\>'+'</'+propNm+'>');
        return XML(str);
    }
    function stringXmlSafe(str){
        str=str.toString();
        str=str.replace(/&(?!(amp;|gt;|lt;|quot;|apos;))/g,"&amp;");
        str=str.replace(/</g,"&lt;");
        str=str.replace(/>/g,"&gt;");
        str=str.replace(/'/g,"&apos;");
        str=str.replace(/"/g,"&quot;");
        return str;
    }
    function getXmlSwatchesArr(xmlFile){
        var myFile=xmlFile;
        myFile.open('r');
        myFile.seek(0,0);
        var fileStr=myFile.read();
        myFile.close();
        var xmlObj=XML(fileStr);
        var swatchArr=[];
        for(var x=0, ln=xmlObj.children().length(); x<ln; x++){
            var sw={};
            var thisSw=xmlObj.children()[x];
            sw.name=thisSw.descendants("name").toString();
            sw.aiSwatchKind=thisSw.descendants("aiswatchkind").toString();
            var comp=thisSw.descendants("colorcomp");
            sw.colorComp={};
            sw.colorComp.mode=comp.descendants("mode").toString();
            sw.colorComp.comp=[];
            for(var y=0, ln_2=thisSw.descendants("colorcomp").descendants("colorvalues").children().length(); y<ln_2; y++){
                sw.colorComp.comp.push(thisSw.descendants("colorcomp").descendants("colorvalues").children()[y]*1);
            }
            sw.notes=thisSw.descendants("notes");
            sw.originDoc=thisSw.descendants("origindoc").toString();
            swatchArr.push(sw);
        }
        return swatchArr;
    }
    function getXmlSwatchesXML(swatchArr){
        XML.prettyIndent=4;
        var xmlBody=new XML('<swatches></swatches>');
        for(var i=0; i<swatchArr.length; i++){
            var thisSw=swatchArr[i];
            xmlBody.appendChild(new XML("<swatch></swatch>")); xmlBody.swatch[i].@order=i+1;
            xmlBody.swatch[i].appendChild(new XML("<name>"+stringXmlSafe(thisSw.name)+"</name>"));
            if(thisSw.name!='none'){
                if(thisSw.info && thisSw.info.plating){
                    thisSw.aiSwatchKind=thisSw.info.plating;
                    thisSw.colorComp.mode=thisSw.colorComp.typename;
                    thisSw.originDoc=thisSw.info.originDoc;
                    thisSw.notes=thisSw.info.notes;
                }
                xmlBody.swatch[i].appendChild(new XML("<aiswatchkind>"+stringXmlSafe(thisSw.aiSwatchKind)+"</aiswatchkind>"));
                xmlBody.swatch[i].appendChild(new XML("<colorcomp></colorcomp>"));
                xmlBody.swatch[i].colorcomp[0].appendChild(new XML("<mode>"+stringXmlSafe(thisSw.colorComp.mode)+"</mode>"));
                xmlBody.swatch[i].colorcomp[0].appendChild(new XML("<colorvalues></colorvalues>"));
                for(var j=0; j<thisSw.colorComp.comp.length; j++){
                    xmlBody.swatch[i].colorcomp[0].colorvalues[0].appendChild(new XML("<value>"+stringXmlSafe(thisSw.colorComp.comp[j])+"</value>"));
                }
                xmlBody.swatch[i].notes=wrapCDATA(thisSw.notes, 'notes');
                xmlBody.swatch[i].origindoc=stringXmlSafe(thisSw.originDoc);
            }
        }
        return xmlBody;
    }
    //===================================end XML=============//
    
    // gets type and color array from swatch in swatch palette - for BT
    function getAISwatchColor(processColorOrSpot,name){
        function round2(num){
            return Math.round(num*100)/100;
        }
        var result={type:null, name:null, colorArr:null, uiColor:null, plating:null, originDoc:null, creDt:null, rgbClr:null, cmykClr:null, grayClr:null, labClr:null};
        var clr=processColorOrSpot;
        result.name=name;
        if(clr=="[RGBColor]"){
            result.type="RGB"; result.colorArr=[round2(clr.red),round2(clr.green),round2(clr.blue)];
            result.uiColor=[clr.red/255,clr.green/255,clr.blue/255]; result.plating='Process';
        } else if(clr=="[CMYKColor]"){
            result.type="CMYK"; result.colorArr=[round2(clr.cyan),round2(clr.magenta),round2(clr.yellow),round2(clr.black)]; result.uiColor=function(){
                var newArr=convertAppColor("CMYK","RGB",[clr.cyan,clr.magenta,clr.yellow,clr.black]);
                return [newArr[0]/255,newArr[1]/255,newArr[2]/255,];
            }(); result.plating='Process';
        } else if(clr=="[GrayColor]"){
            result.type="GRAY"; result.colorArr=[round2(clr.gray)]; result.uiColor=function(){
                var newArr=convertAppColor("GrayScale","RGB",[clr.gray]);
                return [newArr[0]/255,newArr[1]/255,newArr[2]/255,];
            }(); result.plating='Process';
        } else if(clr=="[SpotColor]"){
            clr=clr.spot; 
            if(clr.colorType==ColorModel.SPOT){
                result.plating='Spot';
            } else if(clr.colorType==ColorModel.PROCESS){
                result.plating='GlobalProcess';
            } else if(clr.colorType==ColorModel.REGISTRATION){
                result.plating='Registration';
            } else {
                result.plating="Process";
            }
            var intClr=clr.getInternalColor();
            for(var i=0; i<intClr.length; i++){
                intClr[i]=round2(intClr[i]);
            }
            if(clr.spotKind==SpotColorKind.SPOTLAB){
                result.type="LAB"; result.colorArr=intClr; result.uiColor=function(){
                    var newArr=convertAppColor("LAB","RGB",[intClr[0],intClr[1],intClr[2]]);
                    return [newArr[0]/255,newArr[1]/255,newArr[2]/255,];
                }();
            } else if(clr.spotKind==SpotColorKind.SPOTRGB){
                result.type="RGB"; result.colorArr=intClr; result.uiColor=[intClr[0]/255,intClr[1]/255,intClr[2]/255];
            } else if(clr.spotKind==SpotColorKind.SPOTCMYK){
                result.type="CMYK"; result.colorArr=intClr; result.uiColor=function(){
                    var newArr=convertAppColor("CMYK","RGB",[intClr[0],intClr[1],intClr[2],intClr[3]]);
                    return [newArr[0]/255,newArr[1]/255,newArr[2]/255,];
                }();
            }
        }
        var colorMode=result.type;
        if(colorMode=="GRAY"){
            colorMode="GrayScale";
        }
        var altClrs=[
            result.rgbClr=convertAppColor(colorMode, "RGB", result.colorArr),
            result.cmykClr=convertAppColor(colorMode, "CMYK", result.colorArr),
            result.grayClr=convertAppColor(colorMode, "GrayScale", result.colorArr),
            result.labClr=convertAppColor(colorMode, "LAB", result.colorArr),
        ];
        for(var c=0; c<altClrs.length; c++){
            for(var d=0; d<altClrs[c].length; d++){
                altClrs[c][d]=round2(altClrs[c][d]);
            }
        }
        result.originDoc=app.activeDocument.name;
        result.creDt=currentTime();
        return result;
    }

    function drawPath(shp, canvas){
        var thisShp=shp;
        if(thisShp.ellipsePath!=true){
            var vectorPts=thisShp.pathPoints;
            canvas.newPath(); canvas.moveTo(thisShp.pathPoints[0][0],thisShp.pathPoints[0][1]);
            for(var j=0; j<vectorPts.length; j++){
                var thisAnchor=vectorPts[j];
                var x=thisAnchor[0], y=thisAnchor[1];
                canvas.lineTo(x,y);
            }
            if(thisShp.closed==true){
                canvas.closePath();
            }
        } else {
            var cirPts=thisShp.pathPoints;
            canvas.newPath();
            canvas.ellipsePath(round2(cirPts[0]), round2(cirPts[1]), round2(cirPts[2]), round2(cirPts[3]));
            canvas.closePath();
        }
        if(thisShp.fillColor!=null){
            var clr=thisShp.fillColor;
            var myBrush=canvas.newBrush(canvas.BrushType.SOLID_COLOR,clr);
            canvas.fillPath(myBrush);
        }
        if(thisShp.strokeColor!=null){
            var clr=thisShp.strokeColor;
            var myPen=canvas.newPen(canvas.PenType.SOLID_COLOR,[clr[0],clr[1],clr[2],1], thisShp.strokeWidth);
            canvas.strokePath(myPen);
        }
    }
    function drawImg(objString, canvasArea){
        // using drawPath();
        var obj=eval(objString.replace(/(^'|';$)/g,''));
        var canvas=canvasArea.graphics;
        var counter=obj.total;
        while(counter>=0){
            for(all in obj){
                if(all.match(/\d{1,2}$/g) && all.match(/\d{1,2}$/g)==counter){
                    var thisShp=obj[all];
                    if(all.match('group')){
                        var ctr=obj[all].total;
                        while(ctr>=0){
                            for(paths in obj[all]){
                                if(paths.match(/\d{1,2}$/g) && paths.match(/\d{1,2}$/g)==ctr){
                                    drawPath(obj[all][paths], canvas);
                                }
                            }
                        ctr--;
                        }
                    } else {
                        drawPath(thisShp, canvas);
                    }
                }
            }
        counter-=1;
        }  
    }
    function btnSkin(elem,aClr,w,h){
        var g=elem.graphics; var brush=g.newBrush(g.BrushType.SOLID_COLOR,aClr);
        g.newPath(); g.moveTo(1,1); g.lineTo(w-1,1); g.lineTo(w-1,h-1); g.lineTo(1,h-1); g.closePath(); g.fillPath(brush);
        var ltr=[aClr[0]*1.2,aClr[1]*1.2,aClr[2]*1.2];
        for(var c=0; c<ltr.length; c++){
            if(ltr[c]>1){
                ltr[c]=1;
            }
        }
        brush=g.newBrush(g.BrushType.SOLID_COLOR,ltr); g.newPath(); g.rectPath(0,0,w,h/2); g.fillPath(brush);
        var pen=g.newPen(g.PenType.SOLID_COLOR,[1,1,1,1],2);
        g.newPath(); g.moveTo(1,1); g.lineTo(w-1,1); g.lineTo(w-1,h-1); g.lineTo(1,h-1); g.closePath();
        g.strokePath(pen);
    }
    function createAltDisp(swObj, uiParent){
        var altClrs=swObj.info.altClrs;
        var modes=['CMYK','RGB','LAB','GRAY'];
        for(var m=0; m<modes.length; m++){
            if(swObj.colorComp.typename!=modes[m]){
                var altG=uiParent.add('panel',undefined,modes[m]); altG.margins=[2,6,2,2];
                altG.size=[80,88]; altG.spacing=2; altG.alignChildren='left';
                if(modes[m]=="RGB"){
                    altG.add('statictext',undefined,'R: '+altClrs.rgbClr[0]);
                    altG.add('statictext',undefined,'G: '+altClrs.rgbClr[1]);
                    altG.add('statictext',undefined,'B: '+altClrs.rgbClr[2]);
                } else if(modes[m]=="CMYK"){
                    altG.add('statictext',undefined,'C: '+altClrs.cmykClr[0]);
                    altG.add('statictext',undefined,'M: '+altClrs.cmykClr[1]);
                    altG.add('statictext',undefined,'Y: '+altClrs.cmykClr[2]);
                    altG.add('statictext',undefined,'K: '+altClrs.cmykClr[3]);
                } else if(modes[m]=="LAB"){
                    altG.add('statictext',undefined,'L: '+altClrs.labClr[0]);
                    altG.add('statictext',undefined,'A: '+altClrs.labClr[1]);
                    altG.add('statictext',undefined,'B: '+altClrs.labClr[2]);
                } else if(modes[m]=="GRAY"){
                    altG.add('statictext',undefined,'Black: '+altClrs.grayClr[0]);
                }
            }
        }
    }
    function swatchInfoBox(swObj, uiParent){
        var baseG=uiParent; // usually a group
        var g_1=baseG.add("panel",undefined,"Swatch Info"); g_1.size=[340,340]; g_1.spacing=2; g_1.margins=[4,12,4,4];
        var nameD=g_1.add('edittext',undefined,swObj.name,{readonly:true}); nameD.characters=20; nameD.justify='center';
        if(swObj.name!='none'){
            var mode=swObj.colorComp.typename;
            var sep=g_1.add('panel'); sep.size=[310,2];
            var g_1_0=g_1.add('group');
                var txtG=g_1_0.add('group'); txtG.orientation='column'; txtG.spacing=2; txtG.margins=[2,2,2,2]; txtG.alignChildren='left';
                    txtG.add('statictext',undefined,'Color Model: '+swObj.colorComp.typename);
                    txtG.add('statictext',undefined,'Illustrator Swatch Type: '+swObj.info.plating);
                var swD=g_1_0.add('panel'); swD.size=[34,34]; swD.setBg(swObj.fillColor);
            var sep_1=g_1.add('panel'); sep_1.size=[310,2];
            var g_1_1=g_1.add('group'); g_1_1.spacing=2;
            if(mode=="RGB"){
                var rD=g_1_1.add('statictext',undefined,'Red: '+swObj.colorComp.comp[0]+','); 
                var gD=g_1_1.add('statictext',undefined,'Green: '+swObj.colorComp.comp[1]+',');
                var bD=g_1_1.add('statictext',undefined,'Blue: '+swObj.colorComp.comp[2]);
            } else if(mode=="CMYK"){
                var cD=g_1_1.add('statictext',undefined,'Cyan: '+swObj.colorComp.comp[0]+',');
                var mD=g_1_1.add('statictext',undefined,'Magenta: '+swObj.colorComp.comp[1]+',');
                var yD=g_1_1.add('statictext',undefined,'Yellow: '+swObj.colorComp.comp[2]+',');
                var kD=g_1_1.add('statictext',undefined,'Black: '+swObj.colorComp.comp[3]);
            } else if(mode=="LAB"){
                var lD=g_1_1.add('statictext',undefined,'Luminance: '+swObj.colorComp.comp[0]+',');
                var aD=g_1_1.add('statictext',undefined,'a: '+swObj.colorComp.comp[1]+',');
                var bD=g_1_1.add('statictext',undefined,'b: '+swObj.colorComp.comp[2]);
            } else if(mode=="GRAY"){
                var gD=g_1_1.add('statictext',undefined,'Gray-Scale Black: '+swObj.colorComp.comp[0]);
            }
            var g_1_2=g_1.add('group');
            createAltDisp(swObj, g_1_2);
            var sep_2=g_1.add('panel'); sep_2.size=[310,2];
            var originDocG=g_1.add('group'); originDocG.orientation='row';
                var originDocH=originDocG.add('statictext',undefined,"Originating Document");
                var originDocE=originDocG.add('edittext',undefined,swObj.info.originDoc,{readonly:true}); originDocE.characters=18;
            var g_1_3=g_1.add('panel',undefined,'Notes'); g_1_3.margins=[2,8,2,2]; g_1_3.spacing=2;
                var notesE=g_1_3.add('edittext',undefined,'',{readonly:true, multiline:true}); notesE.size=[310,60];
                if(swObj.info && swObj.info.notes && swObj.info.notes!=''){
                    notesE.text=swObj.info.notes;
                }
                var notesBtnG=g_1_3.add('group');
                    var viewBigBtn=notesBtnG.add('button',undefined,"View Big");
                    var editBtn=notesBtnG.add('button',undefined,"Edit Notes");
                    var clearBtn=notesBtnG.add('button',undefined,"Clear Notes");
            viewBigBtn.onClick=function(){
                if(notesE.text!=''){
                    var notesW=new Window('dialog',"Notes in a bigger window:"); notesW.margins=[4,4,4,4];
                    var bignotesE=notesW.add('edittext',undefined,notesE.text,{multiline:true, readonly:true}); bignotesE.size=[300,360];
                    var closeNotes=notesW.add('button',undefined,"Ok");
                    notesW.show();
                } else {
                    alert("There are no notes here.");
                }
            }
            editBtn.onClick=function(){
                var editResult=function(){
                    var newNotes=null;
                    var w=new Window('dialog','Edit Notes');
                        var inst=w.add('statictext',undefined,"Tip: use Ctrl+Return to enter in a carriage-return.");
                        var editE=w.add('edittext',undefined,notesE.text,{multiline:true}); editE.size=[310,160]; editE.active=true;
                        var btnG=w.add('group');
                            var okBtn=btnG.add('button',undefined,'Set Notes (OK)');
                            var cclBtn=btnG.add('button',undefined,'Cancel');
                    okBtn.onClick=function(){
                        if(editE.text.replace(/\s/g)!=''){
                            newNotes=editE.text;
                        } else {
                            newNotes='';
                        }
                        w.close();
                    }
                    w.show();
                    return newNotes;
                }();
                if(editResult!=null){
                    notesE.text=editResult;
                    swObj.info.notes=editResult;
                    swObj.noteChange=currentTime();
                }
            }
            clearBtn.onClick=function(){
                if(confirm("Are you sure you want to clear the notes?")==true){
                    notesE.text='';
                    swObj.info.notes='';
                    swObj.noteChange=currentTime();
                }
            }
        }
    }
    function infoWindow(SESSION){ //======================================MINI UI
        var noteChange;
        var userChoice={showMode:SESSION.options.showMode, showNotes:SESSION.options.showNotes, noteChange:false};
        var swatchBox=function(){
            if(SESSION.selection.length==0){
                return null;
            } else if(SESSION.selection.length==1){
                return SESSION.selection[0];
            } else if(SESSION.selection.length>1){
                return "--Multiple Selection--";
            }
        }();
        var w=new Window('dialog',"Swatch Info & Preferences"); w.margins=[4,4,4,4];
            var g_0=w.add('group'); g_0.orientation='column'; g_0.spacing=4;
                var g_0_1=g_0.add("group");
                if(swatchBox!=null){
                    if(swatchBox=="--Multiple Selection--"){ // Multi
                        var msg=g_0_1.add('statictext',undefined,swatchBox);
                    } else { //Single
                        if(swatchBox.name!='none'){
                            noteChange=swatchBox.noteChange;
                            swatchInfoBox(swatchBox, g_0_1);
                        } else {
                            var msg=g_0_1.add('statictext',undefined,"Empty Cell");
                        }
                    }
                } else { // NONE
                    //var msg=g_0_1.add('statictext',undefined,"NONE");
                }
                var g_0_1=g_0.add("panel",undefined,"Main Window Prefrences"); g_0_1.size=[340,44]; g_0_1.orientation='column';
                    var boxGrp=g_0_1.add('group');
                        var modelBx=boxGrp.add('checkbox',undefined,"Show Color Mode"); modelBx.value=SESSION.options.showMode;
                        var noteBx=boxGrp.add('checkbox',undefined,"Show Note Marker"); noteBx.value=SESSION.options.showNotes;
                var g_0_2=g_0.add("panel",undefined,"Persistence Options"); g_0_2.size=[340,54];
                    var saveBtn=g_0_2.add('button',undefined,"Save Current Session");
            var okBtn=w.add('button',undefined,'Ok'); okBtn.size=[340,20]; okBtn.margins=[0,0,0,0];
            okBtn.onClick=function(){
                w.close();
            }
            saveBtn.onClick=function(){
                var swcs=SESSION.swatchBoxes, swcsLn=SESSION.swatchBoxes.length;
                var dir=SESSION.presetFolder;
                var saveFl=File(dir+"/HoboSwatchSession.xml");
                var blank=function(){
                    for(var s=0; s<swcsLn; s++){
                        if(swcs[s].name!='none'){
                            return false;
                        }
                    }
                    return true;
                }();
                var go=false;
                if(blank==true){
                    if(confirm('Set saved session to all blanks?',true,'Confirm this action:')==true){
                        go=true;
                    }
                } else if(confirm('Save current session?',true,'Confirm this action:')==true){
                    go=true;
                }
                if(go==true){
                    if(!dir.exists){
                        dir.create();
                    }
                    saveFl.open('w');
                    saveFl.write('<?xml version="1.0"?>\r'+getXmlSwatchesXML(swcs));
                    saveFl.close();
                    if(saveFl.exists){
                        alert("Successfully Saved in: "+decodeURI(saveFl),'SUCCESS!');
                    } else {
                        alert("Sorry, "+decodeURI(saveFl)+"'s save operation was NOT successful!",'Failure... Horrible abysmal failure. :\'(');
                    }
                }
            }
        w.show();
        userChoice.showMode=modelBx.value;
        userChoice.showNotes=noteBx.value;
        userChoice.noteChange=function(){
            if(swatchBox!=null && (swatchBox.noteChange != noteChange)){
                return true;
            }
            return false;
        }();
        return userChoice;
    }
//===================================================For Bridge Talk========================//
    function asSourceString(func, withArgs){
        if(withArgs!=undefined && withArgs==true){
            return func.toSource().toString().replace("(","").replace(/\)$/,"");
        } else {
            return func.toSource().toString().replace("(function "+func.name+"(){","").replace(/}\)$/,"");
        }
    }
    function sendBTmsg(func, updateObj, resultFunc, resultFuncArgs){
        if(updateObj==undefined){updateObj={self: 'nothing'}};
        var updateObjName=updateObj.self;
        if(updateObjName!=undefined){
            var bt=new BridgeTalk;
            bt.target='illustrator';
            var btMsg=asSourceString(func);
            for(all in updateObj){
                if(all!='self'){
                    var rx=new RegExp(updateObjName+'\\.'+all,'g');
                    btMsg=btMsg.replace(rx,updateObj[all]);
                }
            }
            bt.body=btMsg;
            //$.write(btMsg);
            if(resultFunc!=undefined){
                bt.onResult=function(result){
                    resultFunc(result.body, resultFuncArgs);
                }
            }
            bt.send();
        } else {
            $.writeln("Error, function 'sendBTmsg(func, updateOb)': the update object should have a 'self' property, indentifying its' name.");
        }
    }
    function doNothing(){
        var nothing=function(){
            return;
        }()
    }
    function initSwatch(SESSION, sw, name, mode, clrArr, uiClr, info){ // Result of getting document swatches.
        sw.fillColor=uiClr;
        sw.name=name;
        if(mode=="RGB" || mode=="LAB"){
            sw.colorComp={typename:ColorComp[mode].typename,comp:[clrArr[0],clrArr[1],clrArr[2]]};
        } else if(mode=="CMYK"){
            sw.colorComp={typename:ColorComp[mode].typename,comp:[clrArr[0],clrArr[1],clrArr[2],clrArr[3]]};
        } else if(mode=="GRAY"){
            sw.colorComp={typename:ColorComp[mode].typename,comp:[clrArr[0]]};
        }
        sw.colorComp.name=sw.name;
        SESSION.nameDisplay.text=sw.name;
        sw.info=info;
        sw.addDrawPhase(sw.coloredState);
        if(info.plating=="Spot"){
            sw.addDrawPhase(sw.spotMark);
        } else if(info.plating=="GlobalProcess"){
            sw.addDrawPhase(sw.globalMark);
        }
        if(SESSION.options.showMode==true){
            sw.addDrawPhase(sw[mode+'Model']);
        }
        if(SESSION.options.showNotes==true && sw.info && sw.info.notes!=''){
            sw.addDrawPhase(sw.noteMark);
        }
        if(sw.selected==true){
            sw.removeDrawPhase(sw.selectedMark);
            sw.addDrawPhase(sw.selectedMark);
        }
        sw.refresh();
        sw.instantiated=true;
        sw.elem.helpTip=sw.getInfo();
    }
//=========<<<<<<<<<<<<<<<BT Function
    function bt_func(){
        var outcome={swatches:[],};
        if(app.documents.length>0){
            var doc=app.activeDocument;
            var swcs=doc.swatches.getSelected();
            if(swcs.length>0){
                BTOBJ.func_convertAppColor;
                BTOBJ.func_currentTime;
                BTOBJ.func_getAISwatchColor;
                for(var s=0; s<swcs.length; s++){
                    var thisSw=swcs[s];
                    if(thisSw.color!="[PatternColor]" && thisSw.color!="[GradientColor]"
                        && thisSw.name!="[Registration]" && thisSw.name!="[None]"){
                        outcome.swatches.push(getAISwatchColor(thisSw.color, thisSw.name));
                    }
                }
                outcome=outcome.toSource();
            } else {
                alert("Please select some swatches from the document's swatches palette.");
            }
        } else {
            alert("Please open a document with swatches.");
        }
    }
    function bt_func_rt(objString, args){ //puts swatches into palette.
        var docSws=eval(objString).swatches; var SESSION=args[0];
        for(var s=0; s<docSws.length; s++){
            var thisSw=docSws[s];
            if(SESSION.selection[s]!=undefined){
                if(thisSw.name!='none'){
                    var sw=SESSION.selection[s];
                    var info={plating: thisSw.plating, originDoc: thisSw.originDoc, 
                        altClrs:{rgbClr:thisSw.rgbClr,cmykClr:thisSw.cmykClr,labClr:thisSw.labClr,grayClr:thisSw.grayClr},
                        notes: '',
                    };
                    initSwatch(SESSION, sw, thisSw.name, thisSw.type, thisSw.colorArr, thisSw.uiColor, info);
                } else {
                    alert("Sorry, can't have a swatch by the name of '"+thisSw.name+"'");
                }
            }
        }
    }
    function bt_func_2(){
        BTOBJ.func_currentTime;
        var outcome={};
        if(app.documents.length>0){
            var doc=app.activeDocument;
            var swcs=eval(BTOBJ.sessionSelection);
            var nonConflictingSwatches=[];
            for(var s=0; s<swcs.length; s++){
                var thisSw=swcs[s];
                try{
                    doc.swatches.getByName(thisSw.name);
                    continue;
                } catch(e){
                    nonConflictingSwatches.push(thisSw);
                }
            }
            for(var s=0; s<nonConflictingSwatches.length; s++){
                var thisSw=nonConflictingSwatches[s];
                for(var t=0; t<nonConflictingSwatches.length; t++){
                    var thisOtherSw=nonConflictingSwatches[t];
                    if(t!=s && thisSw.name==thisOtherSw.name){
                        nonConflictingSwatches.splice(s,1);
                        s=0;
                        break;
                    }
                }
            }
            if(nonConflictingSwatches.length>0){
                var swG=doc.swatchGroups.add(); var d=new Date();
                swG.name="Added at "+((d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear()+" "+currentTime());
            }
            for(var s=0; s<nonConflictingSwatches.length; s++){
                var thisSw=nonConflictingSwatches[s];
                if(thisSw.plating!='Process'){
                    var dsw=doc.spots.add();
                    if(thisSw.colorComp.typename=="LAB"){
                        dsw.colorType=ColorModel.SPOT;
                    }
                    dsw.color=function(){
                        if(thisSw.colorComp.typename=="RGB"){
                            var c=new RGBColor();
                            c.red=thisSw.colorComp.comp[0];
                            c.green=thisSw.colorComp.comp[1];
                            c.blue=thisSw.colorComp.comp[2];
                            return c;
                        } else if(thisSw.colorComp.typename=="CMYK"){
                            var c=new CMYKColor();
                            c.cyan=thisSw.colorComp.comp[0];
                            c.magenta=thisSw.colorComp.comp[1];
                            c.yellow=thisSw.colorComp.comp[2];
                            c.black=thisSw.colorComp.comp[3];
                            return c;
                        } else if(thisSw.colorComp.typename=="LAB"){
                            var c=new LabColor();
                            c.l=thisSw.colorComp.comp[0];
                            c.a=thisSw.colorComp.comp[1];
                            c.b=thisSw.colorComp.comp[2];
                            return c;
                        } else if(thisSw.colorComp.typename=="GRAY"){
                            var c=new CMYKColor();
                            c.cyan=0;
                            c.magenta=0;
                            c.yellow=0;
                            c.black=thisSw.colorComp.comp[0];
                            return c;
                        }
                    }();
                    dsw.name=thisSw.name;
                    if(thisSw.plating=="Spot"){
                        dsw.colorType=ColorModel.SPOT;
                    } else if(thisSw.plating=="GlobalProcess"){
                        dsw.colorType=ColorModel.PROCESS;
                    }
                    swG.addSpot(dsw);
                } else {
                    var dsw=doc.swatches.add();
                    var color=function(){
                        if(thisSw.colorComp.typename=="RGB"){
                            var c=new RGBColor();
                            c.red=thisSw.colorComp.comp[0];
                            c.green=thisSw.colorComp.comp[1];
                            c.blue=thisSw.colorComp.comp[2];
                            return c;
                        } else if(thisSw.colorComp.typename=="CMYK"){
                            var c=new CMYKColor();
                            c.cyan=thisSw.colorComp.comp[0];
                            c.magenta=thisSw.colorComp.comp[1];
                            c.yellow=thisSw.colorComp.comp[2];
                            c.black=thisSw.colorComp.comp[3];
                            return c;
                        } else if(thisSw.colorComp.typename=="GRAY"){
                            var c=new GrayColor();
                            c.gray=thisSw.colorComp.comp[0];
                            return c;
                        }
                    }();
                    dsw.color=color;
                    dsw.name=thisSw.name;
                    swG.addSwatch(dsw);
                }
            }
            outcome=outcome.toSource();
        } else {
            alert("Please open a document with swatches.");
        }
    }
//===================================================Used Objects========================//
    var BTOBJ={
        self: "BTOBJ",
        doNothing: asSourceString(doNothing),
        func_getAISwatchColor: asSourceString(getAISwatchColor, true),
        func_convertAppColor: asSourceString(convertAppColor, true),
        func_currentTime: asSourceString(currentTime, true),
        func_round2: asSourceString(round2, true),
        sessionSelection: null,
    };
    var ColorComp={
        CMYK:{typename:'CMYK', name:'', comp: [0,0,0,0]},
        RGB:{typename:'RGB', name:'', comp: [0,0,0]},
        LAB:{typename:'LAB', name:'', comp: [0,0,0]},
        GRAY:{typename:'GRAY', name:'', comp: [0]},
        NULL:{typename:'NULL', name:'None', comp:null},
    };
    function SwatchBox(elem){
        this.uiOrder=elem.order;
        this.name='none';
        this.elem=elem;
        this.colorComp=ColorComp.NULL;
        this.elem.parentObj=this; // access constructor through UI element.
        this.selected=false;
        this.instantiated=false;
        this.refresh=function(){
            this.assignOnDraw(this.currentDrawingState);
            this.elem.hide();  this.elem.show();
        }
        this.elem.helpTip='none';
        this.fillColor=[0.4,0.4,0.4];
        this.selectedMark={id: 'selected',
            func:function(elem){
                var g = elem.graphics;
                var pen=g.newPen(g.PenType.SOLID_COLOR,[0,0,0,0.7],3);
                g.rectPath(2, 2, 19, 19); g.strokePath(pen);
                pen=g.newPen(g.PenType.SOLID_COLOR,[1,1,1,1],2);
                g.newPath(); g.moveTo(2,7); g.lineTo(2,2); g.lineTo(7,2); g.strokePath(pen);
                g.newPath(); g.moveTo(21,7); g.lineTo(21,2); g.lineTo(16,2); g.strokePath(pen);
                g.newPath(); g.moveTo(2,16); g.lineTo(2,21); g.lineTo(7,21); g.strokePath(pen);
                g.newPath(); g.moveTo(21,16); g.lineTo(21,21); g.lineTo(16,21); g.strokePath(pen);
            }
        };
        this.coloredState={id:'colored',
            func:function(elem){
                var g = elem.graphics;
                var pen=g.newPen(g.PenType.SOLID_COLOR,[0.7,0.7,0.7,1],1);
                var brush=g.newBrush(g.BrushType.SOLID_COLOR,elem.parentObj.fillColor);
                g.newPath(); g.moveTo(1,1); g.lineTo(22,1); g.lineTo(22,22); g.lineTo(1,22); g.closePath();
                g.fillPath(brush); g.strokePath(pen);
            }
        };
        this.noneState={id:'none',
            func:function(elem){
                var g = elem.graphics;
                var pen=g.newPen(g.PenType.SOLID_COLOR,[0.7,0.7,0.7,1],1);
                var brush=g.newBrush(g.BrushType.SOLID_COLOR,[0.4,0.4,0.4]);
                g.newPath(); g.moveTo(1,1); g.lineTo(22,1); g.lineTo(22,22); g.lineTo(1,22); g.closePath();
                g.strokePath(pen); g.fillPath(brush);
            }
        };
        this.spotMark={id:'spot',
            func:function(elem){
                var g = elem.graphics;
                var brush=g.newBrush(g.BrushType.SOLID_COLOR,[1,1,1]), pen=g.newPen(g.PenType.SOLID_COLOR,[0.7,0.7,0.7,1],1);
                g.newPath(); g.moveTo(22,13); g.lineTo(22,22); g.lineTo(13,22); g.closePath();
                g.fillPath(brush); g.strokePath(pen); 
                g.newPath();
                brush=g.newBrush(g.BrushType.SOLID_COLOR,[0,0,0]);
                g.ellipsePath(18,18,2,2); g.fillPath(brush);
            }
        };
        this.globalMark={id:'global',
            func:function(elem){
                var g = elem.graphics;
                var brush=g.newBrush(g.BrushType.SOLID_COLOR,[1,1,1]), pen=g.newPen(g.PenType.SOLID_COLOR,[0.7,0.7,0.7,1],1);
                g.newPath(); g.moveTo(22,13); g.lineTo(22,22); g.lineTo(13,22); g.closePath();
                g.fillPath(brush); g.strokePath(pen);
            }
        };
        this.noteMark={id:'notes',
            func:function(elem){
                drawImg(noteMarkSrc, elem);
            }
        };
        this.LABModel={id:'labmodel',
            func:function(elem){
                drawImg(labModelSrc, elem);
            }
        };
        this.GRAYModel={id:'graymodel',
            func:function(elem){
                drawImg(grayModelSrc, elem);
            }
        };
        this.CMYKModel={id:'cmykmodel',
            func:function(elem){
                drawImg(cmykModelSrc, elem);
            }
        };
        this.RGBModel={id:'rgbmodel',
            func:function(elem){
                drawImg(rgbModelSrc, elem);
            }
        };
        this.addDrawPhase=function(newPhase){
            for(var x=0, ln=this.currentDrawingState.length; x<ln; x++){
                if(this.currentDrawingState[x].id!=newPhase.id && x==ln-1){
                    this.currentDrawingState.push(newPhase);
                }
            }
        }
        this.removeDrawPhase=function(oldPhase){
            for(var x=this.currentDrawingState.length-1; x>-1; x--){
                if(this.currentDrawingState[x].id==oldPhase.id){
                    this.currentDrawingState.splice(x,1);
                }
            }
        }
        this.currentDrawingState=[this.noneState];
        this.assignOnDraw=function(aDrawings){
            this.elem.onDraw=function(){
                for(var d=0; d<aDrawings.length; d++){
                    aDrawings[d].func(this);
                }
            }
        }
        this.select=function(){
            this.removeDrawPhase(this.selectedMark);
            this.addDrawPhase(this.selectedMark);
            this.selected=true;
            this.refresh();
        }
        this.unselect=function(){
            this.removeDrawPhase(this.selectedMark);
            this.selected=false;
            this.refresh();
        }
        this.reset=function(){
            this.currentDrawingState=[this.noneState];
            this.info={};
            this.name='none';
            this.elem.helpTip='none';
            this.instantiated=false;
            this.colorComp=ColorComp.NULL;
            this.selected=false;
            this.refresh();
        }
        this.getInfo=function(){
            var msg='';
            msg+='Name: '+this.name+"\rColor Model: "+this.colorComp.typename+"\r";
            var clrCmp=this.colorComp;
            var cmp=function(){
                var cmp=clrCmp;
                if(cmp.typename=="RGB"|| cmp.typename=="LAB"){
                    return 'Color Values: '+cmp.comp[0]+" , "+cmp.comp[1]+" , "+cmp.comp[2];
                } else if(cmp.typename=="CMYK"){
                    return 'Color Values: '+cmp.comp[0]+" , "+cmp.comp[1]+" , "+cmp.comp[2]+" , "+cmp.comp[3];
                } else if(cmp.typename=="GRAY"){
                    return 'Color Values: '+cmp.comp[0];
                }
                return '';
            }();
            msg+=cmp;
            return msg;
        }
        this.info={};
        this.noteChange=currentTime();
    }
    var allSwatchBoxes=[];
    var SESSION={ //========================================================<<< SESSION object
        selection: [],
        options: {
           showMode: true,
           showNotes: true,
        },
        lastSelection: null,
        swatchBoxes: allSwatchBoxes,
        presetFolder: function(){
            var dir;
            if($.os.match('Windows')){
                dir=Folder("~\\Documents\\Adobe Scripts\\Hobo Swatches");
            } else {
                dir=Folder(app.path+"/Hobo Swatches");
            }
            return dir;
        }(),
    };
//===================================================UI Window========================//
    function ShowPalette(name){
        var w= new Window('palette',name,undefined,{closeButton:false}); w.margins=[1,1,1,1]; w.spacing=2; w.setBg([0.2,0.2,0.2]);
            var g_0=w.add('group'); g_0.orientation='column'; g_0.margins=[1,1,1,1]; g_0.spacing=1;
                var g_0_1=g_0.add('panel',undefined,'',{borderStyle:'sunken'}); g_0_1.size=[140,160]; g_0_1.margins=[0,1,1,0];
                g_0_1.orientation='row'; g_0_1.spacing=1; g_0_1.alignChildren='top';
                var swatchContainer=g_0_1.add('group'); swatchContainer.spacing=1;
                swatchContainer.size=[123,260]; swatchContainer.margins=[0,0,0,0]; swatchContainer.orientation='column';
                var swatchContObj={
                    swG_0: swatchContainer.add('group'),
                    swG_1: swatchContainer.add('group'),
                    swG_2: swatchContainer.add('group'),
                    swG_3: swatchContainer.add('group'),
                    swG_4: swatchContainer.add('group'),
                    swG_5: swatchContainer.add('group'),
                    swG_6: swatchContainer.add('group'),
                    swG_7: swatchContainer.add('group'),
                    swG_8: swatchContainer.add('group'),
                    swG_9: swatchContainer.add('group'),
                }
                for(all in swatchContObj){
                    swatchContObj[all].spacing=1;
                }
                for(var i=0; i<50; i++){// Setting up all 50 swatch slots.
                    var swP = swatchContObj[('swG_'+Math.floor((i/5)))].add('group'); swP.size=[24,24]; swP.order=i;
                    var thisSwatch=new SwatchBox(swP);
                    thisSwatch.assignOnDraw(thisSwatch.currentDrawingState);
                    thisSwatch.elem.addEventListener('mousedown',function(ev){
                        var subj=this.parentObj;
                        var keyState=env.keyboardState;
                        if(keyState.ctrlKey==false && keyState.shiftKey==false && keyState.metaKey==false && keyState.altKey==false){
                            nameD.text=subj.name;
                            subj.select();
                            SESSION.selection=[subj]; 
                            for(var j=0; j<allSwatchBoxes.length; j++){
                                var thisBox=allSwatchBoxes[j];
                                if(thisBox.selected==true && thisBox!=subj){
                                    thisBox.unselect();
                                }
                            }
                        } else if(keyState.shiftKey==true){
                            SESSION.nameDisplay.text=subj.name;
                            if(subj.selected==false){
                                subj.select();
                                SESSION.selection.push(subj);
                                SESSION.selection.sort(function(a,b){return a.uiOrder-b.uiOrder});
                            }
                            if(SESSION.lastSelection!=null){
                                if(ev.target.parentObj.uiOrder > SESSION.lastSelection.uiOrder){
                                    var indA = SESSION.lastSelection.uiOrder, indB = ev.target.parentObj.uiOrder;
                                } else {
                                    var indA = ev.target.parentObj.uiOrder, indB = SESSION.lastSelection.uiOrder;
                                }
                                for(var s=0; s<allSwatchBoxes.length; s++){
                                    if(s>indA && s<indB){
                                        var thisBox=allSwatchBoxes[s];
                                        if(thisBox.selected==false){
                                            thisBox.select();
                                            SESSION.selection.push(thisBox);
                                        }
                                    }
                                }
                            SESSION.selection.sort(function(a,b){return a.uiOrder-b.uiOrder});
                            }
                        } else if(keyState.ctrlKey==true || keyState.metaKey==true){
                            if(subj.selected==false){
                                nameD.text=subj.name;
                                subj.select();
                                SESSION.selection.push(subj);
                                SESSION.lastSelection=subj;
                            } else if(subj.selected==true){
                                subj.unselect();
                                for(var j=0; j<SESSION.selection.length; j++){
                                    var thisBox=SESSION.selection[j];
                                    if(thisBox==subj){
                                        SESSION.selection.splice(j,1);
                                        break;
                                    }
                                }
                            }
                        } else if(keyState.altKey==true && subj.selected==true && subj.name!='none'){
                            var infoDisp=function(){
                                var w=new Window('dialog',subj.name+" Swatch Info"); w.margins=[4,8,4,4]; w.spacing=2;
                                swatchInfoBox(subj, w);
                                var okBtn=w.add('button',undefined,'Ok'); okBtn.size=[340,22];
                                okBtn.onClick=function(){
                                    w.close();
                                };
                                w.show();
                            }();
                            if(subj.info.notes!='' && SESSION.options.showNotes==true){
                                for(var i=0; i<subj.currentDrawingState.length; i++){
                                    if(subj.currentDrawingState[i].id=='notes'){
                                        break;
                                    } else if(i==subj.currentDrawingState.length-1 && subj.currentDrawingState[i].id!='notes'){
                                        subj.addDrawPhase(subj.noteMark);
                                        subj.refresh();
                                    }
                                }
                            } else if(SESSION.options.showNotes==false || subj.info.notes==''){
                                for(var i=0; i<subj.currentDrawingState.length; i++){
                                    if(subj.currentDrawingState[i].id=='notes'){
                                        subj.removeDrawPhase(subj.currentDrawingState[i]);
                                        subj.refresh();
                                        break;
                                    }
                                }
                            }
                        }
                        if(SESSION.selection.length>1){
                            nameD.text="--Multi-Selection: "+SESSION.selection.length+"--"; SESSION.lastSelection=SESSION.selection[0];
                        } else if(SESSION.selection.length==1){
                            nameD.text=SESSION.selection[0].name; SESSION.lastSelection=SESSION.selection[0];
                        }  else if(SESSION.selection.length==0){
                            nameD.text=''; SESSION.lastSelection=null;
                        }
                    });
                    allSwatchBoxes.push(thisSwatch);
                }
                var g_0_1_scrl=g_0_1.add('scrollbar'); g_0_1_scrl.size=[10,152];
        var g_0_2=g_0.add('group'); g_0_2.indent=1;
            var nameD=g_0_2.add('edittext',undefined,'',{readonly:true}); nameD.size=[140,20]; nameD.setBg([1,1,1]);
            SESSION.nameDisplay=nameD;
        var btnG=g_0.add('group'); btnG.margins=[1,1,1,1]; btnG.spacing=2;
            var infoBtn=btnG.add('button',undefined,'I'); infoBtn.size=[26,20];
                infoBtn.helpTip='Get swatch info';
                infoBtn.onDraw=function(){
                    btnSkin(this,[0.9,0.8,0.3],26,20);
                    drawImg(infoBtnSrc, this);
                }
            var addToDocBtn=btnG.add('button',undefined,'T'); addToDocBtn.size=[26,20];
                addToDocBtn.helpTip='Add selected swatches to current document';
                addToDocBtn.onDraw=function(){
                    btnSkin(this,[0.3,0.8,0.9],26,20);
                    drawImg (addToDocBtnSrc, this)
                }
            var addBtn=btnG.add('button',undefined,'A'); addBtn.size=[26,20];
                addBtn.helpTip='Add swatch from current document to this palette';
                addBtn.onDraw=function(){
                    btnSkin(this,[0.4,0.8,0.4],26,20);
                    drawImg(addBtnSrc, this);
                }
            var rmvBtn=btnG.add('button',undefined,'R'); rmvBtn.size=[26,20];
                rmvBtn.helpTip='Remove current selected swatch from this palette';
                rmvBtn.onDraw=function(){
                    btnSkin(this,[0.6,0.2,0.3],26,20);
                    drawImg(rmvBtnSrc, this);
                }
        var btnG_2=g_0.add('group'); btnG_2.margins=[1,1,1,1]; btnG_2.spacing=2;
            var rstBtn=btnG_2.add('button',undefined,'Reset'); rstBtn.size=[65,20];
                rstBtn.helpTip='RESET all Hobo Swatches to "none"';
                rstBtn.onDraw=function(){
                    btnSkin(this,[1,0.6,0.2],65,20);
                    drawImg(rstBtnSrc,this);
                }
            var okBtn=btnG_2.add('button',undefined,'Close'); okBtn.size=[65,20];
                okBtn.helpTip='Close this palette';
                okBtn.onDraw=function(){
                    btnSkin(this,[0.8,0.2,0.2],65,20);
                    drawImg(okBtnSrc,this);
                }
        g_0_1_scrl.onChange=function(){ // Need both of them for mousewheels and clicks.
            swatchContainer.location=[0,1-(this.value/100*96)];
        }
        g_0_1_scrl.onChanging=function(){
            swatchContainer.location=[0,1-(this.value/100*96)];
        }
        addBtn.onClick=function(){
            if(SESSION.selection.length>0){
                sendBTmsg(bt_func, BTOBJ, bt_func_rt, [SESSION]);
                SESSION.nameDisplay.text=SESSION.selection[0].name;
            } else {
                alert("Please allocate cells to fill with your document swatches.");
            }
        }
        rmvBtn.onClick=function(){
            if(SESSION.selection.length>0){
                if(SESSION.selection.length<2){
                    var sw=SESSION.selection[0];
                    sw.reset(); sw.selected=true; sw.addDrawPhase(sw.selectedMark); sw.refresh; nameD.text=sw.name; sw.elem.helpTip=sw.name;
                } else {
                    for(var s=SESSION.selection.length-1; s>-1; s--){
                        var sw=SESSION.selection[s];
                        sw.reset(); sw.selected=true; sw.addDrawPhase(sw.selectedMark); sw.refresh; sw.elem.helpTip=sw.name;
                    }
                    nameD.text=sw.name;
                }
            }
        }
        infoBtn.onClick=function(){
            var sessionUpdate=infoWindow(SESSION);
            if(sessionUpdate.showMode!=SESSION.options.showMode || sessionUpdate.showNotes != SESSION.options.showNotes || sessionUpdate.noteChange==true){
                SESSION.options.showMode=sessionUpdate.showMode;
                SESSION.options.showNotes=sessionUpdate.showNotes;
                for(var s=allSwatchBoxes.length-1; s>-1; s--){
                    var thisBox=allSwatchBoxes[s];
                    var dState=thisBox.currentDrawingState; 
                    if(SESSION.options.showMode==false){
                        for(var c=dState.length-1; c>-1; c--){
                            if(dState[c].id.match('model')){
                                thisBox.removeDrawPhase(dState[c]);
                            }
                        }
                    } else {
                        for(var c=dState.length-1; c>-1; c--){
                            if(dState[c].id.match('model')){
                                thisBox.removeDrawPhase(dState[c]);
                            }
                        }
                        if(thisBox.colorComp.typename!="NULL"){
                            thisBox.addDrawPhase(thisBox[thisBox.colorComp.typename+"Model"]);
                        }
                    }
                    if(thisBox.info && thisBox.info.hasOwnProperty('notes')){
                        if(SESSION.options.showNotes==false || thisBox.info.notes==''){
                            for(var c=dState.length-1; c>-1; c--){
                                if(dState[c].id=='notes'){
                                    thisBox.removeDrawPhase(dState[c]);
                                }
                            }
                        } else if(SESSION.options.showNotes==true && thisBox.info.notes!=''){
                            for(var c=dState.length-1; c>-1; c--){
                                if(dState[c].id=='notes'){
                                    break;
                                } else if(dState[c].id!='notes' && c==0){
                                    thisBox.addDrawPhase(thisBox.noteMark);
                                }
                            }
                        }
                    }
                    thisBox.refresh();
                }
            }
        }
        rstBtn.onClick=function(){
            if(confirm('Are you sure you want to reset the whole Hobo Swatch palette?',true,'Confirm this action:')==true){
                for(var i=0; i<allSwatchBoxes.length; i++){
                    var thisBox=allSwatchBoxes[i];
                    thisBox.reset();
                }
                nameD.text='';
                SESSION.selection=[];
            }
        }

        addToDocBtn.onClick=function(){
            var validOnes=function(){
                var arr=[];
                for(var s=0; s<SESSION.selection.length; s++){
                    if(SESSION.selection[s].instantiated==true){
                        arr.push(SESSION.selection[s]);
                    }
                }
                return arr;
            }();
            if(validOnes.length>0){
                BTOBJ.sessionSelection=function(){
                    var arr=[];
                    for(var s=0; s<validOnes.length; s++){
                        var sw=validOnes[s];
                        arr.push({
                            name: sw.name, colorComp: sw.colorComp, plating: sw.info.plating,
                        });
                    }
                    return arr.toSource();
                }();
                sendBTmsg(bt_func_2, BTOBJ);
            } else {
                alert("Please select some existing swatches first.");
            }
        }
        okBtn.onClick=function(){
            if(confirm('Are you sure you want completely close the Hobo Swatch palette?',true,'Confirm this action:')==true){
                w.close();
            }
        }
        this.show=function(){w.show()};
    };
    var mainWindow = new ShowPalette('Hobo Swatches™');
    mainWindow.show();
    // Load from Preset XML on startup.
    var presetFile=File(SESSION.presetFolder+"/HoboSwatchSession.xml");
    if(presetFile.exists){
        try{
            var swXmlArr=getXmlSwatchesArr(presetFile);
            for(var i=0; i<swXmlArr.length; i++){
                if(allSwatchBoxes[i] && swXmlArr[i].name!='none'){
                    var thisSw=allSwatchBoxes[i], thisInfo=swXmlArr[i];
                    var colorMode=thisInfo.colorComp.mode.toString(), colorArr=thisInfo.colorComp.comp;
                    var altClrs=[
                        thisSw.rgbClr=convertAppColor(colorMode, "RGB", colorArr),
                        thisSw.cmykClr=convertAppColor(colorMode, "CMYK", colorArr),
                        thisSw.grayClr=convertAppColor(colorMode, "GrayScale", colorArr),
                        thisSw.labClr=convertAppColor(colorMode, "LAB", colorArr),
                    ];
                    for(var c=0; c<altClrs.length; c++){
                        for(var d=0; d<altClrs[c].length; d++){
                            altClrs[c][d]=round2(altClrs[c][d]);
                        }
                    }
                    initSwatch(SESSION, thisSw, thisInfo.name, thisInfo.colorComp.mode, 
                    thisInfo.colorComp.comp, getUIRGB(colorMode,colorArr),
                        {plating: thisInfo.aiSwatchKind,
                            originDoc: thisInfo.originDoc,
                            altClrs:{rgbClr:thisSw.rgbClr,cmykClr:thisSw.cmykClr,labClr:thisSw.labClr,grayClr:thisSw.grayClr},
                            notes: thisInfo.notes,
                        }
                    );
                    SESSION.selection=[];
                    SESSION.nameDisplay.text='';
                }
            }
        } catch(e){
            alert(e,'Uhoh!');
        }
    }
}
#target illustrator
#targetengine main
swatchPalette();
