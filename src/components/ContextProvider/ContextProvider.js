import Context from '../Context/Context.js';
import {useState} from 'react'


export default function ContextProvider ({ children }) { 
    const [BacklogCount, setBacklogCount] = useState(0);
    const [ReadyCount, setReadyCount] = useState(0);
    const [InProgressCount, setInProgressCount] = useState(0);
    const [FinishedCount, setFinishedCount] = useState(0);
    
    return (
        <Context.Provider value={{BacklogCount, setBacklogCount, ReadyCount, setReadyCount, InProgressCount, setInProgressCount, FinishedCount, setFinishedCount}}>
            {children}
        </Context.Provider>
    )
}