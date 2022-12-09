function palindrome(str) {
    let strMin = str.toLowerCase();

    if (strMin.split('').reverse().join('') === strMin) {
        console.log(`${strMin} est un palindrome`);
    }
    else {
        console.log(`${strMin} n'est pas un palindrome`)
    }
}
palindrome("kayak");

