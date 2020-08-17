const {Client } = require('pg')

const local_db={
  user: 'postgres',
  host: 'localhost',
  database:'foodfactory',// 'cssi','cssi_local',
  password: 'Blackstraw',
  port: 5432,
};
//

const client = new Client(local_db);
  //var clientconnection=client.connect()

  client.connect(function (err) {
    if (!err) {
      console.log("Database is connected ... nn");
    } else {
      console.log(err)
      console.log("Error connecting database ... nn");
    }
  });
  module.exports = client;
 // module.exports=clientconnection;