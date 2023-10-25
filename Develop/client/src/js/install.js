const butInstall = document.getElementById('buttonInstall');

let appInstalled = localStorage.getItem("appInstalled") || false
let installEvent
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  installEvent = event
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  await installEvent.prompt()
  //butInstall.setAttribute("disabled", true)
})

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log("App Installed")
  butInstall.style.visibility = "hidden"
  localStorage.setItem("appInstalled", "true")
});

console.log(appInstalled)
if(appInstalled){
  butInstall.style.visibility = "hidden"
}else{
  butInstall.style.visibility = "visible"
}