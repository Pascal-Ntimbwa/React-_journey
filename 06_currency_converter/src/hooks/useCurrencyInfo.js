import { useEffect, useState } from "react";



function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://openexchangerates.org/api/latest.json?app_id=d33f042dcbeb4bc8b73f9a6d78c2943f&base=${currency}`)
        .then((response) => response.json())
        .then((result) => setData(result.rates))
    }, [currency])

    console.log(data);
    return data 
}

export default useCurrencyInfo