const fs= require('fs')

const bioData = {
    name:'Rohan',
    age:23,
    Hobby:'Cricket'
}

const jsonData = JSON.stringify(bioData);
//console.log(jsonData)

const jsonToOriginal = JSON.parse(jsonData)
//console.log(jsonToOriginal)

// fs.writeFile('jsonFile.json',jsonData,()=>{
//     console.log('Data Added')
// })
fs.readFile('jsonFile.json','utf-8',(err,data) => {
    console.log(data)
})

