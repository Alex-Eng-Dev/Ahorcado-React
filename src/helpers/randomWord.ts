let words: string[]= [
    'CELULAR',
    'LICUADORA',
    'DISPOSITIVO',
    'HORCHATA',
    'QUESILLO',
    'ESTEREO',
    'AUTOMIVIL',
    'CABEZA',
    'ORNITORINCO',



];

export function randomWord(){
     let randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex];
}