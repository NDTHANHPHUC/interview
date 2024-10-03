import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open the database connection
export async function openDb() {
  return open({
    filename: './kanban.db',
    driver: sqlite3.Database,
  });
}

// Initialize the tickets table
export async function initializeDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tickets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT NOT NULL
    );
  `);
  await db.close();
}
