// Funtion to calculate demerit points based on speed
function calculatePoints() {
    // Get the speed input value from the HTML element with id "spd"
    let spd = parseInt(document.querySelector("#spd").value);
    // Define speed limit, demerits per 5 km/s over the limit, and maximum demerit points
    let speedLimit = 70;
    let demeritsPer5km = 1;
    let maxDemeritPoints = 12;
    // Check if the speed is within the limit
    if (spd <= speedLimit) {
        // If speed is within speed limit print "Ok" message
        document.querySelector("#result").innerText = "Ok";
    } else {
        // If speed is over the limit, calculate demerit points
        const Points = Math.floor((spd - speedLimit) / 5) * demeritsPer5km;
        // Check if demerit points exceed maximum allowed
        if (Points >= maxDemeritPoints) {
            // If demerit points exceed maximum, display "License suspended" message
            document.querySelector("#result").innerText = "License suspended";
        } else {
            // If demerit points are within limit, display the calculated points
            document.querySelector("#result").innerText = "Points: " + Points;
        }
    }
}
