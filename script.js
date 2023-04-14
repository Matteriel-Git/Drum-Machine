document.onkeydown = keyDownEvent;
document.onkeyup = keyUpEvent;

function keyDownEvent(e) {
  e = e || window.event;
  if (e.keyCode == '81') {
     document.getElementsByClassName("drum-pad0")[0].classList.add("active")
     play('Q');
     // connection.send("1");
     return false;
  }
  else if (e.keyCode == '87') {
      document.getElementsByClassName("drum-pad1")[0].classList.add("active")
      play('W');
      // connection.send("4");
      return false;
  }
  else if (e.keyCode == '69') {
      document.getElementsByClassName("drum-pad2")[0].classList.add("active")
      play('E');
     // connection.send("2");
     return false;
  }
  else if (e.keyCode == '65') {
      document.getElementsByClassName("drum-pad3")[0].classList.add("active")
      play('A');
     // connection.send("3");
     return false;
  }
  else if (e.keyCode == '83') {
    document.getElementsByClassName("drum-pad4")[0].classList.add("active")
    play('S');
   // connection.send("2");
   return false;
  }
  else if (e.keyCode == '68') {
    document.getElementsByClassName("drum-pad5")[0].classList.add("active")
    play('D');
   // connection.send("2");
   return false;
  }
  else if (e.keyCode == '90') {
    document.getElementsByClassName("drum-pad6")[0].classList.add("active")
    play('Z');
   // connection.send("2");
   return false;
  }
  else if (e.keyCode == '88') {
    document.getElementsByClassName("drum-pad7")[0].classList.add("active")
    play('X');
   // connection.send("2");
   return false;
  }  else if (e.keyCode == '67') {
    document.getElementsByClassName("drum-pad8")[0].classList.add("active")
    play('C');
   // connection.send("2");
   return false;
  }
}

function keyUpEvent(e) {
  e = e || window.event;
  if (e.keyCode === '81') {
     document.getElementsByClassName("drum-pad0")[0].classList.remove("active");
  }
  else if (e.keyCode == '87') {
      document.getElementsByClassName("drum-pad1")[0].classList.remove("active");
  }
  else if (e.keyCode == '69') {
      document.getElementsByClassName("drum-pad2")[0].classList.remove("active");
  }
  else if (e.keyCode == '65') {
      document.getElementsByClassName("drum-pad3")[0].classList.remove("active");
  }
  else if (e.keyCode == '83') {
    document.getElementsByClassName("drum-pad4")[0].classList.remove("active");
  }
  else if (e.keyCode == '68') {
    document.getElementsByClassName("drum-pad5")[0].classList.remove("active");
  }
  else if (e.keyCode == '90') {
    document.getElementsByClassName("drum-pad6")[0].classList.remove("active");
  }
  else if (e.keyCode == '88') {
    document.getElementsByClassName("drum-pad7")[0].classList.remove("active");
  }
  else if (e.keyCode == '67') {
    document.getElementsByClassName("drum-pad8")[0].classList.remove("active");
  }
  document.getElementsByClassName("drum-pad0")[0].classList.remove("active");
}

function play(str) {
           
        if (str==="q" || str==="Q") {
    document.getElementById('display').innerHTML = "Heater 1";
  } else if (str==="w"||str==="W") {
    document.getElementById('display').innerHTML = "Heater 2";
  } else if (str==="e" || str==="E") {
    document.getElementById('display').innerHTML = "Heater 3";
  } else if (str==="a" || str==="A") {
    document.getElementById('display').innerHTML = "Heater 4";
  } else if (str==="s" || str==="S") {
    document.getElementById('display').innerHTML = "Clap";
  } else if (str==="d" || str === "D") {
    document.getElementById('display').innerHTML = "Open-HH";
  } else if (str === "z" || str === "Z") {
    document.getElementById('display').innerHTML = "Kick'n-Hat";
  } else if (str === "x" || str === "X") {
    document.getElementById('display').innerHTML = "Kick (low)";
  } else if (str === "c" || str === "C") {
    document.getElementById('display').innerHTML = "Closed-HH";
  };
       
        var audio = document.getElementById(str);
        audio.play();
      };