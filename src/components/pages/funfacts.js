import React from "react";
import ind from "../img/india.png";
import bng from "../img/bangladesh.png";

export default function FunFacts() {
    return (
<section id='funfacts'>
<span className='infoPage'>
<h1>FUN FACTS</h1>
<p>
    World's 2nd largest tiger (after Siberian tiger)<br/><br/>
    Top speed: 60mph <br/><br/>
    National animal of India and Bangladesh<br/>
    <img src={ind} className='ind'></img><img src={bng} className='bng'></img>

</p>


</span>
</section>
    );
}