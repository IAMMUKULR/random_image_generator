img_array = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

function random_image() {
  var index = Math.floor(Math.random() * img_array.length);
  var select = img_array[index];
  var ch1 = document.getElementById("check1");
  if (ch1.checked == true) {
    document.getElementById("img_show1").src = `./${select}`;

    setTimeout(doSomething, 200);
    function doSomething() {
      document.getElementById("check1").checked = false;
    }
  }
  var ch2 = document.getElementById("check2");
  if (ch2.checked == true) {
    document.getElementById("img_show2").src = `./${select}`;
    setTimeout(doSomething, 200);
    function doSomething() {
      document.getElementById("check2").checked = false;
      setTimeout(doSomething, 200);
      function doSomething() {
        document.getElementById("check2").checked = false;
      }
    }
  }
  var ch3 = document.getElementById("check3");
  if (ch3.checked == true) {
    document.getElementById("img_show3").src = `./${select}`;
    setTimeout(doSomething, 200);
    function doSomething() {
      document.getElementById("check3").checked = false;
    }
  }
  var ch4 = document.getElementById("check4");
  if (ch4.checked == true) {
    document.getElementById("img_show4").src = `./${select}`;
    setTimeout(doSomething, 200);
    function doSomething() {
      document.getElementById("check4").checked = false;
    }
  }
}
