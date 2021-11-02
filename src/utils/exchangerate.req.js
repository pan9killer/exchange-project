const axios = require('axios');


export async function Convertor({amount, fromSelected, toSelected}){
  try{
    let convertorData = await axios.get(`https://api.exchangerate.host/convert`, {
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
    const symbolsData = await axios.get('https://api.exchangerate.host/symbols')
    .then((response) => response);
    return symbolsData;
  }catch(err){
    console.log(err);
  }
}
