class HospitalEmployee{
  constructor(name, insurance){
    this._name = name;
    this._insurance = insurance;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    return this._remainingVacationDays -= daysOff;
  }
}
