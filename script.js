
function sendAlert() {
  if (!navigator.geolocation) {
    alert('Geolocation not supported');
    return;
  }
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude } = pos.coords;
    fetch("http://localhost:5000/api/alert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, latitude, longitude })
    }).then(res => res.json()).then(data => {
      alert(data.message);
    });
  });
}
