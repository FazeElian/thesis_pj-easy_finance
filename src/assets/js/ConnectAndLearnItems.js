// Imágenes
    // Ahorro
    import Saving1 from "../img/ConnectAndLearnView/Saving1.jpg";
    import Saving2 from "../img/ConnectAndLearnView/Saving2.jpg";

    // Gasto
    import Expense1 from "../img/ConnectAndLearnView/Expense1.jpg";
    import Expense2 from "../img/ConnectAndLearnView/Expense2.jpg";

    // Presupuesto Personal
    import PersonalBudget1 from "../img/ConnectAndLearnView/PersonalBudget1.jpg";
    import PersonalBudget2 from "../img/ConnectAndLearnView/PersonalBudget2.jpg";

    // Meta Financiera
    import FinancialObjective1 from "../img/ConnectAndLearnView/FinancialObjective1.jpg";
    import FinancialObjective2 from "../img/ConnectAndLearnView/FinancialObjective2.jpg";

    // Deuda
    import Debt1 from "../img/ConnectAndLearnView/Debt1.jpg";
    import Debt2 from "../img/ConnectAndLearnView/Debt2.jpg";

// Ejemplo de Items
const Items = [
    // Ahorro
    { 
        id: 1, 
        content: {  
            src: Saving2,
            imageId: 1,
            concept: 'Ahorro'
        } 
    },
    { 
        id: 2, 
        content: {  
            src: Saving1, 
            linkedTextId: 1, 
            concept: 'Ahorro',
        } 
    },

    // Gasto
    { 
        id: 3, 
        content: { 
            src: Expense2, 
            imageId: 2,
            concept: "Gasto" 
        } 
    },
    { 
        id: 4, 
        content: { 
            src: Expense1, 
            linkedTextId: 2,
            concept: "Gasto",
        } 
    },

    // Presupuesto
    { 
        id: 5, 
        content: { 
            src: PersonalBudget2, 
            imageId: 3,
            concept: 'Presupuesto',
        } 
    },
    { 
        id: 6, 
        content: { 
            src: PersonalBudget1, 
            linkedTextId: 3, 
            concept: 'Presupuesto',
        } 
    },

    // Meta Financiera
    { 
        id: 7, 
        content: { 
            src: FinancialObjective2, 
            imageId: 4,
            concept: 'Meta Financiera'  
        } 
    },
    { 
        id: 8, 
        content: { 
            src: FinancialObjective1, 
            linkedTextId: 4, 
            concept: 'Meta Financiera',
        } 
    },

    // Deuda
    { 
        id: 9, 
        content: { 
            src: Debt2,
            imageId: 5,
            concept: 'Deuda'
        } 
    },
    { 
        id: 10, 
        content: { 
            src: Debt1, 
            linkedTextId: 5, 
            concept: 'Deuda',
        } 
    },
];

export default Items;