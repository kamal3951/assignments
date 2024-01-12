const fs = require("fs")

let data = "THIS IS ADDED TO THIS FILE FROM FS.WRITEFILESYNC FUNCTION WHEN CALLED FROM write_to_file.js"

fs.writeFileSync("././01-async-js/easy/README.md",data)

//if there will be no file with that name, it will create that file and then write