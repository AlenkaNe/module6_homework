const exponentiation = (x, n) => {
  
    if(x <= 0 || n <=0) {
      console.log("Ошибка, введите натуральное число")
 }  
    else if(x >= 1 && n >= 1) {
      return Math.pow(x, n);
 }
}
console.log(exponentiation(5, 3));