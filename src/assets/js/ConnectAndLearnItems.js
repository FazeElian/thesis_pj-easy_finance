// Imágenes
    // Ahorro
    import Saving from "../img/ConnectAndLearnView/Saving.webp";

    // Gasto
    import Expenses from "../img/ConnectAndLearnView/Expenses.webp";

    // Presupuesto Personal
    import PersonalBudget from "../img/ConnectAndLearnView/PersonalBudget.webp";

    // Meta Financiera
    import FinancialObjective from "../img/ConnectAndLearnView/FinancialObjective.webp";

    // Deuda
    import Debt from "../img/ConnectAndLearnView/Debt.webp";

// Ejemplo de Items
const Items = [
    // Ahorro
    { 
        id: 1, 
        content: { 
            type: 'text', 
            value: 'Es guardar dinero para usarlo después', 
            imageId: 1,
            color: "#32CD32", 
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
            color: "#32CD32"
        } 
    },

    // Gasto
    { 
        id: 3, 
        content: { 
            type: 'text', 
            value: 'Es el dinero que usas para comprar cosas', 
            imageId: 2,
            color: "#FF6347",
            textColor: "#fff",
            borderTextColor: "0 0 5px black",
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
            color: "#FF6347" 
        } 
    },

    // Presupuesto
    { 
        id: 5, 
        content: { 
            type: 'text', 
            value: 'Es un plan para decidir en qué gastar tu dinero', 
            imageId: 3,
            color: "#1E90FF", 
            textColor: "#fff",
            borderTextColor: "0 0 5px black",
            concept: 'Presupuesto',
        } 
    },
    { 
        id: 6, 
        content: { 
            type: 'image', 
            src: PersonalBudget, 
            linkedTextId: 3, 
            concept: 'Presupuesto',
            color: "#1E90FF"
        } 
    },

    // Meta Financiera
    { 
        id: 7, 
        content: { 
            type: 'text', 
            value: 'Es un objetivo que logras si usas tu dinero con cuidado', 
            imageId: 4,
            color: "#FFD700", 
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
            color: "#FFD700",
        } 
    },

    // Deuda
    { 
        id: 9, 
        content: { 
            type: 'text', 
            value: 'Es dinero que pides prestado y tienes que devolver', 
            imageId: 5,
            color: "#8A2BE2",
            textColor: "#fff",
            borderTextColor: "0 0 5px black", 
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
            color: "#8A2BE2",
        } 
    },
];

export default Items;