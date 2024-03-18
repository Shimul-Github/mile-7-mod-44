// import React from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";

import Link from "../Link/Link";
import { useState } from 'react';

const Navbar = () => {
    const [open,setOpen] = useState(false)

    const routes = [
        { path: "/home", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/products", name: "Products", id: 3 },
        { path: "/contact", name: "Contact", id: 4 },
        { path: "/services", name: "Services", id: 5 }
      ];
      

    
    return (

        
        <nav className='text-black p-6'>
            <div className='md:hidden text-2xl bg-yellow-200 '  onClick={()=>setOpen(!open)}>
                {
                    open === true ? <RxCross2></RxCross2>:<IoMenuOutline className=''></IoMenuOutline>
                    
                }

                {/* amra navar symbol ta medium device theke large device porjonto hidden dekhabo aar small device er jonno show korbo */}
            
            </div>


           <ul className={`md:flex  duration-1000 absolute md:static bg-yellow-200 pl-8  
        
        ${open ? 'top-12':'-top-60'} 
           `}>
             {/* ${open ? '':'hidden'} */}
            
           {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
           </ul>
            
        </nav>
    );
};

export default Navbar;