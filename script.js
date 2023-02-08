"use strict";

setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
	const currentDate = new Date();
	const secondRatio = currentDate.getSeconds() / 60;
	const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
	const hourRatio = (minutesRatio + currentDate.getHours()) / 12;
	console.log(currentDate.getSeconds());
	console.log(currentDate.getMinutes());
	console.log(currentDate.getHours());
	// console.log(currentDate);
	setRotation(secondHand, secondRatio);
	setRotation(minuteHand, minuteHand);
	setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRation) {
	element.style.setProperty("--rotation", rotationRation * 360);
}
