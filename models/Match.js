const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema(
  {
    homeTeam: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Team",
    },
    awayTeam: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Team",
    },
    goalsHomeTeam: {
      type: Number,
      required: true,
    },
    goalsAwayTeam: {
      type: Number,
      required: true,
    },
    gamePlayed: {
      type: Boolean,
      required: true
    },
    gameDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Match = mongoose.model("Match", matchSchema);
module.exports = { Match };
