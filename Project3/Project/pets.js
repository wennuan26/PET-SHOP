document.addEventListener("DOMContentLoaded", function() {
    const pets = [
        {
            image: 'Pets/Dogs/german.avif',
            name: 'German Shepherd',
            species: 'dog',
            age: 'adult',
            description: 'A loyal and intelligent breed.'
        },
        {
            image: 'Pets/Dogs/beagle.avif',
            name: 'Beagle',
            species: 'dog',
            age: 'adult',
            description: 'A friendly and curious breed.'
        },
        {
            image: 'Pets/Dogs/Border-collie.webp',
            name: 'Border Collie',
            species: 'dog',
            age: 'puppy',
            description: 'An energetic and smart breed.'
        },
        {
            image: 'Pets/Dogs/bulldog.webp',
            name: 'Bulldog',
            species: 'dog',
            age: 'adult',
            description: 'A calm and courageous breed.'
        },
        {
            image: 'Pets/Dogs/chihuahua.jpg',
            name: 'Chihuahua',
            species: 'dog',
            age: 'puppy',
            description: 'A tiny and spirited breed.'
        },
        {
            image: 'Pets/Dogs/Corgi.webp',
            name: 'Corgi',
            species: 'dog',
            age: 'adult',
            description: 'A playful and loving breed.'
        },
        {
            image: 'Pets/Dogs/Dachshund.webp',
            name: 'Dachshund',
            species: 'dog',
            age: 'adult',
            description: 'A curious and lively breed.'
        },
        {
            image: 'Pets/Dogs/Great-Dane.jpg',
            name: 'Great Dane',
            species: 'dog',
            age: 'puppy',
            description: 'A gentle giant.'
        },
        {
            image: 'Pets/Dogs/Borzoi.jpg',
            name: 'Borzoi',
            species: 'dog',
            age: 'adult',
            description: 'A graceful and fast breed.'
        },
        {
            image: 'Pets/Dogs/hsuky.webp',
            name: 'Husky',
            species: 'dog',
            age: 'adult',
            description: 'A friendly and energetic breed.'
        },
        {
            image: 'Pets/Dogs/golden.jpg',
            name: 'Golden Retriever',
            species: 'dog',
            age: 'adult',
            description: 'A friendly and intelligent breed.'
        },
        {
            image: 'Pets/Dogs/lab.jpg',
            name: 'Labrador Retriever',
            species: 'dog',
            age: 'adult',
            description: 'A friendly and outgoing breed.'
        },
        {
            image: 'Pets/Dogs/Rottweiler-dog.webp',
            name: 'Rottweiler',
            species: 'dog',
            age: 'puppy',
            description: 'A confident and fearless breed.'
        },
        {
            image: 'Pets/Dogs/Shetland Sheepdog.jpg',
            name: 'Shetland Sheepdog',
            species: 'dog',
            age: 'adult',
            description: 'A small and agile herding breed.'
        },
        {
            image: 'Pets/Dogs/Cavalier King Charles Spaniel.jpg',
            name: 'Cavalier King Charles Spaniel',
            species: 'dog',
            age: 'puppy',
            description: 'A friendly and affectionate breed.'
        },
        {
            image: 'Pets/Dogs/Boxer.avif',
            name: 'Boxer',
            species: 'dog',
            age: 'adult',
            description: 'A playful and energetic breed.'
        },
        {
            image: 'Pets/Cats/American Shoethair.jpg',
            name: 'American Shorthair',
            species: 'cat',
            age: 'adult',
            description: 'friendly, adaptable cat known for its striking tabby patterns and robust health.'
        },
        {
            image: 'Pets/Cats/american-bobtail.jpg',
            name: 'American bobtail',
            species: 'cat',
            age: 'kitten',
            description: 'characterized by its distinctive short tail and wild appearance.'
        },
        {
            image: 'Pets/Cats/balinese.webp',
            name: 'balinese',
            species: 'cat',
            age: 'adult',
            description: 'graceful, long-haired cat breed known for its striking blue eyes, silky coat, and affectionate nature.'
        },
        {
            image: 'Pets/Cats/british-shorthair.jpg',
            name: 'british-shorthair',
            species: 'cat',
            age: 'kitten',
            description: 'sturdy, easygoing cat breed with a dense, plush coat and a charming, round face.'
        },
        {
            image: 'Pets/Cats/japanesebobtail.jpg',
            name: 'Japanese bobtail',
            species: 'cat',
            age: 'adult',
            description: 'lively and intelligent cat breed known for its distinctive short, pom-pom-like tail and playful personality.'
        },
        {
            image: 'Pets/Cats/Main coon.webp',
            name: 'Maine coon',
            species: 'cat',
            age: 'kitten',
            description: 'large, friendly cat breed with a luxurious, shaggy coat, tufted ears, and a sociable, gentle nature.'
        },
        {
            image: 'Pets/Cats/Persian-cat.webp',
            name: 'Persian-cat',
            species: 'cat',
            age: 'adult',
            description: 'quiet, affectionate breed known for its long, flowing coat, round face, and sweet demeanor.'
        },
        {
            image: 'Pets/Cats/Ragamuffin-Cat.jpg',
            name: 'Ragamuffin',
            species: 'cat',
            age: 'adult',
            description: 'large, affectionate cat breed known for its plush, silky coat and gentle, laid-back personality.'
        },
        {
            image: 'Pets/Cats/ragdoll.jpg',
            name: 'Ragdoll',
            species: 'cat',
            age: 'kitten',
            description: 'calm, affectionate cat breed known for its striking blue eyes, semi-long coat, and tendency to go limp when held.'
        },
        {
            image: 'Pets/Cats/Scottish Fold..jpg',
            name: 'Scottish Fold',
            species: 'cat',
            age: 'adult',
            description: ' unique folded ears, round face, and sweet, calm temperament.'
        },
        {
            image: 'Pets/Cats/Siamese.jpg',
            name: 'Siamese',
            species: 'cat',
            age: 'adult',
            description: 'elegant, vocal cat breed known for its striking blue almond-shaped eyes, short coat, and outgoing, social personality'
        },
        {
            image: 'Pets/Cats/singapura.webp',
            name: 'Singapura',
            species: 'cat',
            age: 'adult',
            description: 'small, playful cat breed known for its large eyes, ticked coat, and affectionate, lively nature.'
        },
        {
            image: 'Pets/Cats/snowshoe+cat.jpg',
            name: 'snowshoe',
            species: 'cat',
            age: 'adult',
            description: 'friendly, intelligent cat breed known for its striking blue eyes, white markings on paws and face, and affectionate personality.'
        },
        {
            image: 'Pets/Cats/sphynx.jpg',
            name: 'sphynx',
            species: 'cat',
            age: 'adult',
            description: 'hairless, energetic cat breed known for its wrinkled skin, large ears, and affectionate, social nature.'
        },
        {
            image: 'Pets/Cats/Suberiancat.jpg',
            name: 'Suberiancat',
            species: 'cat',
            age: 'adult',
            description: 'robust, affectionate breed known for its thick, water-repellent coat, tufted ears, and playful, friendly demeanor.'
        },
        {
            image: 'Pets/Cats/Tonkinese.jpg',
            name: 'Tonkinese',
            species: 'cat',
            age: 'adult',
            description: 'lively, affectionate cat breed known for its sleek coat, striking eye color, and outgoing, social personality.'
        },
        {
            image: 'Pets/fishes/butterfly-telescope.jpg',
            name: 'butterfly-telescope',
            species: 'fish',
            age: 'adult',
            description: 'unique variety of goldfish known for its protruding eyes and vibrant butterfly-like tail.'
        },
        {
            image: 'Pets/fishes/fantail-goldfish.jpg',
            name: 'fantail-goldfish',
            species: 'fish',
            age: 'adult',
            description: 'variety of goldfish distinguished by its double tail fin and egg-shaped body.'
        },
        {
            image: 'Pets/fishes/koi.webp',
            name: 'koi',
            species: 'fish',
            age: 'adult',
            description: 'common carp known for their vibrant colors, patterns, and significance in Japanese culture.'
        },
        {
            image: 'Pets/fishes/oranda.webp',
            name: 'oranda',
            species: 'fish',
            age: 'adult',
            description: 'type of goldfish recognized for its distinctive head growth, called a wen, and its graceful, flowing fins.'
        },
        {
            image: 'Pets/fishes/Shubunkin.jpg',
            name: 'Shubunkin',
            species: 'fish',
            age: 'adult',
            description: 'goldfish variety noted for its calico coloration, featuring a mix of blue, red, orange, yellow, and black spots.'
        },
        {
            image: 'Pets/fishes/Fighter.jpg',
            name: 'Fighter',
            species: 'fish',
            age: 'adult',
            description: 'Betta fish, is renowned for its vibrant colors, elaborate fins, and aggressive behavior, especially among males.'
        },
    ];

    const petsPerPage = 16;
    let currentPage = 1;
    let favoritePets = JSON.parse(localStorage.getItem('favoritePets')) || [];

    function displayPets(petArray) {
        const petList = document.getElementById('pet-list');
        petList.innerHTML = '';
        const start = (currentPage - 1) * petsPerPage;
        const end = start + petsPerPage;
        const paginatedPets = petArray.slice(start, end);

        paginatedPets.forEach(pet => {
            const petItem = document.createElement('div');
            petItem.className = 'pet-item';
            petItem.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p>Species: ${pet.species}</p>
                <p>Age: ${pet.age}</p>
                <p>${pet.description}</p>
                <button class="favorite-button" data-name="${pet.name}">
                    ${favoritePets.includes(pet.name) ? 'Remove' : 'Favorite'}
                </button>
            `;
            petList.appendChild(petItem);
        });
        displayPagination(petArray.length);
    }

    function displayPagination(totalItems) {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';
        const totalPages = Math.ceil(totalItems / petsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', () => {
                currentPage = i;
                filterPets();
            });
            pagination.appendChild(button);
        }
    }

    function filterPets() {
        const species = document.getElementById('species').value;
        const age = document.getElementById('age').value;
        let filteredPets = pets;

        if (species !== 'all') {
            filteredPets = filteredPets.filter(pet => pet.species === species);
        }
        if (age !== 'all') {
            filteredPets = filteredPets.filter(pet => pet.age === age);
        }
        displayPets(filteredPets);
    }

    function toggleFavorite(petName) {
        if (favoritePets.includes(petName)) {
            favoritePets = favoritePets.filter(fav => fav !== petName);
        } else {
            favoritePets.push(petName);
        }
        localStorage.setItem('favoritePets', JSON.stringify(favoritePets));
        filterPets();
    }

    function displayFavoritePets() {
        const favoritePetsList = pets.filter(pet => favoritePets.includes(pet.name));
        displayPets(favoritePetsList);
    }

    document.getElementById('species').addEventListener('change', filterPets);
    document.getElementById('age').addEventListener('change', filterPets);
    document.getElementById('pet-list').addEventListener('click', (event) => {
        if (event.target.classList.contains('favorite-button')) {
            const petName = event.target.getAttribute('data-name');
            toggleFavorite(petName);
        }
    });
    document.getElementById('view-favorites').addEventListener('click', displayFavoritePets);

    // Initial display
    filterPets();
});