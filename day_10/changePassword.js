import { readFile, writeFile } from "./readAndWrite.js"
export const changePassword = async (userDetails, FILE) => {
    const users = await readFile(FILE);
    if (users.length == 0) return { message: "User is not registered" };

    const user = users.find((user) => user.email === userDetails.email);
    if (!user) return { message: "User is not registered" };

    const upadatedUsers = users.map((user) =>
        user.email === userDetails.email ? { ...user, ...userDetails } : user);
    
    const response = await writeFile(FILE, upadatedUsers);
    return response;
}
// changePassword({ email: "abc@gmail.com", password: "123456789abcde" }, "./users.json")
//     .then((res) => console.log(res));