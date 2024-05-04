import {searchUsers} from '@/action/team.action';
import TeamRoster from '@/app/(team)/components/TeamRoster';

export default async function Team() {
  let members = await searchUsers();
  console.log(members);
  return (
    <div className="w-full">
      <div className="flex text-base font-bold px-6 h-12 items-center">TEAM</div>
      <TeamRoster {...members}></TeamRoster>
    </div>
  );
}
