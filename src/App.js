import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEdit from './componets/contact/AddEdit';
import AppNavBar from './componets/AppNavBar';
import ContactList from './componets/contact/ContactList';
import Home from './componets/Home';
import Profile from './componets/auth/Profile';
import PrivateRoute from './componets/auth/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="App">

      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_list" element={<PrivateRoute><ContactList /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddEdit /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><AddEdit /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
