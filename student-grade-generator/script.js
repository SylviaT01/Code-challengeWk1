// Function to calculate grade
function calculateGrade() {
    // Get input values for grade
    let ift = document.querySelector("#ift").value;
    let dst = document.querySelector("#dst").value;
    let math = document.querySelector("#math").value;
    let cls = document.querySelector("#cls").value;
    let dsi = document.querySelector("#dsi").value;

//  // Check if inputs are within valid range (0-100)
if (isNaN(ift) || ift === "" || ift < 0 || ift > 100 || isNaN(dst) || dst === "" || dst < 0 || dst > 100 || isNaN(math) || math === "" || math < 0 || math > 100 || isNaN(cls) || cls === "" || cls < 0 || cls > 100 || isNaN(dsi) || dsi === "" || dsi < 0 || dsi > 100  ) {
    document.getElementById("error").innerText = "Please enter valid marks between 0 and 100.";
    return false;
}

    // Sum up the scores to get the total grade
    let ttl = parseFloat(ift) + parseFloat(dst) + parseFloat(math) + parseFloat(cls) + parseFloat(dsi);
    // Get the percentage
    let prt = (ttl * 100) / 500;
    // Determine grades based on percentage
    if (prt > 79) {
        document.querySelector(".grd").innerHTML = "A";
    } else if (prt >= 60 && prt <= 79) {
        document.querySelector(".grd").innerHTML = "B";
    } else if (prt > 49 && prt <= 59) {
        document.querySelector(".grd").innerHTML = "C";
    } else if (prt > 40 && prt <= 49) {
        document.querySelector(".grd").innerHTML = "D";
    } else {
        document.querySelector(".grd").innerHTML = "E";
    }
    // Display the total score and percentage on result section
    document.querySelector(".ttl").innerHTML = ttl;
    document.querySelector(".prt").innerHTML = prt;
}