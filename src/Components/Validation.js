function Validation(data) {
  if (data.question === "" || data.A === "" || data.B === "" || data.C === "" || data.D === ""){
    alert("Please Enter All Details...")
    return false;
  }
  else if (data.answer === "") {
    alert("Plese Select An Option...")
    return false;
  }
}

export default Validation