import { useEffect } from "react";

export const useGameDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `Juegos | ${title}`;
    }, [title]);

    return null;
}