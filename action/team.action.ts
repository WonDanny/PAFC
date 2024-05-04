'use server';

import {executeQuery, executeTransaction} from '@/db/db';
import {Member} from '@/app/(team)/interface/Member';
import {revalidatePath} from 'next/cache';

export async function searchUsers(): Promise<Member[]> {
  const query = `
    SELECT a.team_id
         , a.user_id
         , b.user_name
         , b.gender
         , b.age
         , b.phone_number
         , b.position
    FROM team_user a
    LEFT JOIN user b ON a.team_id = 1
                    AND b.id      = a.user_id;
  `;
  const result = await executeQuery<Member>(query);

  if (result.error) {
    throw new Error(result.error);
  } else {
    return JSON.parse(JSON.stringify(result));
  }
}

// 임시, 테스트용... 로그인 기능 구현 후 존재하는 사용자 등록하는 방식으로 바꿔야함.
export async function insertUser(formData: FormData) {
  let queries = [];

  const query1 = `
    INSERT INTO user 
      (user_name, gender, age, position, phone_number) 
    VALUE
      ('${formData.get('user_name')}', '${formData.get('gender')}', '${formData.get('age')}', '${formData.get('position')}', '${formData.get('phone_number')}'); 
  `;

  const query2 = `
    INSERT INTO team_user 
      (team_id, user_id) 
    VALUE
      (1, LAST_INSERT_ID());
  `;

  queries.push(query1);
  queries.push(query2);

  const result = await executeTransaction(queries);
  if (result.error) {
    throw new Error(result.error);
  } else {
    revalidatePath('/team');
  }
}

export async function updateUser(userId: number, formData: FormData) {
  const query = `
    UPDATE user
    SET user_name    = '${formData.get('user_name')}'
      , gender       = '${formData.get('gender')}'
      , age          = '${formData.get('age')}'
      , position     = '${formData.get('position')}'
      , phone_number = '${formData.get('phone_number')}'
    WHERE id = ${userId};
    `;

  const result = await executeQuery<Member>(query);
  if (result.error) {
    throw new Error(result.error);
  } else {
    revalidatePath('/team');
  }
}

export async function deleteUser(teamId: number, userId: number) {
  const query = `
    DELETE FROM team_user
    WHERE team_id = ${teamId}
      AND user_id = ${userId};
  `;

  const result = await executeQuery(query);
  if (result.error) {
    throw new Error(result.error);
  } else {
    revalidatePath('/team');
  }
}
