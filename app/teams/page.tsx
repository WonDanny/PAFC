import MemberList from '@/components/MemberList';
import Register from '@/components/Register';

async function go() {
  const response = await fetch('http://localhost:3000/teams/api', {method: 'GET'});
  const data = await response.json();
  return data;
}
export default async function Team() {
  const datas = await go();
  console.log(datas);
  return (
    <div className="w-full">
      <div className="flex text-base font-bold px-6 h-12 items-center">TEAM</div>
      <div className="flex text-base px-6 h-12 justify-end">
        <Register></Register>
      </div>
      <div className="text-sm grid grid-flow-col grid-cols-5 gap-0 px-4 items-center">
        {['선수명', '성별', '나이', '포지션', '연락처'].map((title) => (
          <div key={title} className="flex border-b-4 border-gray-400 border-double h-12 items-center">
            <div>{title}</div>
          </div>
        ))}
      </div>
      <MemberList {...datas}></MemberList>
    </div>
  );
}
