// Initialize Hammer on the body
var hammerSwipe = new Hammer(document.getElementById('gestureBox'));

// Initial rotation angle
var rotationAngle = 0;

// Display alert for swipe gesture
alert("Swipe left or right to rotate the box.");

// Unique gesture interaction for swiping
hammerSwipe.on("swiperight swipeleft", function (event) {
  rotateBox();
});

function rotateBox() {
  const gestureBox = document.getElementById('gestureBox');
  rotationAngle = 45;
  gestureBox.style.transform = `rotate(${rotationAngle}deg)`;
  
  // Return to the original position after a delay
  setTimeout(() => {
    gestureBox.style.transform = 'rotate(0deg)';
  }, 1000);
}
