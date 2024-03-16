// next
import Link from 'next/link';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

// constants
import {MENU} from '@/constants/layout/Menu';

const Menu = ({toggleMenu}: any) => {
  return (
    <div className="absolute top-0 left-0 z-10 basis-60 p-5 space-y-2">
      {MENU.map((menu) => {
        return (
          <div key={menu.id} onClick={toggleMenu}>
            <Link href={menu.linkUrl} className="flex items-center gap-2">
              <FontAwesomeIcon icon={menu.icon as IconProp} color="white" />
              <p className="text-white text-lg font-bold">{menu.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
