// You are given a string animals and another string dinosaurs. Every letter in animals represents a different type of animal and every unique character in dinosaurs represents a different dinosaur.

// Return the total number of dinosaurs in animals.

class Solution {
    solve(animals, dinosaurs){
        let count = 0

        // reduce dinosaurs to array of unique characters
        let uniqueDinosaurs = new Set(dinosaurs.split(""))

        for ( let dinosaur of uniqueDinosaurs ) {
            count += animals.split(dinosaur).length - 1
        }

        return(count)
    }
}

let test = new Solution()
console.log(test.solve("abacabC", "a"))