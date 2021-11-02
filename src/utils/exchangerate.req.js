const axios = require('axios');

const baseURL = 'https://api.exchangerate.host';

export async function Convertor({amount, fromSelected, toSelected}){
  try{
    let convertorData = await axios.get(`${baseURL}/convert`, {
      params: {
        from: fromSelected,
        to: toSelected,
        places: 2,
        amount: amount
      }
    })
    .then((response) => response.data);
    return convertorData;
  }catch(err){
    console.log(err);
  }
}

export async function Symbols(){
  try{
    const symbolsData = await axios.get(`${baseURL}/symbols`)
    .then((response) => response);
    return symbolsData;
  }catch(err){
    console.log(err);
  }
}
