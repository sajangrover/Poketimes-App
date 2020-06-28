import React from 'react';
const Rainbow = (WrappedComponents) =>{

    const colors = ['red','pink','green','yellow','lime','cyan','blue','orange'];
    const randomcolor = colors[Math.floor(Math.random() * 7)];
    const classname = randomcolor +"-text";

    return(props)=>{
        return(
            <div className ={classname}>
                <WrappedComponents {...props}/>
            </div>
        )
    }
}
export default Rainbow