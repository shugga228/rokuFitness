import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [defaultIP, setDefaultIP] = useState('');
    const [defaultHealth, setDefaultHealth] = useState('');

    return (
        <AppContext.Provider value={{ defaultIP, setDefaultIP, defaultHealth, setDefaultHealth }}>
            {children}
        </AppContext.Provider>
    );
};