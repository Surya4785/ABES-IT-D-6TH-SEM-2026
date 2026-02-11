// import {readFile} from "./readANDWrite.js";
// const fileData = async(path)=>{
//     try{
//         const data = await readFile(path);
//         console.log(data);
//     } catch (error){
//         console.log("unable to read");
//     }
// }
// export const writeFile = async (path, data) => {
//     try{
//         await fs.writeFile (path, data);
//     } catch (error){
//         console.log("unable to find data")
//     }
// }
// writeData("./students.json",`{id:4, name:"D"}`);

index.js

import { readFile, writeFile } from "./readANDWrite.js";

const addStudent = async (path, name) => {
    const students = await readFile(path);
    const studentArray = Array.isArray(students) ? students : [];
    const maxId = studentArray.length > 0
        ? Math.max(...studentArray.map(s => s.id))
        : 0;

    const newStudent = {
        id: maxId + 1,
        name: name
    };

    studentArray.push(newStudent);

    await writeFile(path, studentArray);

    console.log("Student Added:", newStudent);
};

await addStudent("./students.json", "E");