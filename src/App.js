import React, { useState } from 'react';
//import List from './List';
//import data from './data';
import CustomCalendar from './Calendar';
import api from "./api.json";


function App(){
   
  //const[people,setPeople] = useState(api);
  
  
    
  return (
    <main>
     <section className="container">
       <h3>{api.length} birthday this month</h3>
      <CustomCalendar/>
  </section> 
  </main>
  )
}
// 
//  function Today(person){
//    let currentDay  = new Date().getDate();
//    let currentMonth  = new Date().getMonth();
   
//    let filter = person.filter(data =>{
//     let day = new Date(data.birthday).getDate();
//     let month  = new Date(data.birthday).getMonth();
//     return currentDay===day&&currentMonth===month
//   })
//   return filter;
// }



export default App;