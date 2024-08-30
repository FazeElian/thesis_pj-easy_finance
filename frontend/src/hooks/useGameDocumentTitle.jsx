import { useEffect } from "react";

export const useGameDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `${title}`;
    }, [title]);

    return null;
}