function calculateInheritancePercentage(trait1, trait2, characteristics) {
    let averageTrait = (trait1 + trait2) / 2;
    let percentage = (averageTrait / 2) * 100;
    let characteristicsInfo = "Characteristics for offspring: " + characteristics;
    return { percentage, characteristicsInfo };
}

let parentTrait1 = 70;
let parentTrait2 = 80;
let offspringCharacteristics = "Tall, dark hair";

let inheritanceResult = calculateInheritancePercentage(parentTrait1, parentTrait2, offspringCharacteristics);
console.log("Percentage of traits inherited by offspring: " + inheritanceResult.percentage + "%");
console.log(inheritanceResult.characteristicsInfo);
