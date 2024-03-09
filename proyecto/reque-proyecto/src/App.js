// En App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminNav from './componentesAdminFolder/ComponentesAdmin';
import UsuarioNav from './componentesUsuarioFolder/ComponentesUsuario';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/admin">
                <button>Ir a Admin</button>
              </Link>
              <Link to="/usuario">
                <button>Ir a Usuario</button>
              </Link>
            </div>
          }
        />
        <Route path="/admin" element={<AdminNav />} />
        <Route path="/usuario" element={<UsuarioNav />} />
      </Routes>
    </Router>
  );
};

export default App;
