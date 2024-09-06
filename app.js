<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
<script src="app.js"></script>
function initMap() {
  const map = new google.maps.Map(document.getElementById("https://maps.app.goo.gl/FiHpVtcsVXq4r68Q6"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.onload = initMap;
document.getElementById('request-ride-btn').addEventListener('click', function () {
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    
    alert(`Ride requested from ${pickup} to ${dropoff}`);
});
