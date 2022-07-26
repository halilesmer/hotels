import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
    const baseUrlCards = "https://api.magicthegathering.io/v1/cards";
    const [url, setUrl] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const [pageNumb, setPageNumb] = useState(1);
    
    function handlePage(e) {
        console.log("e: ", e);
        setPageNumb(e)
    }
    function urlHandle(e) {
        setSearchQuery(e)
    }
    React.useEffect(() => {
        // setUrl(`${baseUrlCards}?name=${searchQuery}&Numb=${pageNumb}&pageSize=20`);
        setUrl(`${baseUrlCards}?name=${searchQuery}&page=${pageNumb}&pageSize=20`);

        
    }, [searchQuery, pageNumb])
    
    const value = {
        baseUrlCards,
        url,
        setUrl,
        searchQuery,
        setSearchQuery,
        pageNumb,
        setPageNumb,
        handlePage,
        urlHandle
        
    }
    
    console.log("pageNumb: ", pageNumb);
    // console.log("searchQuery: ", searchQuery);
    // console.log("url: ", url);
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
export { AppContext, AppProvider };
