import React, { useEffect, useMemo, useState } from "react";

import "./App.css";
import ReactTableBasic from "./ReactTableBasic";
import useFetchMockData from "./hooks/useFetchMockData";

function App() {

    const [counter, setCounter] = useState(0);
    const [data, dataCount] = useFetchMockData();

    const cols = [
        { id: "id", header: "UserId" },
        { id: "first_name", header: "First Name" },
        { id: "last_name", header: "Last Name" },
        { id: "email", header: "Email" },
        { id: "gender", header: "Gender" },
    ];

    return (
        <>
            <h1>Hello World {counter} </h1>
            <button onClick={() => setCounter(counter + 1)}>Counter</button>
            {
                counter > 2 &&
                <ReactTableBasic data={data} cols={cols} rowCount={dataCount} />
            }
        </>
    );
}

export default App;
