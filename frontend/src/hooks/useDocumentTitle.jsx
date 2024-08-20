import { useEffect } from "react";

export const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `Easy Finance | ${title}`;
    }, [title]);

    return null;
}