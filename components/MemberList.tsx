import {db} from '@/db/db';
import * as t from '@/db/schema';
import {eq} from 'drizzle-orm/mysql-core/expressions';

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
  const datas = await db.select({user_id: t.user.id, user_name: t.user.user_name, gender: t.user.gender, age: t.user.age, position: t.user.position, phone_number: t.user.phone_number}).from(t.teamUsers).leftJoin(t.user, eq(t.teamUsers.userId, t.user.id));

  members = datas
    .filter((data) => data !== null)
    .map((data) => ({
      user_id: data.user_id!,
      user_name: data.user_name!,
      gender: data.gender!,
      age: data.age!,
      position: data.position!,
      phone_number: data.phone_number!
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
