import './App.css';
import SelectAction from './components/selectAction';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllEvents from "./components/events/viewAllEvents"
import HeaderNavBar from './components/common/header';

function App() {
  return (
    <Router>
      <HeaderNavBar />
      <Container className="App">
        <Routes>
          <Route path="/NoteZ/" element={<SelectAction />}></Route>
          <Route path="/NoteZ/all_events" element={<AllEvents />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
