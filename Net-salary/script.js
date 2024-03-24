// Function to calculate PAYE tax based on gross salary
function calculatePayee(grossSalary) {
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = 0.1 * grossSalary;
    } else if (grossSalary <= 32333) {
        payee = 2400 + 0.25 * (grossSalary - 24000);
    } else if (grossSalary <= 40667) {
        payee = 5967.50 + 0.3 * (grossSalary - 32333);
    } else if (grossSalary <= 49000) {
        payee = 10960 + 0.32 * (grossSalary - 40667);
    } else if (grossSalary <= 57333) {
        payee = 16862.50 + 0.34 * (grossSalary - 49000);
    } else if (grossSalary <= 65667) {
        payee = 23575 + 0.36 * (grossSalary - 57333);
    } else if (grossSalary <= 74000) {
        payee = 31142 + 0.37 * (grossSalary - 65667);
    } else {
        payee = 39675 + 0.4 * (grossSalary - 74000);
    }
    return payee;
}
// Function to calculate NHIF deduction based on basic salary
function calculateNHIF(basicSalary) {
    let nhif = 0;
    if (basicSalary <= 5999) {
        nhif = 150;
    } else if (basicSalary <= 7999) {
        nhif = 300;
    } else if (basicSalary <= 11999) {
        nhif = 400;
    } else if (basicSalary <= 14999) {
        nhif = 500;
    } else if (basicSalary <= 19999) {
        nhif = 600;
    } else if (basicSalary <= 24999) {
        nhif = 750;
    } else if (basicSalary <= 29999) {
        nhif = 850;
    } else if (basicSalary <= 34999) {
        nhif = 900;
    } else if (basicSalary <= 39999) {
        nhif = 950;
    } else if (basicSalary <= 44999) {
        nhif = 1000;
    } else if (basicSalary <= 49999) {
        nhif = 1100;
    } else if (basicSalary <= 59999) {
        nhif = 1200;
    } else if (basicSalary <= 69999) {
        nhif = 1300;
    } else if (basicSalary <= 79999) {
        nhif = 1400;
    } else {
        nhif = 1500;
    }
    return nhif;
}
// Function to calculate NSSF deduction based on basic salary
function calculateNSSF(basicSalary) {
    return Math.min(0.06 * basicSalary, 6000);
}
// Function to calculate net salary based on basic salary and benefits
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary by adding basic salary and benefits
    const grossSalary = basicSalary + benefits;
    // Calculate PAYE, NHIF, and NSSF deductions
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const netSalary = Math.round(grossSalary - payee - nhif - nssf);
    return netSalary;
}
// Function to handle the click event for calculating net salary
function calculateSalary() {
    // Get values of basic salary and benefits from input fields
    const basicSalary = parseFloat(document.querySelector("#bsc").value);
    const benefits = parseFloat(document.querySelector("#ben").value);
    // Calculate net salary using the calculateNetSalary function
    const netSalary = calculateNetSalary(basicSalary, benefits);
    // Calculate NHIF and NSSF deductions
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    // Display the result in the result div
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = `Net Salary: Ksh ${netSalary}
    <p>NHIF Deduction: Ksh ${nhif.toLocaleString({ maximumFractionDigits: 0 })}</p>
    <p>NSSF Deduction: Ksh ${nssf.toLocaleString({ maximumFractionDigits: 0 })}</p>`
}
