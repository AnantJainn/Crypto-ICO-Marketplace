require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const SolarNFT = require("./models/SolarNFT");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB using the URL from the environment variable
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error:", error));

app.use(cors());
app.use(bodyParser.json());

// Route to save SolarNFT data
// app.post("/api/solar-nft", async (req, res) => {
//     try {
//         const newNFT = new SolarNFT(req.body);
//         await newNFT.save();
//         res.status(201).json({ message: "SolarNFT contract data saved successfully" });
//     } catch (error) {
//         console.error("Error saving SolarNFT data:", error);
//         res.status(500).json({ message: "Failed to save SolarNFT contract data" });
//     }
// });

app.post("/api/solar-nft", async (req, res) => {
    try {
        console.log("Received data:", req.body); // Log incoming data
        const newNFT = new SolarNFT(req.body);
        await newNFT.save();
        console.log("Data saved to MongoDB");
        res.status(201).json({ message: "SolarNFT contract data saved successfully" });
    } catch (error) {
        console.error("Error saving SolarNFT data:", error);
        res.status(500).json({ message: "Failed to save SolarNFT contract data" });
    }
});

// server.js or your backend API file
app.get("/api/solar-nfts", async (req, res) => {
    try {
        const contracts = await SolarNFT.find();
        res.status(200).json(contracts);
    } catch (error) {
        console.error("Error fetching contracts:", error);
        res.status(500).json({ message: "Failed to retrieve contracts" });
    }
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
