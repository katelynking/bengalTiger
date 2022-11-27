import React, { Component } from "react";
// import bodyForm from "./pages/bodyForm";
// import home from "./pages/home";
// import location from "./pages/location";
// import diet from "./pages/diet";
// import Contarect from "./pages/Contact";

import tiger from "./img/bengal-tiger-b.jpg";


export default function Container() {
//   const [currentPage, setCurrentPage] = useState("home");

  
//   const renderPage = () => {
//     if (currentPage === "home") {
//       return <Home />;
//     }
//     if (currentPage === "bodyForm") {
//       return <About />;
//     }
//     if (currentPage === "Projects") {
//       return <Projects />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <ul className="nav">
//         <li className="nav-item">
//           <a href="#home"
//           onClick={() => handlePageChange('Home')}
//           className={currentPage === 'Home'}>
//             <img src={crown} alt="crown logo" className="crown"></img>
//           </a>
//         </li>
//       </ul>

      
//       <div className='row'>
//       <div className='col-xxl-6'>
//       <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//       </div>
//       <div className='col-xxl-6'>
//       {renderPage()}
//       </div>
//       </div>
      
      

//       <div className="footer">
//         <a
//           target="_blank"
//           rel="noreferrer"
//           href="https://www.linkedin.com/in/katelyn-king112/"
//         >
//           linked in{" "}
//         </a>
//         •
//         <a
//           target="_blank"
//           rel="noreferrer"
//           href="https://github.com/katelynking"
//         >
//           {" "}
//           github{" "}
//         </a>
//         •<a href="mailto:katelynking112@gmail.com"> email </a>•
//         <a 
//           target="_blank"
//           rel="noreferrer"
//           href={resume}> resume </a>
//       </div>
//     </div>
//   );
// }

return (
<div className="row">
    <figure>
   <img src={tiger} alt="Bengal Tiger"></img>
<figcaption className="heading">
    <span>
    <span>BEN</span><span>GAL</span><br/>
    <span>TIG</span><span>ER</span>
    </span>
    
</figcaption>

<figcaption className="names">
    <span>
    Katelyn</span> <span>King</span>  <br/>
    <span>Jhanvi</span> <span>Patel</span> 
</figcaption>

<figcaption className="bio">
    <span>Biology</span> <span>II</span><br/>
    <span>Professor</span> <span>Manar</span> <span>Soliman</span>
</figcaption>
</figure>

</div>
    
);
}