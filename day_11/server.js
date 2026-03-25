import http from "http";
import url from "url";

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return;

    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname;

    res.writeHead(200, { "Content-Type": "application/json" });

    switch (path) {
        case "/":
            res.end(JSON.stringify({
                message: "Welcome to Home API 🚀"
            }));
            break;

        case "/login":
            const name = parsedURL.query.name || "Guest";
            res.end(JSON.stringify({
                message: `Hello ${name}, you are logged in ✅`
            }));
            break;

        case "/about":
            res.end(JSON.stringify({
                message: "This is About API 📘",
                author: "Surya",
                course: "B.Tech IT - 6th Sem"
            }));
            break;

        default:
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                error: "Route not found ❌"
            }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

//http://localhost:3000/
//http://localhost:3000/login?name=Surya/
//http://localhost:3000/about