// src/types/user.ts
export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'user';
    created_at: Date;
    updated_at: Date;
  }