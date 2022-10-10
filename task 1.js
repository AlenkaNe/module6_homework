function func() {
  const arr = [0, null, NaN, 13, 100, 43, "str"];
 
  let nechet = 0,
        chet = 0,
        zero = 0;
  
   for (let i = 0; i < arr.length; i++) { 
     if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
      zero++;
    }
      else if (arr[i] % 2 === 0) {
    chet++;
    
    } else {
    nechet++;
    }
  }
}
 console.log(`Четных элементов в массиве: ${chet}`)
 console.log(`Нечетных элементов в массиве: ${nechet}`)
  console.log(`Нулей: ${zero}`)
}
  func();


 