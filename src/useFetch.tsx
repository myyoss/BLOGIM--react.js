import { useState, useEffect } from 'react'

const useFetch = (url: any) => {

    const [data, setData]: any = useState(null)
    const [isPanding, setIsPanding] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const abortCont = new AbortController();

        // setTimeout only to see if loading works
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch this resource')
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data)
                    setData(data)
                    setIsPanding(false)
                    setError(null)
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('AbortError')
                    } else {
                        setError(err.message)
                        setIsPanding(false)
                    }
                })
        }, 800)

        return () => abortCont.abort();

    }, [url]);

    return (
        { data, isPanding, error }
    )
}

export default useFetch