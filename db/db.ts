import {createPool} from 'mysql2/promise';

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3333,
  waitForConnections: true
});

export const executeQuery = async <T>(sql: string): Promise<{data: T[]; error: string | null}> => {
  try {
    console.log('Begin Query :\n', sql);
    const [rows] = await pool.query(sql);
    return {data: rows as T[], error: null};
  } catch (error: any) {
    return {data: [], error: error.message};
  }
};

// 다중 순차 실행 쿼리 함수(트랜잭션)
export async function executeTransaction(queries: string[]): Promise<{success: boolean; data?: any; error?: string}> {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    console.log('Begin Transaction');

    for (let idx = 0; idx < queries.length; idx++) {
      const query = queries[idx];
      console.log(`Execute Query ${idx + 1}: ${query}`);
      await conn.query(query);
    }

    await conn.commit();
    console.log('Transaction committed successfully');
    return {
      success: true,
      data: null // 성공 시 반환할 데이터 설정 (선택사항)
    };
  } catch (error) {
    console.error('Transaction failed:', error);
    await conn.rollback();

    return {
      success: false,
      error: String(error) // 오류 메시지 설정
    };
  } finally {
    await conn.release();
  }
}
