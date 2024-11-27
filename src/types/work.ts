// src/types/work.ts
export interface WorkItem {
    id: string;          // 数据库主键
    title: string;       // 作品标题
    description: string; // 作品描述
    category: string;
    image_url: string;   // Vercel Storage 中的图片 URL
    trade: string;       // 对应的工种类型 (carpenter, electrician, plumber, hvac)
    created_at: Date;    // 创建时间
    updated_at: Date;    // 更新时间
  }