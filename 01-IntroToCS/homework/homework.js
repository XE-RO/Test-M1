'use strict';

function BinarioADecimal(num) {
   let char=num.toString().split("").reverse()
   let suma=0
   for(let i=0 ; i<char.length ; i++){
      suma+=Math.pow(2,i)*char[i]
   }
   return suma
}

//console.log(BinarioADecimal(111))

function DecimalABinario(num) {
   let resultado=[]
   while(num>0){
      resultado.unshift(num%2)
      num=Math.floor(num/2)
   }
   return resultado.join("")
}
//console.log(DecimalABinario(36))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
