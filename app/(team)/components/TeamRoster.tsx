'use client';

import React, {useState} from 'react';
import MemberModal from './MemberModal';
import {Member} from '../interface/Member';

const TeamRoster = (memberList: any) => {
  const [members, setMembers] = useState(memberList.data);
  const [selIdx, setSelect] = useState(-1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };
  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const closeModal = () => {
    setIsCreateModalOpen(false);
    setIsUpdateModalOpen(false);
    setSelect(-1);
  };

  return (
    <>
      {/* 등록버튼 */}
      <div className="flex text-base px-6 h-12 justify-end">
        <button className=" border-2 p-2 rounded-2xl bg-blue-800" onClick={openCreateModal}>
          선수등록
        </button>
        {isCreateModalOpen && <MemberModal isCreate={true} closeModal={closeModal}></MemberModal>}
      </div>

      {/* 선수목록 */}
      <div className="text-sm grid grid-flow-col grid-cols-5 gap-0 px-4 items-center">
        {['선수명', '성별', '나이', '포지션', '연락처'].map((title) => (
          <div key={title} className="flex border-b-4 border-gray-400 border-double h-12 items-center">
            <div>{title}</div>
          </div>
        ))}
      </div>
      {isUpdateModalOpen && <MemberModal closeModal={closeModal} member={members[selIdx]} />}
      {members &&
        members.map((member: Member, index: number) => (
          <div
            key={index}
            className={`text-sm grid grid-flow-col grid-cols-5 gap-0 px-4 h-16 items-center cursor-pointer hover:bg-gray-800 ${index === selIdx ? 'bg-slate-800' : ''}`}
            onClick={() => {
              if (selIdx == -1) {
                setSelect(index);
                openUpdateModal();
              }
            }}
          >
            <div>{member.user_name}</div>
            <div>{member.gender}</div>
            <div>{member.age}</div>
            <div>{member.position}</div>
            <div>{member.phone_number}</div>
          </div>
        ))}
    </>
  );
};

export default React.memo(TeamRoster);
