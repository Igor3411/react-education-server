const timeOfday = { time: "day" };
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const temperature = () => {
  const t = getRandomInRange(-15, 15);
  return { temperature: t };
};

setInterval(() => {
  if (timeOfday.time === "day") {
    timeOfday.time = "night";
  } else {
    timeOfday.time = "day";
  }
}, 30000);

const getEvent = (eventName) => {
  switch (eventName) {
    case "temperature":
      return temperature();
    case "timeOfday":
      return timeOfday;
    default:
      return "Нет такого свойства";
  }
};

module.exports = getEvent;
