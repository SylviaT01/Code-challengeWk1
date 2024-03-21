function calculateGrade(){
    let ift = document.querySelector("#ift").value;
    let dst = document.querySelector("#dst").value;
    let math = document.querySelector("#math").value;
    let cls = document.querySelector("#cls").value;
    let dsi = document.querySelector("#dsi").value;

    let ttl = parseFloat(ift) + parseFloat(dst) + parseFloat(math) + parseFloat(cls) + parseFloat(dsi);
    let prt = (ttl * 100)/500;
    if (prt >79){
        document.querySelector(".grd").innerHTML = "A";
    } else if (prt > 60 && prt <=79){
        document.querySelector(".grd").innerHTML = "B";
    } else if (prt >49 && prt <= 59){
        document.querySelector(".grd").innerHTML = "C";
    } else if (prt > 40 && prt <= 49){
        document.querySelector(".grd").innerHTML = "D";
    } else {
        document.querySelector(".grd").innerHTML = "E";
    }
    document.querySelector(".ttl").innerHTML = ttl;
    document.querySelector(".prt").innerHTML = prt;
}