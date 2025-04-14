const  word1 = "ab", word2 = "pqrs"

var mergeAlternately = function(word1, word2) {
    let len = word1.length + word2.length;
    let res = "";
    let one = 0,two = 0;
    for(let i=0;i<len;i++){
        if(i%2==0){
            if(one<word1.length){
                res+=word1[one++]
            }else{
                res+=word2[two++]
            }
        }else{
            if(two<word2.length){
                res+=word2[two++]
            }else{
                res+=word1[one++]
            }
        }
        
    }
    return res
};

console.log(mergeAlternately(word1, word2));