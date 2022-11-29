import React from "react";
import tig from "../img/tiger.png";
import leftF from "../img/flowers-l.png";
import rightF from "../img/flowers-r.png";

export default function Classification() {
    return (
<section id='classification'>
  
<span className='infoPage'>
<h1>CLASSIFICATION</h1>
<br/>
<p>
    
Domain: Eukarya <br/>
Kingdom: Animalia <br/>
Phylum: Chordata<br/>
Class: Mammalia<br/>
Order: Carnivora<br/>
Family: Felidae<br/>
Genus Species: <i>Panthera tigris</i><br/><br/>
<img src={leftF} className='flowers'></img><img src={tig} alt='Tiger'></img><img src={rightF} className='flowers'></img>
<br/>
</p>

</span>
</section>
    );
}