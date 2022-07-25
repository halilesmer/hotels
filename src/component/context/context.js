import React, { createContext } from "react";

const AppContext = createContext();

function AppProvider(props) {
    const theme = "dark";

    return (
        <AppContext.Provider value={theme}>
            {props.children}
        </AppContext.Provider>
    );
};