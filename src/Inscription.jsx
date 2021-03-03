import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { createSeller } from './graphql/mutations';


const initialFormState = { 
    name: '',
    siren: '',
    codePays: '',
    codeTVA: '',
    email: '',
}

export default function Inscription() {
    const [formData, setFormData] = useState(initialFormState);

    const isValidForm = () => {
        return formData.name && formData.siren;
    }

    const signIn = async () => {
        console.log('yeah', formData)
        if (!isValidForm()) return;
        console.log('yeah')
        await API.graphql({ query: createSeller, variables: { input: formData } });

        setFormData(initialFormState);
    };

    return (
        <div>
            <h2>Verso Retail Seller Central</h2>
            <div>
                <input
                    onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                    placeholder="Nom..."
                    value={formData.name}
                />
                <br/>
                <input
                    onChange={e => setFormData({ ...formData, 'siren': e.target.value})}
                    placeholder="SIREN..."
                    value={formData.siren}
                />
                <br/>
                <input
                    onChange={e => setFormData({ ...formData, 'codePays': e.target.value})}
                    placeholder="FR, EN ..."
                    value={formData.codePays}
                />
                <br/>
                <input
                    onChange={e => setFormData({ ...formData, 'email': e.target.value})}
                    placeholder="exemple@mail.com..."
                    value={formData.email}
                />

                
                <button onClick={signIn}>Inscription</button> 
            </div>
        </div>
    )
}
