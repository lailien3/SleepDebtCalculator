// set hours per day of week
const getSleepHours = (day) => {
    if (day === 'monday' || day === 'tuesday') {
      return 10;
    } else if (day === 'wednesday') {
      return 9;
    } else if (day === 'thursday' || day ==='friday') {
      return 8;
    } else if (day === 'saturday' || day === 'sunday') {
      return 7;
    }
  }
  
  console.log(`You slept ${getSleepHours('sunday')} hours.`);
  
  // total hours slept
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  console.log(`This week, you slept ${getActualSleepHours()} hours.`);
  
  // ideal hours slept
  const getIdealSleepHours = () => {
    let idealHours = 9;
    return idealHours*7;
  }
  
  console.log(`Ideally, you want to get ${getIdealSleepHours()} hours of sleep.`);
  
  // sleep debt
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
      console.log(`You' are caught up on sleep'. Good job!`);
    } else if (actualSleepHours > idealSleepHours) {
      let calculateSleepDebt = actualSleepHours - idealSleepHours;
      console.log(`You have overslept by ${calculateSleepDebt}.`);
      return calculateSleepDebt;
    } else if (actualSleepHours < idealSleepHours) {
      let calculateSleepDebt = idealSleepHours - actualSleepHours;
      console.log(`You have not slept enough. Sleep ${calculateSleepDebt} to feel better.`);
      return calculateSleepDebt;
    }
  }
  
  calculateSleepDebt();