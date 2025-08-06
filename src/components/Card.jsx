import React from 'react'

const Card = ({ imgURL, title, desc, btnN, btnURL }) => {
    //解構 =>把元件得到的參數給props，再逐一解構出來使用
    // const { imgURL, title, desc, btnN, btnURL } = props;


    return (
        <div className="card">
            <img src={imgURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={btnURL} className="btn">{btnN}</a>
            </div>
        </div>
    )
}

export default Card