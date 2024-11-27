// src/lib/db/users.ts
import { sql } from '@vercel/postgres';
import { User } from '@/types/user';

export async function getUsers() {
  try {
    const { rows } = await sql`SELECT * FROM users ORDER BY created_at DESC`;
    return { users: rows as User[], error: null };
  } catch (error) {
    return { users: null, error: 'Failed to fetch users' };
  }
}

export async function getUserById(id: string) {
  try {
    const { rows } = await sql`SELECT * FROM users WHERE id = ${id}`;
    return { user: rows[0] as User, error: null };
  } catch (error) {
    return { user: null, error: 'Failed to fetch user' };
  }
}

export async function createUser(user: Omit<User, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { rows } = await sql`
      INSERT INTO users (email, name, role)
      VALUES (${user.email}, ${user.name}, ${user.role})
      RETURNING *
    `;
    return { user: rows[0] as User, error: null };
  } catch (error) {
    return { user: null, error: 'Failed to create user' };
  }
}

export async function updateUser(id: string, user: Partial<User>) {
  try {
    const { rows } = await sql`
      UPDATE users 
      SET email = ${user.email}, 
          name = ${user.name}, 
          role = ${user.role}
      WHERE id = ${id}
      RETURNING *
    `;
    return { user: rows[0] as User, error: null };
  } catch (error) {
    return { user: null, error: 'Failed to update user' };
  }
}

export async function deleteUser(id: string) {
  try {
    await sql`DELETE FROM users WHERE id = ${id}`;
    return { error: null };
  } catch (error) {
    return { error: 'Failed to delete user' };
  }
}