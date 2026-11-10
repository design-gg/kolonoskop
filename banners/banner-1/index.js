(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_NP_1", frames: [[0,0,360,600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.backgroundimage = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.white_eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,28.1).ss(0.3,0,0,4).p("AAAkXQB0AABSBSQBSBSAABzQAAB0hSBSQhSBRh0AAQhzAAhRhRQhShSAAh0QAAhzBShSQBRhSBzAAg");
	this.shape.setTransform(28.05,28.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.788)","rgba(255,255,255,0.78)","rgba(223,223,223,0.769)"],[0,0.843,1],0,0,0,0,0,28.1).s().p("AjGDGQhShSAAh0QAAhzBShTQBThSBzAAQB0AABSBSQBTBTAABzQAAB0hTBSQhSBTh0AAQhzAAhThTg");
	this.shape_1.setTransform(28.075,28.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjGDGQhShSAAh0QAAhzBShTQBThSBzAAQB0AABSBSQBTBTAABzQAAB0hTBSQhSBTh0AAQhzAAhThTg");
	this.shape_2.setTransform(28.075,28.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white_eye, new cjs.Rectangle(-0.9,-0.9,57.9,57.9), null);


(lib.t2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(150,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEE00").s().p("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");
	this.shape_1.setTransform(149.975,41.7519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,300,82), null);


(lib.t1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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gdQgDgVACgFQAAgHAGABQAFgCACAHQADAFACATIACATQACAPgBALQAAAHgFADQgFADgRABIAGA0QAPgBAFACQAGADADAJQAEAJACAUIACAYQAEAigBAGQgBAIgGACQgFAAgDgFQgCgHgCgWIgGg5gAPdgoIA3gKIgEg8IATgCIAKA5IA2gKIAAAAQAFAAADgCQAagEAMgGQAMgGADgQQAEgQgFghIgXirIAPAAIAiDuIA1gJIgrkhIh4AAIAeDlQADAVgDAFQgDAEgKABIAHAzQglifghiYIhMAAgAT1l4QgLAIgGAOQgFAQABARQACAVAGAoIAIAxIAKA9QAFARAKANQALAPANAEQAOAFARgDQARgDAMgKQALgJAGgQQAFgNgBgSQgBgNgIgsIgHgtIgMg4QgEgRgKgNQgKgOgOgGQgOgIgRAAQgQAAgMAIgA06D9QgCgQAAhDIAAlkQAAg9ACgKQACgNAEAAQAFAAABAPQACATAAAxIABFeQAABDgCASQgBASgGABIAAABQgFAAgBgPgAyvgNQAMgBADALQADAJAAAtIAABrQAAAygDAKQgEAKgKABgAnoB8QgCgMgBg1IgHkcQgBgxACgIQACgKAEAAQAFAAABAMQADAMAAAqIAHEWQACA2gCAOQAAAOgGACIgBAAQgFAAgBgMgAqFj8IAAgEIAQgBIAHF3IgcAEQAJjDgEizgAlgg9QAMAAADAHQACAJACAkIABA1QABAkgDAJQgCAKgMADgAH2gZIgTj1QgDgiACgFQACgIAEAAQAEAAADAIQACAJACAdIAODEQADAmAAAJQgCALgFAAIgBAAQgFAAgBgIgAjXkAQAJCKAIBeIgTACQAAhcACiOgAL5knIAXCcIgSACQgDhHgChXgAUxiWQgDgEgEgZIgUiBQgEgUACgFQABgEAEAAQAFAAADAEIAFAZIAVB9QADAWAAAIQgBAIgFAAIgBAAQgFAAgBgFgAlnkaQAIAAADADQADADACALQADAMAAAaQACA1gCAKQgCALgIAAIgFACgAQCkyQAQBfAJApIgSACQgDgggEhqg");
	this.shape.setTransform(147.4482,48.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEE00").s().p("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");
	this.shape_1.setTransform(147.4333,47.9792);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,294.9,96.3), null);


(lib.pupil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#404040"],[0,1],-13.1,2.8,13.1,-2.8).s().p("AheBfQgngnAAg4QAAg2AngnQAngoA3AAQA3AAAoAoQAnAnAAA2QAAA4gnAnQgoAng3AAQg3AAgngng");
	this.shape.setTransform(13.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pupil, new cjs.Rectangle(0,0,26.8,26.8), null);


(lib.mark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.694)").s().p("AAFArIAAhLIgMAOIgFgEIASgUIAHAAIAABVg");
	this.shape.setTransform(237.7,23.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.694)").s().p("AgRApQgHgEgEgHIAEgEQAJAMAPAAQAKAAAGgFQAGgFAAgIQAAgJgGgFQgHgEgKAAIgIAAIAAgGIAIAAQAJAAAHgEQAFgEAAgIQAAgIgFgEQgHgFgIAAQgNAAgJALIgFgFQAKgNARAAQAMAAAIAGQAIAGAAALQAAAGgDAFQgEAFgEACQgDACgFAAQAIABAGAFQAHAFgBAKQAAALgHAHQgIAHgOAAQgJAAgIgEg");
	this.shape_1.setTransform(232.35,23.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.694)").s().p("AAKArIAAgXIgoAAIAAgHIAmg3IAKAAIAAA3IANAAIAAAHIgNAAIAAAXgAgWANIAgAAIAAgwg");
	this.shape_2.setTransform(225.475,23.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.694)").s().p("AAFArIAAhLIgMAOIgFgEIASgUIAHAAIAABVg");
	this.shape_3.setTransform(219.6,23.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.694)").s().p("AgQArIAjhPIguAAIAAgGIA3AAIAAAFIgkBQg");
	this.shape_4.setTransform(214.675,23.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.694)").s().p("AgNApQgHgEgEgHQgDgHgCgHQgCgIAAgIQAAgHACgIQACgHADgHQAEgHAHgEQAFgEAIAAQAJAAAGAEQAGAEAEAHQAEAHACAHQABAIAAAHQAAAIgBAIQgCAHgEAHQgEAHgGAEQgGAEgJAAQgHAAgGgEgAgLgiQgEAEgDAFIgEAMIgBANIABAOIAEAMQADAFAEAEQAGADAFAAQAGAAAGgDQAEgEADgFQADgGABgGIABgOIgBgNQgBgGgDgGQgDgFgEgEQgGgDgGAAQgFAAgGADg");
	this.shape_5.setTransform(207.45,23.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.694)").s().p("AgZAiIAFgGQAHAKALAAQAGAAAFgDQAGgEACgFIAFgMQABgHAAgHIAAgDQgEAEgGAFQgIAEgHAAQgMAAgIgHQgHgGgBgNQAAgLAJgJQAHgIANAAQAHAAAFADQAFACAEAEQADAEADAGQADAGABAGIABANIgBANIgFAMQgCAGgDAEQgFAFgFACQgGADgGAAQgPAAgIgLgAgQgfQgGAHAAAIQAAAKAGAFQAGAFAJAAQAHAAAGgEQAHgEAEgGQgBgHgCgGQgDgFgFgFQgGgEgGAAQgLAAgFAGg");
	this.shape_6.setTransform(199.7,23.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.694)").s().p("AgNApQgHgEgEgHQgDgHgCgHQgCgIAAgIQAAgHACgIQACgHADgHQAEgHAHgEQAFgEAIAAQAIAAAHAEQAGAEAEAHQAEAHACAHQABAIAAAHQAAAIgBAIQgCAHgEAHQgEAHgGAEQgHAEgIAAQgHAAgGgEgAgKgiQgFAEgDAFIgEAMIgBANIABAOIAEAMQADAFAFAEQAEADAGAAQAGAAAGgDQAFgEACgFQADgGABgGIABgOIgBgNQgBgGgDgGQgCgFgFgEQgGgDgGAAQgGAAgEADg");
	this.shape_7.setTransform(191.95,23.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.694)").s().p("AgQArIAjhPIguAAIAAgGIA3AAIAAAFIgkBQg");
	this.shape_8.setTransform(184.725,23.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.694)").s().p("AgZAiIAFgGQAHAKALAAQAGAAAFgDQAGgEACgFIAFgMQABgHAAgHIAAgDQgEAEgGAFQgIAEgHAAQgMAAgIgHQgHgGgBgNQAAgLAJgJQAHgIANAAQAHAAAFADQAFACAEAEQADAEADAGQADAGABAGIABANIgBANIgFAMQgCAGgDAEQgFAFgFACQgGADgGAAQgPAAgIgLgAgQgfQgGAHAAAIQAAAKAGAFQAGAFAJAAQAHAAAGgEQAHgEAEgGQgBgHgCgGQgDgFgFgFQgGgEgGAAQgLAAgFAGg");
	this.shape_9.setTransform(177.65,23.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.694)").s().p("AAbArIAAgpIg2AAIAAApIgHAAIAAhVIAHAAIAAAmIA2AAIAAgmIAIAAIAABVg");
	this.shape_10.setTransform(165.925,23.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.694)").s().p("AAbArIAAgpIg2AAIAAApIgHAAIAAhVIAHAAIAAAmIA2AAIAAgmIAIAAIAABVg");
	this.shape_11.setTransform(156.775,23.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.694)").s().p("AAbArIAAhJIg2BJIgHAAIAAhVIAHAAIAABIIA2hIIAIAAIAABVg");
	this.shape_12.setTransform(147.65,23.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.694)").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIACgDIADgCQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIACADQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_13.setTransform(134.975,27.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.694)").s().p("AgFAXIAUgXIgUgWIAGAAIAVAWIgVAXgAgVAXIAUgXIgUgWIAHAAIAUAWIgUAXg");
	this.shape_14.setTransform(130.925,24.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.694)").s().p("AgRAcQgHgHAAgJQAAgKAHgEQAGgFAJAAQAMgBAJAJIAAgNQgBgGgFgEQgEgEgHAAQgLAAgIAKIgEgGQAKgKAOAAQAKAAAGAFQAGAGAAAJIAAArIgGAAIAAgHQgJAJgMAAQgIAAgHgFgAgMABQgFAFABAGQgBAHAFAEQAFAFAHAAQAMAAAHgJIAAgOQgIgHgLgBQgHAAgFAEg");
	this.shape_15.setTransform(124.75,24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.694)").s().p("AAXAfIAAg0IgWA0IgBAAIgWg0IAAA0IgHAAIAAg+IAJAAIAUAyIAUgyIAKAAIAAA+g");
	this.shape_16.setTransform(117.525,24.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.694)").s().p("AgbAsIAAhWIAHAAIAAAKQADgFAGgDQAGgDAFAAQANAAAIAJQAHAJAAAPQAAAOgHAJQgIAJgNAAQgMAAgIgMIAAAigAgMgiQgGAEgCAEIAAAeQACAFAGADQAGAEAGAAQAJAAAGgIQAGgHAAgLQAAgMgGgHQgGgIgJAAQgGAAgGADg");
	this.shape_17.setTransform(110.025,25.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.694)").s().p("AgRAcQgHgHAAgJQAAgKAGgEQAHgFAJAAQANgBAIAJIAAgNQgBgGgFgEQgEgEgHAAQgLAAgIAKIgEgGQAKgKAOAAQAKAAAGAFQAGAGAAAJIAAArIgGAAIAAgHQgIAJgNAAQgJAAgGgFgAgMABQgFAFABAGQgBAHAFAEQAFAFAHAAQAMAAAHgJIAAgOQgIgHgLgBQgHAAgFAEg");
	this.shape_18.setTransform(102.6,24.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.694)").s().p("AgCArIAAgIQgTgBgKgKQgMgJAAgPQAAgOAMgJQAKgKATgBIAAgIIAGAAIAAAIQASABALAKQALAJgBAOQABAPgLAJQgLAKgSABIAAAIgAAEAcQAOgBAJgIQAIgHAAgMQAAgLgIgIQgJgHgOgBgAgagTQgJAIAAALQAAAMAJAHQAIAIAQABIAAg3QgQABgIAHg");
	this.shape_19.setTransform(94.3,23.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.694)").s().p("AASAfIAAg0IgjA0IgGAAIAAg+IAHAAIAAA0IAig0IAGAAIAAA+g");
	this.shape_20.setTransform(82.35,24.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.694)").s().p("AgcAaQAFAAAEgGQACgGADgOIADgfIAnAAIAAA+IgGAAIAAg4IgaAAIgEAZQgCASgFAHQgEAHgJAAg");
	this.shape_21.setTransform(74.95,24.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.694)").s().p("AgVAXQgIgJAAgOQAAgNAIgKQAIgJANAAQANAAAJAJQAIAKAAANQAAAOgIAJQgJAKgNAAQgNAAgIgKgAgQgSQgGAIAAAKQAAALAGAIQAGAIAKAAQAKAAAHgIQAGgHAAgMQAAgKgGgIQgHgHgKAAQgKAAgGAHg");
	this.shape_22.setTransform(68.175,24.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.694)").s().p("AASAqIAAg0IgjA0IgHAAIAAg+IAIAAIAAA0IAig0IAGAAIAAA+gAgWgnIAEgCQAHAJALAAQAMAAAHgJIAEACQgJAMgOAAQgNAAgJgMg");
	this.shape_23.setTransform(60.95,23.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.694)").s().p("AgRAcQgHgHAAgJQAAgKAGgEQAHgFAJAAQANgBAHAJIAAgNQAAgGgEgEQgFgEgHAAQgLAAgIAKIgEgGQAKgKAOAAQAJAAAHAFQAGAGAAAJIAAArIgHAAIAAgHQgHAJgNAAQgJAAgGgFgAgMABQgFAFAAAGQAAAHAFAEQAFAFAHAAQAMAAAGgJIAAgOQgGgHgMgBQgHAAgFAEg");
	this.shape_24.setTransform(53.9,24.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.694)").s().p("AAhArIAAhLIggBLIgBAAIghhLIAABLIgGAAIAAhVIALAAIAcBGIAdhGIAMAAIAABVg");
	this.shape_25.setTransform(45.6,23.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.694)").s().p("AAPAXIgUgXIAUgWIAHAAIgVAWIAVAXgAgBAXIgUgXIAUgWIAHAAIgUAWIAUAXg");
	this.shape_26.setTransform(37.825,24.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.694)").s().p("AgeAgQgLgNAAgTQAAgSALgNQAMgNASAAQATAAALANQAMANAAASQAAATgMANQgLANgTAAQgSAAgMgNgAgYgaQgJAKAAAQQAAARAJAKQAJALAPAAQAPAAAKgLQAJgKAAgRQAAgQgJgKQgKgLgPAAQgPAAgJALg");
	this.shape_27.setTransform(26.875,23.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.694)").s().p("AgeAgQgLgNAAgTQAAgSALgNQAMgNASAAQATAAALANQAMANAAASQAAATgMANQgLANgTAAQgSAAgMgNgAgYgaQgJAKAAAQQAAARAJAKQAJALAPAAQAPAAAKgLQAJgKAAgRQAAgQgJgKQgKgLgPAAQgPAAgJALg");
	this.shape_28.setTransform(16.925,23.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.694)").s().p("AgeAgQgLgNAAgTQAAgSALgNQAMgNASAAQATAAALANQAMANAAASQAAATgMANQgLANgTAAQgSAAgMgNgAgYgaQgJAKAAAQQAAARAJAKQAJALAPAAQAPAAAKgLQAJgKAAgRQAAgQgJgKQgKgLgPAAQgPAAgJALg");
	this.shape_29.setTransform(6.975,23.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.694)").s().p("AgDAEQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgDIADgCQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIACADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_30.setTransform(210.775,13.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.694)").s().p("AgCAfIAAg3IgTAAIAAgGIArAAIAAAGIgSAAIAAA3g");
	this.shape_31.setTransform(206.8,10.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.694)").s().p("AARAfIgYgdIgMALIAAASIgHAAIAAg9IAHAAIAAAiIAkgiIAJAAIgcAcIAcAhg");
	this.shape_32.setTransform(201.4,10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.694)").s().p("AgVAYQgIgKAAgOQAAgNAIgJQAJgKAMAAQAOAAAIAKQAIAJAAAOIAAABIg0AAQABALAHAHQAGAHAKAAQANAAAHgIIAEAEQgKAKgOAAQgNAAgKgJgAgPgTQgGAIgBAJIAtAAQAAgJgGgIQgGgHgLAAQgJAAgGAHg");
	this.shape_33.setTransform(194.05,10.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.694)").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAIgKANAAQANAAAJAKQAIAJAAANQAAAOgIAJQgJAKgNAAQgNAAgIgKgAgQgSQgGAIAAAKQAAALAGAIQAGAIAKAAQAKAAAHgIQAGgHAAgMQAAgKgGgIQgHgIgKABQgKgBgGAIg");
	this.shape_34.setTransform(186.675,10.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.694)").s().p("AgbAsIAAhWIAHAAIAAAKQADgFAGgDQAGgDAFAAQANAAAIAJQAHAJAAAPQAAAOgHAJQgIAJgNAAQgMAAgIgMIAAAigAgMgiQgGAEgCAEIAAAeQACAFAGADQAGAEAGAAQAJAAAGgIQAGgHAAgLQAAgMgGgHQgGgIgJAAQgGAAgGADg");
	this.shape_35.setTransform(179.475,11.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.694)").s().p("AASAfIAAg3IgiAAIAAA3IgIAAIAAg9IAwAAIAAA9g");
	this.shape_36.setTransform(172.1,10.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.694)").s().p("AASAqIAAg0IgjA0IgGAAIAAg9IAHAAIAAAzIAigzIAGAAIAAA9gAgWgmIAEgDQAHAJALAAQAMAAAHgJIAEADQgJALgOAAQgNAAgJgLg");
	this.shape_37.setTransform(161.75,9.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.694)").s().p("AAbAfIAAg9IAHAAIAAA9gAghAfIAAg9IAHAAIAAAaIAYAAQAIAAAGAEQAEAFAAAIQAAAIgEAFQgGAFgIAAgAgaAZIAXAAQAFABAEgEQADgDAAgGQAAgGgDgDQgEgDgFAAIgXAAg");
	this.shape_38.setTransform(153.8,10.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.694)").s().p("AASAfIAAgdIgjAAIAAAdIgHAAIAAg9IAHAAIAAAbIAjAAIAAgbIAHAAIAAA9g");
	this.shape_39.setTransform(145.85,10.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.694)").s().p("AASAfIAAgdIgjAAIAAAdIgGAAIAAg9IAGAAIAAAbIAjAAIAAgbIAHAAIAAA9g");
	this.shape_40.setTransform(138.85,10.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.694)").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAIgKANAAQANAAAJAKQAIAJAAANQAAAOgIAJQgJAKgNAAQgNAAgIgKgAgQgSQgGAIAAAKQAAALAGAIQAGAIAKAAQAKAAAHgIQAGgHAAgMQAAgKgGgIQgHgIgKABQgKgBgGAIg");
	this.shape_41.setTransform(131.675,10.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.694)").s().p("AASAfIAAg0IgjA0IgGAAIAAg9IAGAAIAAAzIAjgzIAHAAIAAA9g");
	this.shape_42.setTransform(124.45,10.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.694)").s().p("AAWAoIAAgRIgxAAIAAg9IAHAAIAAA3IAiAAIAAg3IAHAAIAAA3IAHAAIAAAXg");
	this.shape_43.setTransform(117.625,11.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.694)").s().p("AgRAcQgHgHAAgJQAAgJAHgFQAGgGAJABQAMAAAIAIIAAgNQABgGgGgEQgEgEgIAAQgKAAgIAKIgEgFQAKgLANAAQAKAAAHAFQAGAFAAAKIAAArIgHAAIAAgHQgIAJgMAAQgJAAgGgFgAgMABQgEAEgBAIQABAGAEAEQAFAFAHAAQAMAAAGgJIAAgOQgHgIgLAAQgHABgFADg");
	this.shape_44.setTransform(110.2,10.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.694)").s().p("AAXAfIAAg0IgWA0IgBAAIgWg0IAAA0IgHAAIAAg9IAJAAIAUAyIAUgyIAKAAIAAA9g");
	this.shape_45.setTransform(102.975,10.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.694)").s().p("AgbAsIAAhWIAHAAIAAAKQADgFAGgDQAGgDAFAAQANAAAIAJQAHAJAAAPQAAAOgHAJQgIAJgNAAQgMAAgIgMIAAAigAgMgiQgGAEgCAEIAAAeQACAFAGADQAGAEAGAAQAJAAAGgIQAGgHAAgLQAAgMgGgHQgGgIgJAAQgGAAgGADg");
	this.shape_46.setTransform(95.475,11.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.694)").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAIgKANAAQANAAAJAKQAIAJAAANQAAAOgIAJQgJAKgNAAQgNAAgIgKgAgQgSQgGAIAAAKQAAALAGAIQAGAIAKAAQAKAAAHgIQAGgHAAgMQAAgKgGgIQgHgIgKABQgKgBgGAIg");
	this.shape_47.setTransform(87.925,10.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.694)").s().p("AgCA3IAAgiQgDAFgFAEQgEADgGAAQgKAAgGgJQgGgJAAgPQAAgOAGgJQAGgJAKAAQALAAAHAMIAAgiIAFAAIAAAhQADgFAFgDQAEgDAFAAQAKAAAGAJQAHAJAAAOQAAAPgHAJQgGAJgKAAQgKAAgHgMIAAAigAAKgXQgEAEgDAEIAAAeQADAFAEADQAEAEAFAAQAIAAAEgIQAFgHAAgMQAAgLgFgIQgEgHgIAAQgFAAgEADgAgegSQgFAHAAALQAAAMAFAHQAEAIAIAAQAFAAAEgEQAEgDADgFIAAgeQgDgEgEgEQgEgDgFAAQgIAAgEAIg");
	this.shape_48.setTransform(79.175,10.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.694)").s().p("AASAfIAAgdIgiAAIAAAdIgHAAIAAg9IAHAAIAAAbIAiAAIAAgbIAGAAIAAA9g");
	this.shape_49.setTransform(70.65,10.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.694)").s().p("AAbArIAAhJIg2BJIgHAAIAAhVIAHAAIAABIIA2hIIAIAAIAABVg");
	this.shape_50.setTransform(62.6,9.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.694)").s().p("AgDAEQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgDIADgCQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIACADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_51.setTransform(53.275,13.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.694)").s().p("AgRAcQgHgHAAgJQAAgJAGgFQAHgGAJABQANAAAHAIIAAgNQAAgGgEgEQgFgEgIAAQgKAAgIAKIgEgFQAKgLANAAQAKAAAHAFQAGAFAAAKIAAArIgHAAIAAgHQgHAJgNAAQgIAAgHgFgAgMABQgEAEgBAIQABAGAEAEQAFAFAHAAQAMAAAGgJIAAgOQgGgIgMAAQgHABgFADg");
	this.shape_52.setTransform(48.3,10.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.694)").s().p("AAXAfIAAg0IgWA0IgBAAIgWg0IAAA0IgHAAIAAg9IAJAAIAUAyIAUgyIAKAAIAAA9g");
	this.shape_53.setTransform(41.075,10.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.694)").s().p("AgRAcQgHgHAAgJQAAgJAHgFQAGgGAJABQAMAAAJAIIAAgNQAAgGgGgEQgEgEgHAAQgLAAgIAKIgEgFQAKgLAOAAQAKAAAGAFQAGAFAAAKIAAArIgGAAIAAgHQgJAJgMAAQgIAAgHgFgAgMABQgFAEABAIQgBAGAFAEQAFAFAHAAQAMAAAHgJIAAgOQgIgIgLAAQgHABgFADg");
	this.shape_54.setTransform(33.5,10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.694)").s().p("AgbAaQAEAAAEgGQADgGABgOIAFgfIAnAAIAAA+IgHAAIAAg4IgaAAIgEAZQgCASgFAHQgFAHgHAAg");
	this.shape_55.setTransform(26.4,10.875);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.694)").s().p("AARAfIgYgdIgLALIAAASIgHAAIAAg9IAHAAIAAAiIAkgiIAJAAIgdAcIAcAhg");
	this.shape_56.setTransform(20.45,10.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.694)").s().p("AgUAYQgJgKAAgOQAAgNAJgJQAIgKAMAAQAOAAAIAKQAIAJAAAOIAAABIgzAAQAAALAGAHQAHAHAKAAQANAAAIgIIADAEQgKAKgPAAQgNAAgIgJgAgPgTQgHAIABAJIAsAAQAAgJgGgIQgGgHgLAAQgJAAgGAHg");
	this.shape_57.setTransform(13.1,10.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.694)").s().p("AgcArIAAhVIAfAAQAMAAAHAHQAHAHAAALQAAALgHAGQgHAHgMAAIgYAAIAAAkgAgVAAIAXAAQAJAAAFgEQAFgFAAgIQAAgIgFgGQgFgFgJAAIgXAAg");
	this.shape_58.setTransform(6.025,9.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark, new cjs.Rectangle(0,0,274.4,33.6), null);


