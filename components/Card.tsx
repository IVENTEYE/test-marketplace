import { useState, useEffect } from 'react';
import { ICard } from '../types';
import cardImage from '../assets/card-image.jpg';
import Image from 'next/image';
import { useTypedSelector } from '../hooks/useTypedSelector';
import useActions from '../hooks/useActions';

const Card: React.FC<ICard> = ({ id, title, price }) => {

  const [isAdded, setIsAdded] = useState(false);

  const drawerItems: ICard[] = useTypedSelector((state) => state.drawer.items);
  const drawerCost = useTypedSelector((state) => state.drawer.drawerCost);
  const { addToCart, setCartItems, setDrawerCost } = useActions();

  const obj: ICard = { id, title, price };

  const onClickPlus = (obj: ICard) => {
    const findItem = drawerItems.find((item) => item.id === obj.id);

    if (findItem) {
      const filtredItems = drawerItems.filter((item) => item.id !== obj.id);
      setIsAdded(false);
      setCartItems(filtredItems);
      setDrawerCost(drawerCost - Number(price));
    } else {
      setIsAdded(true);
      addToCart(obj);
      setDrawerCost(drawerCost + Number(price));
    }
  };

  return (
    <div className="card">
      <div className="card__image">
        <Image src={cardImage} alt={title} layout="fill" />
      </div>
      <h4 className="card__label">{title}</h4>
      <div className="card__cost cost-card">
        <div className="cost-card__price">
          <span className="cost-card__price-text">Цена:</span>
          {price}
        </div>
        <button
          onClick={() => onClickPlus(obj)}
          className={isAdded ? 'cost-card__add _added' : 'cost-card__add'}></button>
      </div>
    </div>
  );
};

export default Card;
