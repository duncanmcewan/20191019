var team = {"name":"McLaren","location":"Woking","principal":"Zak Brown"};

//console.log(JSON.stringify(team,null,4));

var date = new Date();

team.drivers = [{"name":"Carlos Sainz","dob":"01/09/1994"},{"name":"Lando Norris","dob":"13/11/1999"}];
//console.log(JSON.stringify(team,null,4));

team.drivers[0].points = [25,18,0,25];
team.drivers[1].points = [12,10,25,8];
//console.log(JSON.stringify(team,null,4));

team.totalPoints = (function () {
  var total = 0;

  for (var i in this.drivers) {
    for (var pts in this.drivers[i].points) {
      total+= this.drivers[i].points[pts];
      //console.log(total);
    }
  }
  return total;
});

console.log(team.totalPoints());

team.drivers[0].points.push(25);
team.drivers[1].points.push(10);

console.log(team.totalPoints());

console.log(JSON.stringify(team,null,4));
