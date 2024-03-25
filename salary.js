function calculateNetSalary() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
  
     const taxRates = {
      0: 0,
      12298: 10,
      23885: 15,
      35472: 20,
      47059: 25,
      59098: 30
    };
  
    let taxableIncome = basicSalary + benefits;
    let tax = 0;
  
    for (const [limit, rate] of Object.entries(taxRates)) {
      if (taxableIncome > limit) {
        tax += (taxableIncome - limit) * (rate / 100);
        taxableIncome = limit;
      }
    }
  
    const nhifRate = 0.075;
    const nhifDeductions = Math.min(1700, basicSalary * nhifRate);
  
    const nssfRate = 0.06;
    const nssfDeductions = Math.min(3600, basicSalary * nssfRate);
  

    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
  
    alert("Net Salary: " + netSalary.toFixed(2));
  }
  
  calculateNetSalary();
  