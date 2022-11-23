function getVal() {
  const val = document.getElementById("calendar").value;
  const date = document.getElementById('date').innerHTML= val;

  let year = new Date (val) .getFullYear();
  let month = new Date (val) .getMonth() + 1;
  let day = new Date (val) .getDate();
  let yearNow =new Date().getFullYear();
  let monthNow =new Date().getMonth() + 1;
  let dayNow =new Date().getDate();

  document.getElementById("conc").innerHTML = `You've lived :`;
  document.getElementById("yil").innerHTML = yearNow - year;
  document.getElementById("oy").innerHTML = monthNow - month;
  document.getElementById("kun").innerHTML = dayNow - day;

  console.log(Date.now)
}