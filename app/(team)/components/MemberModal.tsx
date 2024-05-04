'use client';

import {Member} from '../interface/Member';
import {insertUser, updateUser, deleteUser} from '@/action/team.action';

// 선수 등록 및 수정 모달
// 선수 등록 버튼, 선수 목록에서 선택 여부에 따라 그에 맞게 모달을 띄워주는 컴포넌트

const MemberModal = ({
  isCreate = false,
  closeModal,
  member = {
    team_id: 0,
    user_id: 0,
    user_name: '',
    gender: 'male',
    age: 0,
    position: '',
    phone_number: ''
  }
}: {
  isCreate?: boolean;
  closeModal: () => void;
  member?: Member;
}) => {
  return (
    <form id="form" className="flex flex-col top-1/2 left-1/2 fixed transform -translate-x-1/2 -translate-y-1/2 border-2 bg-black p-2">
      <label htmlFor="user_name">이름</label>
      <input type="text" name="user_name" className="text-black rounded-md border border-slate-300 px-2 py-1 outline-none" required defaultValue={member.user_name} />

      <label htmlFor="gender">성별</label>
      <div className="flex items-center h-10">
        <input className="ml-4" type="radio" name="gender" value="male" defaultChecked={member.gender === 'male'} />
        <label className="ml-2 w-20">남성</label>
        <input type="radio" name="gender" value="female" defaultChecked={member.gender === 'female'} />
        <label className="ml-2">여성</label>
      </div>

      <label htmlFor="age">나이</label>
      <input type="number" name="age" className="text-black rounded-md border border-slate-300 px-2 py-1 outline-none" defaultValue={member.age} />

      <label htmlFor="position">포지션</label>
      <input type="text" name="position" className="text-black rounded-md border border-slate-300 px-2 py-1 outline-none" defaultValue={member.position} />

      <label htmlFor="phone_number">전화번호</label>
      <input type="text" name="phone_number" className="text-black rounded-md border border-slate-300 px-2 py-1 outline-none" defaultValue={member.phone_number} />

      {/* 수정 모달 메뉴 */}
      <div className={`mt-6 flex justify-between items-center ${isCreate ? 'hidden' : ''}`}>
        <button type="button" className="rounded-md bg-sky-500 py-2 w-20" onClick={closeModal}>
          취소
        </button>
        <button type="submit" className="rounded-md bg-sky-500 py-2 w-20" formAction={updateUser.bind(null, member.user_id)}>
          수정
        </button>
      </div>
      <button type="submit" className={`mt-2 rounded-md bg-sky-500 py-2 ${isCreate ? 'hidden' : ''}`} formAction={deleteUser.bind(null, member.team_id, member.user_id)}>
        강퇴하기
      </button>

      {/* 등록 모달 메뉴 */}
      <div className={`mt-6 flex justify-between items-center ${isCreate ? '' : 'hidden'}`}>
        <button type="button" className=" rounded-md bg-sky-500 py-2 w-20" onClick={closeModal}>
          취소
        </button>
        <button type="submit" className=" rounded-md bg-sky-500 py-2 w-20" formAction={insertUser}>
          등록
        </button>
      </div>
    </form>
  );
};

export default MemberModal;
