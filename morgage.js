	function toggleModal(show) {
	 const modal = document.getElementById('mortgageModal');
	    const result = document.getElementById('result');
	    
	    if (show) {
	      modal.classList.remove('hidden'); // Untuk membuka modal
	      result.style.display = "block"; // Pastikan hasil dipaparkan
	    } else {
	      modal.classList.add('hidden'); // Untuk menutup modal
	      result.style.display = "none"; // Menyembunyikan hasil
	    }
	}
	
	function calculateLoan() {
		let propertyValue = parseFloat(document.getElementById("propertyValue").value);
		let loanMargin = parseFloat(document.getElementById("loanMargin").value);
		let interestRate = parseFloat(document.getElementById("interestRate").value);
		let tenure = parseFloat(document.getElementById("tenure").value);
	
	  	let loanAmount = propertyValue * (loanMargin / 100);
	 	let downpayment = propertyValue - loanAmount;
	 	let monthlyInterest = interestRate / 100 / 12;
	  	let numPayments = tenure * 12;
	
		let x = Math.pow(1 + monthlyInterest, numPayments);
		let monthlyPayment = (loanAmount * x * monthlyInterest) / (x - 1);
	
		function calculateLegalFee(amount) {
			if (amount &lt;= 500000) return amount * 0.01;
			if (amount &lt;= 1000000) return 5000 + ((amount - 500000) * 0.008);
			return 9000 + ((amount - 1000000) * 0.007);
		  }
		
		function calculateStampDuty(amount) {
			if (amount &lt;= 100000) return amount * 0.01;
			if (amount &lt;= 500000) return 1000 + ((amount - 100000) * 0.02);
			if (amount &lt;= 1000000) return 9000 + ((amount - 500000) * 0.03);
			return 24000 + ((amount - 1000000) * 0.04);
		  }
		
		  let valuationFee = propertyValue * 0.002;
		  let legalSPA = calculateLegalFee(propertyValue);
		  let stampDuty = calculateStampDuty(propertyValue);
		  let legalLoan = calculateLegalFee(loanAmount);
		  let stampDutyLoan = loanAmount * 0.005;
		  let totalEntry = downpayment + valuationFee + legalSPA + stampDuty + legalLoan + stampDutyLoan;
	
		
	  document.getElementById("result").innerHTML = isFinite(monthlyPayment)
	    ? `
	
		<p>Loan Amount: RM ${loanAmount.toLocaleString()}</p>
		<p>Down Payment: RM ${downPayment.toLocaleString()}</p>
		<p>Monthly Payment: RM ${monthlyPayment.toFixed(2)}</p>
		<p>Valuation Fee: RM ${valuationFee.toLocaleString()}</p>
		<p>Legal Fee (SPA): RM ${legalSPA.toLocaleString()}</p>
		<p>Stamp Duty: RM ${stampDuty.toLocaleString()}</p>
		<p>Legal Fee (Loan): RM ${legalLoan.toLocaleString()}</p>
		<p>Stamp Duty (Loan): RM ${stampDutyLoan.toLocaleString()}</p>
		<p>Total Entry Cost: RM ${totalEntry.toLocaleString()}</p>
	  `
	  : "Please fill in all fields correctly.";
	}
