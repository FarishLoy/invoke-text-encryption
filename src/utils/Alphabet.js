export default class AppAlphabet {
    constructor() {
        this.vowels = [ "A", "E", "I", "O", "U"]
        this.consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
        this.alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        this.lowerCaseAlphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    }
    //take a character and return true if it's a vowel
    isVowel(char) {
        return this.vowels.includes(char.toUpperCase())
    }
    //take a character and return true if it's a consonant
    isConsonant(char) {
        return this.consonants.includes(char.toUpperCase())
    }
    //take a character and return true if it's an upperCase letter
    isUpperCase(char) {
        if (this.alphabets.includes(char)) {
            return true
        } else {
            return false
        }
    }

    encrypt(text) {
        const characters = text.split("")
        //randomly generate 2 numbers between 1-9 to move vowels and consonants
        const numberForVowel = Math.floor((Math.random() * 9) + 1)
        const numberForConsonant = Math.floor((Math.random() * 9) + 1)

        const encryptedText = characters.map(char => {
            const upperCase = this.isUpperCase(char)
            let charToReturn = ""
            if (this.isVowel(char)) {
                const index = this.alphabets.findIndex(alphabet => alphabet === char.toUpperCase())
                if (index + numberForVowel <= (this.alphabets.length - 1)) {
                    charToReturn = this.alphabets[index + numberForVowel]
                } else {
                    charToReturn = this.alphabets[(index + numberForVowel) - this.alphabets.length]
                }
            } else if(this.isConsonant(char)) {
                const index = this.alphabets.findIndex(alphabet => alphabet === char.toUpperCase())
                if (index + numberForConsonant <= (this.alphabets.length -1)) {
                    charToReturn = this.alphabets[index + numberForConsonant]
                } else {
                    charToReturn = this.alphabets[(index + numberForConsonant) - this.alphabets.length]
                }
            } else {
                charToReturn =  " "
            }
            if (!upperCase) {
                charToReturn = charToReturn.toLowerCase()
            }
            return charToReturn
        })
        return {
            encryptedText: encryptedText.join(""),
            randomKeys: `${numberForVowel}${numberForConsonant}`,
            originalText: text
        }
    }
}