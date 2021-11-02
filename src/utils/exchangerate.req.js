const axios = require('axios');


export async function Convertor({amount, fromSelected, toSelected}){
  let convertorData = await axios.get(`https://api.exchangerate.host/convert?base=USD&from=${fromSelected}&to=${toSelected}&places=2&amount=${amount}`)
  .then((response) => response.data);
  return convertorData;
}

export async function Symbols(){
  const symbolsData = await axios.get('https://api.exchangerate.host/symbols')
  .then((response) => response);
  return symbolsData;
}
