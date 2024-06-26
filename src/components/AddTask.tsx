import React from "react";
import "./AddTask.css"
import { useRecoilState, useRecoilValue } from "recoil";
import { addTitleState, addTitleStateLength } from "../states/addTitleState";
import RemoveTask from "./RemoveTask";


// const removeTask = (task) => {
//   const addTitle =useRecoilValue(addTitleState)
//   const [addTitle,setAddtitle] = useRecoilState(addTitleState)

//   console.log(task.id)
//   const newTodoTitle =[...addTitle]
//   newTodoTitle.splice(index,1)
// setAddTitle(newTodoTitle)
// };

const AddTask = () => {

  const addTitle =useRecoilValue(addTitleState)
  const addTitleLength =useRecoilValue(addTitleStateLength)


return <div className="taskField">
  <div>{addTitleLength}個のタスクがあります</div>
  <ul>
    {addTitle.map((task)=>(
      <li key={task.id}>{task.title} <button className="deleteButton" onClick={() => removeTask(task)}>削除</button></li>
    ))}
  </ul>
</div>;
};

export default AddTask;
