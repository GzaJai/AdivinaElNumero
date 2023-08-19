export function GetResults(cantBien,cantRegular,intentos,finalizo) {
  this.cantBien =  cantBien;
  this.cantRegular = cantRegular;
  this.intentos = intentos;
  this.finalizo = finalizo;
}


export function gameLogic(generatedNum, inputedNumber){
  const randNum = generatedNum;
  const randNumArr = Array.from(String(randNum), Number);
console.log("ok"+randNumArr);
  const cantDig = randNumArr.length;
 
  let contBien = 0;
  let contReg = 0;
  let contIntentos = 0;
  let won = false;


  let userNumberInput = inputedNumber;
  let userNumber = parseInt(userNumberInput);
  console.log(userNumber);
  let userNumberArr = Array.from(String(userNumber), Number);
  console.log(userNumberArr);


  const verificador =(currentNum, index)=>{
    let i =0;
    for (i=0; i<cantDig; i++){
      let indexValue = i;
      if(userNumberArr[indexValue]===currentNum){
        if(indexValue===index){
          contBien = contBien +1;
        }else{
          contReg = contReg +1;
        }
      }
    } 
    };

  randNumArr.forEach(verificador);

  console.log("Tienes " + contBien + " números bien");
  console.log("Tienes " + contReg + " números regular");
  if(contBien==cantDig){
    won = true;
  }else{

    contIntentos = contIntentos +1;
  }
  

  let gameData = new GetResults(contBien,contReg,contIntentos,won);

  contBien = 0;
  contReg = 0;

  return (
    gameData
  );
};