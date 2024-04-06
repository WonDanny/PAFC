import Menu from './menu/Menu';
import Link from 'next/link';

const LayoutSide = () => {
  return (
    <div className="flex-col">
      <div className="flex text-base font-bold text-center px-6 py-4 border-b border-gray-300">
        <Link href="/">PAFC</Link>
      </div>
      <Menu />
    </div>
  );
};

export default LayoutSide;
