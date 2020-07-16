import React, {useState} from 'react';
import Jitsi from 'react-jitsi';
import './App.css';


const App = () => {
  const load = 'Creating Your Room...'
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [password, setPassword] = useState('');
  const [call, setCall] = useState(false);

  return call
    ? (
      <div>
      <Jitsi
        containerStyle={{ width: '1200px', height: '700px' }}
        roomName={room}
        displayName={name}
        password={password}
        
        onAPILoad={JitsiMeetAPI => console.log('Good Morning everyone!')}
      />
      </div>)
    : (
      <div>
      <form className='ui form container' >
        <h1>Create a Meeting</h1>
        <div className='field'>
          <label>Room Name</label>
        <input type='text' placeholder='Room name'
        value={room} onChange={e => setRoom(e.target.value)} />
        </div>
        <div className='field'>
          <label>User Name</label>
        <input type='text' placeholder='Your name' 
        value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className='field'>
          <label>Password (Optional)</label>
        <input type='text' placeholder='Password (optional)' 
        value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='ui button' onClick={(e) => setCall(true)}> Let's start!</button>
      </form>
      </div>
    )
}

export default App;



