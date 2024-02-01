import React from "react";

import "./App.css";
import ReactTableBasic from "./ReactTableBasic";
import useFetchMockData from "./hooks/useFetchMockData";

function App() {
    const [data, dataCount, loading] = useFetchMockData();

    const cols = [
        { id: "id", header: "UserId" },
        { id: "first_name", header: "First Name" },
        { id: "last_name", header: "Last Name" },
        { id: "email", header: "Email" },
        { id: "gender", header: "Gender" },
    ];

    return (
        <>
            {
                loading ? <h1>Loading...</h1> 
                : <ReactTableBasic data={data} cols={cols} rowCount={dataCount} />
            }
            
        </>
    );
}

export default App;
