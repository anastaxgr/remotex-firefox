import React from 'react';

import { FLIcon} from './enums';

// components
import SimpleButton from './components/SimpleButton';
import FooterLink from './components/FooterLink';

function App() {
  return (
    <div className="App">


        <div className="logo">
         
        </div>
     
        
        <form className="form">
            <input type="text" placeholder='Hostname'/>
            <input type="password" placeholder='Secret Key'/>
            <select>
              <option selected>Choose saved connections</option>
            </select>
            <button type="submit">Connect</button>
       
        </form>


        {/* footer links */}
        <div className="footerlinks">
            <FooterLink icon={FLIcon.github}/>
            <FooterLink icon={FLIcon.issues}/>
            <FooterLink icon={FLIcon.docs}/>
        </div>

   
    </div>
  );
}

export default App;
