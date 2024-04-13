'use server';

import prisma from '@/db/db';

export async function insertUser(formData: any) {
  // 첫 번째 테이블에 데이터 삽입
  const user = await prisma.user.create({
    data: formData
  });

  // 두 번째 테이블에 데이터 삽입, 첫 번째 테이블에서 생성된 사용자 ID 참조
  const post = await prisma.teamUser.create({
    data: {
      user_id: user.id,
      team_id: 1
    }
  });
}
