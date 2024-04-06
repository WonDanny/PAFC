'use client';

import {startTransition, useCallback, useEffect, useState, useTransition} from 'react';
import {insertUser} from '@/api/register';

const Register = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isMoalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(!isMoalVisible);
  };

  const handleCancel = () => {
    // console.log('start');
    setModalVisible(!isMoalVisible);
  };

  //   const handleRegister = async () => {
  //     const formData = {user_name: name, gender: gender, age: age, position: position, phone_number: phoneNumber};
  //     await insertUser(formData);
  //   };
  const formData = {user_name: name, gender: gender, age: age, position: position, phone_number: phoneNumber};
  const regist = insertUser.bind(null, formData);
  return (
    <>
      <button className=" border-2 p-2 rounded-2xl bg-blue-800 text-white" onClick={openModal}>
        선수등록
      </button>
      {isMoalVisible && (
        <form className="absolute border-2 top-1/2 left-1/2 p-2 " action={regist}>
          <input type="text" name="user_name" />
          <input type="text" name="gender" />
          <input type="text" name="age" />
          <input type="text" name="position" />
          <input type="text" name="phone_number" />
          <button type="submit">Add Comment</button>
        </form>

        // <div className="absolute border-2 top-1/2 left-1/2 p-2 ">
        //   <div className="h-12 items-center">
        //     <label htmlFor="name">이름</label>
        //     <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        //   </div>
        //   <div className="h-12 items-center">
        //     <label htmlFor="name">성별</label>
        //     <input id="name" type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        //   </div>
        //   <div className="h-12 items-center">
        //     <label htmlFor="age">나이</label>
        //     <input id="age" type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
        //   </div>
        //   <div className="h-12 items-center">
        //     <label htmlFor="age">포지션</label>
        //     <input id="age" type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        //   </div>
        //   <div className="h-12 items-center">
        //     <label htmlFor="age">전화번호</label>
        //     <input id="age" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        //   </div>
        //   <div className="flex justify-between w-full">
        //     <button className="border-2 rounded-md bg-gray-400 px-4 py-2 text-center" onClick={handleCancel}>
        //       취소
        //     </button>
        //     <button className="border-2 rounded-md bg-gray-400 px-4 py-2 text-center" onClick={handleRegister}>
        //       등록
        //     </button>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default Register;
