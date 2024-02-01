function palindrome(s){
    let pal = [];

    s.split('').map((val) => pal.unshift(val))

    return s === pal.join('')
}

console.log(palindrome('aba'))
console.log(palindrome('test'))