'use client';

import React, {useState} from 'react';
// LayoutSide 또는 사이드 메뉴 컴포넌트 임포트
import Menu from './Menu';
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
    <div className="flex justify-between items-center p-5 border-b border-B100  text-3xl font-bold">
      {/* md 사이즈 이하에서만 보이는 햄버거 메뉴 버튼 */}
      <div className="md:hidden">
        <button className="p-2 rounded-md focus:outline-none focus:ring focus:ring-opacity-50" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 " />
        </button>
      </div>
      <div className="hidden md:block">
        <Link href="/">PAFC</Link>
      </div>
      {isMenuVisible && (
        <div className="fixed inset-0 bg-white bg-opacity-100 z-50 flex justify-center items-center">
          <div className="absolute top-0 left-0 z-10 basis-60 p-5 space-y-2">
            <Menu toggleMenu={toggleMenu} />
          </div>
          <button onClick={toggleMenu} className="absolute top-0 right-0 m-6 text-3xl">
            &times; {/* 닫기 버튼 */}
          </button>
        </div>
      )}
    </div>
  );
};

export default LayoutHeader;
