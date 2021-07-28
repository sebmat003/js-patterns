// For men:
// BMR = 10W + 6.25H - 5A + 5
// For women:
// BMR = 10W + 6.25H - 5A - 161

// For men:
// BMR = 13.397W + 4.799H - 5.677A + 88.362
// For women:
// BMR = 9.247W + 3.098H - 4.330A + 447.593

function CalculateCaloricNeeds() {
  this.calculate = (age, weight, height, gender) => {
    let bmr = 0;
    switch(gender) {
      case 'male': 
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        break;
      case 'female': 
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        break;
    }
    return bmr;
  }
}

function AdvancedCalculationOfCaloricNeeds() {
  this.setAge = (age) => {
    this.age = age;
  }
  this.setWeightHeight = (weight, height) => {
    this.weight = weight;
    this.height = height;
  }
  this.setGender = (gender) => {
    this.gender = gender;
  }

  this.calculate = () => {
    let bmr = 0;
    switch(this.gender) {
      case 'male': 
        bmr = 13.397 * this.weight + 4.799 * this.height - 5.677 * this.age + 88.362;
        break;
      case 'female': 
        bmr = 9.247 * this.weight + 3.098 * this.height - 4.330 * this.age + 447.593;
        break;
    }
    return bmr;
  }
}

function CalculatingAdapter() {
  const calculation = new AdvancedCalculationOfCaloricNeeds();
  return {
    calculate: (age,weight,height,gender) => {
      calculation.setAge(age);
      calculation.setWeightHeight(weight,height);
      calculation.setGender(gender);
      return calculation.calculate();
    }
  }
}

const oldCalculation = new CalculateCaloricNeeds();
const adapter = new CalculatingAdapter();

//old

const bmr = oldCalculation.calculate(29, 49, 162, 'female');
console.log('Old calculation of BMR:', bmr);

//new 

const newBmr = adapter.calculate(29, 49, 162, 'female');
console.log('New calculation of BMR:', newBmr);


