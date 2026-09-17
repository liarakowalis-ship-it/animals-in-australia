const animals = {

    kangaroo: {
        name: "Kangaroo",
        image: "kangaroo.jpg",
        habitat: "Kangaroos live in forests, grasslands and open areas across Australia.",
        look: [
            "Strong hind legs and large feet.",
            "A long, powerful tail.",
            "Brown, grey or reddish fur."
        ],
        characteristics: [
            "They can jump long distances.",
            "They use their tail for balance.",
            "They carry their babies in a pouch."
        ],
        general: [
            "Kangaroos are marsupials.",
            "They mainly eat grass, leaves and plants.",
            "They are one of Australia's most famous animals."
        ],
        funfact: "A kangaroo can jump over a car."
    },

    koala: {
        name: "Koala",
        image: "koala.jpg",
        habitat: "Koalas live in eucalyptus forests and woodlands in eastern and southern Australia.",
        look: [
            "Grey fur with a white chest.",
            "Large round ears.",
            "A big black nose."
        ],
        characteristics: [
            "They spend most of their time in trees.",
            "They sleep for many hours each day.",
            "They have strong claws for climbing."
        ],
        general: [
            "Koalas mainly eat eucalyptus leaves.",
            "They are marsupials.",
            "Their babies grow in a pouch."
        ],
        funfact: "Koalas can sleep up to 20 hours a day."
    },

    wombat: {
        name: "Wombat",
        image: "wombat.jpg",
        habitat: "Wombats live in forests, grasslands and mountains in Australia and Tasmania.",
        look: [
            "Short legs and a round body.",
            "Thick brown or grey fur.",
            "A small tail."
        ],
        characteristics: [
            "They dig underground burrows.",
            "They are mostly active at night.",
            "They are strong and excellent diggers."
        ],
        general: [
            "Wombats are herbivores.",
            "They eat grass, roots and plants.",
            "They are marsupials."
        ],
        funfact: "Wombats produce cube-shaped droppings."
    },

    quokka: {
        name: "Quokka",
        image: "quokka.jpg",
        habitat: "Quokkas live mainly on Rottnest Island and some parts of Western Australia.",
        look: [
            "Small, round body.",
            "Brown-grey fur.",
            "A short tail and a friendly-looking face."
        ],
        characteristics: [
            "They are mostly active at night.",
            "They can climb small plants and shrubs.",
            "They eat grasses, leaves and plants."
        ],
        general: [
            "Quokkas are marsupials.",
            "They are related to kangaroos.",
            "They are known for their curious behaviour."
        ],
        funfact: "Quokkas are often called one of the happiest-looking animals."
    },

    dingo: {
        name: "Dingo",
        image: "dingo.jpg",
        habitat: "Dingoes live in deserts, forests, grasslands and coastal areas across Australia.",
        look: [
            "Dog-like body.",
            "Usually reddish-brown, sandy or yellow fur.",
            "Pointed ears and a bushy tail."
        ],
        characteristics: [
            "They are intelligent and adaptable.",
            "They usually live and hunt in groups.",
            "They can survive in many different environments."
        ],
        general: [
            "Dingoes are wild canines.",
            "They eat small and large animals.",
            "They are an important part of Australia's ecosystem."
        ],
        funfact: "Dingoes are Australia's largest land predator."
    },

    emu: {
        name: "Emu",
        image: "emu.jpg",
        habitat: "Emus live in forests, grasslands and open areas throughout Australia.",
        look: [
            "Very tall body with long legs.",
            "Long neck.",
            "Soft brown feathers."
        ],
        characteristics: [
            "They cannot fly.",
            "They can run very fast.",
            "They have three toes on each foot."
        ],
        general: [
            "Emus are birds.",
            "They eat plants, seeds and insects.",
            "They are the second-largest living bird in the world."
        ],
        funfact: "An emu can run faster than 40 kilometres per hour."
    },

    tasmanianDevil: {
        name: "Tasmanian Devil",
        image: "tasmanian-devil.jpg",
        habitat: "Tasmanian Devils live mainly in forests and coastal areas of Tasmania.",
        look: [
            "Small, strong body.",
            "Black fur with white markings.",
            "Large head and powerful jaw."
        ],
        characteristics: [
            "They are mostly active at night.",
            "They have a very strong bite.",
            "They can make loud sounds."
        ],
        general: [
            "Tasmanian Devils are marsupials.",
            "They eat meat and sometimes carrion.",
            "They are the largest living carnivorous marsupials."
        ],
        funfact: "Their loud screams helped give them their name."
    },

    platypus: {
        name: "Platypus",
        image: "platypus.jpg",
        habitat: "Platypuses live in freshwater rivers, streams and lakes in eastern Australia and Tasmania.",
        look: [
            "Flat duck-like bill.",
            "Brown waterproof fur.",
            "Webbed feet and a wide tail."
        ],
        characteristics: [
            "They can swim very well.",
            "They spend much of their time in water.",
            "Males have a venomous spur on their hind legs."
        ],
        general: [
            "Platypuses are mammals.",
            "They lay eggs.",
            "They eat small water animals and insects."
        ],
        funfact: "The platypus is one of the few mammals that lays eggs."
    },

    echidna: {
        name: "Echidna",
        image: "echidna.jpg",
        habitat: "Echidnas live in forests, deserts, grasslands and mountains across Australia.",
        look: [
            "Covered in sharp spines.",
            "Long narrow snout.",
            "Short legs and strong claws."
        ],
        characteristics: [
            "They can roll into a ball when threatened.",
            "They use their long tongue to catch ants.",
            "They are excellent diggers."
        ],
        general: [
            "Echidnas are mammals.",
            "They lay eggs.",
            "They eat ants and termites."
        ],
        funfact: "An echidna has a very long tongue that can be longer than its head."
    },

    thornyDevil: {
        name: "Thorny Devil",
        image: "thorny-devil.jpg",
        habitat: "Thorny Devils live in dry deserts and sandy areas of central and western Australia.",
        look: [
            "Small body covered in spikes.",
            "Usually brown, yellow or reddish colours.",
            "A false head on the back of its neck."
        ],
        characteristics: [
            "They are well adapted to desert life.",
            "They collect water from their skin.",
            "They eat mainly ants."
        ],
        general: [
            "Thorny Devils are reptiles.",
            "They use camouflage to hide from predators.",
            "They can change colour slightly."
        ],
        funfact: "Their skin can move water towards their mouth."
    },

    inlandTaipan: {
        name: "Inland Taipan",
        image: "inland-taipan.jpg",
        habitat: "The Inland Taipan lives in dry and remote areas of central Australia.",
        look: [
            "Slim body.",
            "Brown, olive or dark-coloured scales.",
            "A lighter-coloured belly."
        ],
        characteristics: [
            "It is very fast and alert.",
            "It mainly eats small mammals.",
            "It is adapted to dry environments."
        ],
        general: [
            "The Inland Taipan is a highly venomous snake.",
            "It usually avoids humans.",
            "It lives in remote desert regions."
        ],
        funfact: "Its colour can become darker during colder months."
    },

    littlePenguin: {
        name: "Little Penguin",
        image: "little-penguin.jpg",
        habitat: "Little Penguins live along the southern coast of Australia and New Zealand.",
        look: [
            "Blue-grey feathers.",
            "White chest and belly.",
            "Small body and short wings."
        ],
        characteristics: [
            "They cannot fly.",
            "They are excellent swimmers.",
            "They spend much of the day in the ocean."
        ],
        general: [
            "Little Penguins eat fish and small sea animals.",
            "They return to land to rest and raise their chicks.",
            "They are the smallest penguin species."
        ],
        funfact: "Little Penguins are sometimes called fairy penguins."
    },

    greatWhiteShark: {
        name: "Great White Shark",
        image: "great-white-shark.jpg",
        habitat: "Great White Sharks live in coastal and offshore waters around Australia.",
        look: [
            "Large grey body.",
            "White belly.",
            "Pointed snout and sharp teeth."
        ],
        characteristics: [
            "They are powerful swimmers.",
            "They have an excellent sense of smell.",
            "They hunt fish, seals and other marine animals."
        ],
        general: [
            "Great White Sharks are fish.",
            "They live in oceans around the world.",
            "They are important predators in marine ecosystems."
        ],
        funfact: "Great White Sharks can detect tiny amounts of blood in water."
    },

    huntsmanSpider: {
        name: "Huntsman Spider",
        image: "huntsman-spider.jpg",
        habitat: "Huntsman Spiders live in forests, gardens, houses and rocky areas across Australia.",
        look: [
            "Large body with long legs.",
            "Usually brown or grey.",
            "Legs spread sideways like a crab."
        ],
        characteristics: [
            "They can move very quickly.",
            "They hunt insects and other small animals.",
            "They do not build large webs to catch prey."
        ],
        general: [
            "Huntsman Spiders are arachnids.",
            "They are important because they eat insects.",
            "They are generally shy animals."
        ],
        funfact: "Some huntsman spiders can grow wider than a human hand."
    },

    jellyfish: {
        name: "Jellyfish",
        image: "jellyfish.jpg",
        habitat: "Jellyfish live in oceans and coastal waters around Australia.",
        look: [
            "Soft, transparent or colourful body.",
            "Bell-shaped body.",
            "Long tentacles."
        ],
        characteristics: [
            "They move with the help of their bell-shaped body.",
            "Their tentacles can catch food.",
            "Some species can sting."
        ],
        general: [
            "Jellyfish are marine animals.",
            "They eat small fish and plankton.",
            "They have no bones or brain."
        ],
        funfact: "Jellyfish have existed for hundreds of millions of years."
    },

    dolphin: {
        name: "Dolphin",
        image: "dolphin.jpg",
        habitat: "Dolphins live in oceans and coastal waters around Australia.",
        look: [
            "Smooth grey body.",
            "Long snout.",
            "Dorsal fin on the back."
        ],
        characteristics: [
            "They are intelligent and social animals.",
            "They communicate with sounds.",
            "They are excellent swimmers."
        ],
        general: [
            "Dolphins are mammals.",
            "They breathe air through a blowhole.",
            "They eat fish and other sea animals."
        ],
        funfact: "Dolphins use echolocation to find objects and prey underwater."
    }

};


function showAnimal(animalId) {

    const animal = animals[animalId];

    if (!animal) {
        return;
    }

    document.getElementById("animal-overview").style.display = "none";
    document.getElementById("animal-information").style.display = "block";

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

    window.scrollTo(0, 0);
}


function backToAnimals() {

    document.getElementById("animal-information").style.display = "none";
    document.getElementById("animal-overview").style.display = "block";

    window.scrollTo(0, 0);
}
