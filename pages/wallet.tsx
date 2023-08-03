import Layout from '../components/Layout';
import PageLabel from '../components/PageLabel';
import Head from 'next/head';
import WalletCard from '../components/WalletCard';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IWalletCard } from '../types';
import { useRouter } from 'next/router';

const Wallet = () => {
  const currencies = useTypedSelector((state) => state.wallet.currencies);
  const overallBalance = useTypedSelector((state) => state.wallet.overallBalance);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Кошелёк</title>
      </Head>
      <Layout>
        <div className="wallet-container min-container">
          <PageLabel title="Кошелёк" infoText="Баланс" infoValue={overallBalance} />
          <div className="wallet-items">
            {currencies.map((item: IWalletCard) => {
              return <WalletCard key={item.name} image={item.image} name={item.name} account={item.account} />;
            })}
          </div>
          <button className="wallet__btn gray__btn btn" onClick={() => router.push('/')}>
            Вернуться назад
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Wallet;
