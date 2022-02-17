import React, { useState } from 'react';


import './panel.css';



const Panel = (props) => {


   

    const organizarAZ = () => {
        let newbooks = props.books.sort((a,b)=>a.name > b.name) 
       if(newbooks === props.books){
           newbooks.reverse()
           
       }
       props.setBooks(newbooks)
        
    }

    return (
        <>
            <div className='panel'>
                <div className='sortby'>SORT - BY</div>
                <button className='A-Z' onClick={organizarAZ}><li>A</li><li>Z</li></button>
                <button className='bookcolor'>
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