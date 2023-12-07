database.ref('points').once('value').then((snapshot) => {
    const points = snapshot.val();
    const distance = calculateDistance(points.point1, points.point2);
    console.log(`The distance is ${distance} km`);
  });
  

  function calculateDistance(point1, point2) {
    const toRad = x => x * Math.PI / 180;
    const R = 6371; // Radius of the earth in km
  
    const dLat = toRad(point2.lat - point1.lat);
    const dLon = toRad(point2.lng - point1.lng); 
  
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(toRad(point1.lat)) * Math.cos(toRad(point2.lat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distance in km
    return distance;
  }
  