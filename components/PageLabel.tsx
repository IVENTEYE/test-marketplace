import { IPage } from '../types';

const PageLabel: React.FC<IPage> = ({ title, infoText, infoValue }) => {
  return (
    <div className="page-top">
      <h1 className="page-top__title">
        {title}
      </h1>
      {infoValue > 0 && <p className="page-top__quantity">{`${infoText}: ${infoValue}`}</p>}
    </div>
  );
};

export default PageLabel;
