import React, {useState} from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Tweet from './tweet'


function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUser] = useState([
    {name: 'Evan', message: 'Hello There', likes :'1'} ,
    {name: 'Jorah', message: 'Khalesi pls', likes :'22' },
    {name: 'Ned', message: 'Winter is coming' ,likes :'333' }
  ]
  );

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  return(
    <div className='app'>
      {users.map(user=>(
        <Tweet name={user.name} message ={user.message} likes ={user.likes}/>
      ))}
    </div>
  );
}

export default App;