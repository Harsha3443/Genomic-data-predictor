
document.getElementById("diseaseForm").addEventListener("submit", function(event)
 {
    event.preventDefault();

    var fatherDisease = document.getElementById("fatherDisease").value;
    var grandfatherDisease = document.getElementById("grandfatherDisease").value;

    var chanceFather = Math.floor(Math.random() * 101);
    var chanceGrandfather = Math.floor(Math.random() * 101);

    document.getElementById("output").innerHTML = `
        <p>Chance of getting the disease from father: ${chanceFather}%</p>
        <p>Chance of getting the disease from grandfather: ${chanceGrandfather}%</p>
    `;
	
	
});
