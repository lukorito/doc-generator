import React from 'react';
// import { Button } from "@chakra-ui/react"
import { GoogleLogin } from 'react-google-login';



function App() {
  const clientId = "562121853833-ban8lf27oiajtke2dkrpkrpjkejlo80i.apps.googleusercontent.com";
  return (
    <div className="App">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={(response) => console.log(response, "success")}
        onFailure={(response) => console.log(response, "failed")}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
