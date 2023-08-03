import Image, { StaticImageData } from 'next/image';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IWalletCard } from '../types';
import { useState } from 'react';
import Modal from './Modal';
import ConvertCard from './ConvertCard';

const WalletCard: React.FC<IWalletCard> = ({ image, name, account }) => {
  const count = useTypedSelector((state) => state.wallet[account]);
  const [modalActive, setModalActive] = useState(false);
  const [convertFrom, setConvertFrom] = useState('USD');
  const [convertTo, setConvertTo] = useState('Coin');
  
    const onChange = (name: string) => {
        setModalActive(true);
        setConvertFrom(name);
        if (name !== 'USD') {
            setConvertTo('USD');
        }
    }

  return (
    <>
      <div className="wallet-item">
        <div className="wallet-item__image">
          <Image src={image} alt="dollar" layout="fill" />
        </div>
        <div className="wallet-item__info info-wallet">
          <h2 className="info-wallet__name">{name}</h2>
          <p className="info-wallet__count">{count}</p>
        </div>
        <div className="wallet-item__actions actions-wallet">
          <button className="actions-wallet__item" onClick={() => onChange(name)}>
            Обмен
          </button>
        </div>
      </div>
      <Modal active={modalActive}>
        <ConvertCard from={convertFrom} to={convertTo} setModalActive={setModalActive}/>
      </Modal>
    </>
  );
};

export default WalletCard;
