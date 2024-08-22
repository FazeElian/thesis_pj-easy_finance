// Imágenes
    // Ahorro
    import Saving from "../../../../assets/img/memoryGame/Saving.jpg";

    // Gasto
    import Expenses from "../../../../assets/img/memoryGame/Expenses.jpg";

// Ejemplo de MemoryItems
const MemoryItems = [
    // Ahorro
    { 
        id: 1, 
        content: { 
            type: 'text', 
            value: 'Es cuando guardas una parte de tu dinero para usarlo en el futuro', 
            imageId: 1 
        } 
    },
    { 
        id: 2, 
        content: { 
            type: 'image', 
            src: Saving, 
            linkedTextId: 1, 
            concept: 'Ahorro'
        } 
    },

    // Gasto
    { 
        id: 3, 
        content: { 
            type: 'text', 
            value: 'Gasto', 
            imageId: 2 
        } 
    },
    { 
        id: 4, 
        content: { 
            type: 'image', 
            src: Expenses, 
            linkedTextId: 2,
            concept: "Gasto" 
        } 
    },

    // Presupuesto
    { 
        id: 3, 
        content: { 
            type: 'text', 
            value: 'Presupuesto', 
            imageId: 3 
        } 
    },
    { 
        id: 4, 
        content: { 
            type: 'image', 
            // src: , 
            linkedTextId: 3, 
            concept: 'Presupuesto'
        } 
    },

    // Meta Financiera
    { 
        id: 5, 
        content: { 
            type: 'text', 
            value: 'Meta Financiera', 
            imageId: 4 
        } 
    },
    { 
        id: 6, 
        content: { 
            type: 'image', 
            // src: , 
            linkedTextId: 5, 
            concept: 'Meta Financiera'
        } 
    },

    // Deseo
    { 
        id: 7, 
        content: { 
            type: 'text', 
            value: 'Deseo', 
            imageId: 5 
        } 
    },
    { 
        id: 8, 
        content: { 
            type: 'image', 
            // src: , 
            linkedTextId: 7, 
            concept: 'Deseo'
        } 
    },

    // Necesidad 
    { 
        id: 9, 
        content: { 
            type: 'text', 
            value: 'Deseo', 
            imageId: 6 
        } 
    },
    { 
        id: 10, 
        content: { 
            type: 'image', 
            // src: , 
            linkedTextId: 9, 
            concept: 'Deseo'
        } 
    },
];

export default MemoryItems;
