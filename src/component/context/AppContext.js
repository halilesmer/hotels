import React, { createContext } from "react";

const AppContext = createContext();
console.log("AppContext: ", AppContext);

function AppProvider(props) {
    const baseUrlCards = "https://api.magicthegathering.io/v1/cards";
    const [url, setUrl] = React.useState("");
    const [searchQuery, setSearchQuery] = React.useState('');
    const [page, setPage] = React.useState(1);

    function handlePage(e) {
        setPage(e)
    }
    function urlHandle(e) {
        setSearchQuery(e)
    }
    React.useEffect(() => {
        setUrl(`${baseUrlCards}?name=${searchQuery}&page=${page}&pageSize=20`);

    }, [searchQuery, page])

    const value = {
        baseUrlCards,
        url,
        setUrl,
        searchQuery,
        setSearchQuery,
        page,
        setPage,

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
export { AppContext, AppProvider };
