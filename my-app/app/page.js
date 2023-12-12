import React from 'react';
import { useUserAuth } from '../app/_utils/auth-context';

const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

await gitHubSignIn();

await firebaseSignOut();

export default function page() {
    <MyLayout>
        {user ? (
            <div>
                <h1>Welcome {user.displayName}</h1>
                <button onClick={firebaseSignOut}>Sign Out</button>
            </div>
        ) : (
            <div>
                <h1>Welcome Guest</h1>
                <button onClick={gitHubSignIn}>Sign In</button>
            </div>
        )}
    </MyLayout>
}