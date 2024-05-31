import { createContext } from "react";

const TaskContext = createContext({name:'High', value:10 }, 
{name:'MEDIUM', value:23 }, 
{name: 'LOW', value:11 }, );

export default TaskContext;