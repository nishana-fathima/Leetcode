// Input: s = "([)]"

// Output: true
const s = "[[]]"
const isValise = function(s){
    const stack =[];
    for(let char of s){
       if(char==='('|| char ==='{'||char==='['){
        stack.push(char)
       }else{
        const last =stack.pop()
        if(
            (char === ')' && last !== '(') ||
            (char === '}' && last !== '{') ||
            (char === ']' && last !== '[')
        ){
            return false
        }
       }
    }
    return stack.length === 0
}
console.log(isValise(s))