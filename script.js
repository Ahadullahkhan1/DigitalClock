function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12 || 12;
  
    const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock
  updateClock();
  