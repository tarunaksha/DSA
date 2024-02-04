function isAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }
    const lookup = {}
    for(let letter of str1){
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let letter of str2){
        if(!lookup[letter]){
            return false;
        }
        lookup[letter] -= 1;
    }
    return true;
}

const str1 = "anagram";
const str2 = "gramana";

console.log(isAnagram(str1,str2));