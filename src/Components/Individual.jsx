function Individual({index,handleevent}) {
  return ( 
  <div key={index}>
              
    <button onClick={handleevent}>{index}</button>
  </div>
  )
}

export default Individual;