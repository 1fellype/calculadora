import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentVal, setCurrentVal] = useState('');
  const [previousVal, setPreviousVal] = useState('');
  const [operator, setOperator] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleNumberClick = (number) => {
    if (/[0-9]/.test(number)) { // Validação de entrada
      setCurrentVal(currentVal + number);
      setDisplayValue(currentVal); // Atualizar displayValue
    }
  };

  const handleOperatorClick = (op) => {
    if (currentVal) {
      setPreviousVal(currentVal);
      setCurrentVal('');
      setOperator(op);
      setDisplayValue(previousVal + op);
    }
  };

  const handleEqualClick = () => {
    if (currentVal && previousVal && operator) {
      const result = eval(`${previousVal} ${operator} ${currentVal}`);
      setCurrentVal(result);
      setPreviousVal('');
      setOperator('');
      setDisplayValue(result);
    }
  };

  const handleClearClick = () => {
    setCurrentVal('');
    setPreviousVal('');
    setOperator('');
    setDisplayValue('');
  };

  useEffect(() => {
    setDisplayValue(currentVal); // Atualizar displayValue com useEffect
  }, [currentVal]); // Dependência de currentVal

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="row">
        <button className="button" onClick={() => handleNumberClick('7')}>7</button>
        <button className="button" onClick={() => handleNumberClick('8')}>8</button>
        <button className="button" onClick={() => handleNumberClick('9')}>9</button>
        <button className="button operator" onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleNumberClick('4')}>4</button>
        <button className="button" onClick={() => handleNumberClick('5')}>5</button>
        <button className="button" onClick={() => handleNumberClick('6')}>6</button>
        <button className="button operator" onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleNumberClick('1')}>1</button>
        <button className="button" onClick={() => handleNumberClick('2')}>2</button>
        <button className="button" onClick={() => handleNumberClick('3')}>3</button>
        <button className="button operator" onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleNumberClick('0')}>0</button>
        <button className="button" onClick={() => handleNumberClick('.')}>.</button>
        <button className="button equal" onClick={handleEqualClick}>=</button>
        <button className="button clear" onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
};

export default App;
