var time = moment().format("dddd MMM Do");
$("#currentDay").text(time);

var currentTime = moment().format('h:mm:ss a');
console.log(currentTime);

function nineAM() {
	if (currentTime > 9) {

	}
}