

    
const database = {
    fish: [
        {
            id: 1,
            image: " https://i.etsystatic.com/5451276/r/il/1e565f/866197761/il_1588xN.866197761_4c3t.jpg",
            species: "shrimp",
            length: 3.5,
            name: "larry",
            location: "Nashville",
            food: "algae"
            
        },
        {
            id: 2,
            image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Synchiropus_splendidus_2_Luc_Viatour_cropped.png",
            species: "Mandarinfish",
            length: 3,
            name: "carl",
            location: "China",
            food:  "pizza" 
            
        },
        {
            id: 3,
            image: "https://www.niabizoo.com/wp-content/uploads/2018/09/ClownTriggerFish.jpg",
            species: "Clown Triggerfish",
            length: 4.5,
            name: "susan",
            location: "Indian Ocean",
            food: "sea urchins"
            
        },
        {
            id: 4,
            image: "https://www.theyucatantimes.com/wp-content/uploads/2020/08/lion-fish.jpg",
            species: "Lion fish",
            length: 18,
            name: "Paul Bunyan",
            location: "South Pacific Ocean",
            food: "Pop Corn"
            
        },
        {
            id: 5,
            image: "https://radicalaquatics.co.uk/wp-content/uploads/2023/01/Depositphotos_26774749_XL-1-scaled.jpg",
            species: "Angelfish",
            length: 6,
            name: "Jerry",
            location: "South America",
            food: "cheese"
            
        },
        {
            id: 6,
            image: "https://www.amadopets.com/wp-content/uploads/2022/05/amado_pet_blue_gularis.jpg",
            species: "Killifish",
            length: 2,
            name: "elvis",
            location: "Africa",
            food: "oranges"
            
        }



    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


