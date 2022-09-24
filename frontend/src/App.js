import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen';
import SigninScreen from './Screens/SigninScreen';
import CourseScreen from './Screens/CourseScreen';

function App() {
  return (
    <>
    <Header/>
    <Router>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/signin' component={SigninScreen} />
          <Route path='/course' component={CourseScreen} />
        </Container> 
    </Router>
    <Footer/>
    </>
  );
}

export default App;
