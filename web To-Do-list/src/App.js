
import React ,{Component} from 'react';
import toDoData from './toDoData';
import ToDo from './ToDo';
import './App.css'

class App extends Component{

  constructor(){
    super();
    this.state={
                toDos:toDoData
                }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState((prev)=>{
                          const updatedState=prev.toDos.map((toDoItem)=>{
                              if(toDoItem.id===id){
                                toDoItem.completed= !toDoItem.completed;
                              }
                          return toDoItem
                          });

           return{
            toDos:updatedState
          }  
    });
  }
 
  render(){
    const components=toDoData.map((item)=>{
                  return (<ToDo id={item.id} item={item} handleChange={this.handleChange}/>);
                });

  
    return(
      <div className="do-list">  
        {components}
      </div>  
    );            
  
  }


}


export default App;







