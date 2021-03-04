import React, { useState, useEffect } from "react";
import "./App.css";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import "./styles/Auth.css";

import Todo from "./Todo";
import Inscription from "./Inscription";

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

//   const handleSignUp = async () => {
//     console.log('yeah', formData)
//     if (!isValidForm()) return;
//     console.log('yeah')
//     await API.graphql({ query: createSeller, variables: { input: formData } });

//     setFormData(initialFormState);
// };

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log("authData", authData);
      console.log("nextAuthState", nextAuthState);

      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <AmplifySignOut buttonText="Se déconnecter" />
      <br />
      <div>Connecté, {user.username}</div>
      <h4>Votre todo {user.attributes.email}</h4>
      <Todo />
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignIn
        headerText="Compte Vendeur"
        // slot="Connexion"
      ></AmplifySignIn>
      <AmplifySignUp
        headerText="Inscription Verso Retail Vendeur"
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" },
          { 
            type: "siren",
            label: "n° SIREN",
            placeholder: "ex: 345676543456...",
            required: true,
           },
        ]}
        submitButtonText="Créer mon compte"
        // handleSubmit={() => handleSignUp()}
      ></AmplifySignUp>
    </AmplifyAuthenticator>
  );
}

export default App;
