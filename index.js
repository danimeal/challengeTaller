function checkArrayIsPresent(array1,array2){
  var temp1=JSON.stringify(array1);
  var temp2=JSON.stringify(array2);
  var check= temp1.indexOf(temp2);
  return check!=-1;
}

const permuteUnique = (nums) => {
  let result = [];
  if (nums.length<1 || nums.length>8){
    return result;
  }
  const permute = (array, nextNums = []) => {
    if (array.length === 0) {
      if (!checkArrayIsPresent(result,nextNums))
      {
        result.push(nextNums);
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        let currentNums = array.slice();
        let next = currentNums.splice(i, 1);
        permute(currentNums.slice(), nextNums.concat(next))
     }
   }
  }
  permute(nums);
  return result;  
};

const simpleTest = () => {
  console.log(permuteUnique([1, 1, 2]));
  console.log(permuteUnique([1, 2, 3,4]));
  console.log(permuteUnique(['a','b']));
};

simpleTest();

module.exports = {
  permuteUnique,
};
