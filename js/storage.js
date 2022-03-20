export function setTheme() {
  let theme = getTheme();
  localStorage.setItem("speecher-theme", theme == "light" ? "dark" : "light");
}
export function getTheme() {
  let theme = localStorage.getItem("speecher-theme");
  if (!theme) {
    localStorage.setItem("speecher-theme", "light");
    theme = "light";
  }
  return theme;
}
