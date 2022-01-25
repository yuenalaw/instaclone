import React from 'react';
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

//running in browser...
export default function signIn({ providers }) {
    //loops through all of the providers
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-50 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw"/>
        <p>
          Hello!  
        </p>
        <div className="mt-40">
            {Object.values(providers).map((provider) => (
            <div key={provider.name}>
                <button className="p-3 bg-blue-500 rounded-lg text-white" 
                onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})}>
                Sign in with {provider.name}
                </button>
            </div>
            ))}
        </div>
    </div>
    </>
  )
}

//running on the server...
export async function getServerSideProps() {
    const providers = await getProviders(); //get providers we initialized everything for

    //this is in middle-rendering stage. need to send back to webapp
    return {
        props: {
            providers,
        }
    }
}
