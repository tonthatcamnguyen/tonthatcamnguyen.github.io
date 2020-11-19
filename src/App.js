import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions/index';
import Users from './components/Users';
import Header from './components/Header';

function App() {
   
  const dispatch = useDispatch(); 
  const users = useSelector((state) => state.filteredUsers);

  

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(actions.fetchUsers());
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <div id="app" className="app">
      <Header />
      <main id="main" className="main container-fluid">
        <div id="users-container" className="users-container">
          { users.length > 0 &&
            users.map((user, index) => {
              return <Users key={index} user={user} />;
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
