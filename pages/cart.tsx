import { NextPage } from 'next';
import Layout from '../components/Layout';
import DriverCard from '../components/DrawerCard';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Info from '../components/Info';
import cartImage from '../assets/box.svg';
import orderSuccess from '../assets/sucsess.svg';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ICard, IWalletCard } from '../types';
import PageLabel from '../components/PageLabel';
import Modal from '../components/Modal';
import { useState, useEffect } from 'react';
import WalletCard from '../components/WalletCard';
import useActions from '../hooks/useActions';

const Cart: NextPage = () => {
  const router = useRouter();

  const drawerItems: ICard[] = useTypedSelector((state) => state.drawer.items);
  const drawerCost = useTypedSelector((state) => state.drawer.drawerCost);
  const currencies = useTypedSelector((state) => state.wallet.currencies);
  const { usd, coin } = useTypedSelector(state => state.wallet);

  const { setUsd, setCoin, setCartItems, setDrawerCost } = useActions();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCurrency, setselectedCurrency] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const currency: number = useTypedSelector((state) => state.wallet[selectedCurrency.toLowerCase()]);

  useEffect(() => {
    if (currency < drawerCost) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [selectedCurrency, usd, coin]);

  useEffect(() => {
    if (selectedCurrency === '') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [modalVisible]);

  const onPay = () => {
    if (selectedCurrency === 'USD') {
      setUsd(currency - drawerCost);
    } else {
      setCoin(currency - drawerCost);
    }
    
    setCartItems([]);
    setDrawerCost(0);
    setIsOrderComplete(true);
    setModalVisible(false);
  };

  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>
      <Layout>
        <div className="drawer-container min-container">
          <PageLabel title="Корзина" infoText="Товаров" infoValue={drawerItems.length} />
          <div className="drawer-items">
            {drawerItems.length > 0 ? (
              drawerItems.map((item) => (
                <DriverCard key={item.id} id={item.id} title={item.title} price={item.price} />
              ))
            ) : (
              <Info
                image={isOrderComplete ? orderSuccess : cartImage}
                title={isOrderComplete ? "Заказ оформлен!" : "Корзина пуста"}
                description={isOrderComplete ? "Ваш заказ скоро будет передан курьерской доставке." : "Добавьте хотя бы один товар, чтобы сделать заказ."}
              />
            )}
          </div>
          {drawerItems.length > 0 && (
            <div className="drawer-actions">
              <button className="gray__btn btn" onClick={() => router.push('/')}>
                Назад
              </button>
              <button
                className="green__btn btn green__btn_arrow-right"
                onClick={() => setModalVisible(true)}>
                Оформить заказ
              </button>
            </div>
          )}
        </div>
      </Layout>
      <Modal active={modalVisible}>
        <div className="order">
          <h2 className="order__title">Оплата</h2>
          <div className="order-body">
            <h3 className="order-body__title">Выберите способ оплаты:</h3>
            {currencies.map((item: IWalletCard) => {
              return (
                <div className="order-body__items">
                  <label htmlFor={item.name}>
                    <WalletCard
                      key={item.name}
                      image={item.image}
                      name={item.name}
                      account={item.account}
                    />
                  </label>
                  <input
                    key={item.name}
                    type="radio"
                    name="currency"
                    value={item.name}
                    id={item.name}
                    onInput={() => {
                      setselectedCurrency(item.name);
                    }}
                  />
                </div>
              );
            })}
            <h4 className="order-body__total">К оплате: {drawerCost + ' ' + selectedCurrency}</h4>
            <p className="change-body__message" style={{position: 'static'}}>{currency < drawerCost ? "На балансе недостаточно средств" : null || selectedCurrency === '' ? "Выберите способ оплаты" : null}</p>
          </div>
          <div className="order-actions">
            <button className="gray__btn btn" onClick={() => setModalVisible(false)}>
              Отмена
            </button>
            <button
              className="green__btn btn green__btn_arrow-right"
              onClick={onPay}
              disabled={isDisabled}>
              Оплатить
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
