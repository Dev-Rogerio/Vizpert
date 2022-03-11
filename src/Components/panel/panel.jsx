import React, { useState } from 'react';


import './panel.css';

const Panel = (props) => {  

    const organizarAZ = () => {
        let newbooks = Array.from(props.books)
        newbooks.sort((a,b)=> a.name - b.name)
        if(newbooks.every((a,i)=> a=== props.books[i])) newbooks.reverse()
        props.setBooks(newbooks)
        
    }
    const organizarCor=() => {
        let newbooks = Array.from(props.books)
        newbooks.sort((a, b) => a.colorValue - b.colorValue)
        if (newbooks.every((a, i) => a === props.books[i])) newbooks.reverse()
        props.setBooks(newbooks)

    }

    return (
        <>
            <div className='panel'>
                <div className='sortby'>SORT - BY</div>
                <button className='A-Z' onClick={organizarAZ}><li>A</li><li>Z</li></button>
                <button className='bookcolor' onClick={organizarCor}> 
                    <header className="red"></header>
                    <section className='yellow'></section>
                    <main className='green'></main>
                    <footer className='purple'></footer>
                </button>
                <button className='battery'>
                    <header className='icon1'></header>
                    <section className='icon2'></section>
                </button>
                <div className='division'></div>
                <button className='button'>ORGANIZE</button>                
            </div>

        </>
    );
}
export default Panel;