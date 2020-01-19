var n = 9 

document.write("latihan 4" + '<br>' )
for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
       if (x % 2 == 0) {
           document.write('* ')
       }else {
           document.write('  -  ')
       }   
    }
    document.write('<br>')
}