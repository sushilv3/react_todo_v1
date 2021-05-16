import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from './List';

const ToDoList = ()=>{

    const[item,setItem] = useState("");

    const [newItem, setNewItem] = useState([]);

    const itemEvent =(event)=>{

        setItem(event.target.value);

    };

    const addItem = ()=>{

        setNewItem((prevValue)=>{return [...prevValue,item]});
        setItem("");

    };

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List</h1>
                    <br />

                    <input type="text" value={item} placeholder="add an item" onChange={itemEvent}/>
                    <Button className="newBtn" onClick={addItem} ><AddCircleIcon /></Button>

                    <br />
                    <ol>
                        
                      {  newItem.map((value, index)=>{
                            return <List key={index} text={value} />;
                        })
                    }
                    </ol>
                    <br />
                </div>
            </div>
        </>

    );

};
export default ToDoList;