const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Team } = require("../models/Team.js");
const { Match } = require("../models/Match.js");

const randomNumber = (max, min) =>{
 const number= Math.floor(Math.random() * (max - min)) + min;
 return number;
}

const matchSeed = async () => {
  try {
    // CONEXION
    const database = await connect();

    const teams= await Team.find();

    const matches=[];
    for (let i = 0; i < teams.length; i++) {
      const team= teams[i];
      for (let j = 0; j < teams.length; j++) {
        if(team !== teams[j]){
          var fechaHoy = new Date();
          const gamePlayed = Math.random() < 0.5;
          const match = new Match({
            homeTeam: team._id,
            awayTeam: teams[j]._id,
            goalsHomeTeam: gamePlayed ? randomNumber(4,0) : 0,
            goalsAwayTeam: gamePlayed ? randomNumber(4,0) : 0,
            gamePlayed:  gamePlayed,
            gameDate: gamePlayed ? new Date(fechaHoy.setDate(fechaHoy.getDate() - randomNumber(8,0))) : new Date(fechaHoy.setDate(fechaHoy.getDate() + randomNumber(8,0)))
          });
          matches.push(match);
        }
      }
    }
    await Match.collection.drop();
    console.log("Partidos eliminados");

    await Match.insertMany(matches);
    console.log("Creados los partidos correctamente -- partidos: "+matches.length);
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

matchSeed();
