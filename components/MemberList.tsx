import React from 'react';

interface Member {
  user_id: number;
  user_name: string;
  gender: string;
  age: number;
  position: string;
  phone_number: string;
}

const MemberList = (props: any) => {
  const members: Member[] = props.data;
  return (
    <>
      {members.map((member) => (
        <div className="text-sm grid grid-flow-col grid-cols-5 gap-0 px-4 h-16 items-center" key={member.user_id}>
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

export default React.memo(MemberList);
