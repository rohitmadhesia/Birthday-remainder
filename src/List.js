import React from "react";

  function List({api}){
     return (
     <> 
     {api.map((person) =>{
         
      const {id,name,birthday,image} = person;
           return (
            <article key={id} className="person">
              <img src={image} alt={name}/>
                <div>
                  <h3>{name}</h3>
                  <p>{birthday}</p>
                </div>
            </article>
           )
     })}

     </> 
     )
  }

  // function old(personAge){
  //   console.log(personAge)
  //   let year = new Date(personAge).getFullYear();
  //   let currentYear = new Date().getFullYear();
     
  //   let age  = currentYear - year;
  //   return age;
  // }

  export default List;