const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  id_petugas: {
    type: String,
  },
  no_resi: {
    type: String,
  },
  lokasi: {
    type: String,
  },
});

module.exports = mongoose.model("Position", positionSchema);
