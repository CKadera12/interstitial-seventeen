(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[136,193,86,95],[211,0,45,122],[0,193,134,179],[136,290,38,80],[0,0,209,191]]},
		{name:"index_atlas_NP_", frames: [[322,103,77,44],[322,0,97,101],[0,0,320,480]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.seventeenberries = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.seventeencranberries = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.seventeengreens = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.seventeenham = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.seventeenpie = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.seventeenspinach = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.seventeentable = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.seventeenturkey = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whiterectanglefadeone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgaKAmmMAAAhNLMA0VAAAMAAABNLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whiterectanglefadeone, new cjs.Rectangle(-167.4,-246.9,335,494), null);


(lib.whatsinour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWCHQgIgJAAgNQAAgNAIgIQAJgJANAAQALAAAJAJQAJAIAAANQAAANgJAJQgJAIgLABQgNgBgJgIgAgNAzQgEgGAAgOQAAgNAEgNQADgNAIgNIAIgPQAUggAAgUQAAgPgHgJQgIgIgNAAQgMAAgIAHQgHAGgEAQIAAABQgIAegQgBQgJABgFgHQgFgFAAgNQAAgXAXgRQAXgRAgAAQAiAAAVAQQAUARAAAcQAAAPgGANQgHAMgTARIgGAFQgSAPgGAQQgDAIAAALIgBAOQgCAHgCADQgDABgEAAQgJAAgEgFg");
	this.shape.setTransform(50.5,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6B9QgDgCAAgGIiGAAQgLAAgDgCQgDgCAAgFQAAgJAZgXIAYgXQAxgyAOgTQAMgVAAgTQAAgTgKgKQgKgMgQAAQgLABgKAFQgLAEgLALIgIAJQgKALgHAAQgGAAgDgDQgDgDAAgFQAAgGAEgHQACgGAHgGQAPgRAWgJQAUgKAXABQAjAAAVASQAWASAAAdQAAASgJARQgJARgVATIggAdIgkAhIgBADIgBACIABACIAFAAIA8AAIAPgCQAGgCADgEIAHgKQAIgOAIAAQAEAAADAEQADADAAAFQAAAKgCAKIgIAXQgGAPgFAHQgGAFgGAAQgEAAgCgDg");
	this.shape_1.setTransform(30,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAB7QgrAAgKgDQgJgDAAgHQAAgJAQgDQALgBAFgDIAFgEIACgJIABgbIABhZIAAgOIAAgLQAAgOgCgEQgDgEgHAAIgJAAIgJABQgGAAgDgCQgCgCAAgEQAAgGAFgEQAGgEAOgGQASgGAQgDQAOgEAJAAQAIAAAFADQAEADAAAGQAAAGgIAFIgCACQgDADgBAPIgBBJIABA1IABAiIACAJIAGAEIAPAEQAQACAAAJQAAAIgJADQgKADgmAAg");
	this.shape_2.setTransform(9.1,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BfQgJgCAAgJQAAgHAJgDIAFgCQAFgDACgHQADgGAAgOIgBgNIAAgQIAAgLQAAgjgCgLQgCgKgDgDIgJgDQgMgEAAgHQAAgEAEgDQADgEAJgDIAagIIARgEQAJAAADAaIABAEIABABQAKgQALgIQALgIAKAAQAOAAAIAIQAHAIABAOQgBANgFAIQgHAHgLABIgJgCIgJgGIgDgIQgDgEgCAAQgOAAgFASQgEASAAA6QAAARACAIQACAJAFACIAHADQAMADAAAJQAAAGgLADQgKAEgaAAQgdAAgKgEg");
	this.shape_3.setTransform(-19.3,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFBIQgcgcAAgrQAAgrAdgdQAdgdAqAAQAqAAAbAbQAaAbAAArQAAAsgdAeQgcAegpAAQgqAAgbgdgAgkg5QgMAQAAAaQAAAlAQAaQAQAaAXAAQATAAAMgQQALgQAAgbQABgkgRgaQgQgagXAAQgSAAgMAQg");
	this.shape_4.setTransform(-38,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2CKQgJgCAAgIQAAgGAJgDIAFgDQAEgCACgGQACgHAAgQIAAgTIAAhcIgVAAQgFgBgCgCQgCgCAAgFIAAgEQAAgFACgDQACgCAFAAIAUAAIgCgPIAAgNQAAgeASgQQARgRAfABQAWgBANALQAOAJABAQQAAAIgGAFQgEAFgKAAQgGAAgFgDQgFgCgDgFIgEgHQgHgPgLAAQgHAAgEAFQgFAFAAAHIAFAWQAEARAAANIAcAAQAEABACABQACACAAAGIAAAEQAAAFgCACQgCADgEAAIgcAAIAABiQAAAZACAHQABAIAEACIAHADQAMADAAAJQAAAGgKADQgJADgbAAQgdAAgJgDg");
	this.shape_5.setTransform(-52.7,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJB0QgKgDgHgGQgHgHgCgKQgEgLAAgdIAAhnIgSAAIgFgBIgBgFIAAgFQgBgGAVgRIAIgHIAHgHQAUgRAIAAIAEABQADACAAADIAAAkIArAAQAFAAACACQACACgBAFIAAAFQAAAFgCACQgCACgEAAIgnAAIgDACIgCAEIAABfQAAAZAFAHQADAGAMAAQAGAAAJgDIAOgDQAEAAADACQACADABAEQgBAKgQAKQgQAKgVAAQgLAAgJgDg");
	this.shape_6.setTransform(108.7,-13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBlIgUgFIgHAFIgFABIgEgBIgEgDQgGgGgGgPQgGgQABgOQAAgGADgEQADgEAFgBQAJAAAJAQIAIAMQAFAHAKAFQAKAEALAAQANAAAHgGQAHgHAAgKQAAgRgggPIgLgGQgdgOgLgMQgLgNAAgSQAAgaARgPQASgQAcAAIANAAIANADIAKgEIAGgBQAJABAJAPQAJAPAAAQQAAAHgCAFQgDADgGAAQgFAAgEgDQgEgEgGgKQgHgMgIgEQgIgFgLAAQgKAAgHAHQgGAFgBALQAAAJAHAGQAIAHAWAMIADABQA2AaAAAgQgBAagUATQgVARgeABg");
	this.shape_7.setTransform(93.3,-11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBbIgKgKIgIAEQgYAQgXAAQgdAAgRgRQgSgQAAgbQAAgeAXgRQAWgRApAAQAJAAAFACQAFADAAAIQAAALgNAAQgTAAgMAJQgMAJAAARQAAAPALAJQAKAJARAAQASAAAIgIQAIgIAAgVIAAhJQAAgQgIgKQgHgJgNAAQgJAAgIAFQgJADgHAJIgEAGQgMAOgNAAQgIAAgEgEQgFgGAAgIQAAgTAXgLQAWgNAjAAQAVAAAPAFQAQAGAIALQAGAIACALQADAMAAAcIAAA9QAAALACAFQABAGAEABIAGABQANAEAAAGQAAAJgNAIQgNAIgSAAQgIAAgKgKg");
	this.shape_8.setTransform(74.9,-11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BJQgcgdAAgpQAAgsAcgeQAdgdArAAQAlAAAWAVQAWAWAAAkQAAAMgEAEQgDADgPAAIhJAAQgHAAgDgDQgEgDAAgFQAAgFAEgDQADgDAHAAIAnAAIAKgBQACgCAAgEQAAgTgMgMQgNgNgRAAQgXAAgLAUQgLAUAAAcQAAAeAPAWQAQAWAXAAQAPAAAKgDQAJgEAKgGIAHgGQAJgHAGAAQAEAAADACQADADAAAEQAAAFgFAGQgFAHgIAHQgRAOgQAGQgPAGgTAAQgoAAgbgcg");
	this.shape_9.setTransform(54.2,-11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhhCKQgLgDAAgJQAAgHAKgEQAKgEACgDQADgEACgdIABhLIgBhHQgDgdgCgEQgBgDgLgEQgKgEAAgIQAAgIAJgCQAIgDAiAAIB1AAIAUgCIAKgDIAEACIAEADQAEAHADANQAEAOAAAJQAAAIgDAFQgEAFgFAAQgHAAgIgNIgGgJQgEgGgIgEQgJgDgNAAIgbAAQgRAAgKACQgJACgEAFQgDAEgCAMIgBAmIAAAPQAAAJABADQACACAFAAIAgAAQAPAAAGgEQAGgFACgMIABgDQADgVAJAAQAJAAADALQADAKAAAmQAAAkgCAKQgEAKgJAAQgJAAgDgUIgBgDQgCgMgGgFQgGgEgPAAIgfAAQgGAAgBADQgCADAAANIAAAOIABA3QABALAEADIAJAEQAMAFgBAHQAAAJgKADQgLAEgeAAQgfAAgKgEg");
	this.shape_10.setTransform(32.6,-15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+BJQgcgdAAgpQAAgsAcgeQAdgdArAAQAlAAAWAVQAWAWAAAkQAAAMgEAEQgDADgPAAIhJAAQgHAAgDgDQgEgDAAgFQAAgFAEgDQADgDAHAAIAnAAIAKgBQACgCAAgEQAAgTgMgMQgNgNgRAAQgXAAgLAUQgLAUAAAcQAAAeAPAWQAQAWAXAAQAPAAAKgDQAJgEAKgGIAHgGQAJgHAGAAQAEAAADACQADADAAAEQAAAFgFAGQgFAHgIAHQgRAOgQAGQgPAGgTAAQgoAAgbgcg");
	this.shape_11.setTransform(-0.2,-11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUBRQgLgTgbg/IgLgdQgPgkgIgFIgGgDQgLgEAAgHQAAgHAKgDQAKgEAfAAQAaAAAJAEQAKADAAAHIgBAHIgEADIgGACQgIAEAAAEIAEAQIAPAlIAPAlQAFAIACAAQADAAADgEIAJgSIAVgwQAHgTAAgGIgCgHIgEgFIgFgBQgJgEAAgGQAAgHAJgDQAIgEAYAAQAUAAAJAEQAIACAAAIQAAAHgKAEIgHACQgJAEgQAmIgFAMIgIASQgsBkgMgBQgIAAgLgSg");
	this.shape_12.setTransform(-20.3,-10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghCKQgKgDAAgJQAAgGAKgEIAEgCQAGgDABgGQACgHAAgOIAAgNIAAgQIAAgUQAAgegCgJQgBgJgEgCIgJgDQgMgEAAgGQABgFADgDQAEgEAIgDIAdgJIATgEQAGAAACAEQACAEAAAIIAAAMIAAAJIgCAwIAAABIAAAwQAAASABAIQACAHAEACIAIAEQAKADAAAIQAAAHgKADQgJADgaAAQgcAAgJgDgAgXhhQgIgGAAgLQAAgLAJgHQAJgIANAAQAMAAAIAHQAIAHAAALQAAAKgJAIQgJAHgNAAQgMAAgIgHg");
	this.shape_13.setTransform(-36,-15.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKB0QgJgDgHgGQgHgHgDgKQgDgLAAgdIAAhnIgSAAIgFgBIgCgFIAAgFQAAgGAVgRIAHgHIAIgHQAUgRAHAAIAFABQADACAAADIAAAkIArAAQAFAAACACQABACAAAFIAAAFQAAAFgBACQgCACgFAAIgnAAIgEACIgBAEIAABfQAAAZAFAHQADAGAMAAQAGAAAJgDIAOgDQAEAAADACQADADAAAEQAAAKgQAKQgRAKgVAAQgLAAgKgDg");
	this.shape_14.setTransform(-48.1,-13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBlIgVgFIgFAFIgGABIgEgBIgEgDQgHgGgFgPQgGgQAAgOQAAgGAEgEQADgEAFgBQAIAAAKAQIAHAMQAGAHAKAFQAKAEALAAQANAAAHgGQAHgHAAgKQAAgRgggPIgKgGQgegOgLgMQgLgNAAgSQAAgaARgPQASgQAcAAIANAAIANADIAKgEIAGgBQAJABAKAPQAIAPAAAQQAAAHgCAFQgEADgFAAQgFAAgEgDQgFgEgFgKQgIgMgHgEQgIgFgKAAQgLAAgHAHQgGAFgBALQAAAJAIAGQAGAHAXAMIADABQA1AaAAAgQAAAagUATQgVARgfABg");
	this.shape_15.setTransform(-63.5,-11.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag+BJQgcgdAAgpQAAgsAcgeQAdgdArAAQAlAAAWAVQAWAWAAAkQAAAMgEAEQgDADgPAAIhJAAQgHAAgDgDQgEgDAAgFQAAgFAEgDQADgDAHAAIAnAAIAKgBQACgCAAgEQAAgTgMgMQgNgNgRAAQgXAAgLAUQgLAUAAAcQAAAeAPAWQAQAWAXAAQAPAAAKgDQAJgEAKgGIAHgGQAJgHAGAAQAEAAADACQADADAAAEQAAAFgFAGQgFAHgIAHQgRAOgQAGQgPAGgTAAQgoAAgbgcg");
	this.shape_16.setTransform(-82,-11.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhiCKQgKgDAAgJQAAgHAKgEQAKgEACgDQADgEACgdIABhLIgBhHQgDgdgCgEQgCgDgKgEQgKgEAAgIQAAgIAJgCQAIgDAiAAIB2AAIATgCIAKgDIAEACIAEADQAEAHAEANQADAOAAAJQAAAIgDAFQgDAFgGAAQgHAAgIgNIgGgJQgDgGgKgEQgIgDgNAAIgaAAQgSAAgJACQgKACgEAFQgDAEgBAMIgCAmIAAAPQAAAJACADQABACAFAAIAgAAQAPAAAGgEQAGgFACgMIAAgDQADgVALAAQAIAAADALQAEAKgBAmQAAAkgDAKQgDAKgIAAQgLAAgDgUIAAgDQgCgMgGgFQgGgEgPAAIgfAAQgGAAgBADQgCADAAANIAAAOIACA3QAAALAEADIAIAEQAMAFAAAHQAAAJgKADQgLAEgeAAQgfAAgLgEg");
	this.shape_17.setTransform(-103.5,-15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag6BfQgKgCAAgJQAAgHAKgDIAFgCQAFgDACgHQADgGgBgPIAAgMIAAgQIAAgLQAAgjgBgLQgCgKgFgDIgIgDQgMgEAAgHQABgEADgDQADgEAJgDIAagIIARgEQAKAAADAaIAAAEIABABQAKgQAKgIQALgIAMAAQANAAAHAIQAJAIgBAOQABANgHAIQgGAHgKABIgLgCIgHgGIgFgIQgCgEgCAAQgOAAgEASQgFASAAA6QAAARABAIQACAJAGACIAIADQALADAAAJQAAAGgKADQgMAEgZAAQgdAAgKgEg");
	this.shape_18.setTransform(115.3,-57.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAqBiQgDgDAAgHIAAgNIAAgBIgBAAQgCAAgFAEIgCAEQgJAIgMAFQgLAFgOAAQgPAAgNgGQgMgFgJgKQgJgLgDgQQgFgPAAgpIAAgMIABgPIAAgEQAAgQgCgEQgDgEgGgDIgIgDQgLgCAAgIQAAgEAEgEQAEgCANgGIAagGIAVgDQAFAAACAEQADAEAAAIIgBAIIgCBIQABAmAHAPQAJAPATABQAWAAAKgUQAJgTAAgvIAAgOQAAgQgCgEQgCgEgHgDIgIgDQgLgCABgIQAAgEADgDQAEgDAOgGIAagGIAUgDQAFAAADAEQACADAAAJIAAALIgCBPIAAAhIABAMQACAIAJAEIAEABQALAEAAAHQAAADgDAEQgEADgIADIgcAJQgNAEgHAAQgFAAgDgDg");
	this.shape_19.setTransform(95.8,-57);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqCKQgWgHgSgNQgcgVgPgfQgOgfAAgmQAAg/AmgnQAngmA+AAQAZAAAWAHQAWAHARAPQAaAUAOAgQAOAgAAAkQAAAXgGAWQgHAVgMARQgTAageAPQgeAOgiAAQgWAAgWgGgAhAhaQgVAbAAAsQAAA8AbAmQAaAmAnAAQAkAAAVgbQAVgaAAgtQAAg7gagmQgbgngoAAQgjAAgVAbg");
	this.shape_20.setTransform(69.1,-61.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AheBfQgKgCAAgJQAAgHAKgDIAFgCQAFgDACgHQACgGAAgPIgBgMIAAgQIAAgTQAAgfgBgJQgCgJgEgCIgJgDQgLgEAAgHQAAgEADgDQAEgEAIgDIAcgJIAUgEQAFABADADQACADAAAGIAAAMIABACIABABIABAAIABgBIAEgEIAEgDQAVgUAYAAQAOAAANAGQAMAGAJALQAJAKAEAPQAEAOAAAgIAAAZIgBAMIAAALQAAAOACAFQACAGAFADIAFACQAJADAAAHQAAAJgJACQgIADgeAAQgbAAgJgDQgKgDAAgGQAAgIAKgDIAHgEQAFgCACgJQABgIAAgVQAAg8gHgQQgIgQgVAAQgJAAgJAGQgKAHgFAKQgEAIgCAQQgBAOAAAmQAAASABAHQACAGAEACIAHAEQAKADAAAIQAAAGgKAEQgJADgZAAQgeAAgJgEg");
	this.shape_21.setTransform(31.5,-57.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiCKQgJgDAAgJQAAgGAJgEIAGgCQAEgDADgGQACgHAAgOIgBgNIAAgQIAAgUQAAgegBgJQgCgJgEgCIgJgDQgLgEAAgGQgBgFAEgDQADgEAJgDIAdgJIAUgEQAFAAADAEQABAEABAIIAAAMIgBAJIgBAwIAAABIgBAwQAAASACAIQABAHAFACIAHAEQAKADgBAIQABAHgKADQgKADgYAAQgdAAgKgDgAgXhhQgJgGAAgLQAAgLAKgHQAJgIANAAQALAAAJAHQAIAHAAALQAAAKgJAIQgJAHgMAAQgNAAgIgHg");
	this.shape_22.setTransform(14.5,-61.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOBlIgVgFIgFAFIgGABIgEgBIgEgDQgGgGgGgPQgFgQgBgOQAAgGAEgEQADgEAFgBQAJAAAJAQIAHAMQAGAHAKAFQAKAEAKAAQAOAAAHgGQAHgHAAgKQAAgRgfgPIgLgGQgfgOgKgMQgLgNAAgSQAAgaASgPQARgQAcAAIANAAIANADIAKgEIAGgBQAJABAKAPQAIAPAAAQQAAAHgDAFQgCADgHAAQgEAAgEgDQgFgEgFgKQgIgMgHgEQgIgFgKAAQgLAAgHAHQgGAFAAALQgBAJAIAGQAGAHAXAMIADABQA1AaAAAgQAAAagUATQgVARgfABg");
	this.shape_23.setTransform(-10.1,-57.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDA4IgNhUIAAgDIgBgEQAAgKAFgFQAEgFAIAAQAIAAAFAFQAFAFAAAKIAAAFIgBACIgNBUg");
	this.shape_24.setTransform(-21.6,-69.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKB0QgJgDgHgGQgHgHgDgKQgCgLAAgdIAAhnIgSAAIgGgBIgCgFIAAgFQABgGATgRIAIgHIAIgHQAUgRAHAAIAGABQACACAAADIAAAkIArAAQAFAAACACQABACABAFIAAAFQAAAFgCACQgDACgEAAIgoAAIgDACIgBAEIAABfQAAAZAEAHQAFAGALAAQAGAAAKgDIANgDQAEAAADACQACADAAAEQAAAKgPAKQgRAKgVAAQgLAAgKgDg");
	this.shape_25.setTransform(-31.7,-58.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAiBbIgKgKIgIAEQgYAQgXAAQgdAAgRgRQgSgQAAgbQAAgeAXgRQAWgRApAAQAJAAAFACQAFADAAAIQAAALgNAAQgTAAgMAJQgMAJAAARQAAAPALAJQAKAJARAAQASAAAIgIQAIgIAAgVIAAhJQAAgQgIgKQgHgJgNAAQgJAAgIAFQgJADgHAJIgEAGQgMAOgNAAQgIAAgEgEQgFgGAAgIQAAgTAXgLQAWgNAjAAQAVAAAPAFQAQAGAIALQAGAIACALQADAMAAAcIAAA9QAAALACAFQABAGAEABIAGABQANAEAAAGQAAAJgNAIQgNAIgSAAQgIAAgKgKg");
	this.shape_26.setTransform(-48.7,-57);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAbCLQgKgEAAgHQAAgHAKgEIAHgDQAEgDACgIQACgIAAgVQAAg+gIgOQgHgQgVAAQgJAAgKAGQgJAGgFAKQgEAIgCAPQgBAPAAAmQAAATABAGQABAHAEACIAIADQAKAEAAAHQAAAHgKAEQgJADgZAAQgeAAgKgEQgJgDAAgIQAAgHAJgDIAGgCQAFgDACgIQACgIAAgWIAAgfIAAgdIgBhYQgCgVgDgEQgBgCgMgEQgMgDAAgHQAAgFAGgDQAEgEARgHIATgFIASgCQAHAAACAEQADADAAAJIAAAIIgCBNIAAAKIACAEIACACIAEgEIAHgIQAKgKALgFQAKgEAMAAQAhAAAQAVQAQAWAAAqIAAASIABAjIAAALQAAAKABAEQADAEAEADIAFACQAKADAAAHQAAAIgKADQgJAEgfAAQgZAAgJgDg");
	this.shape_27.setTransform(-71.1,-61.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAaBEIgohrQgMgjgJgQQgIgRgGgEIgLgGQgKgDAAgHQAAgJAJgCQAJgDAlAAQAjAAAJADQAJACAAAJQAAAHgPAFIgBABQgFACgCADQgCADAAAEQAAAHAKAaIAfBUIAOAfQAFAIACAAQADAAADgHIAOgcIACgIQAphfAAgMQAAgGgDgFQgDgEgHgCIgDgCQgMgFAAgHQAAgJAHgCQAJgDAfAAQAfAAAHADQAJACgBAJQAAAHgLAFIgIAEQgOAJgZBCIgQAoIglBbIgGARQgMAegJAAQgKAAgdhKgAhPB+IgDgGQgYg1gmhkIgSguIgMgXQgEgIgGgEIgGgCQgMgEAAgHQAAgJAJgCQAIgDAmAAQAkAAAJADQAJACAAAJQAAAHgPAGIgCAAQgFACgCADQgCADAAAEQAAAHAIAWIAhBVIAPAjQADAHAEAAQADAAAFgJIAJgWQAEgNALgBQALABABANIgDALIgZA+IgGAPQgLAfgJAAQgGAAgHgQg");
	this.shape_28.setTransform(-102.2,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whatsinour, new cjs.Rectangle(-129.6,-86.5,259.2,141.7), null);


(lib.spiralcutham = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai3BwQgLgDAAgLQAAgIALgDIAGgDQAGgDADgIQACgHAAgSIAAgOIgBgSIAAgOQAAgpgBgNQgCgMgFgCIgKgFQgOgEAAgHQAAgFAEgEIAOgIIAigLIAWgFQAGABADADQADAEAAAIIAAAMIAAADIABACIABABIABgBIABAAIAFgGIADgCQAbgZAcAAQAKAAAKAEQAKADAJAGQAHAGAJAJQAIALACAAQADAAAGgHIAKgKQAPgMALgFQALgEANgBQAaAAAUALQATAKAJAUQAKAUAABCIABAWIgBAMIAAAKQAAANADAGQACAGAFADIAGADQAMADAAAIQAAAKgLAEQgLADgjAAQggAAgLgDQgLgEAAgIQAAgJAMgEIAIgEQAGgDACgLQACgMAAgaQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAXAAA1IAAANQAAAYADAIQACAIAGADIAGADQALADAAAIQAAAKgLAEQgKADgjAAQgeAAgLgDQgLgEAAgIQAAgJALgEIAJgEQAFgCACgKQACgJAAgaQAAhGgJgTQgJgSgYAAQgMAAgLAIQgLAGgGAMQgFALgCASQgCASAAAqQAAAVACAIQACAHAFADIAIAEQAMAEAAAJQAAAIgLAEQgMADgdABQgjgBgLgDg");
	this.shape.setTransform(28.9,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgUgTgBgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEgBAIQAAANgPAAQgWAAgOALQgNAKAAATQAAASALALQANALATAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgFgGgBgKQAAgVAagOQAbgPApAAQAZAAARAHQATAGAJANQAHAJADANQACAOABAhIAABHQgBANADAHQACAGAFABIAHACQAOAEgBAIQABAKgQAJQgOAJgVAAQgKAAgLgMg");
	this.shape_1.setTransform(-3.4,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAyCfQgMgEAAgKQAAgJAOgFIAKgFQAEgDACgOIABg1IAAggIgDgJQgCgEgLgCQgLgCgqAAIgvACQgNABgEADIgCAHIgCARIAAATIACA1QABAOAEADIAKAFQAOAFAAAJQAAAKgMAEQgMAEglAAQgiAAgNgEQgNgEAAgKQAAgJAOgFIAKgFQAFgEACgcQACgdAAhDIgChUQgCgigDgEQgCgDgMgFQgMgFAAgJQAAgJAKgDQAKgEApAAQAnAAALAEQAKADAAAJQAAAJgOAFIgKAFQgEADgBAOIgCBDQAAAJAIADQAJADAhAAIASAAIAvgBQAOgCAEgDIADgEIABgJIAAgKIgBg3QgCgMgEgDIgKgFQgOgFAAgJQAAgJAKgDQALgEAnAAQApAAAKADQAKAEAAAJQAAAJgOAFIgKAFQgFAEgCAeQgCAfAAA8IACBXQACAiADAEQACAEAMAEQAMAFAAAJQAAAKgNAEQgMAEgkAAQgkAAgMgEg");
	this.shape_2.setTransform(-32.8,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgHQgIgIgDgMQgDgNAAgiIAAh4IgVAAIgGgBIgCgHIAAgFQAAgHAXgVIAKgIIAIgHQAYgUAIgBIAGADQADABAAAEIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHAAAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_3.setTransform(96.6,-39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIABAAIADABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_4.setTransform(74.9,-37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiCeQgegMgYgUQgagYgNghQgOgiAAgmQAAghAJgbQAJgbASgVQAWgcAggOQAggOAlAAIAbACIAsAJIAFgBIARgFIAIADIAGAGQAHANAFARQAEARAAAOQAAAJgDAFQgEAEgHAAQgKAAgRgTIgOgRQgMgMgSgHQgTgGgVgBQgrAAgaAeQgZAfAAA0QAABDAgArQAgArAxAAQAUAAASgHQARgGAMgMIAKgMQAKgOAHAAQAGAAAEAHQADAFAAALQAAAVgFAMQgHANgKAAIgCgBIgDAAQgVAKgVAGQgVAFgXAAQghABgegLg");
	this.shape_5.setTransform(46.3,-42.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2AVQgDgDAAgGIACgLIAFgLQADgHAEgCQADgDAJAAIALABIAUAAIAmgBIAGgBQAIAAADADQADACAAAHQAAAMgHAKQgHALgLAAIgKgBIgNAAIgxACIgFABQgHAAgDgDg");
	this.shape_6.setTransform(22.9,-37.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmCiQgLgDAAgKQAAgHAKgEIALgHQAEgDACgOIABgtIAAgjIAAgqIAAgRQAAg5gCgQQgCgRgFgDIgOgFQgOgDAAgIQAAgGAFgEQAEgEAQgFIAegJIAXgDQAHAAACAFQADAEAAAKIAAASQgDBQAABRIACBNQABAQAEAFIAMAGQALAEAAAJQAAAJgLADQgMAEgdAAQgiAAgLgEg");
	this.shape_7.setTransform(8.5,-42.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgUgTgBgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEgBAIQAAANgPAAQgWAAgOALQgNAKAAATQAAASALALQANALATAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgFgGgBgKQAAgVAagOQAbgPApAAQAZAAARAHQATAGAJANQAHAJADANQACAOABAhIAABHQgBANADAHQACAGAFABIAHACQAOAEgBAIQABAKgQAJQgOAJgVAAQgKAAgLgMg");
	this.shape_8.setTransform(-9.2,-37.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBwQgLgEAAgKQAAgHALgEIAGgDQAFgDACgHQADgIAAgRIAAgQIAAgSIAAgNQAAgpgCgMQgCgNgFgDIgKgDQgOgFAAgIQAAgFAFgEQADgDAKgFIAfgKIAUgDQALgBADAfIABAFIACABQALgTAMgJQANgJANAAQAQAAAJAJQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgDIgJgGIgGgJQgDgGgCAAQgPAAgHAWQgFAVAABEQAAAUACAKQACAKAHADIAJACQANAEAAAKQAAAJgMADQgNAEgegBQgiABgLgEg");
	this.shape_9.setTransform(-29.7,-37.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_10.setTransform(-45.3,-42.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhtCaQgMgEABgJQgBgIAKgDIAMgGQAEgFACgSQABgRABg5IAAgkQAAg9gCgSQgDgSgEgDIgLgDQgOgFAAgIQAAgFAFgEQADgEAJgDIAhgLQAPgDAHAAQAHgBACAEQADAEAAAHIAAAMIAAAEIACABIAJgGIAIgGQAOgKAMgGQANgEANAAQAqgBAbAfQAbAfgBAxQAAA1gdAjQgfAjguAAQgSAAgIgGQgHgFgBgJQAAgFAFgDQADgFAHAAIAFABIAIABQAZAAAPgUQAPgVAAgiQAAgngQgXQgRgYgZAAQgXAAgOANQgNANAAAiIAACPIABAWQABAKADADQADACAKADIAIAEIAFADIACAHQAAAJgNADQgNAEggAAQghAAgLgEg");
	this.shape_11.setTransform(-65.6,-33.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag3CjQgZgGgQgJQgJgFgGgUQgGgTAAgZQAAgLAEgFQAEgGAHAAQALAAALAVIAFAJQAPAZARAMQARALAXAAQAYAAARgPQARgOAAgWQAAgfhCgdIgHgEQg3gXgSgUQgSgUAAggQAAgoAegaQAegaAwAAIAaACIAfAHIAJgGIAIgCQAFAAAFAEQAEADAFAJQAHANAFAPQAEAPAAALQAAAIgDAEQgEAEgGAAQgMAAgMgQIgDgEQgNgRgPgIQgPgIgSAAQgZAAgPAMQgOALAAAVQAAASAMAMQAMANAwAUIAJAFQApAQASAQQAMALAGAPQAHAQAAASQAAAuggAaQggAZg5AAQgbAAgZgFg");
	this.shape_12.setTransform(-91.5,-42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.spiralcutham, new cjs.Rectangle(-106.6,-71.6,213.2,111.2), null);


(lib.seventeenturkey_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenturkey();
	this.instance.parent = this;
	this.instance.setTransform(-105,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenturkey_1, new cjs.Rectangle(-105,-91,209,191), null);


(lib.seventeentable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeentable();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeentable_1, new cjs.Rectangle(-160,-240,320,480), null);


(lib.seventeenspinach_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenspinach();
	this.instance.parent = this;
	this.instance.setTransform(-19,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenspinach_1, new cjs.Rectangle(-19,-40,38,80), null);


(lib.seventeenpie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenpie();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenpie_1, new cjs.Rectangle(-48.5,-50.5,97,101), null);


(lib.seventeenham_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenham();
	this.instance.parent = this;
	this.instance.setTransform(-67,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenham_1, new cjs.Rectangle(-67,-73,134,179), null);


(lib.seventeengreens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeengreens();
	this.instance.parent = this;
	this.instance.setTransform(-23,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeengreens_1, new cjs.Rectangle(-23,-53,45,122), null);


(lib.seventeencranberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeencranberries();
	this.instance.parent = this;
	this.instance.setTransform(-38.5,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeencranberries_1, new cjs.Rectangle(-38.5,-22,77,44), null);


(lib.seventeenberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenberries();
	this.instance.parent = this;
	this.instance.setTransform(-43,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenberries_1, new cjs.Rectangle(-43,-47.5,86,95), null);


(lib.roastedturkey10lb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhoCVQgLgKABgNQgBgMAJgIQAHgIAMAAIAJACIAIAEIAFAJQAHAJAEAAQALAAAMgQQAMgRAAgSQAAgTgQgkIgCgFIgkhPIgVgsQgEgIgNgFIgBAAQgHgEgDgDQgCgDAAgFQgBgKAMgDQAMgFAhAAQAhABAMADQALADgBAJIgBAIIgEAEIgIAEQgJADAAAEIAEARIASAtIASAqQAHALACAAQADAAAFgLIAPgjIARgtQAEgQAAgFQAAgHgMgHQgNgHAAgGQAAgIALgDQAKgDAagBQAaABAKADQAKADAAAJQAAAJgNADIgKAEQgMAGgPAnIgGARIgdBIQglBegXAcQgZAcggAAQgRABgLgKg");
	this.shape.setTransform(61.4,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(38.1,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABKClIgKgBQgKgEgVgcIgKgMIgEgFQg2hHgFAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgBAJIAAAKIACAvQABAOADAEIANAGQAKAEAAAJQAAAJgLADQgLAEgeAAQgiAAgLgEQgLgDAAgKQAAgIALgEIAGgDQAGgDADgLQACgLAAgaIAAgcIgBgjIAAgbIgBhUQgBgVgEgEQgCgDgLgDIgHgCIgIgEIgCgGQAAgGAEgEQAFgEAQgFIAegJIAXgDQAHAAADAFQADAEAAAKIgCAsIgBA6IAAA4IABAMQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIAKgFIAQgOIAWgVQAGgHAAgDQAAgCgJgEQgHgFAAgHQAAgKALgEQALgEAhAAQAVAAAKAEQAKAEAAAJQAAALgQAEQgRAEgHAEQgIAFgTASIgEAEIgIAIIgCAFQAAAEAUAaIACADIAnAvQAQATAJAHQAFADAPAFQAOAFAAAJQAAAJgKAFQgLAEgYAAg");
	this.shape_2.setTransform(14.3,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDBwQgLgDAAgLQAAgIALgDIAGgDQAFgDACgIQADgHAAgSIAAgOIAAgSIAAgOQAAgpgCgNQgCgMgFgCIgKgFQgOgEAAgHQAAgGAFgDQADgFAKgDIAfgKIAUgFQALAAADAfIABAFIACAAQALgSAMgJQANgKANAAQAQAAAJAKQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgCIgJgHIgGgJQgDgGgCAAQgPAAgHAWQgFAWAABDQAAAUACAKQACAKAHACIAJAEQANADAAAKQAAAIgMAEQgNADgeABQgigBgLgDg");
	this.shape_3.setTransform(-7.2,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_4.setTransform(-30,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvChQgNgEAAgKQAAgJANgFQAMgFACgDQADgEABglIABhqIAAg8IgCgkQgBgGgEgCQgEgCgJAAIgKAAQgPAAgJAEQgJADgGAJIgHAPIgHAQIgGAHQgEACgEAAQgHAAgDgFQgDgGAAgOQAAgeAHgSQAHgSALAAIACAAQASADAbAAICEAAQAcAAASgDIACAAQALAAAHASQAHASAAAeQAAANgDAGQgDAGgHAAIgIgCIgGgHIgHgQIgHgPQgGgJgJgDQgJgEgQAAIgJAAQgJAAgEACQgEACgBAGIgBAkIgBA8IABBqQABAlADAEQACADAMAFQANAFAAAJQAAAKgNAEQgNADgjAAQgiAAgNgDg");
	this.shape_5.setTransform(-57.9,10.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhiCJQgbgfAAgxQAAg3AfgiQAegiAxAAIAPACQAHACAEAEQAEAFAAAGQAAANgPAAIgGgBIgGAAQgZAAgPAUQgPAUAAAjQAAAnAQAXQARAYAZAAQAXAAANgNQANgNAAgZIAAg+IAAhoQAAgQgDgGQgDgFgIgEIgGgBQgOgFAAgIQAAgFAFgFQAGgEARgHIAZgHIAVgCQAIAAADAEQAEAEAAAKIgBAMIgCCLIABBeQACAWADACIAQAGQAMACAAAJQAAAKghAKIgWAHIgRABQgHAAgDgDQgCgDAAgIIAAgLIgBgEIgBgCIgHAEIgKAIQgNALgMAEQgNAFgOAAQgrAAgageg");
	this.shape_6.setTransform(71.3,-42.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_7.setTransform(45.3,-37.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgHQgIgIgDgMQgDgNAAgiIAAh4IgVAAIgGgBIgCgHIAAgFQAAgHAXgVIAKgIIAIgHQAYgUAIgBIAGADQADABAAAEIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHAAAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_8.setTransform(25.5,-39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_9.setTransform(7.5,-37.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgVgTAAgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEAAAIQAAANgQAAQgWAAgOALQgOAKAAATQAAASANALQALALAUAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgIgLQgJgLgPAAQgLAAgKAFQgJAFgJAKIgFAGQgNASgQAAQgJAAgFgGQgFgGAAgKQAAgVAagOQAagPApAAQAZAAARAHQASAGAKANQAHAJADANQADAOAAAhIAABHQAAANACAHQACAGAFABIAGACQAOAEABAIQgBAKgPAJQgPAJgUAAQgKAAgLgMg");
	this.shape_10.setTransform(-13.9,-37.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhRBUQghghAAgyQABgyAhgiQAigiAxAAQAyAAAeAgQAfAfAAAyQABAzgiAjQgiAkgvAAQgyAAgfgigAgqhDQgOASAAAfQAAAsATAeQASAeAbAAQAWAAAOgTQANgSAAgfQAAgrgTgeQgSgegaAAQgXAAgNASg");
	this.shape_11.setTransform(-38.9,-37.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAwBxQgVhIgQgPQgPgOgXAAQgSAAAAgOQAAgPAPAAQAlAAASgOQASgPAAgeQAAgegSgPQgTgQgiAAQgSABgGACQgHACgCAGIgCAUIgCAuIAABkIACBDQABAQAFADIAKAFQANAEAAAKQAAAKgMAEQgMAEgkgBQgjABgNgEQgNgEAAgKQAAgJAOgFIAKgGQAFgEACgaQACgbAAhGIgChWQgBgggEgFQgCgCgMgGQgMgEAAgJQAAgIAHgEQAHgEAOAAIAyAAIAtgCIAkAAQAxgBAaAWQAaAVAAAoQAAAegRAVQgSAWgfAJIAAADQAYAEAOAPQAOAOALAlIAGAXQAJAjANAAIAGAAIAJgBQAEAAADADQAEAEAAAEQAAALgNAHQgNAHgVAAQgtAAgQg1g");
	this.shape_12.setTransform(-67.3,-42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.roastedturkey10lb, new cjs.Rectangle(-86,-71.6,172.1,111.2), null);


(lib.pumpkinapplepies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape.setTransform(99.3,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(77.8,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_2.setTransform(59.4,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah0CgQgNgDAAgLQAAgIAOgGIAKgFQAFgEACgaQACgbAAhHIgChVQgCghgDgEQgCgDgMgFQgMgFAAgJQAAgIAHgEQAHgEAOAAIAXAAIAaAAIAtgBIAkgBQAzAAAZAWQAZAVAAArQAAAwgfAZQgfAXg8AAQgWAAAAgOQAAgQATAAQAcAAASgPQARgPAAghQAAgfgRgPQgSgPglAAQgQAAgHACQgGADgDAGIgCAVIgBAvIAABjIABBAQACARAEADIAKAFQAOAFAAAJQAAALgMADQgNAEgkAAQgjAAgMgEg");
	this.shape_3.setTransform(40.2,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_4.setTransform(1.6,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmCiQgLgDAAgKQAAgHAKgEIALgHQAEgDACgOIABgtIAAgjIAAgqIAAgRQAAg5gCgQQgCgRgFgDIgOgFQgOgDAAgIQAAgGAFgEQAEgEAQgFIAegJIAXgDQAHAAACAFQADAEAAAKIAAASQgDBQAABRIACBNQABAQAEAFIAMAGQALAEAAAJQAAAJgLADQgMAEgdAAQgiAAgLgEg");
	this.shape_5.setTransform(-17,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhtCaQgMgEAAgKQAAgHAKgEIAMgGQAEgEACgSQACgSAAg4IAAgkQAAg9gDgSQgCgRgEgDIgLgFQgOgEAAgHQAAgGAEgEQAFgEAJgDIAfgKQAQgFAHAAQAGAAADAEQADADAAAIIAAALIAAAFIABACIAJgHIAJgHQAOgJAMgFQANgGANAAQAqABAbAeQAaAfABAxQAAA1geAjQgeAjgvAAQgSAAgIgFQgHgGgBgJQAAgFAFgEQADgDAHAAIAFABIAIABQAZAAAPgVQAPgVAAgjQAAgmgQgYQgRgXgZAAQgXAAgNANQgOANAAAiIAACPIABAWQABAKADACQADAEAKACIAIADIAGAFIABAGQAAAJgNADQgNAEgggBQghABgLgEg");
	this.shape_6.setTransform(-36.9,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhtCaQgLgEAAgKQAAgHAJgEIALgGQAFgEACgSQABgSAAg4IAAgkQAAg9gBgSQgDgRgFgDIgKgFQgOgEAAgHQAAgGAFgEQAEgEAIgDIAhgKQAPgFAHAAQAHAAACAEQADADAAAIIAAALIABAFIABACIAJgHIAIgHQAOgJAMgFQANgGANAAQAqABAbAeQAbAfgBAxQAAA1gdAjQgeAjgvAAQgSAAgIgFQgHgGAAgJQAAgFADgEQAEgDAGAAIAGABIAIABQAZAAAPgVQAPgVAAgjQAAgmgRgYQgQgXgZAAQgYAAgNANQgNANAAAiIAACPIABAWQABAKADACQADAEAKACIAJADIAEAFIACAGQAAAJgNADQgNAEgggBQghABgLgEg");
	this.shape_7.setTransform(-63.6,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAxCiQgNgEAAgKQAAgJAQgGIAEgBQAGgCACgDQADgDAAgGIgEgSIgIgYIgEgHIgDgCIgSgCIgiAAIgUAAQgSAAAAgQQAAgSATAAIALAAIAXAAIAYAAIgXg9IgWg1IgGAAIgXA5IgXA6IgWA6QgFANAAAIQAAAHADAFQADAFAHADIAIACQAOAGAAAJQAAAKgMAEQgLADgiABQgjgBgLgDQgMgEAAgKQAAgJAOgGIAIgEQASgKAPgnIAFgNIAghRIAIgUQAhhRAIghQACgLAFgDQAEgCANgBQAHAAAFADQAFAEAFAIIAiBLIAtBqIAKAbQAaBBAPAIIAIADQAOAEAAAKQAAAKgOAEQgNADgpABQgngBgOgDg");
	this.shape_8.setTransform(-92.7,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiICJQgqghAAg0QAAgdAOgWQANgWAegUIABgCQgKgKgFgLQgFgLAAgMQAAgjAagXQAagXApAAQAcAAATALQASALAAAOQAAAFgEAEQgEADgHAAIgSgFQgQgGgNAAQgSAAgLALQgLAMAAAUQAAAJADAGQADAHAGAFQAFAFALAFIANAFIAEACIACADQAAAFgIAJQgJAKgHAAIgKgCIgPgGQgNALgHAPQgGARAAAUQAAArAcAcQAcAcAsAAQAkAAAXgTQAWgTAAgfQAAgTgJgLQgJgLgQAAQgPAAgKAJQgKAJAAAPIAAAEIAAACIgDABIgEABQgIAAgFgGQgFgHAAgLQAAghBjgtIAHgDQAagMANgOQAOgOAAgQQAAgLgGgFQgGgFgMAAIgIABIgJABQgFAAgDgDQgDgDAAgFQAAgKANgHQAMgGATAAQAYAAAPANQAOANAAAXQAAAdgZAWQgYAXgyATQAVAIAKARQALARAAAXQAAARgGAQQgHAQgNAOQgVAWgeAMQgfALgoAAQhFAAgpggg");
	this.shape_9.setTransform(100.8,-42.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhuBwQgMgEAAgKQAAgIALgEIAGgCQAGgDACgHQADgIAAgRIAAgQIgBgSIAAgWQAAgkgBgLQgCgKgFgDIgKgDQgOgFAAgIQAAgEAEgFQAEgDAKgFIAhgKIAXgEQAGAAADADQADAEAAAHIAAAPIABACIABABIABAAIABgBIAFgEIAFgFQAYgWAcAAQAQAAAQAGQAOAIALAMQAKAMAFARQAEARAAAlIAAAdIAAAPIAAAMQAAARACAHQACAGAGADIAGACQALAEAAAIQAAAKgLAEQgKADgjAAQggAAgKgDQgLgDAAgJQAAgJALgEIAJgDQAFgDACgKQACgKAAgYQAAhIgJgSQgJgSgYAAQgLAAgLAHQgLAIgGALQgFALgCARQgCARAAAsQAAAWACAIQACAHAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgegBQgiABgLgEg");
	this.shape_10.setTransform(54.6,-37.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_11.setTransform(34.7,-42.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABKClIgKgBQgKgEgVgcIgKgMIgEgFQg2hHgFAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgBAJIAAAKIACAvQABAOADAEIANAGQAKAEAAAJQAAAJgLADQgLAEgeAAQgiAAgLgEQgLgDAAgKQAAgIALgEIAGgDQAGgDADgLQACgLAAgaIAAgcIgBgjIAAgbIgBhUQgBgVgEgEQgCgDgLgDIgHgCIgIgEIgCgGQAAgGAEgEQAFgEAQgFIAegJIAXgDQAHAAADAFQADAEAAAKIgCAsIgBA6IAAA4IABAMQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIAKgFIAQgOIAWgVQAGgHAAgDQAAgCgJgEQgHgFAAgHQAAgKALgEQALgEAhAAQAVAAAKAEQAKAEAAAJQAAALgQAEQgRAEgHAEQgIAFgTASIgEAEIgIAIIgCAFQAAAEAUAaIACADIAnAvQAQATAJAHQAFADAPAFQAOAFAAAJQAAAJgKAFQgLAEgYAAg");
	this.shape_12.setTransform(16.6,-42.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhtCaQgMgEAAgJQAAgIAKgDIAMgGQAEgFACgSQACgRAAg5IAAgkQAAg9gDgSQgCgSgEgDIgLgDQgOgFAAgIQAAgFAEgEQAFgEAJgDIAfgLQAQgDAHAAQAGgBADAEQADAEAAAHIAAAMIAAAEIABABIAJgGIAJgGQAOgKAMgGQANgEANAAQAqgBAbAfQAaAfABAxQAAA1geAjQgeAjgvAAQgSAAgIgGQgHgFgBgJQAAgFAFgDQADgFAHAAIAFABIAIABQAZAAAPgUQAPgVAAgiQAAgngQgXQgRgYgZAAQgXAAgNANQgOANAAAiIAACPIABAWQABAKADADQADACAKADIAIAEIAGADIABAHQAAAJgNADQgNAEggAAQghAAgLgEg");
	this.shape_13.setTransform(-10.8,-33.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai3BwQgLgEAAgKQAAgIALgEIAGgCQAGgDADgHQACgIAAgRIAAgQIgBgSIAAgNQAAgpgBgMQgCgNgFgDIgKgDQgOgFAAgIQAAgEAEgEIAOgIIAigMIAWgDQAGgBADAEQADAEAAAIIAAAMIAAACIABADIABAAIABAAIABgBIAFgEIADgDQAbgYAcAAQAKAAAKACQAKADAJAHQAHAFAJALQAIAKACAAQADAAAGgHIAKgKQAPgMALgFQALgFANABQAaAAAUAKQATALAJASQAKAWAABBIABAWIgBANIAAAKQAAAMADAHQACAFAFADIAGACQAMAEAAAIQAAAKgLAEQgLADgjAAQggAAgLgDQgLgDAAgJQAAgJAMgFIAIgDQAGgDACgLQACgMAAgaQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAWAAA3IAAAMQAAAYADAIQACAIAGADIAGACQALAEAAAIQAAAKgLAEQgKADgjAAQgeAAgLgDQgLgDAAgJQAAgJALgEIAJgDQAFgDACgKQACgJAAgZQAAhIgJgSQgJgSgYAAQgMAAgLAHQgLAIgGALQgFALgCATQgCARAAAqQAAAVACAIQACAIAFADIAIADQAMAEAAAJQAAAJgLADQgMAEgdgBQgjABgLgEg");
	this.shape_14.setTransform(-44.4,-37.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_15.setTransform(-78.6,-37.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah0CgQgNgDAAgKQAAgKAOgFIAKgFQAFgEACgbQACgbAAhGIgChVQgCghgDgEQgCgDgMgFQgMgFAAgJQAAgIAHgEQAHgEAOAAIAXAAIAaABIAtgCIAkgBQAzAAAZAWQAZAWAAAqQAAAwgfAYQgfAZg8AAQgWgBAAgPQAAgPATAAQAcAAASgPQARgPAAghQAAgfgRgPQgSgPglAAQgQAAgHADQgGACgDAHIgCAUIgBAvIAABjIABBAQACARAEAEIAKAEQAOAFAAAKQAAAKgMADQgNAEgkAAQgjAAgMgEg");
	this.shape_16.setTransform(-104.8,-42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pumpkinapplepies, new cjs.Rectangle(-121,-71.6,242,111.2), null);


(lib.ordernowvid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAmIgTg4IgSA4IgQAAIgZhLIAQAAIARA5IABAAIASg5IAPAAIATA5IARg5IAQAAIgZBLg");
	this.shape.setTransform(33.7,-34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAlQgHgDgFgFQgGgFgDgIQgDgIAAgIQAAgIADgHQADgHAGgFQAFgGAHgDQAIgDAIAAQAIAAAIADQAHADAGAGQAFAFADAHQAEAHAAAIQAAAIgEAIQgDAIgFAFQgGAFgHADQgIADgIAAQgIAAgIgDgAgKgYQgEACgEAEQgDADgCAGQgCAFAAAEQAAAGACAFQACAEADAEQAEAEAEACQAFACAFABQAGgBAEgCQAGgCACgEQADgEADgEQABgFAAgGQAAgEgBgFQgDgGgDgDQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(22.7,-34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAnIAAgpIgBgJIgCgHQgCgDgEgCQgDgCgFAAQgIAAgGAGQgFAIAAAKIAAAoIgQAAIAAg7IAAgIIAAgIIAOAAIABAGIAAAHIAAAAIAEgGIAGgEIAHgEIAHgBQAHAAAFADQAFACAEAEQAEAEACAGQABAFAAAHIAAAug");
	this.shape_2.setTransform(13.1,-34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAnIAAg7IAAgIIAAgIIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAPIgGgBQgGAAgEACIgGAFQgCADgBAFIgCAJIAAAng");
	this.shape_3.setTransform(2.2,-34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAlQgHgCgFgGQgGgFgDgHQgDgIAAgIQAAgJADgHQADgHAFgFQAGgGAHgDQAHgDAHAAQAJAAAHADQAGACAFAFQAFAGACAHQADAIAAAIIAAACIAAACIg7AAQAAAGACADQACAFADADQADADAFACQAEABAEABQAIAAAGgEQAFgDADgFIALAIQgGAIgIAFIgJACIgKABQgHAAgIgDgAAXgGQAAgEgCgEIgEgHIgGgEQgEgCgGAAIgIACIgHAEQgDADgCAEQgCAEAAAEIAsAAIAAAAg");
	this.shape_4.setTransform(-5.9,-34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRA6QgHgDgFgFQgFgGgDgHQgCgHAAgJQAAgIACgHQADgHAFgFQAFgGAHgDQAHgCAJAAQAIAAAHADQAHAFAEAFIAAAAIAAg5IAPAAIAAB4IgOAAIAAgMIgBAAQgEAIgIADQgHAEgHAAQgJAAgHgEgAgKgDQgEADgDACQgEAEgBAFQgCAFAAAFIACAKQABAGAEADQADAFAEABQAFADAFAAQAGAAAFgDQAFgBADgFQADgDACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgDgCgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_5.setTransform(-15.8,-36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAnIAAg7IAAgIIAAgIIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAPIgGgBQgGAAgEACIgGAFQgCADgBAFIgCAJIAAAng");
	this.shape_6.setTransform(-22.9,-34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMA7IgLgEQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgNAFgLQAEgKAIgJQAIgHALgFIALgCIAMgBQANAAALADIAKAGIAJAGQAIAJAFAKQAEALAAANQAAANgEALQgFAKgIAJIgJAHQgFADgFACQgLAEgNABIgMgBgAgRgpQgHADgHAHQgFAGgDAIQgDAIAAAJQAAAJADAIQADAJAGAGQAGAGAHAEQAIADAJAAQAJAAAJgDQAHgEAGgGQAGgGADgJQADgIAAgJQAAgJgDgIQgDgIgGgGQgGgHgHgDQgJgEgJAAQgJAAgIAEg");
	this.shape_7.setTransform(-33.1,-35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernowvid, new cjs.Rectangle(-41.9,-47.8,83.9,23.7), null);


(lib.ordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AATAmIgTg4IgSA4IgQAAIgZhLIAQAAIARA5IABAAIASg5IAPAAIATA5IARg5IAQAAIgZBLg");
	this.shape.setTransform(33.7,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgQAlQgHgDgFgFQgGgGgDgHQgDgIAAgIQAAgIADgHQADgHAGgGQAFgFAHgDQAIgDAIAAQAIAAAIADQAHADAGAFQAFAGADAHQAEAHAAAIQAAAIgEAIQgDAHgFAGQgGAFgHADQgIADgIAAQgIAAgIgDgAgKgYQgEACgEAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAEQAEAEAEACQAFADAFAAQAGAAAEgDQAGgCACgEQADgEADgEQABgFAAgGQAAgEgBgGQgDgFgDgDQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(22.7,-33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AATAnIAAgpIgBgJIgCgHQgCgDgEgCQgDgCgFAAQgIAAgGAGQgFAIAAAKIAAAoIgQAAIAAg7IAAgIIAAgIIAOAAIABAGIAAAHIAAAAIAEgGIAGgEIAHgEIAHgBQAHAAAFACQAFADAEAEQAEAEACAGQABAGAAAGIAAAug");
	this.shape_2.setTransform(13.1,-33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgVAnIAAg7IAAgIIAAgIIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAPIgGgBQgGAAgEACIgGAFQgCAEgBAEIgCAJIAAAng");
	this.shape_3.setTransform(2.2,-33.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgNAlQgHgCgFgGQgGgFgDgIQgDgHAAgIQAAgIADgIQADgHAFgGQAGgFAHgDQAHgDAHAAQAJAAAHADQAGACAFAFQAFAGACAHQADAIAAAIIAAACIAAACIg7AAQAAAFACAEQACAFADADQADADAFACQAEACAEAAQAIAAAGgEQAFgDADgFIALAIQgGAIgIAFIgJACIgKABQgHAAgIgDgAAXgFQAAgFgCgEIgEgHIgGgEQgEgCgGAAIgIACIgHAEQgDADgCAEQgCAEAAAFIAsAAIAAAAg");
	this.shape_4.setTransform(-5.9,-33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgRA6QgHgDgFgFQgFgGgDgHQgCgHAAgJQAAgIACgHQADgHAFgFQAFgGAHgDQAHgCAJAAQAIAAAHADQAHAEAEAGIAAAAIAAg4IAPAAIAAB3IgOAAIAAgMIgBAAQgEAHgIAEQgHAEgHAAQgJgBgHgDgAgKgDQgEACgDADQgEAEgBAFQgCAFAAAFIACAKQABAGAEADQADAFAEACQAFACAFAAQAGAAAFgCQAFgCADgFQADgDACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgDgDgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_5.setTransform(-15.8,-35.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AgVAnIAAg7IAAgIIAAgIIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAPIgGgBQgGAAgEACIgGAFQgCAEgBAEIgCAJIAAAng");
	this.shape_6.setTransform(-22.9,-33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgMA7IgLgEQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgNAFgLQAEgKAIgJQAIgHALgEIALgDIAMgCQANABALAEIAKAFIAJAGQAIAJAFAKQAEALAAANQAAANgEALQgFAKgIAJIgJAHQgFADgFACQgLAFgNAAIgMgBgAgRgpQgHADgHAGQgFAHgDAIQgDAIAAAJQAAAJADAIQADAJAGAGQAGAGAHAEQAIADAJAAQAJAAAJgDQAHgEAGgGQAGgGADgJQADgIAAgJQAAgJgDgIQgDgIgGgHQgGgGgHgDQgJgEgJAAQgJAAgIAEg");
	this.shape_7.setTransform(-33.1,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernow, new cjs.Rectangle(-41.9,-47,83.9,23.7), null);


(lib.mashedpotatoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape.setTransform(78.7,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(57.2,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSBUQgfghAAgyQgBgyAigiQAigiAyAAQAwAAAgAgQAeAfAAAyQAAAzghAjQgiAkgwAAQgxAAgggigAgrhDQgNASAAAfQAAAsATAeQATAeAaAAQAWAAAOgTQAOgSAAgfQAAgrgTgeQgUgegaAAQgWAAgOASg");
	this.shape_2.setTransform(32.7,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgIQgIgHgDgMQgDgNAAghIAAh5IgVAAIgGgCIgCgFIAAgGQAAgHAXgUIAKgIIAIgIQAYgVAIABIAGABQADACAAAEIAAAqIAzAAQAFAAACADQACACAAAGIAAAFQAAAGgCACQgCADgFAAIgvAAIgDACIgCAFIAABwQAAAdAFAHQAFAIANAAQAHAAAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNAAgLgFg");
	this.shape_3.setTransform(12.1,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgVgTABgfQAAglAagTQAagUAvAAQALAAAGADQAFAEABAIQgBANgPAAQgWAAgNALQgOAKgBATQABASAMALQALALAUAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgIgLQgJgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgGgGABgKQAAgVAagOQAagPApAAQAYAAATAHQASAGAJANQAHAJADANQACAOAAAhIAABHQAAANADAHQACAGAEABIAHACQAPAEAAAIQAAAKgQAJQgPAJgUAAQgKAAgLgMg");
	this.shape_4.setTransform(-7.8,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgIQgIgHgDgMQgDgNAAghIAAh5IgVAAIgGgCIgCgFIAAgGQAAgHAXgUIAKgIIAIgIQAYgVAIABIAGABQADACAAAEIAAAqIAzAAQAFAAACADQACACAAAGIAAAFQAAAGgCACQgCADgFAAIgvAAIgDACIgCAFIAABwQAAAdAFAHQAFAIANAAQAHAAAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNAAgLgFg");
	this.shape_5.setTransform(-28.1,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRBUQghghAAgyQABgyAhgiQAigiAxAAQAyAAAeAgQAfAfAAAyQABAzgiAjQgiAkgvAAQgyAAgfgigAgqhDQgOASAAAfQAAAsATAeQASAeAbAAQAWAAAOgTQANgSAAgfQAAgrgTgeQgSgegaAAQgXAAgNASg");
	this.shape_6.setTransform(-48.8,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah0CgQgNgDAAgLQAAgIAOgGIAKgFQAFgEACgaQACgbAAhHIgChVQgCghgDgEQgCgDgMgFQgMgFAAgJQAAgIAHgEQAHgEAOAAIAXAAIAaAAIAtgBIAkgBQAzAAAZAWQAZAVAAArQAAAwgfAZQgfAXg8AAQgWAAAAgOQAAgQATAAQAcAAASgPQARgPAAghQAAgfgRgPQgSgPglAAQgQAAgHACQgGADgDAGIgCAVIgBAvIAABjIABBAQACARAEADIAKAFQAOAFAAAJQAAALgMADQgNAEgkAAQgjAAgMgEg");
	this.shape_7.setTransform(-74.5,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhiCJQgbgfAAgxQAAg3AfgiQAegiAxAAIAPACQAHACAEAEQAEAFAAAGQAAANgPAAIgGgBIgGAAQgZAAgPAUQgPAUAAAjQAAAnAQAXQARAYAZAAQAXAAANgNQANgNAAgZIAAg+IAAhoQAAgQgDgGQgDgFgIgEIgGgBQgOgFAAgIQAAgFAFgFQAGgEARgHIAZgHIAVgCQAIAAADAEQAEAEAAAKIgBAMIgCCLIABBeQACAWADACIAQAGQAMACAAAJQAAAKghAKIgWAHIgRABQgHAAgDgDQgCgDAAgIIAAgLIgBgEIgBgCIgHAEIgKAIQgNALgMAEQgNAFgOAAQgrAAgageg");
	this.shape_8.setTransform(68.3,-42.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_9.setTransform(42.3,-37.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfCiQgKgDgBgJQAAgJAMgEIAIgDQAGgDABgKQACgKAAgYQAAhIgJgRQgJgTgXAAQgLAAgMAHQgKAIgHAKQgEAKgCARQgCASAAAsQAAAXACAIQACAHAEADIAIADQAMAEAAAJQAAAJgLADQgLAEgdgBQgkABgKgEQgLgEAAgKQAAgHALgEIAFgDQAHgDACgKQADgJAAgZIAAgkIAAgjIgChmQgBgZgDgFQgDgCgOgEQgNgEAAgIQAAgGAGgEQAGgEATgIIAXgGIAVgCQAIAAACADQADAFAAAKIAAAKIgCBaIAAALIABAFIAEACIAFgFIAHgKQAMgLANgFQALgGAPABQAnAAASAYQAUAZgBAzIABAUIAAApIAAAMQAAAMACAFQACAFAFADIAGACQALAEAAAIQAAAKgKAEQgLAEgkgBQgeABgLgEg");
	this.shape_10.setTransform(16.5,-42.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_11.setTransform(-6.4,-37.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgUgTAAgfQAAglAagTQAagUAvAAQALAAAGADQAFAEAAAIQAAANgPAAQgWAAgNALQgOAKgBATQAAASAMALQANALATAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgJAFgJAKIgFAGQgOASgPAAQgJAAgFgGQgGgGAAgKQAAgVAagOQAbgPApAAQAYAAATAHQASAGAJANQAHAJADANQADAOgBAhIAABHQABANACAHQACAGAEABIAIACQANAEAAAIQAAAKgOAJQgPAJgVAAQgKAAgLgMg");
	this.shape_12.setTransform(-27.8,-37.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABUCfQgMgEAAgKQAAgJAOgFIAKgFQAEgDACgKQABgKAAgfIAAgLIAAhgIgBg5IgdBLQhCCsgOAAQgHAAgNgXQgNgYgghJIgxhxIgCBYIgBA9IABAqQACAKADADIAKAFQAOAFAAAJQAAAKgLAEQgMAEgcAAQgYAAgLgEQgMgFAAgJQAAgIANgGQAMgGABgEQADgLAEg6QADg6AAhHIAAgHQAAgYgCgIQgCgIgFgDIgLgFQgOgFAAgJQAAgJAKgDQAKgEAhAAIAgABIAJACQAEADAQAoIANAgIAHAQQA2CHAEAAQAFAAAVgwQAUgwAchQIAEgNQAIgZAHgIQAEgEAJgBIAfgCQAeAAAKAEQAKADAAAJQAAAJgNAFIgGACQgHAEgCAJQgCAJAAAjIACCAQACA5ACAJQACAFAKAEIAEABIAJAGQADADAAAFQAAAKgNAEQgMAEglAAQgiAAgNgEg");
	this.shape_13.setTransform(-60.7,-42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mashedpotatoes, new cjs.Rectangle(-90.7,-71.6,181.4,111.2), null);


(lib.mainsidesforeight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBAIgEgCQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgFIAAgFIABgGIADgEIA3grQAEgEADgEQAEgFAAgGQAAgEgDgEQgBgEgEgDQgDgCgFgBIgHgBQgIAAgEACIgJAGIgGAFQgDADgDAAIgEgBIgEgDIgEgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAFgGAFgEQAFgEAFgDQAMgFANAAQAJAAAIADQAJACAGAFQAGAFAEAIQAEAHAAAKQAAALgGAIQgHAIgIAGIghAZIgBACIgBACQAAADADABIAwAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIACAEIABADIAAAEIgBAGQgBADgEAAg");
	this.shape.setTransform(90.6,-21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJA/IgEgBIgFgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAhOIgBgDIgEAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEAAgDgDQgCgEAAgEIABgGQABgDACgBIAEgCIAGgEIAHgEIAHgFIAFgDIAEAAIAEABQABABAAAAQABABAAAAQAAABAAAAQABABAAAAIAABwQAAAEgEABIgFACg");
	this.shape_1.setTransform(81.1,-21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgA/IgDAAIgDgCIgCgBIgVghIgDgEQgDgBgDAAIgPAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAABAAAAQgBABAAAAQAAABAAAAIAAAgQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgEABIgFAAIgEAAQgEAAgCgBQgCgBAAgEIAAhzQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIADgBIA1AAQAKAAAIADQAIADAHAFQAFAGAEAIQADAHAAALQAAALgEAGQgEAGgEADIgJAIQgFACAAACIABAEIAFAGIAHALIAGAKIAEAGQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACIgFACIgEABgAgagoQgCABAAAEIAAAcQAAAEACABQADACADAAIAZAAQAFAAAEgBQAFgBAEgCQACgDACgEQACgEAAgFQAAgLgGgFIgJgEIgJgBIgZAAIgGABg");
	this.shape_2.setTransform(67.4,-21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBAIgOgEIgLgGIgKgIQgJgIgFgMQgDgGgBgHQgCgGABgHQgBgGACgGQABgHADgGQAFgMAJgJIAKgHIALgGIAOgEIAMgBIAOABIAMAEQANAFAJAIQAJAJAFAMQAFAMABANQgBAHgBAGQgBAHgDAGQgFAMgJAIQgJAJgNAFIgMAEIgOABIgMgBgAgPgnQgIADgGAGQgGAGgEAIQgDAIAAAIQAAAJADAIQAEAIAGAGQAGAGAIADQAIADAHAAQAJAAAHgDQAIgDAGgGQAGgGAEgIQADgIAAgJQAAgIgDgIQgEgIgGgGQgGgGgIgDQgHgDgJAAQgHAAgIADg");
	this.shape_3.setTransform(53,-21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpA/QgFAAgCgDIAAh1QAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABgBIAEgBIBWAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAEIABAEIAAADIgBAGQgBADgDABIg/AAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQgCACAAACIAAAQQAAABAAAAQAAABAAAAQABABAAAAQAAABABABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAoAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABAEIABAFIAAADIgCAFQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgoAAIgDABIgCABIgBACIgBADIAAAtIgDACIgEABIgFABg");
	this.shape_4.setTransform(41.2,-21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcA9QgNgFgKgLIgBgCIgBgCIACgEIADgEIAFgEIAEgBQADAAADADIAIAFIALAFQAGACAIAAIAJAAQAFgBAFgCQAEgCADgEQADgEAAgFQAAgFgDgEQgEgCgFgCIgNgDIgOgCIgPgDQgHgCgGgDQgGgEgDgFQgEgHAAgKQAAgKAFgHQAFgHAIgEQAIgFAJgDQAJgBAHAAIANAAIAMADIAMAFIAKAIIABACIAAABIgBAGIgEADIgFADIgFABIgDgBQgHgFgHgEQgIgDgIAAIgIABQgFABgEABQgEADgCADQgDAEAAAEQAAAIAGACQAGADAJACIASADQALABAJADQAJADAGAHQAGAGAAAOQAAALgFAHQgGAIgIAFQgIAFgJADQgKACgJAAQgNAAgOgEg");
	this.shape_5.setTransform(23,-21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqA/IgEgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhzQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAEgCIBXAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABIABADIAAAFIAAAEIgBAEIgDADIhBAAIgDACQgBABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIAAARQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIApAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABAFIABAFIAAADQAAAFgFACIgoAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAATQAAABAAAAQAAABAAABQAAAAABAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIBAAAQAEACAAAFIAAAEIAAAFIgCAEQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_6.setTransform(11.5,-21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0A/IgFgBQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAhyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIAvAAIAMABIANAEQAMAEAKAIQAJAJAFALQADAGABAGQABAHAAAGQAAAOgFAMIgGALIgJAJIgKAHIgLAFQgMAFgNAAgAgigmQgCACAAADIAABFQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIAEACIAXAAQAIAAAIgDQAIgDAGgFQAGgFAEgIQADgHAAgKQAAgIgDgIQgEgHgGgGQgGgFgIgDQgIgDgIAAIgWAAQgDAAgDACg");
	this.shape_7.setTransform(-1.9,-21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABBIgEAAQgEAAgDgEIAAh5QABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAEgCIAEAAIAEAAQAFAAACAFIAAB3IgDAEIgEABg");
	this.shape_8.setTransform(-12.4,-21.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcA9QgNgFgKgLIgBgCIgBgCIACgEIADgEIAFgEIAEgBQADAAADADIAIAFIALAFQAGACAIAAIAJAAQAFgBAFgCQAEgCADgEQADgEAAgFQAAgFgDgEQgEgCgFgCIgNgDIgOgCIgPgDQgHgCgGgDQgGgEgDgFQgEgHAAgKQAAgKAFgHQAFgHAIgEQAIgFAJgDQAJgBAHAAIANAAIAMADIAMAFIAKAIIABACIAAABIgBAGIgEADIgFADIgFABIgDgBQgHgFgHgEQgIgDgIAAIgIABQgFABgEABQgEADgCADQgDAEAAAEQAAAIAGACQAGADAJACIASADQALABAJADQAJADAGAHQAGAGAAAOQAAALgFAHQgGAIgIAFQgIAFgJADQgKACgJAAQgNAAgOgEg");
	this.shape_9.setTransform(-21.3,-21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA/QgJgDgHgFQgGgEgEgIQgEgHAAgKQAAgJADgHQAEgHAIgEIABgCIABgDIgBgEIgDgFIgEgGIgBgJQAAgJAEgGQADgHAGgEQAGgEAHgCQAIgCAHAAQAHAAAIACQAIADAGAFQADACAAADIgCAEIgDADIgDADIgEABQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAIgEgEIgEgDQgDgBgFAAIgHABIgGADIgEAFQgCAEAAADQAAAJADADQAEAEAEABIAIABQAFAAABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAFIgBADQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgKABQgGABgEACQgEADgDAEQgCAEAAAGQAAAGACAEIAGAHQADACAFABQAEACAFAAQAJAAAGgEQAGgEAEgHQADgGABgIIABgQIABgDIAAgDIAEgFQADgDAEAAIATAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIABAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgDABIgEAAIgEACIgCADIgBADQAAAMgEAKQgDAKgHAIQgGAIgKAEQgJAEgMAAQgJAAgIgCg");
	this.shape_10.setTransform(-38.9,-21.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlBCQgCgBgDgDIgzhHQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIAABAQgCAEgCABIgHABIgHgBQgEAAgBgFIAAh2QAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIADgCIAFAAIADAAQAGAAADAEIAzBEIADABIACgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIAAhAIADgDIADgBIAFgBIAEABQAGAAACAFIAAB3IgDAEIgGABg");
	this.shape_11.setTransform(-57.7,-21.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAABBIgEAAQgEAAgDgEIAAh5QABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAEgCIAEAAIAEAAQAFAAACAFIAAB3IgDAEIgEABg");
	this.shape_12.setTransform(-67.1,-21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAuA/IgHAAQgDgBgCgDIgHgRIgCgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgqAAIgCAAIgCABIgCACIgBABIgGARIgDACIgDABIgEABIgDAAIgEAAIgEAAIgDgCIgBgCIAzh2QAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAIAEgBIAFABQAEAAABADIAxB1IAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgFABgAgBgTIgBABIgBAEIgDAGIgDAHIgDAGIgCAGIgBACIABADIACABIAZAAIACgBIABgCIgCgGIgEgJIgEgLIgDgGIgDgBg");
	this.shape_13.setTransform(-76,-21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAqA/IgFgBQgEgBAAgEIAAg5QAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIgUAfQgCAEgDAAIgEgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgRgfQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIgBACIAAA4QgCAFgDABIgIAAIgDAAIgDgBIgDgCIgBgDIAAhyQACgEADAAIAIgBIADABIAEADIAeAyQACAEAEAAIADgBIACgDIAfgyQADgEAHAAIAFAAQACAAACAEIAABzQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgFACIgEAAg");
	this.shape_14.setTransform(-89.1,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainsidesforeight, new cjs.Rectangle(-98.2,-32.2,196.4,22.4), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.herbstuffing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTCTQgdgRAAgZQAAgMAGgGQAGgIANAAQAJgBAGAGQAFAFADALQAFARAOAJQAPAKAbAAQAdgBAUgLQAUgMAAgRQAAgLgHgFQgIgHgOABIgaABIgiACQgoAAgWgNQgVgOAAgSQAAgMAHgKQAIgKARgKQgOgMgGgOQgHgPAAgRQAAglAcgYQAcgYAqAAIAXACIAjAGQAIAAAKgEQAKgEAOgKIAHAHIADAIQAAAJgIAJQgHAJgNAHIAHASIACASQAAAmgbAYQgbAWgsAAIgYgCIgVgEIgHAJIgDAIQAAALALAEQALAGAWgBIAigBIAjgEQAgAAAQAOQARAMAAAYQAAAkgjAYQgkAYg1AAQgrAAgdgSgAgkhwQgMAPAAAXQAAAWALAPQAMAOASgBQASABANgOQANgOAAgXQAAgYgNgOQgMgPgSABQgSgBgMAPg");
	this.shape.setTransform(125,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuBwQgMgEAAgKQAAgIALgEIAGgCQAGgDACgHQADgIAAgRIAAgQIgBgSIAAgWQAAgkgBgLQgCgKgFgDIgKgDQgOgFAAgIQAAgEAEgFQAEgDAKgFIAhgKIAXgEQAGAAADADQADAEAAAHIAAAPIABACIABABIABAAIABgBIAFgEIAFgFQAYgWAcAAQAQAAAQAGQAOAIALAMQAKAMAFARQAEARAAAlIAAAdIAAAPIAAAMQAAARACAHQACAGAGADIAGACQALAEAAAIQAAAKgLAEQgKADgjAAQggAAgKgDQgLgDAAgJQAAgJALgEIAJgDQAFgDACgKQACgKAAgYQAAhIgJgSQgJgSgYAAQgLAAgLAHQgLAIgGALQgFALgCARQgCARAAAsQAAAWACAIQACAHAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgegBQgiABgLgEg");
	this.shape_1.setTransform(98.8,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_2.setTransform(78.9,-13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/CiQgLgDAAgKQAAgHAKgEIAHgCQAFgDACgHQACgIAAgTIAAgWIAAhsIgZAAQgGAAgCgCQgBgDAAgGIAAgFQgBgGADgDQACgCAGAAIAXAAIgCgSIgBgQQAAgiAVgTQAVgTAkAAQAZAAARALQAPAMAAASQABAKgGAGQgGAFgLAAQgIAAgFgDQgGgDgEgGIgEgIQgIgRgNAAQgJAAgEAGQgGAGAAAIIAGAaQAEATABAQIAgAAQAGAAACACQACACAAAHIAAAFQAAAGgCACQgDADgFAAIggAAIAABzQAAAdACAJQACAJAEACIAJAEQANAEAAAJQAAAJgLADQgLADggAAQghAAgLgDg");
	this.shape_3.setTransform(68.1,-14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/CiQgLgDAAgKQAAgHALgEIAFgCQAGgDACgHQACgIAAgTIAAgWIAAhsIgZAAQgFAAgCgCQgCgDAAgGIAAgFQAAgGACgDQACgCAGAAIAXAAIgCgSIgBgQQAAgiAVgTQAVgTAkAAQAZAAAQALQARAMgBASQABAKgGAGQgGAFgLAAQgHAAgGgDQgGgDgEgGIgEgIQgIgRgNAAQgIAAgFAGQgFAGgBAIIAGAaQAEATAAAQIAhAAQAGAAACACQACACAAAHIAAAFQAAAGgCACQgDADgFAAIggAAIAABzQAAAdACAJQACAJAEACIAJAEQANAEAAAJQAAAJgLADQgLADggAAQghAAgLgDg");
	this.shape_4.setTransform(55.3,-14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIAAgBIgCgBQgCAAgFAGIgEADQgKALgNAGQgNAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTABgvIAAgPIAAgRIAAgFQAAgSgDgFQgCgFgJgDIgJgDQgMgEAAgIQAAgFAEgEQAFgEAQgFIAegJIAZgDQAFAAAEAFQACAEAAAKIAAAJIgCBUQAAAuAJARQAKASAWAAQAaAAAKgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQAAgFAEgEQAEgEAQgFIAegJIAYgDQAGAAAEAEQACAFAAAKIAAANIgDBcIABAmIABAPQABAJAMAFIAAAAIAFABQAMAFAAAHQAAAFgDAEQgFAEgKAEIgfAKQgRAEgIAAQgGAAgDgDg");
	this.shape_5.setTransform(33.3,-8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgHQgIgIgDgMQgDgNAAgiIAAh4IgVAAIgGgBIgCgHIAAgFQAAgHAXgVIAKgIIAIgHQAYgUAIgBIAGADQADABAAAEIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHAAAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_6.setTransform(12.2,-10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3CjQgZgGgQgJQgJgFgGgUQgGgTAAgZQAAgLAEgFQAEgGAHAAQALAAALAVIAFAJQAPAZARAMQARALAXAAQAYAAARgPQARgOAAgWQAAgfhCgdIgHgEQg3gXgSgUQgSgUAAggQAAgoAegaQAegaAwAAIAaACIAfAHIAJgGIAIgCQAFAAAFAEQAEADAFAJQAHANAFAPQAEAPAAALQAAAIgDAEQgEAEgGAAQgMAAgMgQIgDgEQgNgRgPgIQgPgIgSAAQgZAAgPAMQgOALAAAVQAAASAMAMQAMANAwAUIAJAFQApAQASAQQAMALAGAPQAHAQAAASQAAAuggAaQggAZg5AAQgbAAgZgFg");
	this.shape_7.setTransform(-9.1,-13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfCiQgSgFgNgKIgPAJQgGAEgGAAIgIgBIgJgDIAAgEQAJgJADgUQAEgUAAgyIAAgyIAAgzQAAgqgCgOQgCgOgFgDIgMgEQgOgDAAgIQAAgFAEgEQAFgEARgGIAbgIIAVgDQAKAAACADQAEADAAAIIgBANIgCBCIAABjIAAA7QAAAhALALQALAMAZAAQAbAAAQgYQAQgYAAgqQAAglgPgUQgQgVgaAAIgIAAIgFABQgQAAAAgQQAAgLAQgHQAQgGASAAQAsAAAZAdQAZAeABAwQAAA6ghAiQgfAig2AAQgVAAgTgFg");
	this.shape_8.setTransform(-48.8,-13.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEBwQgLgEAAgKQAAgHALgEIAHgDQAFgDADgHQACgIAAgRIgBgQIAAgSIAAgNQAAgpgBgMQgCgNgFgDIgKgDQgOgFAAgIQAAgFAFgEQADgDAKgFIAfgKIAUgDQALgBAEAfIAAAFIABABQAMgTANgJQAMgJANAAQAPAAAKAJQAJAJAAAQQAAAQgHAJQgHAJgNAAIgMgDIgJgGIgFgJQgCgGgDAAQgPAAgHAWQgFAVAABEQAAAUACAKQADAKAFADIAJACQAOAEAAAKQAAAJgNADQgMAEgegBQgjABgLgEg");
	this.shape_9.setTransform(-69,-9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_10.setTransform(-90,-8.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyCfQgMgEAAgKQAAgJAOgFIAKgFQAEgDACgOIABg1IAAggIgCgJQgDgEgLgCQgLgCgqAAIgvACQgNABgEADIgCAHIgBARIAAATIABA1QABAOAEADIALAFQANAFAAAJQAAAKgMAEQgNAEgkAAQgjAAgMgEQgNgEAAgKQAAgJAOgFIAKgFQAFgEACgcQACgdAAhDIgChUQgCgigDgEQgCgDgMgFQgMgFAAgJQAAgJAKgDQAKgEApAAQAoAAAKAEQAKADAAAJQAAAJgNAFIgLAFQgEADgBAOIgCBDQAAAJAJADQAIADAhAAIASAAIAwgBQANgCAFgDIACgEIABgJIAAgKIgBg3QgCgMgEgDIgKgFQgOgFAAgJQAAgJALgDQAKgEAnAAQApAAAKADQAKAEAAAJQAAAJgOAFIgKAFQgFAEgCAeQgCAfAAA8IACBXQACAiADAEQACAEAMAEQAMAFAAAJQAAAKgMAEQgNAEgkAAQgjAAgNgEg");
	this.shape_11.setTransform(-119,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.herbstuffing, new cjs.Rectangle(-138.1,-42.8,276.3,57.6), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgYcgkyMAw5AAAMAAABJlMgw5AAAg");
	this.shape.setTransform(0,0,1.019,1.017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-160.5,-240.5,321,481), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AizEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAKAAAEgLQADgJAAgZIAAl7QAAgZgDgIQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QAEAQgGAJQgFAJgMAAQgOAAgHgOIgJgSQgGgPgPgFQgMgEggAAIhQAAQghAAgJAIQgIAJAAAiIAABlQAAAZAIAFQAFAEAdAAIAnAAQAaAAAIgEQAHgDACgNIABgFQADgVAUAAQANAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgNAAQgTAAgEgWIgBgGQgCgNgHgDQgIgEgbAAIgmAAQgdAAgFAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAQAGAhAAIBVgBQAvAAAPgfIAHgQQAJgQAOAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(21.9,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,43.9,56.7), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNBlQgFgDAAgHIAAiTQAAgLgLABIgyAAQgLgBAAgOQAAgUAKgBICfAAQAMABAAARQAAARgLABIgyAAQgLAAAAAKIAACTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape.setTransform(9.1,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,18.2,20.5), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAEQACAEAAAJQAAASgMAAIh5AAQgIAAAAAKIAAAcQAAAIAKABIBFAAQALgBAAATQAAAQgKAAIhFAAQgFAAgDADQgDADAAAFIAAAeQAAAKAKAAIB3AAQALAAAAASQAAASgLAAg");
	this.shape.setTransform(9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,18,20.4), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ah+EYQgKgJgIgYIhIjYQgCgFgEAAQgEAAgCAFIhNDYIgJAWQgDAGgFAFQgMAJgRAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgKQAAgWAdAAICvAAQAcAAAAAWQAAALgHAFQgHAFgRABQgOACgGAFQgGAFAAAKQAAAKADAJIBzFGQACAFAFAAQAEAAACgGIA/i2QAIgagHgWIgehbIgHgTQgEgJgHgFQgGgEgPgEQgNgDgGgFQgFgFAAgKQAAgZAeAAICmAAQAdAAAAAWQAAAUgcADQgQACgGAFQgGAFAAALQAAALAIAZIBgEsQACAGAEgBQAEAAABgGIBek6QADgMAAgIQAAgSgdgEQgbgCAAgWQAAgMAIgGQAHgFARAAIElAAQAVAAAJAFQAIAFAAAOQAAAKgGAHQgGAHgJAAIgRAAQgLAAgFALQgCAKAAAXIAABuQAAAdAFAHQAGAGAYAAIBzAAQAXAAAHgIQADgDAAgHIABgeIAAhoQAAgbgCgGQgCgFgFgDQgEgDgFAAIgQAAQgKAAgGgHQgHgHAAgKQAAgOAJgFQAIgFAWAAICaAAQAWAAAJAFQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBAEQgDAHAAAaIAAF8QAAAaADAIQABAFAFADQAEACAEAAIASAAQAJAAAGAHQAHAHAAAKQAAAOgJAFQgIAGgXAAIiaAAQgVAAgJgGQgIgFAAgOQAAgJAGgIQAHgHAJAAIAQAAQALAAAFgKQACgHAAgbIAAh8IgBgdQAAgHgDgEQgGgHgYAAIhzAAQgYAAgGAGQgFAHAAAdIAACBQAAAXACALQAEAKAMAAIARAAQAIAAAGAIQAGAHAAAKQAAANgIAGQgIAFgVAAIiaAAQgWAAgIgGQgJgFAAgOQAAgJAGgIQAHgHAJAAIARAAQAEAAAFgCQAEgDABgFQADgHAAgbIAAl8QAAgxgjAFQgMABgHAJQgIAJgGAWIiHGzQgJAfgKALQgKALgUAAQgTAAgLgJg");
	this.shape.setTransform(63.5,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,127,57.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhTEbIgTgEQgIAAgKAJQgKAHgJABQgLAAgGgHQgGgGgEgPIgVhWQgCgFAAgMQAAgKAIgJQAHgHAMAAQANAAAIAMIAMAQQAWAgAiASQAiARAkABQAogBAagUQAZgVAAgjQAAgggbgfQgZgbhAguQg/grgPgMQgSgOgTgWQggglAAg0QAAg+ArglQArglBGgBQAnABAhAHIAWAFIALACQAIAAAMgHQAJgIAJAAQASAAAGAYIAUBcQACAEAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgOQgOgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAPAAAaQAAAXAJANQANASAaAUIApAfQAzAjAWARQAXATAUATQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgxAAgngNg");
	this.shape.setTransform(19,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,38.1,59.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABaBkQgGgCAAgFIgOhsQgCgGgFAAQgDAAgDAEIgxA+QgEAFgFAAQgGAAgFgGIgtg8QgCgDgEAAQgFAAgBAIIgOBnQgCALgTAAQgGAAgFgDQgGgCAAgGIAViwQACgKADgDQAEgEALAAQAKAAAFAJIA4BOQAGAJADgBQAFAAAGgIIA7hQQAFgIAKAAQAHAAADADQAEACACAJIAUC0QABALgXAAQgFAAgEgDg");
	this.shape.setTransform(12.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,24.3,20.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AA6BlQgFgBgEgFIhAhFQgKgJgUAAQgFAAgEAEQgDAFAAAGIAAA7QAAAIgGACQgFACgKAAQgRAAAAgMIAAi0QAAgIAFgCQAFgDAKAAQASAAAAAMIAAA3QAAANAJAAQALAAAGgCQADgCAFgEIBJhDQAMgLANALQAMAMgKAJIhAA7QgJAHAJAKIBOBVQAIAJgGAFQgEAEgOAAQgMAAgFgCg");
	this.shape.setTransform(9.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,19.1,20.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_3, null, null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ai5EbQgWAAgIgFQgJgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAFgLQACgKAAgXIAAl7QAAgYgDgJQgBgFgFgEQgEgEgEAAIgRAAQgIAAgHgHQgHgHAAgJQAAgOAJgGQAJgFAVAAIFvAAQAZAAAFAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOIgIgSQgGgPgPgFQgMgEggAAIhtAAQgiAAgIAIQgJAJAAAiIAABlQAAAZAIAFQAEAEAeAAIBGAAQAaAAAIgEQAHgDACgNIABgFQADgVATAAQAOAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgSAAgEgWIgBgGQgCgNgHgDQgIgDgbAAIhFAAQgdAAgFADQgIAFAAAaIAACKQAAAbACAGQADAFAFADQAFADAFAAIAUAAQAJAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape.setTransform(22.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,45.1,56.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgSQAngUAmgNQAJgEgCgJQgCgKgNADQgVAEgZAAQgggBgYgJQgXgJgcgSQgggUgKgEQgugWg6AZQgWAJgLgLQgMgLAGgXQAXhVBDg4QBKg9BQAXQA0APAlA0QAnA2AeALQATAGAAAPQAAAOgRADQgbAFgjgQQgfgPgegbQgfgdgvgCQgrgCgcAVQgLAJADAGQAEAHALgCQAfgHAdAGQAoAHAbAgQAkAoAuAPQA4ASAugeIAZgXQAOgMALADQAQAEgCAUQgBAUgTAZQgiAsg9AeQhFAjgeAeQgwAvgTA9QgQAzAABRQAABxArBAQAqBBBKAAQBJAAArhCQAqhCAAhwQAAhfgXg4QgZg6g2gUQgbgLAFgTQAFgUAigDQA2gHA8AtQBoBMAACkQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape.setTransform(33.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,67.1,93.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAEAAAEgDQAFgEABgEQADgJAAgXIAAl+QAAgYgDgKQgBgEgFgEQgEgDgEAAIgRAAQgKAAgGgGQgHgHAAgKQAAgOAJgGQAJgFAWAAICdAAQAWAAAIAFQAJAGAAAOQAAAKgGAHQgHAGgJAAIgRAAQgOAAgEALQgDAGAAAcIAAFjQAAAcACAKQACAJAIAFQAGAEALACQAMABAaAAIAvAAQAwAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgEAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(20.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.4,56.7), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AjmEaQgWgDgGgEQgKgFAAgNQAAgKAGgHQAFgHAKAAIARAAQAKAAAEgLQADgJAAgYIAAl5QAAgZgDgIQgEgMgKAAIgRAAQgKAAgFgGQgGgIAAgJQAAgNAKgFQAGgEAWgDQBdgNBrAAQBOAAA1ASQA0ASAnAoQAmAlATA4QAUA5AABEQAABNgZA9QgZA+gwAlQgkAegxAOQgxAOhDAAQh0AAhUgNgAgvjrQgdAEgIAMQgLAMABAhIAAFjQgBAgAVAMQANAHAnACQBNAFArhAQAsg/gBhxQAAhvgqg/Qgqg+hMAAIgcACg");
	this.shape.setTransform(26.9,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,53.8,59), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgeAfQgNgMAAgTQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAJgKAAgQQAAgOgJgKQgKgKgPAAQgOAAgKAKg");
	this.shape.setTransform(4.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,8.8,8.9), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAvBeIgggxQgGgJgJAAIguAAQgEAAgDADQgDADAAAEIAAAxQAAAGgKABIgPABQgNAAAAgMIABi5QAAgIAIAAIBrAAQAgAAAUATQAVATgBAfQABAYgPAPIgWATQgIAGAEAGIAiAzQAFAHgFAEQgFAEgOAAQgRAAgFgJgAg4g4IAAAuQAAAFAEAEQAEABAFAAIA+AAQAQAAALgHQAMgJAAgRQAAgPgMgKQgLgIgQAAIg+AAQgNAAAAAKg");
	this.shape.setTransform(9.5,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,18.9,20.6), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAJAaIgNgVIgGAAIAAAVIgJAAIAAgzIATAAQARAAAAAQQABAMgNACIAOAVgAgKgCIAHAAQAMAAAAgHQAAgIgKAAIgJAAg");
	this.shape.setTransform(2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,3.9,5.2), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABnDxQhFg1gYhfIgBgDQgCgKgHgBQgGABgCAKIgBACQgYBfhHA2QhHA2hoAAQh/AAhLhQQhMhQAAiGQAAiGBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQADALAFgBQAHAAADgLIAAAAQAXhgBGg1QBHg3BoAAQB/AABMBPQBNBQAACFQAACIhNBQQhMBRiBAAQhmAAhHg2gACmiqQgoA/AABuQAABsAoA9QApA+BIAAQBGAAAog/QApg/ABhrQAAhrgqhAQgqg/hGAAQhGAAgpA/gAmFiqQgpA/AABuQAABsApA9QAoA+BIAAQBGAAApg/QApg/AAhrQAAhrgqhAQgpg/hGAAQhGAAgpA/g");
	this.shape.setTransform(55.8,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,111.5,59), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABCBfIgNgbQgEgGgGAAIhTAAQgJAAgEAMIgMAVQgDAIgSAAQgWAAAFgMIBZi4QAFgKAKAAQALABAFAIIBYC7QACAGgJADQgGABgIAAQgPABgDgJgAgEgdIgYAyQgCADACACQABADAEAAIAwAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQACgCgCgDIgYgzQgCgEgDABQgDAAgCADg");
	this.shape.setTransform(10.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,21,20.7), null);


(lib.ctarectanglevid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B63100").ss(2,1,1).p("Aoei+IQ9AAQBPAAA4A4QA4A4AABOIAAAAQAABPg4A4Qg4A4hPAAIw9AAQhPAAg4g4Qg4g4AAhPIAAAAQAAhOA4g4QA4g4BPAAg");
	this.shape.setTransform(0,-36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B63100").s().p("AoeC/QhPAAg4g4Qg4g4AAhPIAAAAQAAhOA4g4QA4g4BPAAIQ9AAQBPAAA4A4QA4A4AABOIAAAAQAABPg4A4Qg4A4hPAAg");
	this.shape_1.setTransform(0,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectanglevid, new cjs.Rectangle(-74.3,-56.1,148.8,40.3), null);


(lib.ctarectvid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D63900").ss(2,1,1).p("Aoei+IQ9AAQBPAAA4A4QA4A4AABOIAAAAQAABPg4A4Qg4A4hPAAIw9AAQhPAAg4g4Qg4g4AAhPIAAAAQAAhOA4g4QA4g4BPAAg");
	this.shape.setTransform(0,-36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoeC/QhPAAg4g4Qg4g4AAhPIAAAAQAAhOA4g4QA4g4BPAAIQ9AAQBPAAA4A4QA4A4AABOIAAAAQAABPg4A4Qg4A4hPAAg");
	this.shape_1.setTransform(0,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectvid, new cjs.Rectangle(-74.3,-56.1,148.8,40.3), null);


(lib.classicturkeydinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXBoQgKgKAAgOQAAgPAKgJQAKgKANAAQAOAAALAKQAJAJAAAPQAAAOgJAKQgLAKgOAAQgNAAgKgKgAgXg3QgKgKAAgOQAAgOAKgKQAKgKANAAQAOAAALAKQAJAKAAAOQAAAOgJAKQgLAKgOAAQgNAAgKgKg");
	this.shape.setTransform(145.2,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBtQgLgEAAgKQAAgHAKgEIAGgCQAGgEACgHQACgHAAgRIAAgPIAAgRIAAgNQAAgngCgMQgCgNgEgDIgKgDQgNgFAAgHQAAgFAEgDQAEgFAJgDIAegKIATgEQALABADAdIABAFIABAAQALgSANgJQAMgJAMAAQAPAAAJAJQAJAKAAAPQAAAPgHAJQgGAJgNgBIgLgCIgJgGIgFgJQgCgFgDAAQgPAAgGAUQgFAWAABBQAAATACAJQACALAGACIAJADQANAEAAAJQAAAIgMAEQgMADgeAAQghAAgKgDg");
	this.shape_1.setTransform(131.3,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHBTQgfggAAgwQAAgyAgghQAgghAxAAQAqAAAZAYQAZAYAAApQAAANgEAFQgEAEgRAAIhTAAQgHAAgEgEQgEgDAAgGQAAgGAEgDQAEgDAHAAIAtAAIALgCQADgBAAgFQAAgVgOgOQgPgPgTAAQgaAAgNAXQgMAWAAAhQAAAhARAZQARAZAbgBQAQAAAMgDQALgDAKgIIAIgGQALgJAGAAQAFAAADADQADADAAAFQAAAFgFAIQgGAIgJAGQgTAQgSAIQgRAGgVAAQguAAgfgfg");
	this.shape_2.setTransform(111,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhrBtQgLgEAAgKQAAgHALgEIAGgCQAFgEADgHQACgHAAgRIAAgPIAAgRIAAgWQAAgigCgKQgCgLgEgDIgKgDQgOgFAAgHQAAgEAFgEQAEgFAJgDIAfgKIAXgEQAGAAADAEQADADAAAHIAAAOIAAADIABAAIACAAIAAgBIAGgFIAEgDQAYgXAbAAQAPAAAPAHQAPAHAKAMQAKALAEARQAEARAAAjIAAAcIAAAPIAAAMQAAAQACAGQACAGAGAEIAFACQALAEAAAHQAAAKgKAEQgKADgiAAQgfAAgKgDQgKgEAAgIQAAgJALgDIAIgEQAFgDACgKQACgJAAgYQAAhEgJgSQgJgRgXAAQgLgBgKAIQgLAGgGAMQgEAJgCASQgCAQAAArQAAAVACAHQABAIAFACIAIAEQALADAAAJQAAAIgKAEQgLADgdAAQghAAgLgDg");
	this.shape_3.setTransform(86.3,21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrBtQgLgEAAgKQAAgHALgEIAGgCQAFgEADgHQACgHAAgRIAAgPIAAgRIAAgWQAAgigCgKQgCgLgEgDIgKgDQgOgFAAgHQAAgEAFgEQAEgFAJgDIAfgKIAXgEQAGAAADAEQADADAAAHIAAAOIAAADIABAAIACAAIAAgBIAGgFIAEgDQAYgXAbAAQAPAAAPAHQAPAHAKAMQAKALAEARQAEARAAAjIAAAcIAAAPIAAAMQAAAQACAGQACAGAGAEIAFACQALAEAAAHQAAAKgKAEQgKADgiAAQgfAAgKgDQgKgEAAgIQAAgJALgDIAIgEQAFgDACgKQACgJAAgYQAAhEgJgSQgJgRgXAAQgLgBgKAIQgLAGgGAMQgEAJgCASQgCAQAAArQAAAVACAHQABAIAFACIAIAEQALADAAAJQAAAIgKAEQgLADgdAAQghAAgLgDg");
	this.shape_4.setTransform(60.3,21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmCcQgLgDAAgKQAAgHALgEIAFgDQAGgDACgHQADgHAAgRIgBgPIAAgRIAAgXQAAgigCgKQgBgKgEgDIgLgEQgNgEAAgHQAAgFAEgEQAFgEAJgDIAhgLIAWgEQAGAAACAEQADAEAAAKIAAANIgBAKIgBA3IAAABIgBA2QAAAVACAIQACAJAFADIAIADQALAEAAAJQAAAIgKADQgMAEgcAAQggAAgLgEgAgahtQgKgIAAgLQAAgNALgJQAKgJAPAAQANAAAKAIQAJAIAAAMQAAAMgLAJQgJAIgPAAQgOAAgJgHg");
	this.shape_5.setTransform(41,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvCdIgbAAIgSAAIgSABQgbAAgJgEQgIgEAAgJQAAgIALgFQAMgEACgDQADgFADghIABhUIgChRQgCghgDgEQgBgDgMgFQgMgFAAgJQAAgIAJgEQAKgEAaAAIASABIAXAAIAdgBIAZAAQBRAAAsAqQAsAqAABNQAABMgtAnQgtAnhXAAgAgvh8QgKAEgCAGQgEAJgBAZIgBBDIABBTQABAiAEAHQACAGAOAFQAPAFATAAQAyAAAZgfQAZgeAAg9QAAhAgdgiQgcgig2AAQgSAAgJADg");
	this.shape_6.setTransform(17.9,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhkCRQgLgKAAgOQAAgLAIgHQAIgIALAAIAJABIAHAGIAFAIQAGAIAEAAQALAAAMgQQAMgQAAgRQAAgTgQgjIgCgEIgjhNIgUgqQgEgIgNgGIAAAAQgHgCgDgEQgCgCAAgGQgBgJAMgDQALgEAhAAQAfAAALADQALAEAAAIIgCAHIgEAEIgIAEQgIADAAAEIAFAQIARAsIASApQAFAKADAAQACABAFgLIAOgiIARgsQAFgPAAgGQAAgGgNgHQgMgHAAgGQAAgHALgDQAJgDAZAAQAaAAAKADQAIAEABAIQAAAIgNAEIgJADQgMAGgOAmIgGAQIgdBFQgjBbgWAcQgYAcggAAQgQgBgKgIg");
	this.shape_7.setTransform(-21.5,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhHBTQgfggAAgwQAAgyAgghQAgghAxAAQAqAAAZAYQAZAYAAApQAAANgEAFQgEAEgRAAIhTAAQgHAAgEgEQgEgDAAgGQAAgGAEgDQAEgDAHAAIAtAAIALgCQADgBAAgFQAAgVgOgOQgPgPgTAAQgaAAgNAXQgMAWAAAhQAAAhARAZQARAZAbgBQAQAAAMgDQALgDAKgIIAIgGQALgJAGAAQAFAAADADQADADAAAFQAAAFgFAIQgGAIgJAGQgTAQgSAIQgRAGgVAAQguAAgfgfg");
	this.shape_8.setTransform(-44.1,21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABHCgIgJgCQgKgDgVgbIgJgLIgDgGQg1hEgFAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIgBAKIAAAJIACAuQABANADAEIANAGQAKAEAAAJQAAAHgLAEQgLADgdAAQghAAgLgDQgKgEAAgJQAAgHAKgFIAGgCQAGgDACgKQADgLAAgaIgBgbIAAgiIAAgaIgBhRQgBgVgEgEQgCgCgKgDIgHgCIgJgEIgBgGQAAgGAEgEQAEgDAQgFIAdgJIAXgCQAGAAADADQADAFAAAKIgBAqIgCA5IAAA2IABALQABABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAKgFIAPgNIAVgVQAGgGAAgDQAAgCgIgFQgHgDAAgIQAAgKAKgDQALgEAgAAQAUAAAKAEQAKAEAAAJQAAAKgQADQgQAFgHADQgIAFgSASIgEADIgHAJIgCAEQAAAFATAYIACADIAlAuQAQASAIAGQAGAEAOAFQAOAEAAAJQAAAKgKAEQgKADgYAAg");
	this.shape_9.setTransform(-67.1,16.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBBtQgLgEAAgKQAAgHAKgEIAGgCQAGgEACgHQACgHAAgRIAAgPIAAgRIAAgNQAAgngCgMQgCgNgEgDIgKgDQgNgFAAgHQAAgFAEgDQAEgFAJgDIAegKIATgEQALABADAdIABAFIABAAQALgSANgJQAMgJAMAAQAPAAAJAJQAJAKAAAPQAAAPgHAJQgGAJgNgBIgLgCIgJgGIgFgJQgCgFgDAAQgPAAgGAUQgFAWAABBQAAATACAJQACALAGACIAJADQANAEAAAJQAAAIgMAEQgMADgeAAQghAAgKgDg");
	this.shape_10.setTransform(-88,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvBvQgCgDAAgIIAAgPIgBgBIgBAAQgCAAgFAFIgEADQgKALgNAFQgMAFgRAAQgQAAgPgGQgOgGgKgLQgKgNgEgRQgEgSgBguIAAgPIABgQIAAgEQAAgSgDgFQgCgFgIgDIgIgDQgNgDAAgIQAAgFAEgEQAFgEAPgFIAdgIIAYgDQAGAAACAEQADAFAAAJIgBAJIgCBSQAAArAKARQAJARAXAAQAXAAAMgWQAKgWAAg0IAAgRQAAgRgCgFQgDgFgHgDIgJgDQgMgDAAgIQAAgFAEgEQAEgEAQgFIAdgIIAXgDQAGAAADAEQACAEABAKIAAAMIgDBaIAAAlIACAOQABAJALAFIAFABQAMAEAAAHQAAAFgEAEQgEAEgKADIgeAKQgQAEgIAAQgGAAgDgDg");
	this.shape_11.setTransform(-110,21.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtCcQgNgEAAgKQAAgJAMgEQAMgFACgDQADgEABgkIABhmIAAg6IgCgjQgBgGgEgCQgEgCgIAAIgKAAQgPAAgIAEQgJADgGAJIgHAPIgGAOIgGAHQgEADgEAAQgHAAgDgGQgDgGAAgNQAAgdAHgSQAHgRAKAAIADAAQARADAaAAICAAAQAbAAARgDIADAAQAKAAAHARQAHASAAAdQAAANgDAGQgDAGgHAAIgIgDIgGgHIgGgOIgHgPQgGgJgJgDQgIgEgQAAIgJAAQgIAAgEACQgEACgBAGIgBAjIgBA6IABBmQABAkADAEQACADAMAFQAMAEAAAJQAAAKgNAEQgMADgiAAQghAAgMgDg");
	this.shape_12.setTransform(-137.1,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiECFQgoggAAgzQAAgcANgWQAMgUAdgUIABgCQgJgKgFgKQgFgLAAgLQAAgiAZgXQAagVAngBQAcAAASALQARAKAAAPQAAAEgDAEQgFADgGAAIgRgFQgQgHgMABQgSAAgKALQgLAMAAATQAAAIADAGQADAHAFAFQAGAFAJAFIANAEIAEACIACAEQAAAEgIAJQgIAJgHAAIgKgCIgPgGQgMALgHAPQgGAQAAATQAAAqAbAbQAcAbAqABQAjAAAWgTQAWgTAAgdQAAgSgJgMQgJgLgPAAQgPAAgKAJQgJAKAAAOIAAADIAAADIgEABIgCAAQgIAAgGgFQgEgHAAgKQAAggBggsIAGgDQAZgMANgOQANgNABgPQgBgKgFgGQgGgEgLAAIgJABIgHAAQgGAAgCgCQgEgEAAgEQAAgKANgHQAMgGASAAQAYAAANANQAOANAAAWQAAAbgYAWQgXAXgxASQAUAIALAQQALARAAAWQAAAQgHAQQgGAPgNAOQgUAWgeAKQgeALgmAAQhDAAgogeg");
	this.shape_13.setTransform(55.4,-35.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiwBsQgLgDAAgJQAAgIALgEIAFgDQAGgDACgHQACgHAAgRIAAgOIAAgSIAAgNQAAgngCgMQgCgNgEgDIgKgDQgNgFAAgHQAAgFADgEIAPgHIAfgLIAWgEQAGAAADAEQADADAAAIIAAAMIAAACIAAACIACABIABAAIABgBIAFgEIACgDQAagYAbAAQAKAAAKADQAKADAIAGQAIAFAIALQAIAKACgBQADABAGgIIAJgJQAOgMALgFQALgEANAAQAZAAATAKQATAKAJATQAKAUAABAIAAAVIAAAMIgBAKQAAAMACAGQACAFAGADIAGADQAKAEABAIQgBAJgJADQgLAEgiAAQgfAAgLgEQgLgDABgIQAAgJALgEIAIgEQAGgDACgKQACgLAAgaQAAhAgJgSQgJgQgXAAQgagBgKAWQgMAXAAA0IAAAMQAAAXADAIQACAHAGADIAFADQALAEAAAIQAAAJgKADQgKAEgiAAQgdAAgKgEQgLgDAAgIQAAgJALgDIAJgEQAEgDACgJQACgJAAgZQAAhFgJgRQgJgRgXAAQgLAAgLAGQgLAIgFALQgFAKgCASQgCARAAApQAAAUABAHQADAIAFADIAIAEQALADAAAJQAAAIgLADQgLAEgdAAQghAAgKgEg");
	this.shape_14.setTransform(3.4,-30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAnBnIgMgMIgJAFQgbASgbAAQggAAgTgSQgUgTAAgeQAAgjAZgTQAagTAtAAQALAAAFADQAGADAAAJQAAAMgPAAQgVAAgOAKQgNALAAASQAAASAMAKQALALATAAQAVAAAJgKQAJgJAAgXIAAhTQAAgTgIgKQgJgLgOAAQgLAAgJAFQgJAFgJAKIgFAFQgNARgPAAQgIAAgFgFQgGgGAAgJQAAgVAagOQAZgOAoAAQAXAAASAGQARAHAKAMQAGAIADAOQADANAAAfIAABGQAAAMACAGQACAGAEACIAHACQAOADAAAIQAAAKgPAJQgOAIgUAAQgKAAgKgLg");
	this.shape_15.setTransform(-27.8,-30.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAxCaQgMgEAAgJQAAgJANgFIAKgFQAEgDACgOIABgzIAAgfIgCgIQgDgEgLgCQgKgCgpAAIguACQgMABgEADIgDAGIAAARIAAASIABAzQACAOAEADIAJAFQANAFAAAJQAAAJgMAEQgMAEgiAAQgjAAgLgEQgNgEAAgJQAAgJAOgFIAKgFQAEgEACgbQACgcAAhBIgChRQgCghgDgEQgBgDgMgFQgMgFAAgJQAAgIAKgDQAKgEAnAAQAmAAAKAEQAKADAAAIQAAAJgNAFIgJAFQgFADgBAOIgCBAQAAAJAJADQAIADAfAAIASAAIAugBQANgBAEgEIADgEIABgIIAAgKIgBg2QgCgLgEgDIgKgFQgNgFAAgJQAAgIAKgDQAKgEAmAAQAoAAAJADQAKAEAAAIQAAAJgOAFIgJAFQgFAEgCAdQgCAeAAA6IACBUQACAhADAFQACADALAEQAMAFAAAJQAAAJgMAEQgMAEgjAAQgjAAgLgEg");
	this.shape_16.setTransform(-56.3,-35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.classicturkeydinner, new cjs.Rectangle(-153.3,-63.6,306.7,107.9), null);


(lib.butternutsquash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgCiQgLgEAAgIQAAgJALgEIAJgEQAFgDACgJQACgKAAgYQAAhJgJgRQgKgSgYAAQgLAAgKAIQgMAGgFALQgGALgBAQQgCASAAAtQAAAWACAHQABAIAGACIAIAEQALAEAAAJQAAAIgLAEQgLADgdABQgkgBgLgDQgKgDAAgLQAAgHAKgEIAHgDQAGgDADgKQACgJAAgZIAAglIAAgiIgBhmQgCgYgEgFQgCgDgNgEQgOgEAAgIQAAgGAGgEQAGgEAUgIIAWgGIAVgDQAHAAAEAFQADAEAAAKIAAAJIgCBaIAAALIABAGIADACIAFgFIAIgJQALgLANgGQAMgFAOgBQAmAAAUAZQASAaABAxIAAAWIAAAoIAAANQAAALACAFQADAFAFADIAFADQALADAAAIQAAALgKADQgLADgkABQgdgBgLgDg");
	this.shape.setTransform(61.1,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_1.setTransform(38.2,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgVgTAAgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEAAAIQAAANgQAAQgWAAgOALQgNAKAAATQAAASAMALQALALAUAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgJAFgJAKIgFAGQgNASgQAAQgJAAgFgGQgFgGgBgKQABgVAagOQAagPApAAQAZAAARAHQATAGAJANQAHAJADANQADAOAAAhIAABHQAAANACAHQACAGAFABIAGACQAOAEAAAIQAAAKgPAJQgPAJgUAAQgKAAgLgMg");
	this.shape_2.setTransform(16.8,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIAAgBIgBgBQgDAAgFAGIgEADQgKALgNAGQgNAFgRAAQgRAAgPgGQgPgHgKgLQgLgNgEgSQgEgTAAgvIAAgPIAAgRIAAgFQAAgSgCgFQgDgFgJgDIgJgDQgMgEAAgIQAAgFAFgEQAEgEAQgFIAegJIAZgDQAFAAAEAFQACAEAAAKIgBAJIgBBUQAAAuAJARQAJASAYAAQAYAAAMgXQALgXAAg2IAAgRQAAgSgCgFQgDgGgIgCIgJgDQgNgEAAgIQABgFAEgEQAEgEAQgFIAegJIAYgDQAHAAADAEQACAFAAAKIgBANIgCBcIABAmIABAPQACAJALAFIABAAIAEABQAMAFAAAHQAAAFgEAEQgEAEgKAEIgfAKQgQAEgJAAQgGAAgDgDg");
	this.shape_3.setTransform(-9.2,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYCbQgMgEAAgKQAAgIALgFIAMgHQAEgFACgOIABgoIAAiKQAAgZgMgMQgNgNgYAAQgbAAgPAVQgQAUAAAlQAAAmAQAWQARAYAZAAIAIAAIAIgBQALAAAAAMQAAANgOAJQgNAIgXAAQgoAAgbgeQgagfAAgvQAAg5AfgiQAggiAzAAQAPAAAPADQAPAEANAGIAZgLIAPgDIAGACIABAGIAAAGIgCAgIAAB2IAAASQAAA4ACASQACASAFAFIALAGQAKAFAAAHQAAALgLADQgMAEghAAQghAAgLgDg");
	this.shape_4.setTransform(-35.3,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3CjQgZgGgQgJQgJgFgGgUQgGgTAAgZQAAgLAEgFQAEgGAHAAQALAAALAVIAFAJQAPAZARAMQARALAXAAQAYAAARgPQARgOAAgWQAAgfhCgdIgHgEQg3gXgSgUQgSgUAAggQAAgoAegaQAegaAwAAIAaACIAfAHIAJgGIAIgCQAFAAAFAEQAEADAFAJQAHANAFAPQAEAPAAALQAAAIgDAEQgEAEgGAAQgMAAgMgQIgDgEQgNgRgPgIQgPgIgSAAQgZAAgPAMQgOALAAAVQAAASAMAMQAMANAwAUIAJAFQApAQASAQQAMALAGAPQAHAQAAASQAAAuggAaQggAZg5AAQgbAAgZgFg");
	this.shape_5.setTransform(-61.9,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgHQgIgIgDgMQgDgNAAgiIAAh4IgVAAIgGgBIgCgHIAAgFQAAgHAXgVIAKgIIAIgHQAYgUAIgBIAGADQADABAAAEIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHAAAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_6.setTransform(92.4,-39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIAAgBIgCgBQgCAAgFAGIgEADQgKALgNAGQgNAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTABgvIAAgPIAAgRIAAgFQAAgSgDgFQgCgFgJgDIgJgDQgMgEAAgIQAAgFAEgEQAFgEAQgFIAegJIAZgDQAFAAAEAFQACAEAAAKIAAAJIgCBUQAAAuAJARQAKASAWAAQAaAAAKgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQAAgFAEgEQAEgEAQgFIAfgJIAXgDQAGAAAEAEQACAFAAAKIAAANIgDBcIABAmIABAPQABAJAMAFIAAAAIAFABQAMAFAAAHQAAAFgDAEQgFAEgKAEIgfAKQgRAEgIAAQgGAAgDgDg");
	this.shape_7.setTransform(70.7,-37.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuBwQgMgEAAgKQAAgIALgEIAGgCQAGgDACgHQADgIAAgRIAAgQIgBgSIAAgWQAAgkgBgLQgCgKgFgDIgKgDQgOgFAAgIQAAgEAEgFQAEgDAKgFIAhgKIAXgEQAGAAADADQADAEAAAHIAAAPIABACIABABIABAAIABgBIAFgEIAFgFQAYgWAcAAQAQAAAQAGQAOAIALAMQAKAMAFARQAEARAAAlIAAAdIAAAPIAAAMQAAARACAHQACAGAGADIAGACQALAEAAAIQAAAKgLAEQgKADgjAAQggAAgKgDQgLgDAAgJQAAgJALgEIAJgDQAFgDACgKQACgKAAgYQAAhIgJgSQgJgSgYAAQgLAAgLAHQgLAIgGALQgFALgCARQgCARAAAsQAAAWACAIQACAHAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgegBQgiABgLgEg");
	this.shape_8.setTransform(43.9,-37.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBwQgLgEAAgKQAAgHALgEIAFgDQAGgDACgHQADgIAAgRIAAgQIAAgSIAAgNQAAgpgCgMQgCgNgFgDIgLgDQgNgFAAgIQAAgFAEgEQAEgDALgFIAegKIAUgDQALgBADAfIABAFIACABQALgTAMgJQANgJANAAQAQAAAJAJQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgDIgJgGIgGgJQgDgGgCAAQgQAAgGAWQgFAVAABEQAAAUACAKQACAKAHADIAJACQANAEAAAKQAAAJgMADQgNAEgegBQgiABgLgEg");
	this.shape_9.setTransform(22.4,-37.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_10.setTransform(1.4,-37.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgHQgIgIgDgMQgDgNAAgiIAAh4IgVAAIgGgBIgCgHIAAgFQAAgHAXgVIAKgIIAIgHQAYgUAIgBIAGADQADABAAAEIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHAAAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_11.setTransform(-18.4,-39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgHQgIgIgDgMQgDgNAAgiIAAh4IgVAAIgGgBIgCgHIAAgFQAAgHAXgVIAKgIIAIgHQAYgUAIgBIAGADQADABAAAEIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHAAAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_12.setTransform(-34.4,-39.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgNAFgQAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgEgTgBgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAFgEQAEgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIgBAJIgCBUQAAAuAKARQAJASAYAAQAYAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgNgEAAgIQAAgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIgBANIgCBcIAAAmIACAPQABAJAMAFIABAAIADABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_13.setTransform(-56.2,-37.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQCjIgsgCIgWABIgaABQgPAAgIgFQgIgEAAgIQAAgJAMgFQAMgEACgEQADgFACggIAChYIgChVQgCghgDgEQgCgDgMgFQgMgFAAgJQAAgIAHgEQAGgEAOAAIAYAAIAaAAIAtgBIAkgBQAxAAAaAUQAaAVAAAlQAAAfgTATQgSAUgkAGQAtAEAYAVQAYAWAAAlQAAArgdAXQgfAXg2AAgAgiiCQgIACgCADQgDAGgBAVIgCBBIAABeIACAsQABANADAGQADAFALACQAMADASAAQAlAAATgQQAUgPAAgeQAAgggWgPQgWgPgpAAQgTAAAAgNQAAgQATAAQAdAAATgNQATgOAAgeQAAgdgRgOQgSgOglAAg");
	this.shape_14.setTransform(-85.2,-42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.butternutsquash, new cjs.Rectangle(-102.4,-71.6,204.8,111.2), null);


(lib.andsomuchmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape.setTransform(119.4,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(101.2,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEBwQgLgDABgLQgBgIALgDIAHgDQAFgDADgIQACgHAAgSIAAgOIAAgSIAAgOQgBgpgBgNQgCgMgFgCIgKgFQgOgEAAgHQAAgGAFgDQADgFAKgDIAfgKIAUgFQALAAAEAfIAAAFIACAAQALgSANgJQAMgKANAAQAPAAAKAKQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgCIgJgHIgGgJQgDgGgCAAQgPAAgHAWQgFAWAABDQAAAUACAKQADAKAGACIAJAEQANADAAAKQAAAIgNAEQgMADgeABQgjgBgLgDg");
	this.shape_2.setTransform(81.2,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSBUQgfghAAgyQAAgyAhgiQAigiAyAAQAwAAAgAgQAeAfAAAyQAAAzghAjQghAkgxAAQgwAAghgigAgqhDQgOASAAAfQAAAsATAeQASAeAbAAQAWAAAOgTQAOgSAAgfQgBgrgSgeQgUgegZAAQgXAAgNASg");
	this.shape_3.setTransform(59.4,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai3BwQgLgDAAgLQAAgIALgDIAGgDQAGgDADgIQACgHAAgSIAAgOIgBgSIAAgOQAAgpgBgNQgCgMgFgCIgKgFQgOgEAAgHQAAgFAEgEIAOgIIAigLIAWgFQAGABADADQADAEAAAIIAAAMIAAADIABACIABABIABgBIABAAIAFgGIADgCQAbgZAcAAQAKAAAKAEQAKADAJAGQAHAGAJAJQAIALACAAQADAAAGgHIAKgKQAPgMALgFQALgEANgBQAaAAAUALQATAKAJAUQAKAUAABCIABAWIgBAMIAAAKQAAANADAGQACAGAFADIAGADQAMADAAAIQAAAKgLAEQgLADgjAAQggAAgLgDQgLgEAAgIQAAgJAMgEIAIgEQAGgDACgLQACgMAAgaQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAXAAA1IAAANQAAAYADAIQACAIAGADIAGADQALADAAAIQAAAKgLAEQgKADgjAAQgeAAgLgDQgLgEAAgIQAAgJALgEIAJgEQAFgCACgKQACgJAAgaQAAhGgJgTQgJgSgYAAQgMAAgLAIQgLAGgGAMQgFALgCASQgCASAAAqQAAAVACAIQACAHAFADIAIAEQAMAEAAAJQAAAIgLAEQgMADgdABQgjgBgLgDg");
	this.shape_4.setTransform(25.8,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfCiQgLgEABgIQAAgJALgEIAIgEQAFgDADgJQABgKAAgYQABhJgKgRQgJgSgYAAQgKAAgLAIQgMAGgGALQgEALgCAQQgCASAAAtQAAAWACAHQACAIAEACIAJAEQALAEAAAJQAAAIgLAEQgLADgdABQgkgBgLgDQgKgDAAgLQAAgHAKgEIAGgDQAHgDACgKQADgJAAgZIAAglIAAgiIgChmQgBgYgDgFQgDgDgNgEQgOgEAAgIQAAgGAGgEQAFgEAVgIIAWgGIAVgDQAIAAADAFQACAEAAAKIAAAJIgBBaIAAALIAAAGIAEACIAFgFIAIgJQALgLANgGQAMgFAOgBQAmAAAUAZQASAaAAAxIABAWIAAAoIAAANQAAALACAFQADAFAEADIAGADQALADAAAIQAAALgKADQgLADgkABQgdgBgMgDg");
	this.shape_5.setTransform(-21,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGBVQghghAAgxQAAgzAigiQAigjAyAAQAlAAAaAUQAaATAAAaQAAAKgHAHQgIAHgKAAQgMAAgHgGQgHgFgIgTQgHgQgJgGQgJgHgNAAQgZAAgPAUQgPATAAAjQABAnAUAaQAVAZAgAAQAKAAALgDQAKgDAIgGIAJgGQAMgKAHAAQAFAAACADQADACAAAFQAAAGgEAIQgGAIgHAGQgRAQgUAHQgTAIgWAAQgvAAgfghg");
	this.shape_6.setTransform(-45.6,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_7.setTransform(-70.9,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai3BwQgLgDAAgLQAAgIALgDIAGgDQAGgDADgIQACgHAAgSIAAgOIgBgSIAAgOQAAgpgBgNQgCgMgFgCIgKgFQgOgEAAgHQAAgFAEgEIAOgIIAigLIAWgFQAGABADADQADAEAAAIIAAAMIAAADIABACIABABIABgBIABAAIAFgGIADgCQAbgZAcAAQAKAAAKAEQAKADAJAGQAHAGAJAJQAIALACAAQADAAAGgHIAKgKQAPgMALgFQALgEANgBQAaAAAUALQATAKAJAUQAKAUAABCIABAWIgBAMIAAAKQAAANADAGQACAGAFADIAGADQAMADAAAIQAAAKgLAEQgLADgjAAQggAAgLgDQgLgEAAgIQAAgJAMgEIAIgEQAGgDACgLQACgMAAgaQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAXAAA1IAAANQAAAYADAIQACAIAGADIAGADQALADAAAIQAAAKgLAEQgKADgjAAQgeAAgLgDQgLgEAAgIQAAgJALgEIAJgEQAFgCACgKQACgJAAgaQAAhGgJgTQgJgSgYAAQgMAAgLAIQgLAGgGAMQgFALgCASQgCASAAAqQAAAVACAIQACAHAFADIAIAEQAMAEAAAJQAAAIgLAEQgMADgdABQgjgBgLgDg");
	this.shape_8.setTransform(-105.1,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhSBUQgfghAAgyQgBgyAigiQAigiAyAAQAwAAAgAgQAeAfAAAyQAAAzghAjQgiAkgwAAQgwAAghgigAgqhDQgOASAAAfQAAAsATAeQATAeAaAAQAWAAAOgTQAOgSAAgfQgBgrgSgeQgUgegZAAQgXAAgNASg");
	this.shape_9.setTransform(73.7,-37.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_10.setTransform(51.1,-37.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhiCJQgbgfAAgxQAAg3AfgiQAegiAxAAIAPACQAHACAEAEQAEAFAAAGQAAANgPAAIgGgBIgGAAQgZAAgPAUQgPAUAAAjQAAAnAQAXQARAYAZAAQAXAAANgNQANgNAAgZIAAg+IAAhoQAAgQgDgGQgDgFgIgEIgGgBQgOgFAAgIQAAgFAFgFQAGgEARgHIAZgHIAVgCQAIAAADAEQAEAEAAAKIgBAMIgCCLIABBeQACAWADACIAQAGQAMACAAAJQAAAKghAKIgWAHIgRABQgHAAgDgDQgCgDAAgIIAAgLIgBgEIgBgCIgHAEIgKAIQgNALgMAEQgNAFgOAAQgrAAgageg");
	this.shape_11.setTransform(16.4,-42.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhuBwQgMgEAAgKQAAgIALgEIAGgCQAGgDACgHQADgIAAgRIAAgQIgBgSIAAgWQAAgkgBgLQgCgKgFgDIgKgDQgOgFAAgIQAAgEAEgFQAEgDAKgFIAhgKIAXgEQAGAAADADQADAEAAAHIAAAPIABACIABABIABAAIABgBIAFgEIAFgFQAYgWAcAAQAQAAAQAGQAOAIALAMQAKAMAFARQAEARAAAlIAAAdIAAAPIAAAMQAAARACAHQACAGAGADIAGACQALAEAAAIQAAAKgLAEQgKADgjAAQggAAgKgDQgLgDAAgJQAAgJALgEIAJgDQAFgDACgKQACgKAAgYQAAhIgJgSQgJgSgYAAQgLAAgLAHQgLAIgGALQgFALgCARQgCARAAAsQAAAWACAIQACAHAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgegBQgiABgLgEg");
	this.shape_12.setTransform(-11.3,-37.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgUgTAAgfQAAglAZgTQAbgUAvAAQALAAAGADQAFAEAAAIQAAANgPAAQgWAAgOALQgOAKABATQgBASAMALQANALATAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgGgGAAgKQAAgVAagOQAbgPApAAQAYAAATAHQARAGAKANQAHAJADANQACAOAAAhIAABHQABANACAHQACAGAEABIAIACQANAEAAAIQAAAKgOAJQgPAJgVAAQgKAAgLgMg");
	this.shape_13.setTransform(-36.5,-37.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_14.setTransform(-55.1,-29.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_15.setTransform(-67.6,-29.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_16.setTransform(-80.1,-29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.andsomuchmore, new cjs.Rectangle(-127.7,-71.6,255.4,111.2), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqoZMQk7iFjyjyQjxjyiFk6QiKlFAAlkQAAljCKlFQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE6CFDyDxQDyDyCFE7QCKFFAAFjQAAFkiKFFQiFE7jyDxQjxDyk7CFQlFCKlkAAQljAAlFiKgALRMiQAAAOALAAIAyAAQALAAAAALIAACTQAAAIAGACQADACAKAAQAKAAAEgCQAFgCAAgIIAAiTQAAgLAMAAIAxAAQALAAAAgSQAAgRgMAAIigAAQgKAAAAAVgADSONIBCBFQADAEAFACQAGACALAAQAOAAAEgFQAGgEgIgJIhOhWQgJgKAKgIIBAg6QAJgJgMgMQgNgMgLALIhLBEQgFAEgDABQgGADgKAAQgKAAAAgNIAAg3QAAgMgRAAQgLAAgEADQgFACgBAIIAAC1QAAAMARAAQALAAAEgCQAGgDAAgHIAAg7QAAgHADgEQAEgEAFAAQAVgBAJAKgAhvOXQAKAAAGAJIAgAxQAFAJARAAQAOAAAFgFQAFgEgFgGIgigzQgEgGAHgGQAPgKAIgJQAOgQAAgYQABgfgVgTQgUgTggAAIhsAAQgIAAAAAIIgBC6QAAAMANAAIAPgBQAKgBAAgGIAAgxQAAgEADgDQADgDAEAAgAmPOxQAGAAAEAGIAMAbQAEAIAPAAQAIAAAGgCQAJgDgDgGIhXi8QgFgIgLAAQgMAAgEAKIhZC4QgGAMAXAAQASABADgIIAMgWQAEgLAIAAgArGNjIAOBtQAAAFAFACQAFADAEAAQAYAAgBgLIgVi2QgCgIgDgCQgEgDgGAAQgLAAgEAIIg8BQQgFAIgFAAQgFABgGgJIg3hOQgFgJgLAAQgKAAgEAEQgDADgCAKIgVCxQAAAGAGACQAFADAGAAQATAAACgLIANhoQACgIAEAAQAEAAADADIAtA9QAFAGAGAAQAGAAAEgFIAxg/QADgEADAAQAFAAACAGgAGyMaIAACwQAAAOANAAICcAAQAKAAAAgRQAAgSgKgBIh6AAQgJAAAAgKIAAgeQAAgFADgDQADgCAFAAIBGAAQAKAAAAgSQAAgSgLAAIhHAAQgJAAAAgJIAAgbQAAgKAIAAIB7AAQALAAAAgSQAAgKgCgDQgCgFgHABIicAAQgNAAAAANgAT5IwQgNANAAATQAAASANAMQANAOASAAQATAAAMgOQANgMAAgSQAAgTgNgNQgMgNgTAAQgSAAgNANgAP5JKQAnALAyAAQBUAAAzgsQAygtAAhKQAAgggMgfQgMgegWgWQgUgVgWgSQgXgRgzgkIgpgdQgbgVgNgSQgJgOAAgVQAAgaARgQQASgQAeAAQAtAAAiAcQAOAKAHAHQAGAHAOAVQAKAPAMAAQALAAAHgGQAHgGAAgIQAAgIgCgEIgUhcQgFgXgTAAQgJAAgJAGQgMAIgHAAIgMgCIgWgFQghgIgoABQhFAAgrAlQgsAmABA9QAAA0AfAmQAUAVARAPQAPALA/AsQBBAuAZAbQAcAggBAfQABAjgaAUQgaAWgpAAQgkAAgigSQghgTgWgfIgNgRQgIgLgNAAQgMAAgHAIQgIAHAAAMQAAAKACAHIAWBUQAEAQAFAGQAGAHALgBQAJAAALgIQAJgIAJAAIASAFgAjHGJIABACQAYBeBFA2QBHA2BkAAQCCAABMhRQBMhQAAiJQAAiFhMhPQhNhQh+AAQhoAAhHA3QhFA1gYBgIAAAAQgCALgHABQgHAAgCgLQgYhghHg2QhHg3hoAAQiAAAhMBRQhLBQAACIQAACFBLBQQBMBQB+AAQBoAABIg2QBHg2AYhfIAAgBQACgMAIAAQAGABADALgAFnIeQgGAGAAAKQAAAOAJAEQAIAEAUADQBVANB0AAQBFABAxgOQAvgOAlgeQAwgmAZg9QAZg9AAhOQAAhFgTg4QgVg5glglQgngng1gSQg1gThOABQhrAAheAMQgUAEgIAEQgJAEAAAOQAAAJAGAHQAGAHAIAAIARAAQALAAAEALQADAJAAAYIAAF6QAAAYgDAJQgEAMgLAAIgRAAQgIAAgGAHgAyyIfQgHAIABAJQAAAOAJAFQAIAFAWABICcAAQAYgBAJgFQAJgFAAgOQAAgKgHgHQgGgGgKAAIgTAAQgFgBgFgDQgGgDgCgFQgCgGAAgbIAAiKQAAgZAIgGQAEgDAeAAIBGAAQAbAAAHAEQAIADABANIABAFQAFAWASAAQANAAAGgIQAFgKAAgWIAAhIQAAgVgFgJQgGgJgNAAQgTAAgEAVIgBAGQgBAMgIAEQgHADgaAAIhHAAQgeAAgEgDQgIgGAAgZIAAhlQAAgiAIgJQAJgIAjAAIBtAAQAfAAANAEQAPAFAFAPIAIASQAIAOAOAAQAMAAAFgIQAGgKgEgPIgMg8QgFgVgZAAIlwAAQgVAAgJAGQgJAFAAAOQAAAJAGAIQAIAGAIAAIARAAQAEAAAEAEQAFAEAAAGQAEAIAAAYIAAF8QAAAXgCAKQgGAMgJAAIgSAAQgIAAgHAGgACorXQABAJgIAEQgoANgnAUQglASgaATQg5AoggBCQgfBEAABZQgBCLBPBTQBOBUCFABQCGAABQhVQBPhVAAiOQABilhohMQg9gtg2AHQgiAEgEAUQgFATAaAKQA2AUAZA8QAXA3ABBfQAABwgrBCQgrBChJAAQhLAAgqhBQgrhAAAhxQAAhRAQgzQATg+AwgvQAegeBGgiQA+gfAhgsQATgYABgVQACgTgQgFQgLgDgOANIgZAWQguAeg4gRQgvgPgjgpQgcgfgogIQgcgGgfAHQgLACgEgGQgCgHALgJQAbgUArABQAuADAfAcQAeAbAgAPQAjARAbgGQARgDAAgOQAAgPgTgGQgegLgng1Qgmg0g0gQQhOgWhLA9QhDA3gXBVQgGAXAMALQALALAWgJQA6gZAuAWQAKAFAgAUQAcARAWAJQAYAKAhAAQAYAAAWgEIAFgBQAJAAACAIgAvClPIBIDYQAHAXALAJQALAJATAAQATABALgLQAKgLAJggICImzQAGgXAIgJQAHgIALgCQAjgFAAAxIAAF+QAAAbgCAGQgBAFgFADQgEACgFAAIgQAAQgJABgHAGQgGAIgBAJQAAAPAJAEQAJAGAVAAICbAAQAVAAAIgFQAIgGAAgNQAAgKgGgHQgGgIgJAAIgQAAQgMAAgEgKQgCgLAAgWIAAiCQgBgcAGgIQAGgGAXAAIBzAAQAYAAAHAHQACAFABAGIAAAeIAAB8QAAAbgBAGQgGAKgKAAIgRAAQgIABgHAGQgGAIAAAJQAAAPAIAEQAJAGAVAAICaAAQAWAAAJgGQAJgEAAgPQAAgKgHgHQgGgGgKgBIgRAAQgEAAgFgCQgEgDgBgFQgDgIAAgZIAAl+QAAgaADgHQABgEAEgDQAFgEAEAAIARAAQAKAAAGgGQAHgIAAgKQgBgOgIgFQgJgFgWAAIiaAAQgWAAgIAFQgJAFAAAOQAAAKAGAIQAHAGAJAAIARAAQAFAAADADQAFADADAFQABAGAAAbIAABpIAAAdQgBAHgCADQgHAJgYgBIhzAAQgXAAgGgGQgGgHABgdIAAhuQAAgXACgKQAFgLALAAIAQAAQAKAAAFgGQAHgIAAgKQgBgOgHgFQgJgFgVAAIkmAAQgRAAgIAGQgHAFgBANQAAAVAcACQAeAEAAATQAAAHgEANIheE7QgBAFgFABQgDAAgCgGIhgktQgIgZgBgKQAAgMAHgEQAFgGARgCQAcgDgBgUQABgWgdAAIimAAQgfAAAAAaQABAJAFAFQAGAFANADQAPAEAGAEQAHAFADAJIAHAUIAfBaQAHAWgIAaIg/C3QgCAGgEAAQgFAAgCgEIhzlIQgDgIAAgLQAAgKAGgFQAGgFAOgBQARgBAGgGQAIgEgBgMQABgWgcAAIivAAQgdAAAAAWQAAAKAFAFQAFAGANACQAVAEAHAHQAHAIAJAaICnG/QAJAYALAIQAKAKATgBQARABALgKQAFgEADgHIAJgVIBOjZQABgFAEAAQAFAAACAGgAOkiCQgGAHAAAJQAAAOAJAFQAHAGAWAAIFjAAQAZAAAFgVIANhDQADgPgFgKQgEgIgNAAQgOAAgIAQIgHAQQgPAfgwAAIhUABQgigBgRgFQgKgEgDgLQgDgMAAghIAAhsQAAgZAIgFQAGgEAdAAIAmAAQAbAAAIAEQAHADACANIABAFQAEAXATAAQANgBAGgIQAEgKAAgWIAAhHQAAgWgEgJQgGgIgNgBQgTABgEAUIgBAGQgCAMgHAEQgHADgbAAIgnAAQgdAAgGgDQgIgFAAgaIAAhlQAAghAIgJQAJgJAjAAIBQAAQAfABANAEQAPAFAFAPIAJASQAHAOAOAAQANAAAEgJQAGgJgEgQIgMg7QgEgWgaAAIlTAAQgVABgJAFQgJAGAAAOQAAAJAGAHQAIAHAIAAIARAAQAEAAAEAEQAFADABAGQADAIAAAZIAAF8QAAAZgDAIQgCAFgDADQgEAEgFAAIgRAAQgJAAgGAGgAHyiCQgFAHAAAJQAAAOAIAFQAIAGAVAAIE/AAQAZAAAGgVIAMhDQAEgPgFgKQgFgIgMAAQgPAAgIAQIgHAQQgPAfgvAAIgwAAQgaAAgMgCQgMgBgGgEQgIgFgCgKQgCgJAAgcIAAllQABgbACgGQAEgLAOAAIASAAQAJAAAHgGQAGgHABgKQgBgOgIgGQgJgFgXgBIidAAQgWABgJAFQgJAGAAAOQAAAKAHAHQAGAGAKAAIARAAQAEAAAFADQAEADABAFQADAKABAXIAAGAQgBAXgDAIQgBAFgEADQgFAEgEAAIgRAAQgJAAgGAGg");
	this.shape.setTransform(0,0,0.217,0.217);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAPABAKAJQAKALAAAOQAAAPgKAKQgKALgPgBQgOABgKgLgAAWAZIgPgVQANgCAAgMQAAgQgRAAIgTAAIAAAzIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(28.3,12.8,0.217,0.217);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgEAAgFIAAgtQAAgKANAAIA+AAQAQAAALAJQALAJAAAPQAAAQgLAJQgLAJgQAAg");
	this.shape_2.setTransform(-2.4,18.4,0.217,0.217);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(28.3,12.6,0.217,0.217);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_4.setTransform(-10.6,6.5,0.217,0.217);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgDAAgCgCQgBgDABgDIAZgxQACgEACAAQADAAACADIAZAzQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-9.6,19.1,0.217,0.217);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDsQgngCgNgHQgUgMgBggIAAljQAAghALgMQAIgMAdgEIAdgDQBKAAArA/QArA+AABvQgBBxgqBAQgqA8hFAAIgKgBg");
	this.shape_6.setTransform(14,6.5,0.217,0.217);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hFAAQhHAAgpg9g");
	this.shape_7.setTransform(1.5,6.5,0.217,0.217);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(15,-8.1,0.217,0.217,0,0,0,20.3,28.4);
	this.instance.alpha = 0.789;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.2,-11.7,0.217,0.217,0,0,0,33.5,46.8);
	this.instance_1.alpha = 0.789;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21.3,6.6,0.217,0.217,0,0,0,22.6,28.4);
	this.instance_2.alpha = 0.789;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.2,36,0.217,0.217,0,0,0,0.2,0.2);
	this.instance_3.alpha = 0.789;

	this.instance_4 = new lib.CompoundPath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.6,19.2,0.217,0.217,0,0,0,10.6,10.4);
	this.instance_4.alpha = 0.789;

	this.instance_5 = new lib.Path_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.9,19.2,0.217,0.217,0,0,0,9.7,10.4);
	this.instance_5.alpha = 0.789;

	this.instance_6 = new lib.Path_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16.9,19.2,0.217,0.217,0,0,0,12.2,10.4);
	this.instance_6.alpha = 0.789;

	this.instance_7 = new lib.Path_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(23.9,6.6,0.217,0.217,0,0,0,19.2,29.5);
	this.instance_7.alpha = 0.789;

	this.instance_8 = new lib.CompoundPath_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-4.5,6.6,0.217,0.217,0,0,0,55.8,29.5);
	this.instance_8.alpha = 0.789;

	this.instance_9 = new lib.CompoundPath_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(28.4,12.8,0.217,0.217,0,0,0,2.1,2.6);
	this.instance_9.alpha = 0.789;

	this.instance_10 = new lib.Path_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-16.2,-7.9,0.217,0.217,0,0,0,63.4,29.1);
	this.instance_10.alpha = 0.789;

	this.instance_11 = new lib.CompoundPath_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-2.4,19.2,0.217,0.217,0,0,0,9.7,10.4);
	this.instance_11.alpha = 0.789;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(11.4,19.2,0.217,0.217,0,0,0,9,10.4);
	this.instance_12.alpha = 0.789;

	this.instance_13 = new lib.Path_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(17.6,19.2,0.217,0.217,0,0,0,9.2,10.2);
	this.instance_13.alpha = 0.789;

	this.instance_14 = new lib.CompoundPath_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(28.3,12.9,0.217,0.217,0,0,0,4.6,4.6);
	this.instance_14.alpha = 0.789;

	this.instance_15 = new lib.CompoundPath_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(13.5,6.6,0.217,0.217,0,0,0,27,29.5);
	this.instance_15.alpha = 0.789;

	this.instance_16 = new lib.Path_10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(24.8,-8.1,0.217,0.217,0,0,0,21.9,28.4);
	this.instance_16.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogo, new cjs.Rectangle(-37.9,-37.9,75.9,75.9), null);


(lib.ctarollvid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// order-now
	this.instance = new lib.ordernowvid();
	this.instance.parent = this;
	this.instance.setTransform(-3,-1.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

	// Layer 1
	this.instance_1 = new lib.ctarectanglevid();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,-56.1,148.8,40.3);


// stage content:
(lib.interstitialseventeen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_332 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(300).call(this.frame_332).wait(2));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(160.4,240.1,1.553,0.731,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(334));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(334));

	// white-fade
	this.instance_1 = new lib.whiterectanglefadeone();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.5,239);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(325));

	// white-logo
	this.instance_2 = new lib.whitelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160,37);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.11,scaleY:0.11},0).to({scaleX:1.34,scaleY:1.34,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.24,scaleY:1.24},7,cjs.Ease.get(1)).wait(312));

	// cta-rollover
	this.cta_rollover = new lib.ctarollvid();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(160,293.8);
	this.cta_rollover.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(32).to({alpha:1},10).wait(292));

	// order-now
	this.instance_3 = new lib.ordernow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(157,293.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({y:291.6},0).to({alpha:1},10).wait(292));

	// cta-rectangle
	this.instance_4 = new lib.ctarectvid();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160,293.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({alpha:1},10).wait(292));

	// main-and-sides
	this.instance_5 = new lib.mainsidesforeight();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160,232.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(321).to({alpha:1},10).wait(3));

	// classic-turkey-meal
	this.instance_6 = new lib.classicturkeydinner();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,158.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(321).to({y:149.8},0).to({alpha:1},10).wait(3));

	// and-so-much-more
	this.instance_7 = new lib.andsomuchmore();
	this.instance_7.parent = this;
	this.instance_7.setTransform(160,176.8);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(288).to({alpha:1},10).wait(23).to({alpha:0},5).wait(8));

	// pumpkin-apple-pies
	this.instance_8 = new lib.pumpkinapplepies();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,176.8);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(255).to({alpha:1},10).wait(23).to({alpha:0},5).wait(41));

	// butternut-squash
	this.instance_9 = new lib.butternutsquash();
	this.instance_9.parent = this;
	this.instance_9.setTransform(160,176.8);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(222).to({alpha:1},10).wait(23).to({alpha:0},5).wait(74));

	// herb-stuffing
	this.instance_10 = new lib.herbstuffing();
	this.instance_10.parent = this;
	this.instance_10.setTransform(160,178.6);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(189).to({alpha:1},10).wait(23).to({alpha:0},5).wait(107));

	// mashed-potatoes
	this.instance_11 = new lib.mashedpotatoes();
	this.instance_11.parent = this;
	this.instance_11.setTransform(160,158.8);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(156).to({y:176.6},0).to({alpha:1},10).wait(23).to({alpha:0},5).wait(140));

	// spiral-cut-ham
	this.instance_12 = new lib.spiralcutham();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160,176.8);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(123).to({alpha:1},10).wait(23).to({alpha:0},5).wait(173));

	// roasted-turkey
	this.instance_13 = new lib.roastedturkey10lb();
	this.instance_13.parent = this;
	this.instance_13.setTransform(160,176.6);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(90).to({alpha:1},10).wait(23).to({alpha:0},5).wait(206));

	// whats-in-our-classic-turkey0dinner
	this.instance_14 = new lib.whatsinour();
	this.instance_14.parent = this;
	this.instance_14.setTransform(160,178.7);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(22).to({alpha:1},10).wait(58).to({alpha:0},5).wait(239));

	// berries
	this.instance_15 = new lib.seventeenberries_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(277,47.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(72).to({alpha:1},10).wait(252));

	// turkey
	this.instance_16 = new lib.seventeenturkey_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(215.5,384.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(67).to({alpha:1},10).wait(257));

	// cranberries
	this.instance_17 = new lib.seventeencranberries_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(77.3,458);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(62).to({alpha:1},10).wait(262));

	// spinach
	this.instance_18 = new lib.seventeenspinach_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(19,440);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(57).to({alpha:1},10).wait(267));

	// ham
	this.instance_19 = new lib.seventeenham_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(67,313.5);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(52).to({alpha:1},10).wait(272));

	// greens
	this.instance_20 = new lib.seventeengreens_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(297.5,244.7);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(47).to({alpha:1},10).wait(277));

	// pie
	this.instance_21 = new lib.seventeenpie_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(48.5,50.5);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(42).to({alpha:1},10).wait(282));

	// table
	this.instance_22 = new lib.seventeentable_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(334));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(154.1,232.1,335,494);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg", id:"index_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;