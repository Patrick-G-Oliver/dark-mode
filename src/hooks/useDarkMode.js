import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
    const [storedValue, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        const pageStyler = document.querySelector("body");

            if (storedValue) {
                pageStyler.classList.add("dark-mode");
            }
            else {
                pageStyler.classList.remove("dark-mode");
            };
    }, [storedValue])

    return [storedValue, setValue];
}

export default useDarkMode;