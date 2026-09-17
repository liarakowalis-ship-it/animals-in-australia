function showAnimal(animalId) {
    const overview = document.getElementById("animal-overview");
    const information = document.getElementById("animal-information");

    overview.style.display = "none";
    information.style.display = "block";

    const animal = animals[animalId];

    document.getElementById("animal-name").textContent = animal.name;
    document.getElementById("animal-image").src = animal.image;
    document.getElementById("animal-image").alt = animal.name;
    document.getElementById("habitat").textContent = animal.habitat;

    document.getElementById("look").innerHTML =
        animal.look.map(item => "<li>" + item + "</li>").join("");

    document.getElementById("characteristics").innerHTML =
        animal.characteristics.map(item => "<li>" + item + "</li>").join("");

    document.getElementById("general").innerHTML =
        animal.general.map(item => "<li>" + item + "</li>").join("");

    document.getElementById("funfact").textContent = animal.funfact;
}


function backToAnimals() {
    document.getElementById("animal-information").style.display = "none";
    document.getElementById("animal-overview").style.display = "block";
}
