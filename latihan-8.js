var n = 9 

document.write("latihan 8" + '<br>')
for (let i = 1; i <=n ; i++) {
    for (let j = 1; j <= n; j++) {
        if (i==j||i+j==n+1)
        document.write(' * ')

        else document.write(' - ')
    }
    document.write(' <br> ')
}