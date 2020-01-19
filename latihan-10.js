var n = 9 

document.write("latihan 10" + '<br>')
for (let x = 1; x <= n; x++) {
    for (let y = n; y >= 1; y--) {
       if (x >= y) {
           document.write('* ')
       }else {
           document.write(' - ')
       }   
    }
    document.write('<br>')
}