//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

//Button Clicked Function
function btnClicked() {
  //Variable Definitions
  let q1 = document.getElementById("q1").value.toLowerCase();
  let q2 = document.getElementById("q2").value.toLowerCase();
  let q3 = document.getElementById("q3").value.toLowerCase();
  let q4 = document.getElementById("q4").value.toLowerCase();
  let q5 = document.getElementById("q5").value.toLowerCase();

  let amountright = 0;
  //Question 1
  if (
    q1 === "gpu" ||
    q1 === "graphics processing unit" ||
    q1 === "video card" ||
    q1 === "graphics card"
  ) {
    amountright++;
    document.getElementById("q1").style.borderColor = "green";
  } else {
    document.getElementById("q1").style.borderColor = "red";
  }
  //Question 2
  if (q2 === "hdd" || q2 === "hard drive") {
    amountright++;
    document.getElementById("q2").style.borderColor = "green";
  } else {
    document.getElementById("q2").style.borderColor = "red";
  }
  //Question 3
  if (q3 === "amd" || q3 === "advanced micro devices") {
    amountright++;
    document.getElementById("q3").style.borderColor = "green";
  } else {
    document.getElementById("q3").style.borderColor = "red";
  }
  //Question 4
  if (q4 === "modular") {
    amountright++;
    document.getElementById("q4").style.borderColor = "green";
  } else {
    document.getElementById("q4").style.borderColor = "red";
  }
  //Question 5
  if (q5 === "motherboard" || q5 === "mobo") {
    amountright++;
    document.getElementById("q5").style.borderColor = "green";
  } else {
    document.getElementById("q5").style.borderColor = "red";
  }

  //Define percent
  let percent = (amountright / 5) * 100;

  //Define Output
  let ans = amountright + "/5 Correct " + percent + "%";
  let output2 = document.getElementById("output2");
  let output = document.getElementById("output");

  //output
  output.innerHTML = ans;

  if (amountright == 0) {
    output2.innerHTML = " You need help";
  }
  if (amountright == 1) {
    output2.innerHTML = " You might want to get your eyes checked";
  }
  if (amountright == 2) {
    output2.innerHTML = " How much attention were you paying?";
  }
  if (amountright == 3) {
    output2.innerHTML = " You should look back at the about section";
  }
  if (amountright == 4) {
    output2.innerHTML = " Almost There";
  }
  if (amountright == 5) {
    output2.innerHTML = " Congratulations";
  }
}
