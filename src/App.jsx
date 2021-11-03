import React, { useEffect, useState } from "react";
import styles from './App.module.css';
import {Convertor, Symbols} from "./utils/exchangerate.req";
import Currency from "./Currency";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const[amount, setAmount] = useState(1);
  const[amountInFromCurrerncy, setAmountInFromCurrerncy] = useState(true);
  const[fromSelected, setFromSelected] = useState('');
  const[toSelected, setToSelected] = useState('');
  const[coeff, setCoeff] = useState(1);

  let toAmount, fromAmount;
  if(amountInFromCurrerncy){
    fromAmount = amount;
    toAmount = amount * coeff;
  } else {
    toAmount = amount;
    fromAmount = amount / coeff;
  }

  useEffect(()=>{
    (async() =>{
      let getSymbols = await Symbols();
      let fromTo = await Convertor({amount, fromSelected, toSelected});
      setCurrencyOptions([fromTo.query.from, ...Object.keys(getSymbols.data.symbols)]);
      setAmount(fromTo.query.amount);
      setCoeff(fromTo.result);
      setFromSelected('USD');
      setToSelected('BYN');
    })()
  }, [])

  useEffect(()=>{
      (async()=>{
      if(fromSelected != null && toSelected != null){
        let fromTo = await Convertor({amount, fromSelected, toSelected});
        setCoeff(fromTo.result);
      }
    })()
  }, [fromSelected, toSelected])
  
  function handleFromAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrerncy(true)
  }

  function handleToAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrerncy(false)
  }

  return (
    <>
      <h1>Convert</h1>
      <Currency
        currencyOptions={currencyOptions}
        selectedCurrency={fromSelected}
        onChangeCurrency={e=>setFromSelected(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
        flag={'fromCurrency'}
      />
      <div className={styles.equals}>=</div>
      <Currency
        currencyOptions={currencyOptions}
        selectedCurrency={toSelected}
        onChangeCurrency={e=>setToSelected(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
        flag={'toCurrency'}
      />
    </>
  );
}

export default App;