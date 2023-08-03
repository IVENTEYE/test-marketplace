import { useEffect } from 'react'
import Image from 'next/image';
import logo from '../assets/logo.svg';
import { useRouter } from 'next/router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import useActions from '../hooks/useActions';

const Header: React.FC = () => {
  const router = useRouter();
  const drawerCost = useTypedSelector((state) => state.drawer.drawerCost);
  const overallBalance = useTypedSelector(state => state.wallet.overallBalance);
  const { coin, usd } = useTypedSelector(state => state.wallet);
  const { setOverallBalance } = useActions();

  useEffect(() => {
      setOverallBalance();
  }, [usd, coin])

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__items">
          <div className="header__logo" onClick={() => router.push('/')}>
            <div className="header__logo-icon">
              <Image src={logo} alt="logo" width={45} height={45} />
            </div>
            <div className="header__logo-text text-logo">
              <h3 className="text-logo__label">Marketplace</h3>
              <p className="text-logo__subtitle">Пробная версия маркетплейса</p>
            </div>
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <button className="header__item-button" onClick={() => router.push('/cart')}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                      stroke="#9B9B9B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                      stroke="#9B9B9B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                      stroke="#9B9B9B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="cost">{drawerCost > 0 && drawerCost}</p>
                </button>
              </li>
              <li className="header__item">
                <button className="header__item-button" onClick={() => router.push('/wallet')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} viewBox="0 0 512 512"><path fill='#9B9B9B' d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                  <p className="cost">{overallBalance > 0 && overallBalance}</p>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
