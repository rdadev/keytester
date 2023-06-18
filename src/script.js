//* Keytester v1.0.0 (https://rda.dev.br/keytester/)
//* Copyright 2023 Rafael de Andrade - RDADEV
//* Licenciado por GNU AFFERO GENERAL PUBLIC LICENSE 3.0 (https://github.com/rdadev/keytester/blob/main/LICENSE)

window.addEventListener('load', () => {
    start();

    const textodt = document.querySelector("#data-teste");
    const date = new Date().TolocaleString();
    

    textodt.innerHTML = "Teste realizado em <b>" + date + "</b>";
});

  function beep() {
    const volume = document.querySelector("#beep");

    if (volume.value == "Beep") {
      var contexto = new AudioContext();
      var fonte = contexto.createOscillator();
      fonte.type = "sawtooth";
      fonte.frequency.value = 1210;
      fonte.connect(contexto.destination);
      fonte.start(); 
      document.addEventListener('keyup', (event) => {
        setTimeout(function(){
          fonte.stop();
          fonte.disconnect();
          contexto.close();
        }, 100);
      });
  
      setTimeout(function(){
        fonte.stop();
        fonte.disconnect();
        contexto.close();
      }, 350);
    };
  };
  
  function start() {
    render();
  }
  
  function render() {
    pressedKey();
    activeKey();
    pressedKey();
  }
  
  function pressedKey() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      beep();
      document.getElementById(event.code).style.backgroundColor = '#007bff';
      if (event.code == 'Enter') {
        document.getElementById('Enter2').style.backgroundColor = '#007bff';
      }
      if (event.code == 'NumpadEnter') {
        document.getElementById('NumpadEnter2').style.backgroundColor = '#007bff';
      }
      if (event.code == 'MetaLeft') {
        document.getElementById('MetaLeft').style.backgroundColor = 'green';
      }
      if (event.code == 'MetaRight') {
        document.getElementById('MetaRight').style.backgroundColor = 'green';
      }
    });
  }
  
  function activeKey() {
    document.addEventListener('keyup', (event) => {
      event.preventDefault();
  
      document.getElementById(event.code).style.backgroundColor = 'green';
      if (event.code === 'Enter') {
        document.getElementById('Enter2').style.backgroundColor = 'green';
      }
      if (event.code == 'NumpadEnter') {
        document.getElementById('NumpadEnter2').style.backgroundColor = 'green';
      }
    });
  }


