import Landing from './components/Landing';
import Nav from './components/Nav';
import { motion } from 'framer-motion'
import Welcome from './components/Welcome';


function App() {
  const WelcVari = {
    initial: {
      
    },
    animate: {
        
    }
  } 
  const TeamVari = {
    initial: {
      y: "-100vh"
    },
    animate: {
      y: 0,
        transition: {
          delay: 2
        }
    }
  } 
  return (
    <div className="App">
      <Landing />
      <Nav />
    </div>
  );
}

export default App;
