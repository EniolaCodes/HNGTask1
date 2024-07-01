const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const hero = document.querySelector("#hero");
const day = document.getElementById("day");
const utcTime = document.getElementById("time");

// show sidebar
navBtn.addEventListener("click", () => {
	sidebar.classList.add("show-sidebar");
	hero.classList.add("hidden");
});
closeBtn.addEventListener("click", () => {
	sidebar.classList.remove("show-sidebar");
	hero.classList.remove("hidden");
});

// get day of the week
const newDate = new Date();
const date = newDate;
const getDay = date.getDay() + 1;

if (getDay === 1) {
	day.textContent = "Day of the week: Sunday";
} else if (getDay === 2) {
	day.textContent = "Day of the week: Monday";
} else if (getDay === 3) {
	day.textContent = "Day of the week: Tuesday";
} else if (getDay === 4) {
	day.textContent = "Day of the week: Wednesday";
} else if (getDay === 5) {
	day.textContent = "Day of the week: Thursday";
} else if (getDay === 6) {
	day.textContent = "Day of the week: Friday";
} else if (getDay === 7) {
	day.textContent = "Day of the week: Saturday";
}
console.log(day);

// Get UTC hours, minutes, and seconds
const currentUTCTime = new Date();
const hours = currentUTCTime.getUTCHours();
const minutes = currentUTCTime.getUTCMinutes();
const seconds = currentUTCTime.getUTCSeconds();
const time = `Current UTC Time: ${hours} : ${minutes} : ${seconds}`;
utcTime.textContent = time;
