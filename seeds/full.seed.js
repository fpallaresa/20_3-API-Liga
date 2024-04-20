const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Team } = require("../models/Team.js");
const { Player } = require("../models/Player.js");

let teamList = [
  {
    name: "Real Madrid B",
    fundationYear: 1986,
    city: "Madrid"
  },
  {
    name: "FC Barcelona B",
    fundationYear: 1970,
    city: "Barcelona"
  },
  {
    name: "Manchester United U23",
    fundationYear: 1950,
    city: "Manchester"
  },
  {
    name: "Juventus U23",
    fundationYear: 1929,
    city: "Turin"
  }
];

let playerList = [
  { name: "Iker", lastname: "Casillas", position: "Portero", jerseyNumber: 1 },
  { name: "Carles", lastname: "Puyol", position: "Defensa", jerseyNumber: 2 },
  { name: "Fernando", lastname: "Hierro", position: "Defensa", jerseyNumber: 3 },
  { name: "Andres", lastname: "Iniesta", position: "Medio", jerseyNumber: 4 },
  { name: "Karim", lastname: "Benzema", position: "Delantero", jerseyNumber: 5 },
  { name: "Ter", lastname: "Stegen", position: "Portero", jerseyNumber: 6 },
  { name: "Gerard", lastname: "Piqué", position: "Defensa", jerseyNumber: 7 },
  { name: "Manolo", lastname: "Sanchís", position: "Defensa", jerseyNumber: 8 },
  { name: "Arda", lastname: "Turan", position: "Medio", jerseyNumber: 9 },
  { name: "David", lastname: "Villa", position: "Delantero", jerseyNumber: 10 },
  { name: "Jan", lastname: "Oblak", position: "Portero", jerseyNumber: 11 },
  { name: "Sergio", lastname: "Reguilón", position: "Defensa", jerseyNumber: 12 },
  { name: "Dani", lastname: "Carvajal", position: "Defensa", jerseyNumber: 13 },
  { name: "Xavi", lastname: "Hernández", position: "Medio", jerseyNumber: 14 },
  { name: "Lionel", lastname: "Messi", position: "Delantero", jerseyNumber: 15 },
  { name: "Víctor", lastname: "Valdés", position: "Portero", jerseyNumber: 16 },
  { name: "Antonio", lastname: "Rüdiger", position: "Defensa", jerseyNumber: 17 },
  { name: "Albert", lastname: "Ferrer", position: "Defensa", jerseyNumber: 18 },
  { name: "Luka", lastname: "Modric", position: "Medio", jerseyNumber: 19 },
  { name: "Cristiano", lastname: "Ronaldo", position: "Delantero", jerseyNumber: 20 },
];

const fullSeed = async () => {
  try {
    // CONEXION
    const database = await connect();

    // BORRADO
    await Player.collection.drop();
    await Team.collection.drop();
    console.log("Borrados players y teams");

    // CREACION DOCUMENTOS
    teamList = teamList.map((team) => new Team(team));
    // CREACION DE LOS OTROS DOCUMENTOS
    playerList = playerList.map((elem) => new Player(elem));


    let cnt=0;
    for (let i = 0; i < teamList.length; i++) {
      const team=teamList[i];
      for (let j = 0; j < 5; j++) {
        const player= playerList[cnt];
        player.team=team._id;
        cnt++;
      }
    }

    await Team.insertMany(teamList);
    await Player.insertMany(playerList);
    console.log("Creadas relaciones correctamente");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

fullSeed();
