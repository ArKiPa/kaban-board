import { createContext } from 'react';

export default createContext({
    BacklogCount: {},
    ReadyCount: {},
    InProgressCount: {},
    FinishedCount: {},
    setBacklogCount: () => {},
    setReadyCount: () => {},
    setInProgressCount: () => {},
    setFinishedCount: () => {}           
});