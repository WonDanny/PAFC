import MemberList from '@/components/MemberList';
import Register from '@/components/Register';

export default function Team() {
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
      <MemberList></MemberList>
    </div>
  );
}
