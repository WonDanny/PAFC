// next
import Link from 'next/link';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

// constants
import {MENU} from '@/constants/layout/Menu';

const LayoutSide = () => {
  return (
    <div className="hidden md:block basis-60 p-5 space-y-2 border-r border-B100">
      {MENU.map((menu) => {
        return (
          <div key={menu.id}>
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

export default LayoutSide;
