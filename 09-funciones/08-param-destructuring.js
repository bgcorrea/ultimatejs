// function webServer(config) {
//     const url = config.url;
//     return url;
// }

// console.log(webServer({url: 'https://holamundo.io'}));


// function webServer(config) {
//     const { url } = config;
//     return url;
// }

// console.log(webServer({url: 'https://holamundo.io'}));

// function webServer({ url }) {
//     return url;
// }

// console.log(webServer({url: 'https://holamundo.io'}));

// const config = {
//     url: 'https://holamundo.io',
//     direccion: {
//         calle: 'holamundo',
//         numero: 80,
//     }
// }

// function webServer ( {url }) {
//     return url
// }

// console.log(webServer(config))

const config = [
    'https://holamundo.io',
    145,
    80,
];

function webServer(url, ...rest) {
    console.log(...rest)
    return url;
    return rest;
};

console.log(webServer(config))