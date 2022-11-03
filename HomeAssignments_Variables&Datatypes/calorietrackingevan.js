//calorie tracking app
function samCalorieCalculator(days, activity='cycling'){
    let weeks;
    let day;
    let totalCaloriesBurn = 225 * days
    if (activity !== 'cycling'){
        return `Sorry ${activity} is currently not registered as an activity`
    }
    
    if(days >= 7 ) {
        weeks = Math.floor(days / 7)
        day = days % 7;
        return `Great work, Sam! After 0.5 hours of ${activity} every day for ${weeks} week/s and ${day} day/s, you may lose a total of ${totalCaloriesBurn} calorie/s`
    }  else {
        return `Great work, Sam! After 0.5 hours of ${activity} every day for ${days} day/s, you may lose a total of ${totalCaloriesBurn} calorie/s`
    }
  
}
console.log(samCalorieCalculator(4))
console.log(samCalorieCalculator(15))
console.log(samCalorieCalculator(45, 'boxing'))