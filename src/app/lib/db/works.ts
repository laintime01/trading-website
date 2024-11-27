// src/lib/db/works.ts
import { sql } from '@vercel/postgres';
import { WorkItem } from '@/types/work';

export async function getWorks() {
  const { rows } = await sql`
    SELECT * FROM works ORDER BY created_at DESC
  `;
  return rows as WorkItem[];
}

export async function getWorksByTrade(trade: string) {
  const { rows } = await sql`
    SELECT * FROM works 
    WHERE trade = ${trade} 
    ORDER BY created_at DESC
  `;
  return rows as WorkItem[];
}

export async function createWork(work: Omit<WorkItem, 'id' | 'created_at' | 'updated_at'>) {
  const { rows } = await sql`
    INSERT INTO works (title, description, image_url, trade)
    VALUES (${work.title}, ${work.description}, ${work.image_url}, ${work.trade})
    RETURNING *
  `;
  return rows[0] as WorkItem;
}

export async function updateWork(
  id: string, 
  work: Partial<Omit<WorkItem, 'id' | 'created_at' | 'updated_at'>>
) {
  const updates = [];
  const values = [];
  let i = 1;

  for (const [key, value] of Object.entries(work)) {
    updates.push(`${key} = $${i}`);
    values.push(value);
    i++;
  }

  const { rows } = await sql`
    UPDATE works 
    SET ${updates.join(', ')}
    WHERE id = ${id}
    RETURNING *
  `;
  return rows[0] as WorkItem;
}

export async function deleteWork(id: string) {
  await sql`DELETE FROM works WHERE id = ${id}`;
}