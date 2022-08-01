import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    const db = await connect(
      process.env.DATABASE_URL || 'mongodb://localhost/27017'
    );
    console.log('DB is connected');
    return db;
  } catch (error) {
    console.error('DB connection failed', error);
    process.exit(1)
  }
}