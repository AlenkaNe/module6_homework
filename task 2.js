function isPrime(num) {
  let isPrime = true;
  let result;
  
  if (num > 1 && num <= 1000) {
    for(i = 2; i < num; i++) {
      if(num % i === 0) {
        isPrime = false;
      }
    }
     result = isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`;
   } else if (num > 1000){
		result = 'Данные неверны';
   }
  return result;
}
 console.log(7, isPrime(7))
 console.log(1000, isPrime(1000))
 console.log(1009, isPrime(1009))