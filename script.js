var time = moment().format("dddd MMM Do");
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
var saveBtn9 = document.getElementById("nineBtn");
var saveBtn10 = document.getElementById("tenBtn");
var saveBtn11 = document.getElementById("elevenBtn");
var saveBtn12 = document.getElementById("twelveBtn");
var saveBtn1 = document.getElementById("oneBtn");
var saveBtn2 = document.getElementById("twoBtn");
var saveBtn3 = document.getElementById("threeBtn");
var saveBtn4 = document.getElementById("fourBtn");
var saveBtn5 = document.getElementById("fiveBtn");
document.getElementById("currentDay").textContent = time; 


// These lines get local storage if it exists, then sets up a click event to run the function to set the local storage
nineAm.value = localStorage.getItem("9");

saveBtn9.addEventListener("click", savePersist9);	
function savePersist9() {													
	localStorage.setItem("9", nineAm.value);
}

tenAm.value = localStorage.getItem("10");
saveBtn10.addEventListener("click", savePersist10);
function savePersist10() {
	localStorage.setItem("10", tenAm.value);
}

elevenAm.value = localStorage.getItem("11");
saveBtn11.addEventListener("click", savePersist11);
function savePersist11() {
	localStorage.setItem("11", elevenAm.value);
}

twelvePm.value = localStorage.getItem("12");
saveBtn12.addEventListener("click", savePersist12);
function savePersist12() {
	localStorage.setItem("12", twelvePm.value);
}

onePm.value = localStorage.getItem("1");
saveBtn1.addEventListener("click", savePersist1);
function savePersist1() {
	localStorage.setItem("1", onePm.value);
}

twoPm.value = localStorage.getItem("2");
saveBtn2.addEventListener("click", savePersist2);
function savePersist2() {
	localStorage.setItem("2", twoPm.value);
}

threePm.value = localStorage.getItem("3");
saveBtn3.addEventListener("click", savePersist3);
function savePersist3() {
	localStorage.setItem("3", threePm.value);
}

fourPm.value = localStorage.getItem("4");
saveBtn4.addEventListener("click", savePersist4);
function savePersist4() {
	localStorage.setItem("4", fourPm.value);
}

fivePm.value = localStorage.getItem("5");
saveBtn5.addEventListener("click", savePersist5);
function savePersist5() {
	localStorage.setItem("5", fivePm.value);
}

// These functions make my colors change good.
function nineAM() {
	if (currentTime > 9) {
		nineAm.classList.add("past"); 
	};
	if (currentTime < 9) {
		nineAm.classList.add("future");
	};
	if (currentTime == 9) {
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
	else if (currentTime == 10) {
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
	else if (currentTime == 11) {
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
	else if (currentTime == 12) {
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
	else if (currentTime == 13) {
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
	else if (currentTime == 14) {
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
	else if (currentTime == 15) {
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
	else if (currentTime == 16) {
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
	else if (currentTime == 17) {
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
