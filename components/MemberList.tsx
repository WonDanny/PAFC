import prisma from '@/db/db';

interface Member {
  user_id: number;
  user_name: string;
  gender: string;
  age: number;
  position: string;
  phone_number: string;
}

let members: Member[] = [];

const MemberList = async () => {
  const datas = await prisma.teamUser.findMany({
    relationLoadStrategy: 'join',
    include: {
      user: true
    }
  });

  members = datas
    .filter((data) => data !== null)
    .map((data) => ({
      user_id: data.user_id!,
      user_name: data.user.user_name!,
      gender: data.user.gender!,
      age: data.user.age!,
      position: data.user.position!,
      phone_number: data.user.phone_number!
    }));
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

export default MemberList;
