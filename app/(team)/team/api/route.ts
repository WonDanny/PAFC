import executeQuery from '@/db/_db';
import {NextResponse} from 'next/server';
export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET() {
  const sql = `
    SELECT b.id
         , b.user_name
         , b.age
         , b.gender
         , b.phone_number
         , b.position
    FROM team_user a
    LEFT JOIN user b ON a.team_id = 1
                    AND b.id      = a.user_id`;
  const data = await executeQuery(sql, '');

  return NextResponse.json({data});
}
