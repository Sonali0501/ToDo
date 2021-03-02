import React from 'react';

const Card = ({title,data}) => {
    
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="items">
                {data.map(i => {
                    return <p className={title==='Done' ? "item done" : "item"} key={i.task}>{i.task}</p>
                })}
            </div>
        </div>
    );
}

export default Card;