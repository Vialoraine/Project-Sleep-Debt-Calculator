function getSleepHours(day) {
  //Control Flow Using If/Else
  if (day === "Monday") {
    return 8;
  } else if (day === "Tuesday") {
    return 7;
  } else if (day === "Wednesday") {
    return 6;
  } else if (day === "Thursday") {
    return 5;
  } else if (day === "Friday") {
    return 7;
  } else if (day === "Saturday") {
    return 5;
  } else if (day === "Sunday") {
    return 6;
  } else {
    console.log("Must entire a valid day of the week.");
  }

  //Control Flow Using Switch/Case
  /*switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 7;
      break;
    case 'Wednesday':
      return 6;
      break;
    case 'Thursday':
      return 5;
      break;
    case 'Friday':
      return 7;
      break;
    case 'Saturday':
      return 5;
      break;
    case 'Sunday':
      return 6;
      break;
    default:
      console.log('Must entire a valid day of the week.');
  }*/
}

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

const getIdealSleepHours = (hours) => {
  return hours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

    console.log("Amount of sleep this week: " + actualSleepHours);
    console.log("Ideal amount of sleep for the week: " + idealSleepHours);
}