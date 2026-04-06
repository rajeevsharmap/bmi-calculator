const form = document.querySelector('form');

// Color map — single source of truth, no repeated style injection
const bmiColors = {
  underweight: '#74b9ff',
  normal:      '#c8f542',
  overweight:  '#ffc145',
  obese:       '#ff6b6b',
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const heightInput = document.querySelector('#height').value;
  const weightInput = document.querySelector('#weight').value;
  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);
  const results = document.querySelector('.result-display');

  // Validation
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `
      <div class="result">
        <div class="error-message">
          Please enter a valid height
          <p class="invalid-entry">Entered invalid height</p>
          <div class="error">${heightInput || '—'}!</div>
        </div>
      </div>`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `
      <div class="result">
        <div class="error-message">
          Please enter a valid weight
          <p class="invalid-entry">Entered invalid weight</p>
          <div class="error">${weightInput || '—'}</div>
        </div>
      </div>`;
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let category, color, message;

  if (bmi < 18.5) {
    category = 'UNDERWEIGHT';
    color = bmiColors.underweight;
    message = 'Consider consulting a nutritionist. A balanced diet with sufficient calories and nutrients can help you reach a healthy weight.';
  } else if (bmi <= 24.9) {
    category = 'NORMAL WEIGHT';
    color = bmiColors.normal;
    message = 'Great work! Maintain your healthy weight with a balanced diet, regular exercise, and good sleep habits.';
  } else if (bmi <= 29.9) {
    category = 'OVERWEIGHT';
    color = bmiColors.overweight;
    message = 'Modest lifestyle adjustments — like reducing processed food intake and adding 30 min of daily activity — can make a significant difference.';
  } else {
    category = 'OBESE';
    color = bmiColors.obese;
    message = 'Please consider speaking with a healthcare provider. Professional guidance on diet and activity can help reduce health risks.';
  }

  results.innerHTML = `
    <div class="result" style="border-top: 3px solid ${color};">
      <div class="yourBMI">YOUR BMI</div>
      <div class="resultBMI" style="color: ${color};">${bmi}</div>
      <div class="bmiMessage" style="color: ${color};">${category}
        <p class="advice">${message}</p>
      </div>
    </div>`;
});