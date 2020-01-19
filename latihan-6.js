var n = 9 

document.write("latihan 6" + '<br>')
for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
       if (x == y) {
           document.write('*')
       }else {
           document.write(' - ')
       }   
    }
    document.write('<br>')
}