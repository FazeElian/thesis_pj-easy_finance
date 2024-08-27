// Imágenes
    // Ahorro
    import Saving from "../../../../assets/img/memoryGame/Saving.webp";

    // Gasto
    import Expenses from "../../../../assets/img/memoryGame/Expenses.webp";

    // Presupuesto Personal
    import PersonalBudget from "../../../../assets/img/memoryGame/PersonalBudget.webp";

    // Meta Financiera
    import FinancialObjective from "../../../../assets/img/memoryGame/FinancialObjective.webp";

    // Deuda
    import Debt from "../../../../assets/img/memoryGame/Debt.webp";

// Ejemplo de MemoryItems
const MemoryItems = [
    // Ahorro
    { 
        id: 1, 
        content: { 
            type: 'text', 
            value: 'Es cuando guardas una parte de tu dinero para usarlo en el futuro', 
            imageId: 1,
            color: "#90FF00", 
            concept: 'Ahorro'
        } 
    },
    { 
        id: 2, 
        content: { 
            type: 'image', 
            src: Saving, 
            linkedTextId: 1, 
            concept: 'Ahorro',
            color: "#90FF00"
        } 
    },

    // Gasto
    { 
        id: 3, 
        content: { 
            type: 'text', 
            value: 'Es el dinero que usas para comprar cosas.', 
            imageId: 2,
            color: "#FFC200",
            concept: "Gasto" 
        } 
    },
    { 
        id: 4, 
        content: { 
            type: 'image', 
            src: Expenses, 
            linkedTextId: 2,
            concept: "Gasto",
            color: "#FFC200" 
        } 
    },

    // Presupuesto
    { 
        id: 5, 
        content: { 
            type: 'text', 
            value: 'Es un plan para decidir en qué gastar tu dinero.', 
            imageId: 3,
            color: "#FBFF00", 
            concept: 'Presupuesto'
        } 
    },
    { 
        id: 6, 
        content: { 
            type: 'image', 
            src: PersonalBudget, 
            linkedTextId: 3, 
            concept: 'Presupuesto',
            color: "#FBFF00"
        } 
    },

    // Meta Financiera
    { 
        id: 7, 
        content: { 
            type: 'text', 
            value: 'Es un objetivo que quieres alcanzar ahorrando o gastando dinero de manera inteligente.', 
            imageId: 4,
            color: "#0059FF",
            textColor: "#fff", 
            concept: 'Meta Financiera'  
        } 
    },
    { 
        id: 8, 
        content: { 
            type: 'image', 
            src: FinancialObjective, 
            linkedTextId: 4, 
            concept: 'Meta Financiera',
            color: "#0059FF",
        } 
    },

    // Deuda
    { 
        id: 9, 
        content: { 
            type: 'text', 
            value: 'Deuda Concepto', 
            imageId: 5,
            color: "#FF0000",
            textColor: "#FFFFFF", 
            concept: 'Deuda'
        } 
    },
    { 
        id: 10, 
        content: { 
            type: 'image', 
            src: Debt, 
            linkedTextId: 5, 
            concept: 'Deuda',
            color: "#FF0000",
        } 
    },
];

export default MemoryItems;
