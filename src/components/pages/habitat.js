import React from "react";
import map from "../img/map.png";

export default function Habitat() {
    return (
<section id='habitat'>
    
<span className='infoPage'>
<h1>HABITAT</h1>
<p>
They are found primarily in India, Bangladesh, Nepal, Bhutan, and Myanmar.<br/>
<img src={map} alt='Population of Bengal Tigers on map' className='map'></img>
<br/>

Estimated populations of Bengal tigers in 2018:<br/>
2,603-3,346 in India <br/>
300-500 in Bangladesh<br/>
220-274 in Nepal <br/>
103 in Bhutan<br/><br/>

Tropical jungle, brush, marsh lands, <br/>
and tall grasslands<br/><br/>
Estimated to be present in Indian subcontinent <br/>
since Late Pleistocene <br/>
(for about 12,000 to 16,500 years)<br/>

</p>


</span>
</section>
    );
}