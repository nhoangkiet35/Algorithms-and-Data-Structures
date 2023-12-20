const isOdd = val => val % 2 !== 0;

function someRecursive(array, callback){
  // add whatever parameters you deem necessary - good luck!
    
    function helper(helperInput){
        if(helperInput.length===0)
            return false;
        if(callback(helperInput[0]))
            return true
        helper(helperInput.slice(1))
    }
    helper(array)
    return false;
}

someRecursive([1,2,3,4], isOdd)