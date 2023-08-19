export function intentoObjectCreator (parNumero, parNumsBien, parNumsReg){

  let numero = parseInt(parNumero);
  let cantBien = parseInt(parNumsBien);
  let cantReg = parseInt(parNumsReg);

  let newObject = { resultado: {"numero": numero, "bien": cantBien, "regular": cantReg}};
    return newObject;
  }