import React from 'react';
import Banner from 'components/Banner';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Banner />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="/identity/login"
            rel="noopener noreferrer">
            Go to Login
          </a>
        </header>
      </div>
    </>
  );
};

export default Home;
