import { useState } from "react"

const useFetching = (callback) => {
    const [Loading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetch = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    return [fetch, Loading, error];
}

export default useFetching;