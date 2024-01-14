require("dotenv").config();
const Position = require("../models/position.models");

exports.addPosition = async (req, res) => {
  try {
    const { no_resi, lokasi } = req.body;
    let position = new Position({
      id_petugas: req.id,
      no_resi,
      lokasi,
    });
    position.save();
    return res.status(200).json({
      message: "Berhasil menambahkan posisi",
      data: position,
      status: true,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Gagal menambahkan posisi",
      err,
      status: true,
    });
  }
};

exports.getPosition = async (req, res) => {
  try {
    const no_resi = req.query.resi;
    const positions = await Position.find({ no_resi: no_resi }).sort({ _id: 1 });
    return res.status(200).json({
      message: "Berhasil mendapatkan posisi",
      data: positions,
      status: true,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Gagal mendapatkan posisi",
      err,
      status: true,
    });
  }
};
