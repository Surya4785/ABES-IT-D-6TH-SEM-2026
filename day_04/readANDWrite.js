// import fs from "fs";
// export const readFile=async(path)=>{
//     try{
//         const data = fs.readFile(path,"utf-8");
//         return data
//     }
//     catch(error){
//         console.log("unable to read");
//     }
// }
// console.log(readFile("./students.json"));


import fs from "fs/promises";

export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        return [];
    }
};

export const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, JSON.stringify(data, null, 2));
        console.log("Data written successfully");
    } catch (error) {
        console.log("unable to write file");
    }
};