import './IndividualFood.css'

const IndividualFood = ({eachItem,BuyItem,ChangeBackgroundColor}) => {
  return (
    <center>
    <li key={eachItem.value}>
      

      
    <h1 className={eachItem.background ? "IndividualTask1" : "IndividualTask"}>
          {eachItem.value}
        </h1>
      {eachItem.background?<p>regreg</p>:<h1>No</h1>}
      <button onClick={BuyItem}>Buy</button>
      <button onClick={ChangeBackgroundColor}>
        Change COlor
      </button>
      

    </li>
    </center>
  )
}
export default IndividualFood;