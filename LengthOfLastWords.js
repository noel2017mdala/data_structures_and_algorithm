/*
question: Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

//define function
const lengthOfLastWords = (string) => {
  return string ? string.trim().split(" ").pop().length : 0;
  //check if the string is valid
  //   if (string.length > 0) {
  //     //convert the string to an array
  //     let arr = string.trim().split(" ");
  //     //return the last arrays length

  //     return arr.pop().length;

  //   }
};

// console.log(lengthOfLastWords("   fly me   to   the moon  "));

// class Dictionary {
//   constructor() {
//     this.dict = {};
//   }

//   setup(value) {
//     if (!this.dict[value]) {
//       this.dict[value] = value;
//     }
//   }

//   isInDictionary(value) {
//     if (this.dict[value]) {
//       return true;
//     } else if(value.includes("*") && value.indexOf("*") === 0) {
//         let counter = 0;
//         value = value.replace("*", "");
//         for(const key in this.dict){
//             if(key.includes(value)){
//                 counter++;
//             }
//         }
//         return counter
//     }else {
//         return false
//     }
//   }
// }

// const dictionary = new Dictionary();

// dictionary.setup("Hanna");
// dictionary.setup("Octavia");
// dictionary.setup("James");
// dictionary.setup("William");
// dictionary.setup("Benjamin");
// dictionary.setup("Lucas");
// dictionary.setup("Henry");
// dictionary.setup("Theodore");
// dictionary.setup("Emma");
// dictionary.setup("Charlotte");
// dictionary.setup("Isabella");
// dictionary.setup("Evelyn");
// dictionary.setup("Harper");
// dictionary.setup("cat");

// console.log(dictionary.isInDictionary("*at"));
// console.log(dictionary.dict);
