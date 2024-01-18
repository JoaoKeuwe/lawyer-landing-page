import React from 'react'
import "./style.css"

const Cards = ({ img, title, text }) => {
    return (
        <div className='card'>
            <img src={img} alt="" />
            <p className='title'>{title}</p>
            <p className='text'>{text}</p>
            <p className='read-more'>Ler Mais</p>

        </div>
    )
}

export default Cards