var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < NumberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    mixsound(buttonInnerHTML);

    // Add more cases for other buttonInnerHTML values if needed
    // case "a":
    //   var audio = new Audio("tom-2.mp3");
    //   audio.play();
    //   break;

    // Handle other cases here
  });
}

// if button us pressed it will make sound

document.addEventListener("keypress", function (event) {
  /* alert("key was pressed!"); */
  /*  console.log(event); */
  mixsound(event.key);
});

function mixsound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log("Invalid buttonInnerHTML");
  }
}

/* var audio = new Audio("../src/mp/tom-1.mp3");
    audio.play(); */

/* we take this as .drum because we wamt to be specific for the length of the drum bit only like if any new button element is added into out
html ans we don't want to include this into thpse button then we can do it by using id .drum */
/* for (var i = 0; i < NumberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    alert("I got Clicked!");
  }
} */
