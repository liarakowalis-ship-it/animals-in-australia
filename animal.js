const animals = {

    kangaroo: {
        name: "Kangaroo",
        image: "kangaroo.jpg",
        habitat: "Grasslands, forests and the Australian Outback, especially in eastern and central Australia.",
        look: [
            "Height: 85–160 cm",
            "Powerful hind legs",
            "Long muscular tail",
            "Large ears",
            "Males often have reddish-brown fur, while females are usually greyish-brown"
        ],
        characteristics: [
            "Excellent jumpers",
            "Can travel long distances",
            "Usually live in groups called mobs"
        ],
        general: [
            "Kangaroos are herbivores",
            "They eat grass, leaves and plants",
            "They are Australia's largest marsupials",
            "They are most active in the morning and evening"
        ],
        funfact: "A newborn kangaroo, called a joey, is about the size of a bean when it is born."
    },

    koala: {
        name: "Koala",
        image: "koala.jpg",
        habitat: "Eucalyptus forests in eastern and southeastern Australia.",
        look: [
            "Height: 60–85 cm",
            "Thick grey or brown fur",
            "Large round ears",
            "Black nose",
            "Strong claws for climbing trees"
        ],
        characteristics: [
            "Excellent tree climbers",
            "Mostly active at night",
            "Spend most of their lives in trees"
        ],
        general: [
            "Koalas are marsupials",
            "They eat almost exclusively eucalyptus leaves",
            "They sleep for around 18–20 hours a day",
            "They get most of their water from eucalyptus leaves"
        ],
        funfact: "Koalas have fingerprints that are surprisingly similar to human fingerprints."
    },

    wombat: {
        name: "Wombat",
        image: "wombat.jpg",
        habitat: "Forests, grasslands and coastal areas in southeastern Australia and Tasmania.",
        look: [
            "Short, strong body",
            "Brown, grey or sandy-coloured fur",
            "Short legs",
            "Large nose",
            "Small tail"
        ],
        characteristics: [
            "Excellent diggers",
            "Mostly active at night",
            "Can run surprisingly fast"
        ],
        general: [
            "Wombats are herbivores",
            "They eat grass, roots and plants",
            "They live in underground burrows",
            "They are marsupials"
        ],
        funfact: "Wombats produce cube-shaped poop, which helps stop it from rolling away."
    },

    quokka: {
        name: "Quokka",
        image: "quokka.jpg",
        habitat: "Small islands and coastal forests in southwestern Australia, especially Rottnest Island.",
        look: [
            "Small body, about the size of a domestic cat",
            "Brown or grey-brown fur",
            "Round ears",
            "Short tail",
            "Friendly-looking face"
        ],
        characteristics: [
            "Mostly active at night",
            "Good climbers",
            "Usually live in small groups"
        ],
        general: [
            "Quokkas are herbivores",
            "They eat grass, leaves and plants",
            "They are marsupials",
            "They are native to Western Australia"
        ],
        funfact: "Quokkas are famous for their smiling-looking facial expression."
    },

    dingo: {
        name: "Dingo",
        image: "dingo.jpg",
        habitat: "Deserts, forests, grasslands and coastal regions throughout mainland Australia.",
        look: [
            "Medium-sized wild dog",
            "Usually golden, reddish-brown or sandy fur",
            "Pointed ears",
            "Bushy tail",
            "Long legs"
        ],
        characteristics: [
            "Very intelligent",
            "Excellent hunters",
            "Can live alone or in groups"
        ],
        general: [
            "Dingoes are Australia's native wild dogs",
            "They are omnivores",
            "They eat small animals, insects and sometimes plants",
            "They play an important role in Australia's ecosystem"
        ],
        funfact: "Dingoes are not completely silent: they howl, whine and make other sounds, but they rarely bark like domestic dogs."
    },

    emu: {
        name: "Emu",
        image: "emu.jpg",
        habitat: "Grasslands, forests, savannas and semi-deserts across mainland Australia.",
        look: [
            "Height: Up to 2 metres",
            "Long neck and long legs",
            "Soft brown feathers",
            "Small wings",
            "Large eyes"
        ],
        characteristics: [
            "Very fast runners",
            "Can reach speeds of up to 50 km/h",
            "Excellent eyesight and hearing"
        ],
        general: [
            "Emus are the second-largest living birds",
            "They cannot fly",
            "They eat plants, fruits, insects and small animals",
            "Male emus take care of the eggs and chicks"
        ],
        funfact: "Emu eggs are dark green and can weigh more than one kilogram."
    },

    tasmanianDevil: {
        name: "Tasmanian Devil",
        image: "tasmanian-devil.jpg",
        habitat: "Forests, grasslands and coastal areas of Tasmania.",
        look: [
            "Small, stocky body",
            "Black fur with white markings",
            "Large head",
            "Powerful jaw",
            "Short tail"
        ],
        characteristics: [
            "Mostly active at night",
            "Very strong bite",
            "Can be loud and aggressive when threatened"
        ],
        general: [
            "Tasmanian Devils are carnivorous marsupials",
            "They eat meat and carrion",
            "They are the largest carnivorous marsupials in the world",
            "They have very powerful teeth and jaws"
        ],
        funfact: "The Tasmanian Devil got its name from its loud screams and fierce behaviour."
    },

    platypus: {
        name: "Platypus",
        image: "platypus.jpg",
        habitat: "Freshwater rivers, streams and lakes in eastern Australia and Tasmania.",
        look: [
            "Brown waterproof fur",
            "Flat beaver-like tail",
            "Duck-like bill",
            "Webbed feet",
            "Body length: About 40–60 cm"
        ],
        characteristics: [
            "Excellent swimmers",
            "Spend a lot of time underwater",
            "Use electroreception to find prey"
        ],
        general: [
            "Platypuses are mammals",
            "They lay eggs instead of giving birth to live babies",
            "They eat small animals, insects and worms",
            "Males have venomous spurs on their hind legs"
        ],
        funfact: "The platypus is one of the few mammals in the world that lays eggs."
    },

    echidna: {
        name: "Echidna",
        image: "echidna.jpg",
        habitat: "Forests, deserts, grasslands and mountains throughout Australia and Tasmania.",
        look: [
            "Covered in sharp spines",
            "Brown or black fur",
            "Long narrow snout",
            "Short strong legs",
            "Small eyes"
        ],
        characteristics: [
            "Excellent diggers",
            "Mostly solitary animals",
            "Can curl into a ball when threatened"
        ],
        general: [
            "Echidnas are mammals that lay eggs",
            "They eat ants and termites",
            "They use their long tongues to catch food",
            "They are covered in protective spines"
        ],
        funfact: "Echidnas and platypuses are the only living mammals that lay eggs."
    },

    thornyDevil: {
        name: "Thorny Devil",
        image: "thorny-devil.jpg",
        habitat: "Dry deserts and sandy areas in central and western Australia.",
        look: [
            "Small lizard, about 20 cm long",
            "Covered in sharp spikes",
            "Usually brown, yellow or reddish",
            "False head on the back of its neck",
            "Rough, thorny skin"
        ],
        characteristics: [
            "Moves slowly",
            "Uses camouflage to hide",
            "Can collect water through its skin"
        ],
        general: [
            "Thorny Devils eat mostly ants",
            "They can eat thousands of ants in one day",
            "They are harmless to humans",
            "Their spikes protect them from predators"
        ],
        funfact: "Thorny Devils can drink water through their skin by collecting dew and rain."
    },

    inlandTaipan: {
        name: "Inland Taipan",
        image: "inland-taipan.jpg",
        habitat: "Dry inland areas and clay plains of central Australia.",
        look: [
            "Slim body",
            "Brown or olive-coloured scales",
            "Dark head",
            "Length: Usually around 1.8 metres",
            "Small, smooth scales"
        ],
        characteristics: [
            "Very fast and agile",
            "Usually shy and avoids humans",
            "Highly venomous"
        ],
        general: [
            "The Inland Taipan is a carnivore",
            "It eats mostly small mammals",
            "It is considered the most venomous snake in the world",
            "It lives in remote desert regions"
        ],
        funfact: "Despite its extremely powerful venom, Inland Taipans rarely encounter humans."
    },

    littlePenguin: {
        name: "Little Penguin",
        image: "little-penguin.jpg",
        habitat: "Coastal areas and islands of southern Australia and Tasmania.",
        look: [
            "Height: About 30–35 cm",
            "Blue-grey feathers",
            "White belly",
            "Small wings adapted for swimming",
            "Short legs"
        ],
        characteristics: [
            "Excellent swimmers",
            "Spend much of their time in the ocean",
            "Return to land to breed"
        ],
        general: [
            "Little Penguins are the smallest penguin species",
            "They eat fish, squid and small sea animals",
            "They live in colonies",
            "They are active during the day and night"
        ],
        funfact: "Little Penguins are also called Fairy Penguins because of their tiny size."
    },

    greatWhiteShark: {
        name: "Great White Shark",
        image: "great-white-shark.jpg",
        habitat: "Coastal waters around southern, eastern and western Australia.",
        look: [
            "Usually 4–5 metres long",
            "Grey upper body and white belly",
            "Powerful torpedo-shaped body",
            "Large triangular teeth",
            "Pointed snout"
        ],
        characteristics: [
            "Excellent swimmers",
            "Mostly solitary animals",
            "Have a highly developed sense of smell"
        ],
        general: [
            "Great White Sharks are carnivores",
            "They eat fish, seals and other marine animals",
            "They are important predators in the ocean ecosystem",
            "They are protected in Australia"
        ],
        funfact: "Great White Sharks have several rows of teeth and can replace lost teeth throughout their lives."
    },

    huntsmanSpider: {
        name: "Huntsman Spider",
        image: "huntsman-spider.jpg",
        habitat: "Forests, woodlands, gardens and houses throughout Australia.",
        look: [
            "Large, flat body",
            "Long hairy legs",
            "Usually brown, grey or beige",
            "Leg span can reach approximately 15–30 cm",
            "Legs point sideways like a crab"
        ],
        characteristics: [
            "Very fast-moving",
            "Mostly active at night",
            "Does not build large webs to catch prey"
        ],
        general: [
            "Huntsman Spiders eat insects and other spiders",
            "They help control insect populations",
            "They usually avoid humans",
            "They are generally not dangerous to humans"
        ],
        funfact: "Huntsman Spiders are sometimes called giant crab spiders because of the way their legs point sideways."
    },

    jellyfish: {
        name: "Jellyfish",
        image: "jellyfish.jpg",
        habitat: "Oceans and coastal waters around Australia.",
        look: [
            "Soft, transparent or colourful body",
            "Bell-shaped body",
            "Long tentacles",
            "No bones, brain or heart",
            "Their bodies are mostly made of water"
        ],
        characteristics: [
            "Move by pulsing their bell-shaped bodies",
            "Drift with ocean currents",
            "Some species can sting prey or predators"
        ],
        general: [
            "Jellyfish eat plankton, fish and tiny sea animals",
            "They are found in oceans around the world",
            "Some Australian species are harmless while others can be dangerous",
            "They are important parts of marine ecosystems"
        ],
        funfact: "Jellyfish have existed for more than 500 million years, long before dinosaurs."
    },

    dolphin: {
        name: "Dolphin",
        image: "dolphin.jpg",
        habitat: "Oceans and coastal waters around Australia.",
        look: [
            "Streamlined body for fast swimming",
            "Usually grey skin",
            "Long snout called a beak",
            "Dorsal fin on the back",
            "Powerful tail flukes"
        ],
        characteristics: [
            "Highly intelligent animals",
            "Live in social groups called pods",
            "Communicate using clicks and whistles",
            "Excellent swimmers"
        ],
        general: [
            "Dolphins are mammals, not fish",
            "They breathe air through a blowhole",
            "They eat fish, squid and other marine animals",
            "They use echolocation to find objects and prey"
        ],
        funfact: "Dolphins can sleep with one half of their brain at a time, allowing them to continue breathing."
    }
};


// Get the animal name from the URL
const params = new URLSearchParams(window.location.search);
const animalId = params.get("animal");

const animal = animals[animalId];

if (animal) {

    document.getElementById("animal-name").textContent = animal.name;

    document.getElementById("animal-image").src = animal.image;
    document.getElementById("animal-image").alt = animal.name;

    document.getElementById("habitat").textContent = animal.habitat;

    document.getElementById("look").innerHTML =
        animal.look.map(item => `<li>${item}</li>`).join("");

    document.getElementById("characteristics").innerHTML =
        animal.characteristics.map(item => `<li>${item}</li>`).join("");

    document.getElementById("general").innerHTML =
        animal.general.map(item => `<li>${item}</li>`).join("");

    document.getElementById("funfact").textContent = animal.funfact;

} else {

    document.getElementById("animal-name").textContent = "Animal not found";

}
