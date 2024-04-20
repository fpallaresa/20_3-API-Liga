const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    jerseyNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.model("Player", playerSchema);
module.exports = { Player };
