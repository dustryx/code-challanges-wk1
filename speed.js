function speedDetector() {
    const speedInput = parseFloat(prompt("Enter car speed:"));
    const speedLimit = 70;
    let points = 0;
  
    if (speedInput > speedLimit) {
      points = Math.floor((speedInput - speedLimit) / 5);
    }
  
    if (points > 12) {
      alert("License suspended");
    } else if (points > 0) {
      alert("Points: " + points);
    } else {
      alert("Ok");
    }
  }
  
  speedDetector();
  