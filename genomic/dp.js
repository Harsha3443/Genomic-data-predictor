document.addEventListener("DOMContentLoaded", () => {
    const fatherDiseaseSelect = document.getElementById('fatherDisease');
    const grandfatherDiseaseSelect = document.getElementById('grandfatherDisease');
    const fatherQuestionsDiv = document.getElementById('fatherQuestions');
    const grandfatherQuestionsDiv = document.getElementById('grandfatherQuestions');
    const outputDiv = document.getElementById('output');

    fatherDiseaseSelect.addEventListener('change', () => {
        fatherQuestionsDiv.style.display = fatherDiseaseSelect.value ? 'block' : 'none';
        if (!fatherDiseaseSelect.value) {
            outputDiv.innerHTML = ''; 
        }
    });

    grandfatherDiseaseSelect.addEventListener('change', () => {
        grandfatherQuestionsDiv.style.display = grandfatherDiseaseSelect.value ? 'block' : 'none';
        if (!grandfatherDiseaseSelect.value) {
            outputDiv.innerHTML = ''; 
        }
    });

    document.querySelectorAll('.yes').forEach(button => {
        button.addEventListener('click', () => {
            const prediction = Math.floor(Math.random() * 21) + 50; 
            const diseaseType = button.id === 'fatherYes' ? "Father's" : "Grandfather's";
            outputDiv.innerHTML += `${diseaseType} Disease: You indicated 'Yes'. Prediction: ${prediction}%.<br>`;
        });
    });

    document.querySelectorAll('.no').forEach(button => {
        button.addEventListener('click', () => {
            const prediction = Math.floor(Math.random() * 21); // Between 0 and 20
            const diseaseType = button.id === 'fatherNo' ? "Father's" : "Grandfather's";
            outputDiv.innerHTML += `${diseaseType} Disease: You indicated 'No'. Prediction: ${prediction}%.<br>`;
        });
    });
});
