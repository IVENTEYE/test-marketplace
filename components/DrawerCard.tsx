import Image from 'next/image';
import cardImage from '../assets/card-image.jpg';
import { ICard } from '../types';
import { useTypedSelector } from '../hooks/useTypedSelector';
import useActions from '../hooks/useActions';


const DriverCard: React.FC<ICard> = ({ id, title, price }) => {

    const drawerItems: ICard[] = useTypedSelector(state => state.drawer.items);
    const drawerCost = useTypedSelector(state => state.drawer.drawerCost);
    const { setCartItems, setDrawerCost } = useActions();

    const onRemoveItem = (id: number, price: string) => {
        setCartItems(drawerItems.filter(item => item.id !== id));
        setDrawerCost(drawerCost - Number(price));
    }

  return (
    <div className="middle-drawer__item drawer-item">
    <div className="drawer-item__content">
        <div className="drawer-item__image">
            <Image src={cardImage} alt='img' layout='fill'/>
        </div>
        <div className="drawer-item__content content-item">
            <div className="content-item__info info-item">
                <h4 className="info-item__label">{title}</h4>
                <div className="info-item__price">{price}</div>
            </div>
            <button className="close" onClick={() => onRemoveItem(id, price)}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#D3D3D3" />
                </svg>
            </button>
        </div>
    </div>
</div>
  )
}

export default DriverCard