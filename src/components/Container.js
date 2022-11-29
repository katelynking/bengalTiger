import React, { Component } from "react";


import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";




export default function Container() {
  return (
    <span className='sidePanel'>
      <br/>

        <a href='#home'><h2>BENGAL TIGER</h2></a>
        <br/>
        <br/>
        <br/>

<ul>
      <li> 
      <a href='#classification'>CLASSIFICATION</a>
      </li>
      <br/>
       <li>
        <a href='#formation'> BODY FORMATION</a>
        </li>
       <br/>

       <li>
       <a href='#habitat'> HABITAT</a>
       </li>
       <br/>

       <li>
       <a href='#diet'>DIET</a>
       </li>
       <br/>

       <li>
       <a href='#reprod'>REPRODUCTION</a>
       </li>
       <br/>

       <li>
       <a href='#lifespan'>LIFE SPAN</a>
       </li>
       <br/>

       <li>
       <a href='#funfacts'>FUN FACTS</a>
       </li>
       <br/>

       <li>
       <a href='#econimp'>ECONOMICAL IMPORTANCE</a>
       </li>
       <br/>

       <li>
       <a href='#sources'><i>The end</i></a>
       </li>
       </ul>
    </span>


    

  );
  
    // const [currentPage, setCurrentPage] = useState("Home");

  
    // const renderPage = () => {
    //   if (currentPage === "Home") {
    //     return <Home />;
    //   }
    //   if (currentPage === "Classification") {
    //     return <Classification />;
    //   }
    //   if (currentPage === "Formation") {
    //     return <Formation />;
    //   }
    //   if (currentPage === "Habitat") {
    //     return <Habitat />;
    //   }
    //   if (currentPage === "Diet") {
    //     return <Diet />;
    //   }
    //   if (currentPage === "Reprod") {
    //     return <Reprod />;
    //   }
    //   if (currentPage === "LifeSpan") {
    //     return <LifeSpan />;
    //   }
    //   if (currentPage === "FunFacts") {
    //     return <FunFacts />;
    //   }
    //   if (currentPage === "EconImp") {
    //     return <EconImp />;
    //   }

    // };
  
    // const handlePageChange = (page) => setCurrentPage(page);

  
}

