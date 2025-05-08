import express from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});


app.post("/", async (req, res) => {
    const { email, password } = req.body;
    const user = await client.user.create({
        data: {
            email,
            password,
        },
    });
    res.json({
        message: "User created",
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    });
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

