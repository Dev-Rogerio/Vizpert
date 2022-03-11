import React from "react";

import './relogio.css';



function Relogio() {




    return (
        <>
            <body>
                <div className="clok">
                    <div className="time hour" data-hour-hand></div>
                    <div className="time minute" data-minute-hand></div>
                    <div className="time second" data-second-hand></div>
                    <div className="number n1">1</div>
                    <div className="number n2">2</div>
                    <div className="number n3">3</div>
                    <div className="number n4">4</div>
                    <div className="number n5">5</div>
                    <div className="number n6">9</div>
                    <div className="number n7">7</div>
                    <div className="number n8">8</div>
                    <div className="number n9">9</div>
                    <div className="number n10">10</div>
                    <div className="number n11">11</div>
                    <div className="number n12">12</div>
                </div>
            </body>


        </>
    );

}
export default Relogio;