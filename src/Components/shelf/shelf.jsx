import React, { useEffect, useState } from 'react'


import './shelf.css';


function Shelf(props) {
    const [books, setBooks] = useState ([...props.books])
    useEffect(()=> {
        setBooks(props.books)

    }, [props.books])

    return (
        <>
            <div className="shelf">
                <div className='darkColors'></div>
                <div className='shelfone'>
                    <div className='librarybook1'>
                        {books.map(function (item, index) {
                            return <main key={index} onClick={()=> console.log(props.books)} className={'book-' + item.color} value={item.name}><div className={'name-' + item.color}>{item.name}</div><div className={'cover-' + item.color}><div className={'detail-' + item.color}></div></div></main>
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