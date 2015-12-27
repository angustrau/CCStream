(function() {
	var colours = {
	    1: "#F0F0F0",
	    2: "#F2B233",
	    4: "#E57FD8",
	    8: "#99B2F2",
	    16: "#DEDE6C",
	    32: "#7FCC19",
	    64: "#F2B2CC",
	    128: "#4C4C4C",
	    256: "#999999",
	    512: "#4C99B2",
	    1024: "#B266E5",
	    2048: "#3366CC",
	    4096: "#7F664C",
	    8192: "#57A64E",
	    16384: "#CC4C4C",
	    32768: "#191919"
	};

	var cc_colours = {
		"#F0F0F0": 1,
	    "#F2B233": 2,
	    "#E57FD8": 4,
	    "#99B2F2": 8,
	    "#DEDE6C": 16,
	    "#7FCC19": 32,
	    "#F2B2CC": 64,
	    "#4C4C4C": 128,
	    "#999999": 256,
	    "#4C99B2": 512,
	    "#B266E5": 1024,
	    "#3366CC": 2048,
	    "#7F664C": 4096,
	    "#57A64E": 8192,
	    "#CC4C4C": 16384,
	    "#191919": 32768
	}

	var paintColours = {
	    "0": "#F0F0F0",
	    "1": "#F2B233",
	    "2": "#E57FD8",
	    "3": "#99B2F2",
	    "4": "#DEDE6C",
	    "5": "#7FCC19",
	    "6": "#F2B2CC",
	    "7": "#4C4C4C",
	    "8": "#999999",
	    "9": "#4C99B2",
	    "a": "#B266E5",
	    "b": "#3366CC",
	    "c": "#7F664C",
	    "d": "#57A64E",
	    "e": "#CC4C4C",
	    "f": "#191919"
	};

	//Load resources
	var resources = {};

	resources.normalCorners = new Image();
	resources.normalCorners.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QAxQDFAMWk3L5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEcDgEa5vQg/AAAA1tJREFUeNrt3bFtwkAUgOHniII9Th6AdShYwMO4YgEvQomoGMC6VewUkaPQBAVdEvB9X0eBZRn51zOcTZNSmgOoUjNNkwBApd4cAqjX5nw+OwpgAgAEABAAQAAAAQAEAFiVZr/fWwgEtQbAUmBwCQDUOAG4FwDqZSkwuAQABAAQAEAAAAEABABYHUuBwQQAVDkBuBcAAAAAANatSSnN4zhGRMR3dwYej8e4XC6Rc24iIkp+ebhsc9nuOI539yUibvYH+LnNg+/7jEYJbdvOTmT4e4+sA5inaSq6E8MwhJ8j4QUmgJTSzesSDxTp+z52u11EhAjAk08ARU9+4EUDAAgAIACAAAACADy/zW9teFmtt+i6ztGGWgIQ8bFUNyLi3tJewCUAsKYJoOT9AsALBaDrOmM/uAQABAAQAEAAAAEAqg5A3/c+BfgnP/4ZMOfctG07D8Pg5IUaJ4Ccc3M4HIruyPV69YRfePYJ4GsEouAz/Jz88EIBcNJCpZcAgAAAAgAIAFBFAHzxByYAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEAKggAP6oBEwAgAAAAgAIACAAgAAAAgAIAAiAQwACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACUMzsYwQTACAAgAAAAgAIACAAgAAAAgACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIABAAZuIiNPpFNvt1tGAyrwDa016qIhIoMoAAAAASUVORK5CYII=";

	resources.advancedCorners = new Image();
	resources.advancedCorners.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wQCDTMCYoj9XgAAA2pJREFUeNrt3T1OAkEYgOFvDTeZyDHo4BiUegC4hq0GSo5gKVYbPQMGM9giHmItDIlaSNT1B+Z5Ogo3kzH7ZnaZXaqUUhNAkaqH1YUAQKGOTAGUq7PeLMwCWAEAAgAIACAAgAAAAgAclE5dL80CFKqyFRhcAgAlrgA8CwAF3wOwFRhcAgACAAgAIACAAAACABwaW4HBCgAokWcBAAAAAODAVSml5no+joiIj54MrOtlTCf3kXOuIiLavHm4Peb2uNfz8c6xRMSb8QCf1/ni3zXzq1Frg+gPzhonMvy+r+wDaFb5vNVBzK9G4etI2IMVQErpzefHp7tvD6Kul3FyehzTSYgA/PMVQKsnP7CnAQAEABAAQAAAAQD+v85PHfj9i0Z6va7ZhlICEPGyVTciYtfWXsAlAHBIK4DtQ0ZAYQHo9bqW/eASABAAQAAAAQAEACg6AH6aDP7Op78GzDlX/cFZM5vN4ub20gxCaSuAnHM1HA5bHYg3/MIerABeR6DNd/g5+WGPAuCkhUIvAQABAAQAEACgiAC48QdWAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACABQQAD8UAlYAQACAAgAIACAAAACAAgAIAAgAKYABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABKA1jX8jWAEAAgAIACAAgAAAAgAIACAAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACALQVgNVDN9abhdmAwjwDx3yAV9Yqo3UAAAAASUVORK5CYII=";

	resources.commandCorners = new Image();
	resources.commandCorners.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEVEjsX1diXpgAAA21JREFUeNrt3T1OAkEYgOFvDVfQxHo6Oz2EtdFaam5BqLmANdhirLH0AFBRkMwFILa2a2EwaqHRjD8wz9NRuNmM2Tczy+zSpJTaAKrUzK+HAgCV2jMEUK/O4/LeKIAZACAAgAAAAgAIACAAwE7pTBdrowCVamwFBksAoMYZgGcBoOJ7ALYCgyUAIACAAAACAAgAIADArrEVGMwAgBp5FgAAAAAAdlyTUmong15ERHz0ZOB0sY7xbBU55yYiouTNw80xN8edDHqfnktEvDkf4Os63/y7l2iUcNG/al3I8Pu+sw+gnV8Pi57EZNALX0fCFswAUkpvPpd4och0sY7L44MYR4gA/PMZQNGLH9jSAAACAAgAIACAAAD/X+enDvz+RSOnR/tGG2qaAYxnqxjPVnF2dm6kwRIAqGIJEPG8xReoMACnR/t2CoIlACAAgAAAAgAIAFB1APw0GfydL38NmHNuLvpX7Wg0irvbGyMItc0Acs5Nt9steiLe8AtbMAN4HYGS7/Bz8cMWBcBFC5UuAQABAAQAEACgigC48QdmAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACABQQQD8UAmYAQACAAgAIACAAAACAAgAIAAgAIYABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABKCY1r8RzAAAAQAEABAAQAAAAQAEABAAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAEoF4OHwJB6X90YDKvMExEt77IThbqIAAAAASUVORK5CYII=";

	resources.termFont = new Image();
	resources.termFont.src = "data:image/png;base64,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";

	resources.turtleNormal = new Image();
	resources.turtleNormal.src = "data:image/png;base64,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";

	resources.turtleAdvanced = new Image();
	resources.turtleAdvanced.src = "data:image/png;base64,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";

	window.Term = function (canvasObj, showBorder) {
		//Check if canvasObj is a canvas
		if (!canvasObj || !canvasObj.getContext) {
			//Not a canvas or canvas not supported
			throw "Invalid canvas";
		}

		Object.defineProperty(this, "canvas", {
			get: function() { return this.canvasObj; },
			set: function(canvas) {
				this.removeEventListeners();
				this.ctx.clearRect(0, 0, this.canvasObj.width, this.canvasObj.height);

				this.canvasObj = canvas;

				this.ctx = canvas.getContext("2d");
				this.ctx.imageSmoothingEnabled = false;

				this.addEventListeners();

				this.draw();
			}
		});

		this.canvasObj = canvasObj;
		this.ctx = canvasObj.getContext("2d");
		this.ctx.imageSmoothingEnabled = false;

		this.width = 51;
		this.height = 19;

		this.cursorX = 1;
		this.cursorY = 1;

		this.cursorBlink = false;
		this.lastBlinkX = 1;
		this.lastBlinkY = 1;

		this.textColour = "#F0F0F0";
		this.backColour = "#000000";

		this.textBuffer = {};
		this.textColourBuffer = {};
		this.backColourBuffer = {};

		this.displayType = "advanced";

		this.showBorder = showBorder || false;

		//Begin "term" methods
		this.write = function(text) {			
		    text.split("\n").forEach(function (line, index, lines) {
		    	if (this.cursorY < 1 || this.cursorY > this.height) return;

		    	var textX = this.screenX + (this.cursorX - 1) * this.screenPixelSize * 2;
		    	var textY = this.screenY + (this.cursorY - 1) * this.screenPixelSize * 3;
		    	var textWidth = this.screenPixelSize * 2 * line.length;
		    	if (textX + textWidth > this.screenX + this.screenWidth) {textWidth = this.screenX + this.screenWidth - textX;}
		    	var textHeight = this.screenPixelSize * 3;

		    	this.ctx.clearRect(textX, textY, textWidth, textHeight);

		    	this.ctx.globalCompositeOperation = "source-over";
		    	line.split("").forEach(function(char) {
			        if (this.cursorX < 1 || this.cursorX > this.width || this.cursorY < 1 || this.cursorY > this.height) {
			        	this.cursorX = this.cursorX + 1;
			            return;
			        }

			        //Store char to buffer
			        if (!this.textBuffer[this.cursorX]) this.textBuffer[this.cursorX] = {};
			        this.textBuffer[this.cursorX][this.cursorY] = char;

			        if (!this.textColourBuffer[this.cursorX]) this.textColourBuffer[this.cursorX] = {};
			        this.textColourBuffer[this.cursorX][this.cursorY] = this.textColour;

			        if (!this.backColourBuffer[this.cursorX]) this.backColourBuffer[this.cursorX] = {};
			        this.backColourBuffer[this.cursorX][this.cursorY] = this.backColour;
			        
			        //Draw text
			        var charCode = char.charCodeAt(0);
			        this.ctx.drawImage(resources.termFont, (charCode % 16) * 6, Math.floor(charCode / 16) * 9, 6, 9, this.screenX + (this.cursorX - 1) * this.screenPixelSize * 2, this.screenY + (this.cursorY - 1) * this.screenPixelSize * 3, this.screenPixelSize * 2, this.screenPixelSize * 3);

			        this.cursorX = this.cursorX + 1;
			    }, this);

				//Colourise text
		        this.ctx.globalCompositeOperation = "source-atop";
		        this.ctx.fillStyle = this.textColour;
		        this.ctx.fillRect(textX, textY, textWidth, textHeight);
				
				//Draw background
		        this.ctx.globalCompositeOperation = "destination-over";
		        this.ctx.fillStyle = this.backColour;
		        this.ctx.fillRect(textX, textY, textWidth, textHeight)

				if (index != lines.length - 1) {
					//New line
					this.cursorX = 1;
					this.cursorY = this.cursorY + 1;
				}
		    }, this);
		}

		this.blit = function(text, textColours, backColours) {
	        for (i = 0; i < Math.min(text.length, textColours.length, backColours.length) ; i++) {
	            this.textColour = paintColours[textColours[i]];
	            this.backColour = paintColours[backColours[i]];
	            if (backColours[i] == "f") this.backColour = "#000000";

	            this.write(text[i]);
	        }
	    }

	    this.clear = function() {
	        var oldCursorX = this.cursorX;
	        var oldCursorY = this.cursorY;

	        this.cursorX = 1;
	        this.cursorY = 1;

	        this.write((" ".repeat(this.width) + "\n").repeat(this.height));

	        this.cursorX = oldCursorX;
	        this.cursorY = oldCursorY;
	    }

	    this.clearLine = function() {
	        var oldCursorX = this.cursorX;

	        this.cursorX = 1;

	        this.write(" ".repeat(this.width));

	        this.cursorX = oldCursorX;
	    }

	    this.setCursorPos = function(x, y) {
	    	this.cursorX = x;
	    	this.cursorY = y;
	    }

	    this.getCursorPos = function() {
	    	return [this.cursorX, this.cursorY];
	    }

	    this.blinkCursorOn = function() {
	        if (this.cursorBlink) {
	            this.lastBlinkX = this.cursorX;
	            this.lastBlinkY = this.cursorY;

	            this.ctx.globalCompositeOperation = "source-over";

	            this.ctx.fillStyle = this.textColour;
	            this.ctx.fillRect(this.screenX + (this.cursorX - 5/6) * this.screenPixelSize * 2, this.screenY + (this.cursorY - 1/9) * this.screenPixelSize * 3, this.screenPixelSize * 1.6, this.screenPixelSize / 9 * 3);
	        }

	        setTimeout(function(tObj) { tObj.blinkCursorOff(); }, 1000, this);
	    }

	    this.blinkCursorOff = function() {
	        var oldCursorX = this.cursorX;
	        var oldCursorY = this.cursorY;
	        var oldTextColour = this.textColour;
	        var oldBackColour = this.backColour;

	        this.cursorX = this.lastBlinkX;
	        this.cursorY = this.lastBlinkY;

	        if (this.textColourBuffer[this.cursorX]) {
	            this.textColour = this.textColourBuffer[this.cursorX][this.cursorY] || "#F0F0F0";
	        } else {
	            this.textColour = "#F0F0F0";
	        }

	        if (this.backColourBuffer[this.cursorX]) {
	            this.backColour = this.backColourBuffer[this.cursorX][this.cursorY] || "#000000";
	        } else {
	            this.backColour = "#000000";
	        }

	        if (this.textBuffer[this.cursorX] && this.textBuffer[this.cursorX][this.cursorY]) {
	            this.write(this.textBuffer[this.cursorX][this.cursorY]);
	        } else {
	            this.write(" ");
	        }

	        this.cursorX = oldCursorX;
	        this.cursorY = oldCursorY;
	        this.textColour = oldTextColour;
	        this.backColour = oldBackColour;
	  
	        setTimeout(function (tObj) { tObj.blinkCursorOn(); }, 1000, this);
	    }
	    this.blinkCursorOn();

	    this.setCursorBlink = function(state) {
	        this.cursorBlink = state;
	    }

	    this.isColor = function() {
	    	switch(this.displayType) {
	    		case "normal":
	    		case "turtleNormal":
	    			return false;
	    			break;

	    		case "advanced":
	    		case "command":
	    		case "turtleAdvanced":
	    			return true;
	    			break;
	    	}
	    }
	    this.isColour = this.isColor;

	    this.getSize = function() {
	    	return [this.width, this.height];
	    }

	    this.scroll = function(lines) {
	        var oldCursorX = this.cursorX;
	        var oldCursorY = this.cursorY;

	        //Shift lines down or up
	        if (lines > 0) {
	            for (y=lines; y<=this.height; y++) {
	            	var newLine = y - lines;
                    for (x=1; x<=this.width; x++) {
                        this.textBuffer[x][newLine] = (this.textBuffer[x] || {})[y] || " ";
                        this.textColourBuffer[x][newLine] = (this.textColourBuffer[x] || {})[y] || "#F0F0F0";
                        this.backColourBuffer[x][newLine] = (this.backColourBuffer[x] || {})[y] || "#000000";
                    }
	            }

	            for (y=this.height; y>=this.height-lines+1; y--) {
	                for (x=1; x<=this.width; x++) {
	                	if (!this.textBuffer[x]) this.textBuffer[x] = {};
	                    this.textBuffer[x][y] = " ";

	                    if (!this.textColourBuffer[x]) this.textColourBuffer[x] = {};
	                    this.textColourBuffer[x][y] = this.textColour;

	                    if (!this.backColourBuffer[x]) this.backColourBuffer[x] = {};
	                    this.backColourBuffer[x][y] = this.backColour;
	                }
	            }
	        } else {
	        	lines = Math.abs(lines);

	            for (y=this.height - lines; y>=1; y--) {
	            	var newLine = y + lines;
                    for (x=1; x<=this.width; x++) {
                        this.textBuffer[x][newLine] = (this.textBuffer[x] || {})[y] || " ";
                        this.textColourBuffer[x][newLine] = (this.textColourBuffer[x] || {})[y] || "#F0F0F0";
                        this.backColourBuffer[x][newLine] = (this.backColourBuffer[x] || {})[y] || "#000000";
                    }
	            }

	            for (y=1; y<=lines; y++) {
	                for (x=1; x<=this.width; x++) {
	                    if (!this.textBuffer[x]) this.textBuffer[x] = {};
	                    this.textBuffer[x][y] = " ";

	                    if (!this.textColourBuffer[x]) this.textColourBuffer[x] = {};
	                    this.textColourBuffer[x][y] = this.textColour;

	                    if (!this.backColourBuffer[x]) this.backColourBuffer[x] = {};
	                    this.backColourBuffer[x][y] = this.backColour;
	                }
	            }
	        }

	        //Redraw screen
	        this.drawScreen();

	        this.cursorX = oldCursorX;
	        this.cursorY = oldCursorY;
	    }

	    this.setTextColor = function(colour) {
	        this.textColour = colours[colour];
	    }
	    this.setTextColour = this.setTextColor;

	    this.getTextColor = function() {
	    	return cc_colours[this.textColour];
	    }
	    this.getTextColour = this.getTextColor;

	    this.setBackgroundColor = function(colour) {
	    	if (colour == 32768) {
	            this.backColour = "#000000"; //Replace black with a darker shade
	        } else {
	            this.backColour = colours[colour];
	        }
	    }
	    this.setBackgroundColour = this.setBackgroundColor;

	    this.getBackgroundColor = function() {
	    	if (this.backColour == "#000000") {
	    		return 32768;
	    	} else {
	    		return cc_colours[this.backColour];
	    	}
	    }
	    this.getBackgroundColour = this.getBackgroundColor;
		//End "term" methods

		this.setDisplayType = function(displayType) {
			this.displayType = displayType;
		}

		this.callbacks = {
			char: [],
			key: [],
			key_up: [],

			mouse_click: [],
			mouse_up: [],
			mouse_scroll: [],
			mouse_drag: []
		};

		this.on = function(event, callback) {
			if (this.callbacks[event]) {
				this.callbacks[event].push(callback);
			}
		}

		this.triggerEvent = function(event, args) {
			if (this.callbacks[event]) {
				this.callbacks[event].forEach(function(callback) {
					callback.apply(this, args);
				})
			}
		}

		this.toPixel = function(x, y) {
			return [Math.max(1, Math.min(this.width, Math.ceil(x / this.screenPixelSize / 2))), Math.max(1, Math.min(this.height, Math.ceil(y / this.screenPixelSize / 3)))];
		}

		//Mouse

		this.mouseX = 0;
		this.mouseY = 0;

		this.onMouseDown = function(e) {
			if (e.offsetX >= tObj.screenX && e.offsetX <= tObj.screenX + tObj.screenWidth && e.offsetY >= tObj.screenY && e.offsetY <= tObj.screenY + tObj.screenHeight) {
				tObj.mouseX = e.clientX - e.target.offsetLeft - tObj.screenX;
				tObj.mouseY = e.clientY - e.target.offsetTop - tObj.screenY;

				var location = tObj.toPixel(tObj.mouseX, tObj.mouseY);

				var button = e.button || 0;
				//Convert button code to CC's format
				switch(button) {
					case 0:
						//left click
						button = 1;
						break;
					case 1:
						//scroll click
						button = 3;
						break;
					case 2:
						//right click
						button = 2;
						break;
					default:
						//Other button. Button code is incremented by 1 to prevent conflict
						button = button + 1;
						break;
				}

				//Add drag listener
				tObj.lastDrag = location;
				tObj.canvasObj.addEventListener("mousemove", tObj.onMouseMove, false);

				//Trigger mouse click
				tObj.triggerEvent("mouse_click", [button, location[0], location[1]]);

				e.preventDefault();
			}
		}

		this.onMouseUp = function(e) {
			var mouseX = e.clientX - e.target.offsetLeft - tObj.screenX;
			var mouseY = e.clientY - e.target.offsetTop - tObj.screenY;

			var location = tObj.toPixel(mouseX, mouseY);

			var button = e.button;
			//Convert button code to CC's format
			switch(button) {
				case 0:
					//left click
					button = 1;
					break;
				case 1:
					//scroll click
					button = 3;
					break;
				case 2:
					//right click
					button = 2;
					break;
				default:
					//Other button. Button code is incremented by 1 to prevent conflict
					button = button + 1;
					break;
			}

			tObj.canvasObj.removeEventListener("mousemove", tObj.onMouseMove, false);

			tObj.triggerEvent("mouse_up", [button, location[0], location[1]]);

			e.preventDefault();
		}

		this.lastDrag = [1, 1];

		this.onMouseMove = function(e) {
			if (e.offsetX >= tObj.screenX && e.offsetX <= tObj.screenX + tObj.screenWidth && e.offsetY >= tObj.screenY && e.offsetY <= tObj.screenY + tObj.screenHeight) {
				tObj.mouseX = e.clientX - e.target.offsetLeft - tObj.screenX;
				tObj.mouseY = e.clientY - e.target.offsetTop - tObj.screenY;

				var location = tObj.toPixel(tObj.mouseX, tObj.mouseY);

				if (location[0] != tObj.lastDrag[0] || location[1] != tObj.lastDrag[1]) {
					tObj.lastDrag = location;

					var button = e.button;
					//Convert button code to CC's format
					switch(button) {
						case 0:
							//left click
							button = 1;
							break;
						case 1:
							//scroll click
							button = 3;
							break;
						case 2:
							//right click
							button = 2;
							break;
						default:
							//Other button. Button code is incremented by 1 to prevent conflict
							button = button + 1;
							break;
					}

					tObj.triggerEvent("mouse_drag", [button, location[0], location[1]]);

					e.preventDefault();
				}
			} else {
				tObj.onMouseUp(e);
			}
		}

		this.onMouseScroll = function(e) {
			if (e.offsetX >= tObj.screenX && e.offsetX <= tObj.screenX + tObj.screenWidth && e.offsetY >= tObj.screenY && e.offsetY <= tObj.screenY + tObj.screenHeight) {
				var mouseX = e.clientX - e.target.offsetLeft - tObj.screenX;
				var mouseY = e.clientY - e.target.offsetTop - tObj.screenY;

				var location = tObj.toPixel(mouseX, mouseY);

				tObj.triggerEvent("mouse_scroll", [Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) * -1, location[0], location[1]]);
			}
		}
		
		//Handle touches created by a touch screen device

		this.ongoingTouches = [];

		this.onTouchStart = function(e) {
			e.changedTouches.forEach(function(touch) {
				tObj.ongoingTouches.push(touch);

				tObj.onMouseDown(touch);
			});

			e.preventDefault();
		}

		this.onTouchEnd = function(e) {

		}

		this.onTouchCancel = function(e) {

		}

		this.onTouchMove = function(e) {

		}

		//Keyboard
		var keyInputActive = true

		this.onKeyDown = function(e) {
			if (e.repeat == false) {
				tObj.triggerEvent("key", [e.keyCode, false]);
			} else if (e.repeat == true) {
				tObj.triggerEvent("key", [e.keyCode, true]);
			}

			if (e.keyCode >= 32) {
				tObj.triggerEvent("char", [String.fromCharCode(e.keyCode)]);
			}
			
			e.preventDefault();
		}

		this.onKeyUp = function(e) {
			tObj.triggerEvent("key_up", [e.keyCode, false]);

			e.preventDefault();
		}

		Object.defineProperty(this, "keyboardActive", {
			get: function() { return keyInputActive; },
			set: function(state) {
				keyInputActive = state;
				
				if (state == true) {
					window.addEventListener("keydown", this.onKeyDown, false);
					window.addEventListener("keyup", this.onKeyUp, false);
				} else if (state == false) {
					window.removeEventListener("keydown", this.onKeyDown, false);
					window.removeEventListener("keyup", this.onKeyUp, false);
				}
			}
		});
		this.keyboardActive = true;

		this.addEventListeners = function() {
			//Mouse down
			this.canvasObj.addEventListener("mousedown", this.onMouseDown, false);

			//Mouse up
			this.canvasObj.addEventListener("mouseup", this.onMouseUp, false);

			//Mouse wheel
			this.canvasObj.addEventListener("mousewheel", this.onMouseScroll, false);
			this.canvasObj.addEventListener("DOMMouseScroll", this.onMouseScroll, false);

			//Touch
			this.canvasObj.addEventListener("touchstart", this.onTouchStart, false);
			this.canvasObj.addEventListener("touchend", this.onTouchEnd, false);
			this.canvasObj.addEventListener("touchcancel", this.onTouchCancel, false);
			this.canvasObj.addEventListener("touchmove", this.onTouchMove);
		}

		this.removeEventListeners = function() {
			//Mouse down
			this.canvasObj.removeEventListener("mousedown", this.onMouseDown, false);

			//Mouse up
			this.canvasObj.removeEventListener("mouseup", this.onMouseUp, false);

			//Mouse move
			this.canvasObj.removeEventListener("mousemove", this.onMouseMove, false);

			//Mouse wheel
			this.canvasObj.removeEventListener("mousewheel", this.onMouseScroll, false);
			this.canvasObj.removeEventListener("DOMMouseScroll", this.onMouseScroll, false);

			//Touch
			this.canvasObj.removeEventListener("touchstart", this.onTouchStart, false);
			this.canvasObj.removeEventListener("touchend", this.onTouchEnd, false);
			this.canvasObj.removeEventListener("touchcancel", this.onTouchCancel, false);
			this.canvasObj.removeEventListener("touchmove", this.onTouchMove);
		}

		this.addEventListeners();

		this.drawScreen = function() {
			var oldCursorX = this.cursorX;
	        var oldCursorY = this.cursorY;
	        var oldCursorBlink = this.cursorBlink;
	        var oldBackColour = this.backColour;

	        this.cursorX = 1;
	        this.cursorY = 1;
	        this.cursorBlink = false;

	        //Draw pixels
	        for (y = 1; y <= this.height; y++) {
	            for (x = 1; x <= this.width; x++) {
	                this.cursorX = x;
	                this.cursorY = y;

	                if (this.textColourBuffer[x] && this.textColourBuffer[x][y]) {
	                    this.textColour = this.textColourBuffer[x][y];
	                } else {
	                    this.textColour = "#F0F0F0";
	                }

	                if (this.backColourBuffer[x] && this.backColourBuffer[x][y]) {
	                    this.backColour = this.backColourBuffer[x][y];
	                } else {
	                    this.backColour = "#000000";
	                }

	                if (this.textBuffer[x] && this.textBuffer[x][y]) {
	                    this.write(this.textBuffer[x][y]);
	                } else {
	                    this.write(" ");
	                }
	            }
	        }

	        this.cursorX = oldCursorX;
	        this.cursorY = oldCursorY;
	        this.cursorBlink = oldCursorBlink;
	        this.backColour = oldBackColour;
		}

		this.draw = function() {
			this.ctx.clearRect(0, 0, this.canvasObj.width, this.canvasObj.height);

	        this.screenPixelSize = Math.floor(Math.min(this.canvasObj.width / (this.width * 2), this.canvasObj.height / (this.height * 3)));

	        this.screenWidth = this.screenPixelSize * this.width * 2;
	        this.screenHeight = this.screenPixelSize * this.height * 3;

	        this.screenX = Math.floor((this.canvasObj.width - this.screenWidth) / 2);
	        this.screenY = Math.floor((this.canvasObj.height - this.screenHeight) / 2);

	        //Draw the border
	        if (this.showBorder) {
		        switch (this.displayType) {
		        	default:
		            case "normal":
		                this.ctx.drawImage(resources.normalCorners, 0, 29, 12, 226, this.screenX - 12, this.screenY, 12, this.screenHeight); //Left
		                this.ctx.drawImage(resources.normalCorners, 36, 29, 12, 226, this.screenX + this.screenWidth, this.screenY, 12, this.screenHeight); //Right
		                this.ctx.drawImage(resources.normalCorners, 0, 0, 256, 12, this.screenX, this.screenY - 12, this.screenWidth, 12); //Top
		                this.ctx.drawImage(resources.normalCorners, 0, 12, 256, 12, this.screenX, this.screenY + this.screenHeight, this.screenWidth, 12); //Bottom
		                this.ctx.drawImage(resources.normalCorners, 12, 28, 12, 12, this.screenX - 12, this.screenY - 12, 12, 12); //Top-Left
		                this.ctx.drawImage(resources.normalCorners, 24, 28, 12, 12, this.screenX + this.screenWidth, this.screenY - 12, 12, 12); //Top-Right
		                this.ctx.drawImage(resources.normalCorners, 12, 40, 12, 12, this.screenX - 12, this.screenY + this.screenHeight, 12, 12); //Bottom-Left
		                this.ctx.drawImage(resources.normalCorners, 24, 40, 12, 12, this.screenX + this.screenWidth, this.screenY + this.screenHeight, 12, 12); //Bottom-Right
		                break;
		            case "advanced":
		                this.ctx.drawImage(resources.advancedCorners, 0, 29, 12, 226, this.screenX - 12, this.screenY, 12, this.screenHeight); //Left
		                this.ctx.drawImage(resources.advancedCorners, 36, 29, 12, 226, this.screenX + this.screenWidth, this.screenY, 12, this.screenHeight); //Right
		                this.ctx.drawImage(resources.advancedCorners, 0, 0, 256, 12, this.screenX, this.screenY - 12, this.screenWidth, 12); //Top
		                this.ctx.drawImage(resources.advancedCorners, 0, 12, 256, 12, this.screenX, this.screenY + this.screenHeight, this.screenWidth, 12); //Bottom
		                this.ctx.drawImage(resources.advancedCorners, 12, 28, 12, 12, this.screenX - 12, this.screenY - 12, 12, 12); //Top-Left
		                this.ctx.drawImage(resources.advancedCorners, 24, 28, 12, 12, this.screenX + this.screenWidth, this.screenY - 12, 12, 12); //Top-Right
		                this.ctx.drawImage(resources.advancedCorners, 12, 40, 12, 12, this.screenX - 12, this.screenY + this.screenHeight, 12, 12); //Bottom-Left
		                this.ctx.drawImage(resources.advancedCorners, 24, 40, 12, 12, this.screenX + this.screenWidth, this.screenY + this.screenHeight, 12, 12); //Bottom-Right
		                break;
		            case "command":
		                this.ctx.drawImage(resources.commandCorners, 0, 29, 12, 226, this.screenX - 12, this.screenY, 12, this.screenHeight); //Left
		                this.ctx.drawImage(resources.commandCorners, 36, 29, 12, 226, this.screenX + this.screenWidth, this.screenY, 12, this.screenHeight); //Right
		                this.ctx.drawImage(resources.commandCorners, 0, 0, 256, 12, this.screenX, this.screenY - 12, this.screenWidth, 12); //Top
		                this.ctx.drawImage(resources.commandCorners, 0, 12, 256, 12, this.screenX, this.screenY + this.screenHeight, this.screenWidth, 12); //Bottom
		                this.ctx.drawImage(resources.commandCorners, 12, 28, 12, 12, this.screenX - 12, this.screenY - 12, 12, 12); //Top-Left
		                this.ctx.drawImage(resources.commandCorners, 24, 28, 12, 12, this.screenX + this.screenWidth, this.screenY - 12, 12, 12); //Top-Right
		                this.ctx.drawImage(resources.commandCorners, 12, 40, 12, 12, this.screenX - 12, this.screenY + this.screenHeight, 12, 12); //Bottom-Left
		                this.ctx.drawImage(resources.commandCorners, 24, 40, 12, 12, this.screenX + this.screenWidth, this.screenY + this.screenHeight, 12, 12); //Bottom-Right
		                break;
		            case "turtleNormal":
		                //Not currently functional, use "normal"
		                this.width = 39;
		                this.height = 13;

		                this.screenPixelSize = Math.min(canvas.width / 254, canvas.height / 217);

		                var frameWidth = this.screenPixelSize * 254;
		                var frameHeight = this.screenPixelSize * 217;

		                var frameX = Math.floor((canvas.width - frameWidth) / 2);
		                var frameY = Math.floor((canvas.height - frameHeight) / 2);

		                this.ctx.drawImage(resources.turtleNormal, 0, 0, 254, 217, frameX, frameY, frameWidth, frameHeight);
		                break;
		        }
		    }

	      	this.drawScreen();
		}
		this.draw();

		//Used for functions which can not access "this"
		var tObj = this;
	}
})();