import mysql from "mysql2"

const pool = mysql
.createPool({
    host:"b97etucug5bujwiwkkqv-mysql.services.clever-cloud.com",
    user:"u4ixajtsyvctifzc",
    password:"QrPF4ae7moZy24TSQFm1",
    database:"b97etucug5bujwiwkkqv",
    port:"3306"
}).promise();

//GET TASK
export async function getAllTask() {
    const [row] = await pool.query("SELECT * FROM tasksqlite ORDER BY date ASC")
    return row;
}

export async function getTaskById(id) {
    const [row] = await pool.query("SELECT * FROM tasksqlite WHERE id = ?", [id])
    return row[0];
}

//INSERT TASK

export async function InsertTask(matter,date, title, description) {
    
    const [result] = await pool.query("INSERT INTO tasksqlite (Matter, Date, Title, Description) VALUES (?, ?, ? , ?)", [matter,date.replaceAll("-","/"),title,description])
    return result.insertId;
}

//UPDATE TASK

export async function UpdateTask(matter,date, title, description,id) {
    const [result] = await pool.query("UPDATE tasksqlite SET Matter = ? , Date = ? , Title = ? , Description = ? WHERE id = ?", [matter,date.replaceAll("-","/"),title,description,id])
    return result;
}

// DELETE TASK
export async function DeleteTask(id) {
    const [result] = await pool.query("DELETE FROM tasksqlite WHERE id = ?", [id])
    return result;
}

DeleteTask(1);