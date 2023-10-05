let celciusInput= document.querySelector('#Celcius> input')
let fahrenheitInput= document.querySelector('#fahrenheit> input')
let KelvinInput= document.querySelector('#Kelvin> input')

let btn = document.querySelector('button button')


 function  roundNumber(number){
    return Math.round(number*100)/100
 }
 /*c to f and k*/ 
  celciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp= (cTemp*(9/5))+32
    let kTemp=cTemp + 273.15

fahrenheitInput.value=roundNumber(fTemp)
KelvinInput.value=roundNumber(kTemp)
  })
  /* f to c nd k*/

  fahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp= (fTemp-32)*(5/9)
    let kTemp=(ftemp-32)*(5/9)+273.15

celciusInput.value=roundNumber(cTemp)
KelvinInput.value=roundNumber(kTemp)
  })
  /* k to c n f*/ 

KelvinInputInput.addEventListener('input',function(){
    let kTemp = parseFloat(KelvinInput.value)
    let cTemp=(kTemp) - 273.15
    let fTemp =(kTemp- 273.15)*(9/5)+32

celciusInput.value=roundNumber(cTemp)
fahrenheitInput.value=roundNumber(fTemp)
  })
  btn.addEventListener('click',()=>{
    celciusInput.value=""
    fahrenheitInput.value=""
    KelvinInput.value=""
  })