import { getFish } from '../database.js'
let fishes = getFish()



export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
  
    for ( const fish of fishes) {
        if(fish.length % 3 === 0){
            holyFish.push(fish);
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = []
    for (const fish of fishes) {
        if(fish.length % 5 === 0){
            holyFish.push(fish);
        }
    }

    return soldierFish
    
}

export const nonHolyFish = () => {
    const regularFish= []
    for (const fish of fishes) {
      if(fish.length % 3 !== 0 && fish.length % 5 !== 0) {
       regularFish.push(fish)
      }
    }


    return regularFish
}


