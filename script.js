var time = moment().format("dddd MMM Do");
// document.querySelector("#currentDay").textContent=time;
var currentTime = moment().format('H');
var nineAm = document.getElementById("nine");
var tenAm = document.getElementById("ten");
var elevenAm = document.getElementById("eleven");
var twelvePm = document.getElementById("twelve");
var onePm = document.getElementById("one");
var twoPm = document.getElementById("two");
var threePm = document.getElementById("three");
var fourPm = document.getElementById("four");
var fivePm = document.getElementById("five");
$("#currentDay").text(time);


function nineAM() {
	if (currentTime > 9) {
		nineAm.classList.add("past"); 
	};
	if (currentTime < 9) {
		nineAm.classList.add("future");
	};
	if (currentTime === 9) {
		nineAm.classList.add("present");
	};
}


function tenAM() {
	if (currentTime > 10) {
		tenAm.classList.add("past");
	}
	else if (currentTime < 10) {
		tenAm.classList.add("future");
	}
	else if (currentTime === 10) {
		tenAm.classList.add("present");
	};
}

function elevenAM() {
	if (currentTime > 11) {
		elevenAm.classList.add("past");
	}
	else if (currentTime < 11) {
		elevenAm.classList.add("future");
	}
	else if (currentTime === 11) {
		elevenAm.classList.add("present");
	};
}

function twelvePM() {
	if (currentTime > 12) {
		twelvePm.classList.add("past");
	}
	else if (currentTime < 12) {
		twelvePm.classList.add("future");
	}
	else if (currentTime === 12) {
		twelvePm.classList.add("present");
	};
}

function onePM() {
	if (currentTime > 13) {
		onePm.classList.add("past");
	}
	else if (currentTime < 13) {
		onePm.classList.add("future");
	}
	else if (currentTime === 13) {
		onePm.classList.add("present");
	};
}

function twoPM() {
	if (currentTime > 14) {
		twoPm.classList.add("past");
	}
	else if (currentTime < 14) {
		twoPm.classList.add("future");
	}
	else if (currentTime === 14) {
		twoPm.classList.add("present");
	};
}

function threePM() {
	if (currentTime > 15) {
		threePm.classList.add("past");
	}
	else if (currentTime < 15) {
		threePm.classList.add("future");
	}
	else if (currentTime === 15) {
		threePm.classList.add("present");
	};
}

function fourPM() {
	if (currentTime > 16) {
		fourPm.classList.add("past");
	}
	else if (currentTime < 16) {
		fourPm.classList.add("future");
	}
	else if (currentTime === 16) {
		fourPm.classList.add("present");
	};
}

function fivePM() {
	if (currentTime > 17) {
		fivePm.classList.add("past");
	}
	else if (currentTime < 17) {
		fivePm.classList.add("future");
	}
	else if (currentTime === 17) {
		fivePm.classList.add("present");
	};
}

nineAM();
tenAM();
elevenAM();
twelvePM();
onePM();
twoPM();
threePM();
fourPM();
fivePM();