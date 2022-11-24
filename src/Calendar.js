import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import List from './List';
import data from "./data";
import api from "./api.json";


const CustomCalendar = () => {
    const [date, setDate] = useState("");
  //  const[people,setPeople] = useState(data)
   const [people, setPeople] = useState([]);

   //console.log(people)
    // const onChange = (event) => {    
    //     console.log(event)
    // }
    

    function today(val, ev){
            let currentDay  = val.getDate();
            let currentMonth  = val.getMonth();
           
           let filter = api.filter(data =>{
            console.log(data);
             let day = new Date(data.birthday).getDate();
             let month  = new Date(data.birthday).getMonth();
             console.log(currentDay);
             console.log(currentMonth);
             console.log(day);
             console.log(month);
             return currentDay===day&&currentMonth===month
           })
            setPeople(filter)
            return filter
         }
    
    return <div>
      
        <Calendar 
                  onChange = {today}
                  value = {date}
                   />       
                   <br/>
                <List api={people}/>
                {/* <button onClick={()=> {
                 setPeople([])
              }}>Clear all</button> */}
            </div> 
};


export default CustomCalendar;