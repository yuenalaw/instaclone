import React, { useEffect, useState } from "react";
//import * as faker from "faker";
import Story from "../components/Story";
import { useSession } from "next-auth/react";

export default function Stories(){
    const [suggestions, setSuggestions] = useState([]);
    const {data:session} = useSession();

    useEffect(() => {
        //loops thorugh empty array
        //with this parenthesis, it will return something
        //this is called an implicit return!
        const suggestions = [...Array(20)].map((_,i) => ({
            //...faker.helpers.contextualCard(),
            id: i,
        }));
        console.log(suggestions);
        setSuggestions(suggestions);
    }, [])

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll">
            {session && (
                <Story img={session.user.image} username={session.user.username}/>
            )}

            {suggestions.map(profile => (
                // we need a key, because if we just add a new thing don't want to re-render all other 2000
                <Story key={profile.id} img={profile.avatar} username={profile.username}/>
            ))}
        </div>
    );
}