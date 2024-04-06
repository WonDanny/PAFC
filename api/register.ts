'use server';

import {db} from '@/db/db';
import * as t from '@/db/schema';
import {eq} from 'drizzle-orm/mysql-core/expressions';
import {revalidatePath} from 'next/cache';

export async function insertUser(formData: any) {
  try {
    // await db.insert(t.user).values({
    //   user_name: formData.get('user_name'),
    //   gender: formData.get('gender'),
    //   age: formData.get('age'),
    //   position: formData.get('position'),
    //   phone_number: formData.get('phone_number')
    // }); // Use `returning` to retrieve the ID

    // const userId = (await db.select().from(t.user)).length + 1;

    // // Insert team user data using the retrieved ID
    // await db.insert(t.teamUsers).values({
    //   teamId: 1,
    //   userId // Use the fetched ID here
    // });

    const datas = await db.select({user_id: t.user.id, user_name: t.user.user_name, gender: t.user.gender, age: t.user.age, position: t.user.position, phone_number: t.user.phone_number}).from(t.teamUsers).leftJoin(t.user, eq(t.teamUsers.userId, t.user.id));
    console.log(datas);

    console.log('User and team user data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
  revalidatePath('/');
}
