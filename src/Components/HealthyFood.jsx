import { useState } from "react";
import IndividualFood from "./IndividualFood";
import ErrorMessage from "./ErrorMessage";
function HealthyFood() {

  let [FoodItemList,setFoodItemList]=useState([]);

  const handleInputChange = (event)=> {
    if(event.key==="Enter"){
      let newArray={
        value:event.target.value,
        background:false
      }
      setFoodItemList([...FoodItemList,newArray]);

      event.target.value="";
    }
  }

  const BuyItem = (itemname)=> {
    let updatedArray=FoodItemList.filter((each)=> each.value!==itemname);
    setFoodItemList(updatedArray);
  }

  const ChangeBackgroundColor = (value) => { 
    const updatedArray = FoodItemList.map((each) => {
      if (each.value === value) {
        
        // Create a new object with updated background property
        return { ...each,  background: !each.background };
      }
      return each; // Return item unchanged if it doesn't match
    });
    console.log(updatedArray);
    setFoodItemList(updatedArray); 
}

  

  return(
    <div>
      <h1>Healthy Food</h1>
      <input type="text" onKeyDown={handleInputChange} placeholder="Enter Food Item"  />

      {FoodItemList.length > 0 ? FoodItemList.map((each)=> 
      <IndividualFood 
      eachItem={each} 
      BuyItem={()=>BuyItem(each.value)} ChangeBackgroundColor={()=>ChangeBackgroundColor(each.value)}></IndividualFood>)
      : <ErrorMessage> Please Add Item</ErrorMessage>}
      
      

    </div>
  )
}

export default HealthyFood;