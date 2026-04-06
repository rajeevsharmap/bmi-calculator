       const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const height = parseFloat(document.querySelector('#height').value);
            const weight = parseFloat(document.querySelector('#weight').value);
            const results = document.querySelector('.result-display');

            if (height === '' || height < 0 || isNaN(height)) {
                results.innerHTML =
                `
                <div class="result">
                    <div class="error-message">
                        Please enter a valid height
                        <p class="invaild-entry">
                            Entered invalid height
                        </p>
                        <div class="error">
                            ${height}!
                        </div>
                    </div>
                </div>
                `;
            } else if (weight === '' || weight < 0 || isNaN(weight)) {
                results.innerHTML =
                `
                <div class="result">
                    <div class="error-message">
                        Please enter a valid weight
                        <p class="invaild-entry">
                            Entered invalid weight
                        </p>
                        <div class="error">
                            ${weight}
                        </div>
                    </div>
                </div>
                `;
            }else {
                let styleiNumber=0;
                styleTag= document.createElement('style');
                const bmi = (weight / ((height * height) / 10000)).toFixed(2);
                let message;
                if (bmi <= 18.5) {
                    styleNumber=1;
                    message = `UNDERWEIGHT
                    <p class="advice">
                    Consider consulting a nutritionist. A balanced diet with sufficient calories 
                    and nutrients can help you reach a healthy weight.
                    <p>`;
                } else if (bmi >= 18.5 && bmi <= 24.9) {
                    styleNumber=2;
                    message = `NORMAL WEIGHT
                    <p class="advice">
                    Great work! Maintain your healthy weight with a balanced diet, regular 
                    exercise, and good sleep habits.
                    <p>`;
                } else if (bmi >= 25.0 && bmi <= 29.0) {
                    styleNumber=3;
                    message = `OVERWEIGHT
                    <p class="advice">
                    Modest lifestyle adjustments — like reducing processed food intake 
                    and adding 30 min of daily activity — can make a significant difference.
                    <p>`;
                } else {
                    styleNumber=4;
                    message = `OBESE
                    <p class="advice">Please consider speaking with a healthcare provider. Professional 
                    guidance on diet and activity can help reduce health risks.
                    <p>`;
                }
                results.innerHTML =
                `
                <div class="result">
                    <div class="yourBMI">
                        YOUR BMI
                    </div>
                    <div class="resultBMI">
                        ${bmi}
                    </div>
                    <div class="bmiMessage">
                        ${message}
                    </div>
                </div>
                            `;
                if(styleNumber ===1)
                {
                    styleTag.textContent+=
                    `.result{
                        border-top :3px solid #74b9ff;
                    }
                    .resultBMI{
                    color: #74b9ff;
                    }
                    .bmiMessage{
                    color: #74b9ff;
                    }
                `;
                }
                else if(styleNumber === 2)
                {
                    styleTag.textContent+=
                    `.result{
                        border-top :3px solid #c8f542;
                    }
                    .resultBMI{
                    color: #c8f542;
                    }
                    .bmiMessage{
                    color: #c8f542;
                    }
                `;
                }
                else if(styleNumber === 3)
                {
                    styleTag.textContent+=
                    `.result{
                        border-top :3px solid ##ffc145;
                    }
                    .resultBMI{
                    color: #ffc145;
                    }
                    .bmiMessage{
                    color:#ffc145;
                    }
                `;
                }
                else{
                    styleTag.textContent+=
                    `.result{
                        border-top :3px solid #ff6b6b;
                    }
                    .resultBMI{
                    color: #ff6b6b;
                    }
                    .bmiMessage{
                    color:#ff6b6b;
                    }
                `;
                }  
                document.head.appendChild(styleTag);
            }
        })