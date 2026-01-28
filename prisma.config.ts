import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';

dotenv.config(); // Nạp các biến từ file .env vào process.env

export default defineConfig({
    schema: './prisma/schema.prisma',
    datasource: {
        url: process.env.DATABASE_URL,
    },
});