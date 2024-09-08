import { useEffect } from "react";

export const useGlosaryDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `Glosario | ${title}`;
    }, [title]);

    return null;
}