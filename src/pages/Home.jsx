import React from 'react';


const Home = ({token}) => {
  

  return (
    <div>
      <h1>Home Page</h1>
      <div> Welcome, {token.user.id}</div> 
    </div>
  );
};

export default Home;
