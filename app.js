import  express  from "express";
import { getAllTask, getTaskById,UpdateTask,DeleteTask, InsertTask } from "./database.js";


const app = express();
app.use(express.json());

//Obtiene todas las tareas
app.get("/AllTask",async (req,res)=>{
    const AllTasks = await getAllTask();
    res.status(200).send(AllTasks);
})
//Obtiene la tarea por id
app.get("/Task/:id",async (req,res)=>{
    const TaskId = await getTaskById(req.params.id);
    res.status(200).send(TaskId);
})
//Elimina tarea
app.get("/DeleteTask/:id",async (req,res)=>{
    await DeleteTask(req.params.id);
    res.send({message: "Tarea eliminada"});
})
//Insertar tarea 
app.get("/InsertTask/:matter/:date/:title/:description",async (req,res)=>{
    await InsertTask(req.params.matter,req.params.date,req.params.title,req.params.description)
    res.send({message: "Tarea Creada"});
})
//Actualizar tareas
app.get("/UpdateTask/:id/:matter/:date/:title/:description",async (req,res)=>{
    await UpdateTask(req.params.matter,req.params.date,req.params.title,req.params.description,req.params.id)
    
})

app.listen(8080,()=>{
    console.log("server start");
})