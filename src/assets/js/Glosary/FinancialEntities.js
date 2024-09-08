// Images and audio
    // Bank
    import BankImg from "../../img/GlosaryView/FinancialEntities/Bank.webp";
    import BankAudio from "../../audios/FinancialEntities/Bank.mp3";

    // ATM
    import ATMImg from "../../img/GlosaryView/FinancialEntities/ATM.webp";
    import ATMAudio from "../../audios/FinancialEntities/ATM.mp3";

    // Electronic Wallet
    import ElectronicWalletImg from "../../img/GlosaryView/FinancialEntities/ElectronicWallet.webp";
    import ElectronicWalletAudio from "../../audios/FinancialEntities/ElectronicWallet.mp3";

const items = [
    {
        img: BankImg,
        title: "Banco",
        description: "Es un lugar donde guardas tu dinero de manera segura y puedes hacer cosas como ahorrar, retirar o prestar dinero.",
        audio: BankAudio,
    },
    {
        img: ATMImg,
        title: "Cajero Automático",
        description: "Es una máquina en la que puedes retirar dinero de tu cuenta o hacer otras transacciones sin necesidad de entrar al banco.",
        audio: ATMAudio,
    },
    {
        img: ElectronicWalletImg,
        title: "Billetera Electrónica",
        description: "Es una aplicación en tu teléfono que te permite guardar y usar tu dinero de manera digital sin usar efectivo.",
        audio: ElectronicWalletAudio,
    },
];

export default items;