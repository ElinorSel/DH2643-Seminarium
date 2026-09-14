const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/users/123", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "User found.",
        user: {
            id: 123,
            name: "Alice"
        }
    });
});

app.get("/api/users/999", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "User with ID 999 was not found.",
        referenceId: "USER-404-001"
    });
});

app.get("/api/bad-request", (req, res) => {
    res.status(400).json({
        status: 400,
        message: "The request is missing required information.",
        referenceId: "REQ-400-001"
    });
});

app.get("/api/private", (req, res) => {
    res.status(401).json({
        status: 401,
        message: "Authentication is required.",
        referenceId: "AUTH-401-001"
    });
});

app.get("/api/admin", (req, res) => {
    res.status(403).json({
        status: 403,
        message: "You are authenticated, but you do not have permission to access this resource.",
        referenceId: "AUTH-403-001"
    });
});

app.get("/api/broken", (req, res) => {
    res.status(500).json({
        status: 500,
        message: "The server encountered an unexpected error.",
        referenceId: "SERVER-500-001"
    });
});

app.listen(PORT, () => {
    console.log(`Mock API running at http://localhost:${PORT}`);
});