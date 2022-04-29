function fakeBin(x) {
  let number = ""
  for(let i = 0; i < x.length; i++) {
    if(x[i] >= 5) {
      number = number + "1"
    }
    else {
      number = number + "0"
    }
  }
  return number
   
}
 
console.log(fakeBin('45385593107843568'))