/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let l1 = str1.length,l2=str2.length;
  if(l1!=l2) return false;

  let c1 = []
  let c2 = []
  
  for(let i=0;i<l1;i++){
    c1[str1[i]]++
    c2[str2[i]]++
  }
  return true;
}

module.exports = isAnagram;
