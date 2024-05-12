let val = document.querySelector(".input");
const button = document.querySelector(".submit");
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = parseInt(val.value);
    value % 2 == 0 ? alert("Even") : alert("Odd");
    val.value =null;
  }
});
button.addEventListener("click",()=>{
    const value = parseInt(val.value);
    value % 2 == 0 ? alert("Even") : alert("Odd");
    val.value =null;
})