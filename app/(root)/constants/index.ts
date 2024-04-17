export const sidebarLinks = [
  {
    label: "Home",
    route: "/",
    imgUrl: "/icons/Home.svg",
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    imgUrl: "/icons/upcoming.svg",
  },
  {
    label: "Previous",
    route: "/previous",
    imgUrl: "/icons/previous.svg",
  },
  {
    label: "Recordings",
    route: "/recordings",
    imgUrl: "/icons/Video.svg",
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    imgUrl: "/icons/add-personal.svg",
  },
];

const currentDate = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "WednesDay",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const day = daysOfWeek[currentDate.getDay()];
const month = monthsOfYear[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();

export const formattedDate = `${day}, ${month} ${date}, ${year}`;

let hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours ? hours : 12;

export const formattedTime = `${hours}:${minutes} ${ampm}`;
