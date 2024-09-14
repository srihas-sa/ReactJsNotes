import { useState } from "react"

function Login() {
  let [task,setTask]=useState("");
  let [date,setDate]=useState("");
  let [index,setIndex]=useState(0);
  let [list,setList]=useState([]);


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

  const DeleteButton = (index)=>{
    setList(
      list.filter((each)=> each.index!==index)
    )
  }



  return (
    <div>
      <center>
        <input type="text" placeholder="ENter Todo Here" value={task} onChange={handleTodoChange} style={{margin:5}}/>
        <input type="date" value={date} onChange={handleDateChange} style={{margin:5}}/>
        <button onClick={AddButtonClciked}>Add</button>
        <h1>List of Tasks added</h1>
        <div>
          {list.length>0?(list.map((each) => (
            <div key={each.index}>
              <h1>
                Task Name:{each.task} <span style={{color:"red"}}>,</span>
                Date:{each.date}
              </h1>
              <button onClick={()=>DeleteButton(each.index)}>Delete</button>

            </div>
          )) ): <h1>No Tasks Added Please Add</h1>}
        </div>
      </center>
    </div>
  )
}

export default Login;
