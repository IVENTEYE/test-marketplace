import { ScriptProps } from 'next/script';
import Header from './Header';

const Layout: React.FC<ScriptProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
