const axios = require('axios');


export function Convertor(props){
  const {
    amount,
    fromSelected,
    toSelected
  } = props;
  return (axios.get(`https://api.exchangerate.host/convert?base=USD&from=${fromSelected}&to=${toSelected}&places=2&amount=${amount}`)
    .then((response) => response.data))
}

export function Symbols(){
  return (axios.get('https://api.exchangerate.host/symbols')
    .then((response) => response))
}
