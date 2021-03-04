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
      <h4>Merci de compléter votre profil vendeur</h4>
      <Inscription username={user.username}/>
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
          {
            type: "username",
            label: "identifiant utilisateur *",
          },
          {
            type: "password",
            label: "Mot de passe *",
          },
          { 
            type: "email",
            label: "Adresse email *",
            placeholder: "ex: exemple@email-pro.com...", 
           },
        ]}
        submitButtonText="Créer mon compte"
      ></AmplifySignUp>
    </AmplifyAuthenticator>
  );
}

export default App;
