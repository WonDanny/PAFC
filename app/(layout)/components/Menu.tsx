// next
import Link from 'next/link';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

// constants
import {MENU} from '@/app/(team)/constants/Menu';

const Menu = ({toggleMenu}: any) => {
  return (
    <>
      {MENU.map((menu) => {
        return (
          <div key={menu.id} className="flex items-center h-12">
            <div className=" hover:bg-blue-500 min-w-1 mr-5"></div>
            <div onClick={toggleMenu} className="w-3/4">
              <Link href={menu.linkUrl} className=" gap-2">
                {/* <FontAwesomeIcon icon={menu.icon as IconProp} /> */}
                <div className="text-base font-bold">{menu.name}</div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Menu;
