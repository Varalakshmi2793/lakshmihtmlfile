// Write your code here:
function buyBike(){
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Bought Royal Enfield Himalayan");
      }, 2000);    
    });
  }
  function planTrip(){
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("Trip to Ladakh planned");
      }, 1000);
    });
  }
  function reachLadak(){
    return new Promise((resolve, reject)=>{
      setTimeout(function() {
        resolve("Reached Ladak");
        
      }, 1000);
    });
  }
  function visitPangongLake(){
    
      setTimeout(() =>{
        console.log("Visited Pangong Lake");
      }, 500);
  
  }
  buyBike().then(function(result) {
    console.log(result);
    reachLadakh().then(function(result) {
      console.log(result);
      visitPangongLake();
      })
    })
  
  // Do not touch the code below:
  module.exports = {
    buyBike,
    planTrip,
    reachLadakh,
    visitPangongLake,
  };
  