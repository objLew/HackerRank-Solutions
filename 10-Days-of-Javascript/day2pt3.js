/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = "";
    
    for(var i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            console.log(s[i]);
        } else{
            consonants += s[i] + "\n";  //new line so can print all beneath eachother
        }
    }
    console.log(consonants.trim());   //prints all
    
}