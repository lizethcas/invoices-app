export const generarID = () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = Math.floor(1000 + Math.random() * 9000);
    const letrasRandom = letras[Math.floor(Math.random() * letras.length)] + letras[Math.floor(Math.random() * letras.length)];
    return `${letrasRandom}${numeros}`;
};
