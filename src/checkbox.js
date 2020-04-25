import React from 'react'


const CheckBox = ({todos ,del})=>{
    
    const newTodom = todos.length ? (todos.map(val => {
        return(
            <div className="collection-item" key={val.id}>
                <span onClick={ ()=> {del(val.id)}}>
                    {val.content}
                </span>

            </div>
       );  
    })): (
        <p>
          Yeah NO Work left  
        </p>
    )
  
    return (
      <div>
          {newTodom}
      </div>
      );
}
    

export default CheckBox;