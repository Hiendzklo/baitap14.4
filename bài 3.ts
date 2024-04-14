const weekDays = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday"
};

let day: keyof typeof weekDays;
for (day in weekDays) {
    console.log(weekDays[day]);
}
