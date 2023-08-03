import { useRouter } from 'next/router';
import { IInfo } from '../types';
import Image from 'next/image';

const Info: React.FC<IInfo> = ({ image, title, description }) => {
  const router = useRouter();
  return (
    <div className="drawer-state">
      <div className="drawer-state__image">
        <Image src={image} alt={title} layout='fill'/>
      </div>
      <h2 className="drawer-state__title">{title}</h2>
      <p className="drawer-state__text">{description}</p>
      <button className="green__btn btn green__btn_arrow-left" onClick={() => router.push('/')}>
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
