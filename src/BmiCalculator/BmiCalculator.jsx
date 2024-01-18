import React, {useState} from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to meters

    if (isNaN(weightInKg) || isNaN(heightInM) || heightInM <= 0) {
      alert('Please enter valid weight and height values.');
      return;
    }

    const bmiValue = (weightInKg / (heightInM * heightInM)).toFixed(1);

    setBMI(bmiValue);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>
          Height:
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
        </label>
      </div>
      <div>
        <label>
          Weight:
          <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </label>
      </div>
      <div>
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
      {bmi !== null && (
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <h3>{bmiCategory}</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
