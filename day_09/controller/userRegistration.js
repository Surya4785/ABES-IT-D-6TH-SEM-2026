import { readFile } from "../utils/readFile.js";
import { writeFile } from "../utils/writeFile.js";

// ✅ Register helper
const register = async (FILE, users, userDetails) => {
    const updatedUsers = [
        ...users,
        { id: users.length + 1, ...userDetails }
    ];

    const response = await writeFile(FILE, updatedUsers);

    return response; // ✅ return response
};

// ✅ Main function
export const userRegistration = async (FILE, userDetails) => {
    try {
        console.log("Received:", userDetails);

        const { name, email, password } = userDetails;

        // ✅ Validation
        if (!name || !email || !password) {
            return { message: "All fields are required", status: 400 };
        }

        const users = await readFile(FILE);

        // ✅ Check existing user
        const existingUser = users.find((u) => u.email === email);

        if (existingUser) {
            return { message: "User already exists", status: 409 };
        }

        // ✅ Register user
        const response = await register(FILE, users, userDetails);

        return { message: "User registered successfully", status: 200 };

    } catch (error) {
        console.log("ERROR:", error);
        return { message: "Something went wrong", status: 500 };
    }
};