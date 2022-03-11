import React, { useEffect, useState } from 'react'


import './shelf.css';


function Shelf(props) {
  

    return (
        <>
            <div className="shelf">
                <div className='darkColors'></div>
                <div className='shelfone'>
                    <div className='librarybook1'>
                        {props.books.map(function (item, index) {                            
                            return <main key={index} 

                             className={'book-' + item.color} value={item.name}>                                 
                                 <div className={'name-' + item.color}>{item.name}</div>
                                 
                                 <div className={'cover-' + item.color}>
                                     <div className={'detail-' + item.color}>
                                     </div></div></main>
                        })}
                    </div>
                </div>

                <div className='shelftwo'>
                    <div className='librarybook2'></div>
                </div>

            </div>

        </>
    );
}
export default Shelf;