const butInstall = document.getElementById('buttonInstall');

let installEvent
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  butInstall.style.visibility = "visible"
  installEvent = event

});

// TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});
butInstall.addEventListener("click", () => {
  installEvent.prompt()
  butInstall.setAttribute("disabled", true)
})

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log("App Installed")
  butInstall.style.visibility = "hidden"
});