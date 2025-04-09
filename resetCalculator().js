function resetCalculator() {
    // Kosongkan input
    document.getElementById("propertyValue").value = "";
    document.getElementById("loanMargin").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("tenure").value = "";

    // Kosongkan output
    document.getElementById("outLoanAmount").innerText = "";
    document.getElementById("outDownPayment").innerText = "";
    document.getElementById("outMonthlyPayment").innerText = "";
    document.getElementById("outValuationFee").innerText = "";
    document.getElementById("outLegalSPA").innerText = "";
    document.getElementById("outStampDuty").innerText = "";
    document.getElementById("outLegalLoan").innerText = "";
    document.getElementById("outStampDutyLoan").innerText = "";
    document.getElementById("outTotalEntry").innerText = "";

    // Sembunyi result section
    document.getElementById("results").style.display = "none";
}
