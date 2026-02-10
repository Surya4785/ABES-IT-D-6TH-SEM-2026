import fs from "fs";
export const readFile=async(path)=>{
    try{
        const data = fs.readFile(path,"utf-8");
        return data
    }
    catch(error){
        console.log("unable to read");
    }
}
console.log(readFile("./students.json"));