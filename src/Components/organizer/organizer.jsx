import React, { useState } from 'react';


import Panel from '../panel/panel.jsx';
import Shelf from '../shelf/shelf';

import './organizer.css';


function Organizer (props) {
    const [books, setBooks] = useState([
        {
            name: 'a',
            color: 'yellow',
            size: 1,
            colorValue: 5 
        },
        {
            name: 'b',
            color: 'red',
            size: 2,
             colorValue: 4
        },
        {
            name: 'c',
            color: 'orange',
            size: 3,
            colorValue: 3
        },
        {
            name: 'd',
            color: 'lilac',
            size: 4,
            colorValue: 2
        },

        {
            name: 'e',
            color: 'lightblue',
            size: 5,
            colorValue: 1
        },
        {
            name: 'f',
            color: 'pink',
            size: 6,
            colorValue: 6 

        },
        {
            name: 'g',
            color: 'green',
            size: 7,
            colorValue: 7
        },
        {
            name: 'h',
            color: 'darkblue',
            size: 8,
            colorValue: 9
        },
        {
            name: 'i',
            color: 'lightpink',
            size: 9,
            colorValue: 8
        },


    ]);
    return(
        <>
            <Shelf  books={books} />
            <Panel books={books} setBooks={setBooks} />
        </>
    )
} 
export default Organizer;