(lib.bg_pic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.backgroundimage();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_pic, new cjs.Rectangle(0,0,360,600), null);


(lib.eye_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pupil
	this.pup = new lib.pupil();
	this.pup.name = "pup";
	this.pup.setTransform(25.55,39.15,1,1,0,0,0,13.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.pup).wait(1));

	// white_eye
	this.white = new lib.white_eye();
	this.white.name = "white";
	this.white.setTransform(28.1,28.1,1,1,0,0,0,28.1,28.1);

	this.timeline.addTween(cjs.Tween.get(this.white).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_right, new cjs.Rectangle(0,0,56.2,56.2), null);


(lib.eye_l = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.pup = new lib.pupil();
	this.pup.name = "pup";
	this.pup.setTransform(43.7,47.1,0.9563,0.9563,-45,0,0,13.4,13.4);

	this.white = new lib.white_eye();
	this.white.name = "white";
	this.white.setTransform(37.9,37.95,0.9563,0.9563,-45,0,0,28,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.white},{t:this.pup}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_l, new cjs.Rectangle(0,0,75.9,75.9), null);


// stage content:
(lib._300x500_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		
		//-----------РАМКА БАННЕРА-------------//
		
		var border = new createjs.Shape();
		var bw = lib.properties.width;
		var bh = lib.properties.height;
		
		border.graphics
		    .beginFill("#000000")
		    .drawRect(0, 0, bw, 1)
		    .drawRect(0, bh - 1, bw, 1)
		    .drawRect(0, 1, 1, bh - 2)
		    .drawRect(bw - 1, 1, 1, bh - 2)
		    .endFill();
		
		border.mouseEnabled = false;
		root.addChild(border);
		
		
		
		var tl = gsap.timeline({ repeat: -1});
		
		
		tl	
			.to([root.eye_r, root.eye_l], {rotation:30, duration:0.4, ease:"sine.inOut",}, "0.5")
			.to([root.eye_r, root.eye_l], {rotation:-50, duration:0.4, ease:"sine.inOut",}, "1.5")
		    .to(root.eye_l, {rotation:120, duration: 0.2, ease: "Sine.easeInOut" }, "2.2")
		    .to(root.eye_r, {rotation:320, duration: 0.4, ease: "Sine.easeInOut" }, "2.8")
			.to([root.eye_r, root.eye_l], {scaleX:1.7, scaleY:1.7, duration:0.12, ease:"sine.inOut", yoyo:true, repeat:3}, "3.2")
			.to([root.eye_r, root.eye_l], {rotation:0, duration:1, ease:"sine.inOut"}, 3.6)
			.to({}, {duration:2.5})
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// disc
	this.instance = new lib.mark();
	this.instance.setTransform(150.6,474.75,1,1,0,0,0,137.7,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// t2
	this.instance_1 = new lib.t2();
	this.instance_1.setTransform(150,402.5,1,1,0,0,0,150,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// t1
	this.instance_2 = new lib.t1();
	this.instance_2.setTransform(150.05,60.95,1,1,0,0,0,147.5,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// eye_l
	this.eye_l = new lib.eye_l();
	this.eye_l.name = "eye_l";
	this.eye_l.setTransform(163.1,195.85,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.eye_l).wait(1));

	// eye_r
	this.eye_r = new lib.eye_right();
	this.eye_r.name = "eye_r";
	this.eye_r.setTransform(217.1,216.65,1,1,0,0,0,28.1,28.1);

	this.timeline.addTween(cjs.Tween.get(this.eye_r).wait(1));

	// bg_pic
	this.instance_3 = new lib.bg_pic();
	this.instance_3.setTransform(150,249.9,0.8333,0.8333,0,0,0,180,299.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,250,150,250);
// library properties:
lib.properties = {
	id: 'DC8C0AF7249ADF4AB61C3BDF6592FB59',
	width: 300,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"index_atlas_NP_1.jpg", id:"index_atlas_NP_1"}
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
an.compositions['DC8C0AF7249ADF4AB61C3BDF6592FB59'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;