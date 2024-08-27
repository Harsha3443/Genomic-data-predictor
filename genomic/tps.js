function predictOffspring() {
    const fatherTraits = getSelectedTraits('father-form');
    const motherTraits = getSelectedTraits('mother-form');
    const mutationRate = parseFloat(document.getElementById('mutation-rate-input').value);

    const offspringTraits = {
        hairColor: selectTraits(fatherTraits.hairColor, motherTraits.hairColor, mutationRate),
        eyeColor: selectTraits(fatherTraits.eyeColor, motherTraits.eyeColor, mutationRate),
        skinColor: selectTraits(fatherTraits.skinColor, motherTraits.skinColor, mutationRate),
        emotions: selectTraits(fatherTraits.emotions, motherTraits.emotions, mutationRate)
    };

    displayOffspringTraits(offspringTraits);
}

function getSelectedTraits(formId) {
    const form = document.forms[formId];
    const traits = {};
    for (let element of form.elements) {
        if (element.checked) {
            if (!traits[element.name]) {
                traits[element.name] = [];
            }
            traits[element.name].push(element.value);
        }
    }
    return traits;
}

function selectTraits(fatherOptions, motherOptions, mutationRate) {
    const traits = [];

    traits.push(fatherOptions[Math.floor(Math.random() * fatherOptions.length)]);
    traits.push(motherOptions[Math.floor(Math.random() * motherOptions.length)]);
    
    return traits[Math.floor(Math.random() * traits.length)];
}

function displayOffspringTraits(traits) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<h2>Predicted Offspring Traits</h2>`;
    resultContainer.innerHTML += `<p>Hair Color: ${traits.hairColor}</p>`;
    resultContainer.innerHTML += `<p>Eye Color: ${traits.eyeColor}</p>`;
    resultContainer.innerHTML += `<p>Skin Color: ${traits.skinColor}</p>`;
    resultContainer.innerHTML += `<p>Emotions: ${traits.emotions}</p>`;
}
