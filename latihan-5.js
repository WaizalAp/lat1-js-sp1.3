var n = 9 

document.write("latihan 5" + '<br>')
for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
       if (y % 2 == 0) {
           document.write(' * ')
       }else {
           document.write(' - ')
       }   
    }
    document.write('<br>')
}
