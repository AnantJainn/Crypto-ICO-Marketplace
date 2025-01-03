// models/SolarNFT.js
const mongoose = require("mongoose");

const solarNFTSchema = new mongoose.Schema({
    account: { type: String, required: true },
    totalKilowatts: { type: String, required: true },
    burnPeriodInYears: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    tokenAddress: { type: String, required: true, unique: true },
    transactionHash: { type: String, required: true },
    createdAt: { type: String, required: true },
    logo: { type: String }
});

const SolarNFT = mongoose.model("SolarNFT", solarNFTSchema);
module.exports = SolarNFT;
