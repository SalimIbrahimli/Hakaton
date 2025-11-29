import sqlite3

conn = sqlite3.connect("mydatabase.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    age INTEGER
)
""")

conn.commit()
conn.close()
import sqlite3

conn = sqlite3.connect("mydatabase.db")
cursor = conn.cursor()

cursor.execute("""
INSERT INTO users (name, email, age)
VALUES (?, ?, ?)
""", ("Imran", "test@example.com", 20))

conn.commit()
conn.close()
import sqlite3

conn = sqlite3.connect("mydatabase.db")
cursor = conn.cursor()

cursor.execute("SELECT * FROM users")
data = cursor.fetchall()

for row in data:
    print(row)

conn.close()
conn = sqlite3.connect("mydatabase.db")
cursor = conn.cursor()

cursor.execute("""
UPDATE users SET age = ? WHERE id = ?
""", (25, 1))

conn.commit()
conn.close()
conn = sqlite3.connect("mydatabase.db")
cursor = conn.cursor()

cursor.execute("DELETE FROM users WHERE id = ?", (1,))
conn.commit()
conn.close()