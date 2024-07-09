import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    //Generate the global variable to be used
    const [defaultIP, setDefaultIP] = useState('');
    const [defaultHealth, setDefaultHealth] = useState('');

    //Easily wraps the whole app with this
    return (
        <AppContext.Provider value={{ defaultIP, setDefaultIP, defaultHealth, setDefaultHealth }}>
            {children}
        </AppContext.Provider>
    );
};