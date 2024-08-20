// Imágenes
    // Ahorro
    import Saving from "../../../../assets/img/memoryGame/Saving.jpg";

    // Gasto
    import Expenses from "../../../../assets/img/memoryGame/Expenses.jpg";

// Ejemplo de MemoryItems
const MemoryItems = [
    { id: 1, content: { type: 'text', value: 'Ahorro', imageId: 1 } },
    { id: 2, content: { type: 'image', src: Saving, linkedTextId: 1 } },
    { id: 3, content: { type: 'text', value: 'Gasto', imageId: 2 } },
    { id: 4, content: { type: 'image', src: Expenses, linkedTextId: 2 } },
];

export default MemoryItems;
