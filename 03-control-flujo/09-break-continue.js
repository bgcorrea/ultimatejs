let i = 0;
while (i < 6) {
    i++;
    if(i === 2) {
        continue;
    }
    if (i === 4) {
        console.log('Se encontro')
        break
    }

    console.log(i);
}