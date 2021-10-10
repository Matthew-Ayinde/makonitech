import React, {useState} from 'react'
import { Items } from './index'
import './styles.css'

const CustomAccordion = () => {
   const [active, setActive] = useState(Items[0].heading);
   return (
     <div className="accordion_wrap">
       {Items.map((item) => {
         return (
           <div className="accordion_container">
             <div className="accordion_heading">
               <p>{item.heading}</p>
               <span onClick={() => setActive(item.heading)}>X</span>
             </div>

             <div
               className={
                 (active === item.heading ? "show" : "") +
                 " accordion_content-wrap"
               }
             >
                 <p>{item.content}</p>
             </div>
           </div>
         );
       })}
     </div>
   );
}

export default CustomAccordion
