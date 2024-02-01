/* <label for="input-file" id="drop-img">
<input type="file" id="input-file" hidden>
<div id="view-img"> */
const dropArea = document.getElementById("drop-area");

const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("view-img");

inputFile.addEventListener("change", uploadImg);

function uploadImg() {
  let imageLink = URL.createObjectURL(inputFile.files[0]);
  imgView.style.backgroundImage = `url(${imageLink})`;
  imgView.textContent = "";
  imgView.style.border = 0;
}

dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
});
