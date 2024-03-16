'use client';

import React, {useState} from 'react';
// LayoutSide 또는 사이드 메뉴 컴포넌트 임포트
import Menu from './menu/Menu';
import Link from 'next/link';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {}

const LayoutHeader = (props: HeaderProps) => {
  const {} = props;

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="flex justify-between items-center p-5 border-b border-B100 text-white text-3xl font-bold">
      <Link href="/">PAFC</Link>
      {/* md 사이즈 이하에서만 보이는 햄버거 메뉴 버튼 */}
      <div className="md:hidden">
        <button
          className="p-2 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
          onClick={toggleMenu} // 이 부분을 추가
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-white" />
        </button>
      </div>
      {isMenuVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-100 z-50 flex justify-center items-center">
          {/* 여기에 메뉴 컨텐츠 또는 LayoutSide 컴포넌트를 포함시킬 수 있습니다. */}
          <Menu toggleMenu={toggleMenu} />
          {/* 메뉴를 닫는 버튼 또는 다른 메커니즘을 포함할 수 있습니다. */}
          <button onClick={toggleMenu} className="absolute top-0 right-0 m-6 text-white text-2xl">
            &times; {/* 닫기 버튼 */}
          </button>
        </div>
      )}
    </div>
  );
};

export default LayoutHeader;
