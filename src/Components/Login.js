import { useState } from "react";
import Calculator from "./Calculator";
import Individual from "./Individual";
import IndividualTask from "./IndividualTask";
import HealthyFood from "./HealthyFood";
function Login() {
  let [task,setTask]=useState("");
  let [date,setDate]=useState("");
  let [index,setIndex]=useState(0);
  let [list,setList]=useState([]);
  
  const li=[1,2,3,4,5,6,6,7,7,8];

  const handleTodoChange =(event)=>{
    setTask(event.target.value);
  }

  const handleDateChange =(event)=>{
    setDate(event.target.value);
  }

  const AddButtonClciked =() => {
    setList([...list,{task,date,index}]);
    setDate("");
    setTask("");
    setIndex(index+1);
  }
console.log(list);

  const DeleteButton = (index)=>{
    setList(
      list.filter((each)=> each.index!==index)
    )
  }



  return (
    <div>
      <h1>Project1</h1>
      <center>
        <input type="text" placeholder="ENter Todo Here" value={task} onChange={handleTodoChange} style={{margin:5}}/>
        <input type="date" value={date} onChange={handleDateChange} style={{margin:5}}/>
        <button onClick={AddButtonClciked}>Add</button>
        <h1>List of Tasks added</h1>
        
        <div>
          {list.length>0?(list.map((each) => (
            <IndividualTask data={each} DeleteButton={()=>DeleteButton(each.index)}>

            </IndividualTask>
            
          )) ): <h1>No Tasks Added Please Add</h1>}

          
        </div>
      </center>
      <h1 >Project2</h1>
      <center>

      
      <HealthyFood></HealthyFood>
      </center>
    </div>
  )
}

export default Login;