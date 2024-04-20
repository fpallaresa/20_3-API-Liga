const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creamos el schema del usuario
const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fundationYear: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", teamSchema);
module.exports = { Team };
