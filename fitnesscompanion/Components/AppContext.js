import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [defaultIP, setDefaultIP] = useState('');

    return (
        <AppContext.Provider value={{ defaultIP, setDefaultIP }}>
            {children}
        </AppContext.Provider>
    );
};