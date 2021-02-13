const messages = [
    'Oscar',
    'Diego',
    'Ana',
    'Laura',
    'Federico',
    'Nicolas',
    'Luisa'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports =  { randomMsg};
