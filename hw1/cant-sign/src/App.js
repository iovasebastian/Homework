import './App.css';
import Card from './Card';  
import pozaDiv1 from './poza-om.png';
import pozaDiv2 from './poza-lacat.png';
import pozaDiv3 from './poza-mail.png';
function App() {
  
  return (
    <div className="App">
      <div className='upper'>
        <h1>CAN'T SIGN IN?</h1>
        <h2>Wow! It sure sucks to be you!</h2>
      </div>
      <div className='card-wrapper'>
        <Card title = "Forgot username?" text = "Wow how. We will send you an email or something" poza = {pozaDiv1}/>
        <Card title = "Lost you password?" text = "Lmao how? We will send you an email" poza = {pozaDiv2}/>
        <Card title = "Lost your email" text = "How did you even do that? Honestly you are probably too young to even play this game" poza = {pozaDiv3}/>
      </div>
    </div>
  );
}

export default App;
