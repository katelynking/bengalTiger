import React from "react";
import ung from "../img/ungulates.png";

export default function Diet() {
    return (
<section id='diet'>
<span className='infoPage'>
    <h1>DIET</h1>
    <p>
        Bengal tigers are <b>carnivores</b>.<br/>
        They prey on ungulates (deer, antelope), gaurs (bison), and wild boars.<br/>
        These tigers can consume up to 100 lbs. of meat in one sitting.<br/>
        However, since 1 in 20 hunts are successful, they <br/>
        average around one meal per week. <br/><br/>
<img src={ung} className='ung' alt='Ungulate cartoons'></img>
<br/><br/><br/>
Their favorite is deer.
    </p>



</span>
</section>
    );
}