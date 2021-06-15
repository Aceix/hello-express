const now = new Date();
const curentHour = now.getHours()
let greeting = "";

/**
 * Date.getHours() retuns hours integer in [0, 23]
 */
if(curentHour < 12) {
  greeting = "Good morning!"
} else if(curentHour < 16) {
  greeting = "Good afternoon"
} else {
  greeting = "Good evening"
}

const inviteText = document.getElementById("inviteText").textContent
document.getElementById("inviteText").textContent = `${greeting}! ${inviteText}`
