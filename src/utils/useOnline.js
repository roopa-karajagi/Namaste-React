import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline , setOnline] = useState(true);

    const handleOnline = () => {
        console.log("handle Online");
        setOnline(true);
    }
    const handleOffline = () => {
        console.log("handle offline")
        setOnline(false);
    }

    useEffect(() => {
        window.addEventListener('online' , handleOnline);
        window.addEventListener('offline' , handleOffline);
        return () => {
            window.removeEventListener('online' , handleOnline)
            window.removeEventListener('offline', handleOffline);
        }
    } , [])
    
    return isOnline;
}

export default useOnline;