var n = 9 

document.write("latihan 9" + '<br>')
for (let x = 1; x <= n; x++) {
    for (let y = 0; y < x; y++) {
    document.write('+')
    }
    for (let z = n; z > x; z--){

    document.write(" - ")
    }
    document.write('<br>')
}