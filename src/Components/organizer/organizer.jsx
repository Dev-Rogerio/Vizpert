import React, { useState } from 'react';


import Panel from '../panel/panel.jsx';
import Shelf from '../shelf/shelf';

import './organizer.css';


function Organizer (props) {
    const [books, setBooks] = useState([
        {
            name: 'a',
            color: 'yellow',
            size: 2
        },
        {
            name: 'b',
            color: 'red',
            size: 1
        },
        {
            name: 'c',
            color: 'orange',
            size: 3
        },
        {
            name: 'd',
            color: 'lilac',
            size: 4
        },

        {
            name: 'e',
            color: 'lightblue',
            size: 5
        },
        {
            name: 'f',
            color: 'pink',
            size: 6
        },
        {
            name: 'g',
            color: 'green',
            size: 7
        },
        {
            name: 'h',
            color: 'darkblue',
            size: 8
        },
        {
            name: 'i',
            color: 'lightpink',
            size: 5
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