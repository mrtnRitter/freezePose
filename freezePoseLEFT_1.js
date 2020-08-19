// Keyframes werden zu Time kopiert, letzten Keyframes links werden zu Hold.

app.beginUndoGroup('FreezePose');

var currentComp = app.project.activeItem;
var layers = currentComp.numLayers;

for (var i = 1; i <= layers; i++){
	var layer = currentComp.layers[i];
	
	if (layer.enabled && !layer.locked && !layer.shy){
		propCycle(layer);
	};
};

app.endUndoGroup();


function propCycle (container){
    var props = container.numProperties;
   
    for (var j = 1; j <= props; j++){
            var prop = container.property(j);

		if (prop.numKeys > 0 && prop.matchName != "ADBE Marker"){
			
					
			time = currentComp.time;
			lastKeyIndex = prop.nearestKeyIndex(time);
			if (prop.keyTime(lastKeyIndex) > time && lastKeyIndex > 1){
				lastKeyIndex--};
			
			lastKeyValue = prop.keyValue(lastKeyIndex);
			
			try{	
				prop.setValueAtTime(time, lastKeyValue);
				
				lastKeyInterpolIn = prop.keyInInterpolationType(lastKeyIndex);
				prop.setInterpolationTypeAtKey(lastKeyIndex, lastKeyInterpolIn, KeyframeInterpolationType.HOLD);

			} catch(err){
				alert("Error at line: " + err.line.toString() + "\r" + err.toString());

			};
		
		};
		
		if (prop.numProperties > 0){
			propCycle(prop);
		};

    };        
};