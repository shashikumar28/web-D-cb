let fs = require ('fs')//object

let data = "my name is shashi thanks alot"

// crud full form create , read , update , delete

// create. -> writeFile()
//4 argument accept
//.1 create
// fs.watchFile('abc.txt' , data , {} , ()=>{})
    // fs.writeFile('abc.txt' , data ,
    //      {//optinal part
    //         encoding:'utf-8' ,
    //         flag:'w'

    //      } , 
    //      (err)=>{
    //       if (err){throw err}
    //      console.log('file written successfully')
    //      }
    //     )

    //  fs.writeFile('abc.txt' , data ,
    //     // {//optinal part
    //     //     encoding:'utf-8' ,
    //     //     flag:'w'
 
    //     //  } , 
    //      (err)=>{
    //       if (err){throw err}
    //      console.log('file written successfully')
    //      }
    //     )


    //.2 read -> readfile
    //argument
    // fs.readFile('def.txt') , {} , ()=>{} 
// step1 to inporve
            // fs.readFile('def.txt', 
            //     // {
            //     //     encoding:"utf-8" ,
            //     //     flag:'r'
            //     // } , 

            //     (err , data)=>{
            //     if(err){throw err}
            //     console.log(data.toString())//buffer-> string
            //     } 
            // )

           // step2 to inporve
            // fs.readFile('def.txt', 
            //     {
            //         encoding:"utf-8" ,
            //         flag:'r'
            //     } , 

            //     (err , data)=>{
            //     if(err){throw err}
            //     console.log(data)
            //     } 
            // )

            // update -> appendFile()

            // fs.appendFile('abc.txt' , ' bhaukali hu me', 
            //     (err)=>{
            //         if (err){throw err}
            //         console.log("file edited successfully")
            //     }
            // )


            // delete -> unlink()

            // fs.unlink('def.txt' ,
            //     (err)=>{
            //         if(err){throw err}
            //         console.log("file deleted successfullly")
            //     }
            // )



