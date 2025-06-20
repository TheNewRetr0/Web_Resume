

function copyEmail() {
  const email = "oscarluna1318@gmail.com";
  navigator.clipboard.writeText(email).then(function() {
    const msg = document.getElementById("copyMessage");
    msg.style.display = "inline";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000); // hide after 2 seconds
  }, function(err) {
    console.error("Failed to copy email: ", err);
  });
}

function copyPhone() {
  const phone = "+526565790106";
  navigator.clipboard.writeText(phone).then(function() {
    const msg = document.getElementById("phoneMessage");
    msg.style.display = "inline";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  }, function(err) {
    console.error("Error al copiar el número: ", err);
  });
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}