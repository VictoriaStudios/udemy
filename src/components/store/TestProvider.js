import { createContext, useState } from 'react';

//https://dev.to/ms_yogii/usecontext-for-better-state-management-51hi

//create a context, with createContext api
export const testContext = createContext();

const TestProvider = (props) => {
        // this state will be shared with all components 
    const [userDetails, setUserDetails] = useState();

    return (
            // this is the provider providing state
        <testContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </testContext.Provider>
    );
};

export default TestProvider;