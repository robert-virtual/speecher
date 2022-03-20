import { getTheme, setTheme } from "./storage.js";

const changeTheme = document.getElementById("change-theme");

const root = document.documentElement;
changeTheme.onclick = () => {
  setTheme();
  themehandler();
};

const themehandler = () => {
  if (getTheme() == "light") {
    //changeTheme.textContent == "🌚"
    // pasar a tema oscuro
    changeTheme.textContent = "🌞";
    //   --bg-color: #222;
    root.style.setProperty("--bg-color", "#222");
    //   --text-color: white;
    root.style.setProperty("--text-color", "white");
    //   --nav-bg: #333;
    root.style.setProperty("--nav-bg", "#333");
    return;
  }
  // pasar a tema claro
  changeTheme.textContent = "🌚";
  //   --bg-color: #222;
  root.style.setProperty("--bg-color", "white");
  //   --text-color: white;
  root.style.setProperty("--text-color", "#444");
  //   --nav-bg: #333;
  root.style.setProperty("--nav-bg", "white");
};

themehandler();
