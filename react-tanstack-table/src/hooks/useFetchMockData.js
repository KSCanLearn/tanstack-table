import { useEffect, useState } from "react";
import MOCK_DATA from "../mocks/USER_1000_DATA.json";

export const fetchMockData = () => {
    let timeoutId;
    const res = new Promise((resolve) => {
        timeoutId = setTimeout(() => {
            resolve(MOCK_DATA);
        }, 1000);
    });

    return {
        res,
        abort: () => clearTimeout(timeoutId),
    };
};

const useFetchMockData = (initial = 0) => {
    const [data, setData] = useState();
    const [dataCount, setDataCount] = useState();

    useEffect(() => {
        console.log("H", initial);
        let cancel = false;
        const { res: response, abort } = fetchMockData();
        response.then((jsonData) => {
            if (cancel) return;
            console.log(jsonData);
            setData(jsonData.table);
            setDataCount(jsonData.totalCount);
        });
        // need catch when actual API calls

        return () => {
            abort();
            cancel = true;
        };
    }, [initial, setDataCount, setData]);

    return [data, dataCount];
};

export default useFetchMockData;
