import React from 'react';
import {Link} from 'react-router-dom';
const MyNav = () => {
    return ( 
        <div>
             <nav className="MyNav">
                <Link href="#home">Home</Link>
                <Link href="#about">AboutUs</Link>
                <Link href="#parent">ParentalControls</Link>
                <Link href="#chatbot">ChatBot</Link>
                <Link href="#feedback">Feedback</Link>
             </nav>

        </div>
  
     );
}
 
export default MyNav;