import { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import useActions from '../hooks/useActions';

const ConvertCard = ({ from, to, setModalActive }) => {
  const count: number = useTypedSelector((state) => state.wallet[from.toLowerCase()]);
  const { convertUsd, convertCoin } = useActions();
  const [inputValue, setInputValue] = useState('');
  const [buttonDisable, setButtonDisable] = useState(false);

  const currencyChange = () => {
    setModalActive(false);
    if (from === 'USD') {
      convertCoin(Number(inputValue));
    } else {
      convertUsd(Number(inputValue));
    }
  };

  useEffect(() => {
    if (Number(inputValue) > 0 && Number(inputValue) <= count) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [inputValue]);

  return (
    <>
      <div className={buttonDisable ? 'change change--error' : 'change'}>
        <div className="change-top">
          <p>
            Из {from} в {to}
          </p>
          <p>Баланс: {count}</p>
        </div>
        <div className="change-body">
          <input
            placeholder="Введите сумму"
            className="change-body__field"
            type="number"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                currencyChange();
              }
            }}
          />
          {inputValue === '' ? (
            <p className="change-body__message">Введите сумму перевода</p>
          ) : null || Number(inputValue) > count ? (
            <p className="change-body__message">Введенная сумма превышает текущий баланс</p>
          ) : null}
        </div>
      </div>
      <div className="change-actions">
        <button disabled={buttonDisable} className="green__btn btn" onClick={currencyChange}>
          Обменять
        </button>
        <button className="gray__btn btn" onClick={() => setModalActive(false)}>
          Закрыть
        </button>
      </div>
    </>
  );
};

export default ConvertCard;
