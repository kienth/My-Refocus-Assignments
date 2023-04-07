// ---------------------------------- Task 1. ------------------------------- //

let caloriesPerMinute = 225; // running for 30 minutes burns 225 calories

let numTimesSamRuns = 15;

let runMinutesPerDay = 0.5;

let totalHoursRunning = numTimesSamRuns * runMinutesPerDay;

let totalCaloriesBurned = caloriesPerMinute * totalHoursRunning;

console.log(
    `Great work, Sam! After ${runMinutesPerDay} hours of running everyday for a week, you may lose a total of ${totalCaloriesBurned} calories.`
);

// ---------------------------------- Task 2. ------------------------------- //

let totalWant = 10000; // Sam wants to save 10,000

let currentSaved = 7500;

let percentLeft = (1 - currentSaved / totalWant) * 100;

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentLeft}% away from
your goal of saving ₱${totalWant}.`);
