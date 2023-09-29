let nav = 0;
let clicked = null;
let events = localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : [];

const calendar = document.getElementById("calendar");

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function onLoad() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav)
    }

    const day = dt.getDay();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    
    const firstDayOfTheMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfTheMonth.toLocaleDateString("pt-br", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric"
    })

    const [weekDay] = dateString.split(", ")

    const paddingdays = weekday.indexof(weekDay);

    document.getElementById("monthDisplay").innerText = `${dt.toLocaleDateString("pt-br", { month: "long" })} ${year}`

    calendar.innerHTML = ""

    for (let i = 1; i <= paddingdays + daysInMonth; i++) {
        const daySquare = document.createElement("div");
        daySquare.classList.add("day")

        if (i > paddingdays) {
            daySquare.innerText = i - paddingdays
            daySquare.addEventListener("click", () => console.log("click"))
        } else {
            daySquare.classList.add("padding")
        }

        calendar.append(daySquare);
    }
}

function initButtons(){
    document.getElementById("nextButton").addEventListener("click", () => {
        nav++;
        load()
    })
    document.getElementById("backButton").addEventListener("click", () => {
        nav--;
        load()
    })
}

initButtons()
onLoad()
