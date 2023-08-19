function getNumber(max, min){
  const randNum = Math.floor(Math.random() * (max - min) + min);
  return(randNum);
};

export const getRandomNumber = () => {
  let randomNumber = getNumber(9999, 1000);
  return randomNumber
};