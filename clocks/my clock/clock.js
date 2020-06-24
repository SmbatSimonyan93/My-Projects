window.onload = function() {
	var date = new Date();
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();
	var elems = {};
	var title = document.title;

	function titleScrolling() {
		title = title.substr(1) + title.substr(0,1);
		document.title = title;
	}

	function setupClock() {
		elems.seconds.style.transform = `rotateZ(${360/60*seconds}deg)`;	
		elems.minutes.style.transform = `rotateZ(${360/60*minutes}deg)`;
		elems.hours.style.transform = `rotateZ(${360/12*hours}deg)`;
	}

	function moveSeconds() {
		// console.log(seconds);
		elems.seconds.style.transform = `rotateZ(${360/60*seconds}deg)`;
		if (seconds == 60) {
			seconds = 1;
			minutes++;
		} else {
			seconds++;
		}
	}

	function moveMinutes() {
		// console.log(minutes);
		elems.minutes.style.transform = `rotateZ(${360/60*minutes}deg)`;
		if (minutes == 60) {
			minutes = 0;
			hours++;
		}
	}

	function moveHours() {
		// console.log(hours);
		elems.hours.style.transform = `rotateZ(${360/12*hours}deg)`;
		if (hours == 24) {
			hours = 0;
		}
	}

	function changeColor() {
		var newColor = elems.color.value;
		elems.clock.style.background = newColor;
		console.log(newColor);
	}

	function ticking() {
		// elems.sound.play();
	}

	["seconds", "minutes", "hours", "color", "sound", "clock"].forEach((item) => {
		elems[item] = document.getElementById(item);
	});

	[moveSeconds, moveMinutes, moveHours, ticking].forEach((item) => {
		setInterval(item, 1000);
	});

	elems.color.addEventListener("input", changeColor);

	setupClock();

	setInterval(titleScrolling, 100);


	elems.clock.onmousedown = function(e) {
		console.log( getCoords(elems.clock), e.pageX);
			var coords = getCoords(elems.clock);
			var shiftX = e.pageX - coords.left;
			var shiftY = e.pageY - coords.top;
			elems.clock.style.position = "absolute";
			moveAt(e);
		
			function moveAt(e) {
				elems.clock.style.left = e.pageX - shiftX + "px";
				elems.clock.style.top = e.pageY - shiftY + "px";
			}

			document.onmousemove = function(e) {
				moveAt(e);
			}

			elems.clock.onmouseup = function() {
			document.onmousemove = null;
			elems.clock.onmouseup = null;		
			}

			elems.clock.ondragstart = function() {
				return false;
			}
			function getCoords(elem) {
				var page = elem.getBoundingClientRect();

				return { top: page.top + pageYOffset, left: page.left + pageXOffset };
			}
		}
}