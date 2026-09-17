function showAnimal(animalId) {
    alert("It works! You clicked on " + animalId);
}

function backToAnimals() {
    document.getElementById("animal-information").style.display = "none";
    document.getElementById("animal-overview").style.display = "block";
}
