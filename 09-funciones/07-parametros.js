const config = {
    url: 'https://holamundo.io',
}



function configurarAPI( url, bucket = 145, port = 80  ) {
    return `${url}/${bucket}:${port}/`;
}

console.log(configurarAPI('holamundo.io', 90))
// console.log(configurarAPI(config))
// console.log(configurarAPI())