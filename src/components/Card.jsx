import React from "react"

export const Card = ({id, name, image}) => {
    return (
        <section style={{height: 200}} className="card">
            <img 
                src={image} 
                key={id} 
                alt={name}
                style={{width: '100%', height: 150, objectFit: 'cover'}}
            />
            <div className="card-body">
                <h6 className="card-title">{name}</h6>
            </div>
        </section>
    )
}