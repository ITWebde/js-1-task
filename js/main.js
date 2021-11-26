var numberList = [2,3,5,6,7,8,9,10,12,13];

function isSumHasInArray(array, number){
    for(var i=0; i < array.length; i++){
        for(var j=0; j < array.length; j++){
            if(array[i] + array[j] ==number){
                
                return true
            }
        }
    }
    return false
}
console.log(isSumHasInArray(numberList, prompt()));