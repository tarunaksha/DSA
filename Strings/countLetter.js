// WITHOUT USING REGEX

// function countLetter(str){
//     const count = {}
//     for (let char of str){
//         count[char] = count[char]>0 ? count[char] + 1 : 1 
//     }
//     return count
// }

// USING REGEX

//function countLetter(str){
//    const count = {}
//    for (let char of str){
//        let lowChar =  char.toLowerCase()
//        // count[lowChar] = /[a-z0-9]/.test(lowChar) ? count[lowChar]>0 ? ++count[lowChar] : 1 : -1
//        // OR
//        count[lowChar] = /[a-z0-9]/.test(lowChar) ? ++count[lowChar] || 1 : -1
//
//        // equivalent to this code
//        // if(/[a-z0-9]/.test(lowChar)){
//        //     count[lowChar] = ++count[lowChar] || 1
//        // }
//
//    }
//    return count
//}


// USING CHARACTER CODES
function countLetter(str){
    const count = {}
    for (let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase()
            count[char] = ++count[char] || 1
        } 
    }
    return count
}

function isAlphaNumeric(char) {
    let code;
    code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
   }
   return true;
}
console.log(countLetter('School123 !'))






















