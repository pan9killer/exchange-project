const axios = require('axios');

const instance = axios.create({baseURL: 'https://api.exchangerate.host/'})

export async function Convertor({amount, fromSelected, toSelected}){
  try{
    let convertorData = await instance.get(`convert`, {
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
    const symbolsData = await instance.get(`symbols`)
    .then((response) => response);
    return symbolsData;
  }catch(err){
    console.log(err);
  }
}
