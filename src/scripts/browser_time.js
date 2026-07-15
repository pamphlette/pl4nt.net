  const elem = document.getElementById('local-time');
  
  const update = () => {
    elem.textContent = new Date().toLocaleTimeString("en-US", {timeStyle: "short"});
  };

  update();
  setInterval(update, 1000); 