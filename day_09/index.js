import express from "express";
import { userRegistration } from "./controller/userRegistration.js";

const app = express();
const PORT = 5600;
const FILE = "./user.json";

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is working 🚀");
});
app.post("/register", async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const response = await userRegistration(FILE, req.body);

        if (!response) {
            return res.status(500).json({
                message: "No response from server"
            });
        }
        return res.status(response.status).json({
            message: response.message
        });

    } catch (error) {
        console.log("ERROR:", error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});