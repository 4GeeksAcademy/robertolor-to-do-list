import React, { useState } from "react";

const Container = () => {
    /* form */
    const [description, setDescription] = useState("");
    const [listItems, setListItems] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const keyPress = (e) => {
        if (e.key === "Enter" && description.length > 0) {
            setListItems([...listItems, description]);
            setDescription("");
        }
    };

    

    const addListItem = () => {
        if (description.length > 0) {
            setListItems([...listItems, description]);
            setDescription("");
        }
    };

    const eraseItem = (indexToRemove) => {
        setListItems(listItems.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="container mt-4 ">
            <div>
                <h1 className="title">To Do List</h1>
            </div>
            <div >
                <div className="card input-container">
                    <input type="text"
                        className="input-custom" value={description} onChange={(e) => setDescription(e.target.value)}
                        onKeyPress={keyPress} placeholder="Write a new task" />
                    <button className="btn1" disabled={!description} onClick={addListItem}>
                        Add Task
                    </button>
                </div>
            </div>
            <div className="list d-flex">
                {listItems.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="card d-flex flex-column align-items-center justify-content-around mb-1 card-style"
                    >
                           <div className="row d-flex align-items-left flex-wrap justify-content-between"> 
                            <p className="text d-inline-flex">{item}</p>
                            {hoveredIndex === index && (
                               
                                    <button className="clear-button" onClick={() => eraseItem(index)} >
                                        X
                                    </button>
                                
                            )}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Container;