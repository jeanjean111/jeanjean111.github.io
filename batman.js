function detect(){
		var supportsMixBlendMode = Modernizr.testProp('mixBlendMode');
    	var supportsBackgroundBlendMode =  Modernizr.testProp('backgroundBlendMode');
		var aside = document.querySelector("#warning");

		if (!supportsMixBlendMode || !supportsBackgroundBlendMode){
			aside.style.display="block";
			aside.innerHTML = "<p>Looks like this browser does not support CSS Blend Modes. Please run this demo in a browser which does and make sure support for it is enabled.</p><ul><li>Is <code>mix-blend-mode</code> supported by this browser?: <span>"+supportsMixBlendMode+"</span></li><li>Is <code>background-blend-mode</code> supported by this browser?: <span>"+supportsBackgroundBlendMode+"</span></li></ul>";
		}

	}

	detect();