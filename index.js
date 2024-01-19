const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    return res.json({
        message: "Hello from containerized nodejs"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
})