// TECLAS
const keys = [
  {
    key: "Backspace",
    location: 0,
    wich: 8,
    code: "Backspace",
  },
  {
    key: "Tab",
    location: 0,
    wich: 9,
    code: "Tab",
  },
  {
    key: "Enter",
    location: 0,
    wich: 13,
    code: "Enter",
  },

  {
    key: "Shift",
    location: 1,
    wich: 16,
    code: "ShiftLeft",
  },
  {
    key: "Shift",
    location: 2,
    wich: 16,
    code: "ShiftRight",
  },
  {
    key: "Control",
    location: 1,
    wich: 17,
    code: "ControlLeft",
  },
  {
    key: "Control",
    location: 2,
    wich: 17,
    code: "ControlRight",
  },
  {
    key: "Alt",
    location: 1,
    wich: 18,
    code: "AltLeft",
  },
  {
    key: "AltGraph",
    location: 2,
    wich: 225,
    code: "AltRight",
  },
  {
    key: "pause/break",
    location: 0,
    wich: 19,
    code: "undefined",
  },
  {
    key: "CapsLock",
    location: 0,
    wich: 20,
    code: "CapsLock",
  },
  {
    key: "Escape",
    location: 0,
    wich: 27,
    code: "Escape",
  },
  {
    key: "(Space character)",
    location: 0,
    wich: 32,
    code: "Space",
  },
  {
    key: "PageUp",
    location: 0,
    wich: 33,
    code: "PageUp",
  },
  {
    key: "PageDown",
    location: 0,
    wich: 34,
    code: "PageDown",
  },
  {
    key: "End",
    location: 0,
    wich: 35,
    code: "End",
  },
  {
    key: "Home",
    location: 0,
    wich: 36,
    code: "Home",
  },
  {
    key: "ArrowLeft",
    location: 0,
    wich: 37,
    code: "ArrowLeft",
  },
  {
    key: "ArrowUp",
    location: 0,
    wich: 38,
    code: "ArrowUp",
  },
  {
    key: "ArrowRight",
    location: 0,
    wich: 39,
    code: "ArrowRight",
  },
  {
    key: "ArrowDown",
    location: 0,
    wich: 40,
    code: "ArrowDown",
  },
  {
    key: "Insert",
    location: 0,
    wich: 45,
    code: "Insert",
  },
  {
    key: "Delete",
    location: 0,
    wich: 46,
    code: "Delete",
  },
  {
    key: "0",
    location: 0,
    wich: 48,
    code: "Digit0",
  },
  {
    key: "1",
    location: 0,
    wich: 49,
    code: "Digit1",
  },
  {
    key: "2",
    location: 0,
    wich: 50,
    code: "Digit2",
  },
  {
    key: "3",
    location: 0,
    wich: 51,
    code: "Digit3",
  },
  {
    key: "4",
    location: 0,
    wich: 52,
    code: "Digit4",
  },
  {
    key: "5",
    location: 0,
    wich: 53,
    code: "Digit5",
  },
  {
    key: "6",
    location: 0,
    wich: 54,
    code: "Digit6",
  },
  {
    key: "7",
    location: 0,
    wich: 55,
    code: "Digit7",
  },
  {
    key: "8",
    location: 0,
    wich: 56,
    code: "Digit8",
  },
  {
    key: "9",
    location: 0,
    wich: 57,
    code: "Digit9",
  },
  {
    key: "a",
    location: 0,
    wich: 65,
    code: "KeyA",
  },
  {
    key: "b",
    location: 0,
    wich: 66,
    code: "KeyB",
  },
  {
    key: "c",
    location: 0,
    wich: 67,
    code: "KeyC",
  },
  {
    key: "d",
    location: 0,
    wich: 68,
    code: "KeyD",
  },
  {
    key: "e",
    location: 0,
    wich: 69,
    code: "KeyE",
  },
  {
    key: "f",
    location: 0,
    wich: 70,
    code: "KeyF",
  },
  {
    key: "g",
    location: 0,
    wich: 71,
    code: "KeyG",
  },
  {
    key: "h",
    location: 0,
    wich: 72,
    code: "KeyH",
  },
  {
    key: "i",
    location: 0,
    wich: 73,
    code: "KeyI",
  },
  {
    key: "j",
    location: 0,
    wich: 74,
    code: "KeyJ",
  },
  {
    key: "k",
    location: 0,
    wich: 75,
    code: "KeyK",
  },
  {
    key: "l",
    location: 0,
    wich: 76,
    code: "KeyL",
  },
  {
    key: "m",
    location: 0,
    wich: 77,
    code: "KeyM",
  },
  {
    key: "n",
    location: 0,
    wich: 78,
    code: "KeyN",
  },
  {
    key: "o",
    location: 0,
    wich: 79,
    code: "KeyO",
  },
  {
    key: "p",
    location: 0,
    wich: 80,
    code: "KeyP",
  },
  {
    key: "q",
    location: 0,
    wich: 81,
    code: "KeyQ",
  },
  {
    key: "r",
    location: 0,
    wich: 82,
    code: "KeyR",
  },
  {
    key: "s",
    location: 0,
    wich: 83,
    code: "KeyS",
  },
  {
    key: "t",
    location: 0,
    wich: 84,
    code: "KeyT",
  },
  {
    key: "u",
    location: 0,
    wich: 85,
    code: "KeyU",
  },
  {
    key: "v",
    location: 0,
    wich: 86,
    code: "KeyV",
  },
  {
    key: "w",
    location: 0,
    wich: 87,
    code: "KeyW",
  },
  {
    key: "x",
    location: 0,
    wich: 88,
    code: "KeyX",
  },
  {
    key: "y",
    location: 0,
    wich: 89,
    code: "KeyY",
  },
  {
    key: "z",
    location: 0,
    wich: 90,
    code: "KeyZ",
  },
  {
    key: "left window key",
    location: 0,
    wich: 91,
    code: "undefined",
  },
  {
    key: "right window key",
    location: 0,
    wich: 92,
    code: "undefined",
  },
  {
    key: "ContextMenu",
    location: 0,
    wich: 93,
    code: "ContextMenu",
  },
  {
    key: "numpad 0",
    location: 0,
    wich: 96,
    code: "undefined",
  },
  {
    key: "numpad 1",
    location: 0,
    wich: 97,
    code: "undefined",
  },
  {
    key: "numpad 2",
    location: 0,
    wich: 98,
    code: "undefined",
  },
  {
    key: "numpad 3",
    location: 0,
    wich: 99,
    code: "undefined",
  },
  {
    key: "numpad 4",
    location: 0,
    wich: 100,
    code: "undefined",
  },
  {
    key: "numpad 5",
    location: 0,
    wich: 101,
    code: "undefined",
  },
  {
    key: "numpad 6",
    location: 0,
    wich: 102,
    code: "undefined",
  },
  {
    key: "numpad 7",
    location: 0,
    wich: 103,
    code: "undefined",
  },
  {
    key: "numpad 8",
    location: 0,
    wich: 104,
    code: "undefined",
  },
  {
    key: "numpad 9",
    location: 0,
    wich: 105,
    code: "undefined",
  },
  {
    key: "multiply",
    location: 0,
    wich: 106,
    code: "undefined",
  },
  {
    key: "add",
    location: 0,
    wich: 107,
    code: "undefined",
  },
  {
    key: "subtract",
    location: 0,
    wich: 109,
    code: "undefined",
  },
  {
    key: "decimal point",
    location: 0,
    wich: 110,
    code: "undefined",
  },
  {
    key: "divide",
    location: 0,
    wich: 111,
    code: "undefined",
  },
  {
    key: "F1",
    location: 0,
    wich: 112,
    code: "F1",
  },
  {
    key: "F2",
    location: 0,
    wich: 113,
    code: "F2",
  },
  {
    key: "F3",
    location: 0,
    wich: 114,
    code: "F3",
  },
  {
    key: "F4",
    location: 0,
    wich: 115,
    code: "F4",
  },
  {
    key: "F5",
    location: 0,
    wich: 116,
    code: "F5",
  },
  {
    key: "F6",
    location: 0,
    wich: 117,
    code: "F6",
  },
  {
    key: "F7",
    location: 0,
    wich: 118,
    code: "F7",
  },
  {
    key: "F8",
    location: 0,
    wich: 119,
    code: "F8",
  },
  {
    key: "F9",
    location: 0,
    wich: 120,
    code: "F9",
  },
  {
    key: "F10",
    location: 0,
    wich: 121,
    code: "F10",
  },
  {
    key: "F11",
    location: 0,
    wich: 122,
    code: "F11",
  },
  {
    key: "F12",
    location: 0,
    wich: 123,
    code: "F12",
  },
  {
    key: "undefined",
    location: 0,
    wich: 144,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 145,
    code: "undefined",
  },
  {
    key: "ç",
    location: 0,
    wich: 186,
    code: "Semicolon",
  },
  {
    key: "=",
    location: 0,
    wich: 187,
    code: "Equal",
  },
  {
    key: ",",
    location: 0,
    wich: 188,
    code: "Comma",
  },
  {
    key: "-",
    location: 0,
    wich: 189,
    code: "Minus",
  },
  {
    key: ".",
    location: 0,
    wich: 190,
    code: "Period",
  },
  {
    key: ";",
    location: 0,
    wich: 191,
    code: "Slash",
  },
  {
    key: "'",
    location: 0,
    wich: 192,
    code: "Backquote",
  },
  {
    key: "Dead",
    location: 0,
    wich: 219,
    code: "BracketLeft",
  },
  {
    key: "]",
    location: 0,
    wich: 220,
    code: "Backslash",
  },
  {
    key: "[",
    location: 0,
    wich: 221,
    code: "BracketRight",
  },
  {
    key: "Dead",
    location: 0,
    wich: 222,
    code: "Quote",
  },
  {
    key: "undefined",
    location: 0,
    wich: 223,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 224,
    code: "undefined",
  },
  {
    key: "AltGraph",
    location: 2,
    wich: 225,
    code: "AltRight",
  },
  {
    key: "undefined",
    location: 0,
    wich: 226,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 230,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 231,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 233,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 234,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 235,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 240,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 242,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 243,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 244,
    code: "undefined",
  },
  {
    key: "uundefined",
    location: 0,
    wich: 251,
    code: "undefined",
  },
  {
    key: "undefined",
    location: 0,
    wich: 255,
    code: "undefined",
  },
];
