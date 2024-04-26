function addTextNode(text) {
    const newtext = document.createTextNode(text);
    const p1 = document.getElementById("p1");

    p1.appendChild(newtext);
  }
