import { useState, useEffect } from "react";

export function useHashNavigation() {
    const [hash, setHash] = useState('#')

    useEffect(() => {
        const handleHashChange = () => setHash(location.hash)
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])


    const cleanedHash = hash.replaceAll('#', '').toLowerCase()
    console.log(cleanedHash)
    return {
        page : cleanedHash.split(":")[0] || 'home',
        param : cleanedHash.split(":")[1]
    }
}