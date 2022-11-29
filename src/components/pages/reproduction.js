import React from "react";
import cub from "../img/bengal-tiger-cub.jpeg";


export default function Reproduction() {
    return (
<section id='reprod'>
<span className='infoPage'>
<h1>REPRODUCTION</h1>
<p>
Female Bengal tigers reach sexual maturity around 3-4 years old,<br/> while males reach it at about 4-5 years old.<br/><br/>
Their pregnancies lasts for 98-110 days<br/>
with 2-6 cubs per litter.<br/>
<img className="cub centered" src={cub} alt="Bengal Tiger and Cub"></img>
</p>



</span>
</section>
    );
}