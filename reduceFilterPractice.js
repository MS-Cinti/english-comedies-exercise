const array = [15, 16, 17, 18, 19];

const initialValue = 99;
const sumWithInitial = array.reduce(

    (prev, curr) => prev + curr, initialValue
);

console.log(sumWithInitial);


const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});

console.log(filteredArray)
