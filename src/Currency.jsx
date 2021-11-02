import React from 'react';
import styles from './App.module.css';

export default function Currency({currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount, flag}) {
  return (
    <div>
      <input className={styles.inputs} type="number" min="0" value={amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
        <option key={option + flag} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
