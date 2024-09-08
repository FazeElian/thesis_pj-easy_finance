import { useEffect } from "react";

export const useGameDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `Juego | ${title}`;
    }, [title]);

    return null;
}