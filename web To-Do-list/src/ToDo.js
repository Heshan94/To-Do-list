


import React from 'react';
import './App.css';

function ToDo(props){
    
    const completedStyle={
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration:"line-through"
    }
        return(
            <div className="do-items">
                <input 
                    type="checkbox"
                    checked={props.item.completed} 
                    onChange={()=>props.handleChange(props.item.id)}
                />
                <p style={props.item.completed?completedStyle:null}>{props.item.text}</p>
            </div>
        )
}
    


export default ToDo;














// import React from 'react';
// import './App.css';
 

// function ToDo(props){
//     return(
//         <div className="do-items">
//             <input type="checkbox" checked={props.item.completed} onChange={()=>console.log("Hello")}/>
//             <p>{props.item.text}</p>
            
//         </div>
//     );
// }

// export default ToDo;