let Employee = {
  salary : 100000
};



Employee.payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

export function getCadre(){
  if (Employee.salary >= Employee.payGrades.entryLevel.minSalary && Employee.salary <= Employee.payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= Employee.payGrades.midLevel.minSalary && Employee.salary <= Employee.payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

export function calculateTax() {
  return Employee.payGrades[getCadre()].taxMultiplier * Employee.salary;
}

export function getBenefits() {
  return Employee.payGrades[getCadre()].benefits.join(', ');
}

export function calculateBonus() {
  return .02 * Employee.salary;
}

export function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = Employee.payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

export default Employee;

