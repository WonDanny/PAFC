import { NextPage } from "next";



const TEAM_INFO = {
    id: 1,
    name: '평안FC',
    headCoach: '장시만',
    teamRank: '하하하',
    members: [
        {id: 1, name: '이승주', pos: 'LW', age: 33},
        {id: 2, name: '원승대', pos: 'RB', age: 33},
    ]
}

const Teams: NextPage = (props: any) => {
    const {} = props;

    return (
        <div className="w-[1200px] h-auto p-10 bg-B300">
            {/* 팀 소개 */}
            <div className="flex justify-between">
                <div className="flex items-center justify-center w-52 h-52 bg-white">
                    <p className="text-black text-lg">팀 프로필 사진</p>
                </div>
                
                <div className="">
                    <p className="text-white">{`팀 명: ${TEAM_INFO.name}`}</p>
                    <p className="text-white">{`팀 원: ${TEAM_INFO.members.length}`}</p>
                    <p className="text-white">{`감독: ${TEAM_INFO.headCoach}`}</p>
                    <p className="text-white">{`팀 랭크: ${TEAM_INFO.teamRank}`}</p>
                </div>
            </div>
            
            {/* 가로 선 */}
            <div className="w-full h-px bg-BD"/>
            {/* 팀원 프로필 */}

        </div>
    );
};

export default Teams;