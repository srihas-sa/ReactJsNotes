const IndividualTask= ({data,DeleteButton})=> {
  return (
    <div key={data.index}>
              <h1>
                Task Name:{data.task} <span style={{color:"red"}}>,</span>
                Date:{data.date}
              </h1>
              <button onClick={()=>DeleteButton(data.index)}>Delete</button>

            </div>
  )
}

export default IndividualTask;