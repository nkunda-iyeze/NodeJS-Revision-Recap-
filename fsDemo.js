// import fs from 'fs';
import fs from 'fs/promises';
// ######### readFile () - Promise  ########

// fs.readFile("./test.txt","utf8")
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.error(error);
// });
// readFile () - async/await

const readFile = async () => {
    try{
        const data = await fs.readFile("./test.txt", "utf8");
        console.log(data);

    } catch(error){
        console.error(error);
    }
}


// writeFile () - Promise
const writeFile = async () => {
    try{
         await fs.writeFile("./test.txt", "Hello World");
        console.log("data written successfully !!!!!!!!!!!!!!!!");

    } catch(error){
        console.error(error);
    }
}
// append file
const appendFile = async () => {
    try{
         await fs.appendFile("./test.txt", '\n Try again let us see !!');
        console.log("data appended successfully...");

    } catch(error){
        console.error(error);
    }
}
writeFile();
appendFile();
readFile();