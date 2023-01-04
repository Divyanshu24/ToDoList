import React, { useState }  from "react";
import ToDoList from "./ToDoList";

const App=()=>{

    const [inputList,setInputList]=useState("");
    const [items,setItems]=useState([]);
    const itemEvent=(event)=>{
       
        setInputList(event.target.value);
    };
    const listadd=()=>{
        setItems((olditems)=>{
            if(inputList!==""){
            return [...olditems,inputList];}
            else{
                alert("Please enter the item");
            }
        });
        setInputList("");
    };
    const deleteItems=(id) =>{
        setItems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                   return index !== id;
            });
        });
    };
    return (
        <>
        <div className="main_div">
            <div className="container">
                <br/>
                <h1>TO DO LIST</h1>
                <br/>
                <input type="text" placeholder="Add the item" value={inputList} onChange={itemEvent}/>
                <button onClick={listadd}>+</button>
                
                <ol>
                    {/* <li>{inputList}</li> */}
                   { items.map( (itemval, index)=>{
                        return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />;
                    })
                   }
                </ol>
            </div>
        </div>
        </>
    );
}
export default App;