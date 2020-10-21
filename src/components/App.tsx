import React, {useState} from 'react'

interface AppState {
    channelRoom: string;
    id?: number;
}

export default function App(): JSX.Element {
    const [state, setState] = useState<AppState>({channelRoom: 'General'});
    console.log("App -> setState", setState)


    return (
        <div>
            <h1>Chatter Box!</h1>
             <p>Room is {state.channelRoom}</p>
        </div>
    )
}
