function myFunction(e) {
	var x = e.clientX;
	var y = e.clientY;
	var coor = "Координаты: " + x + " " + y;
	document.getElementById("coor").innerHTML = coor; 

}
function clearCoor() {
    document.getElementById("coor").innerHTML = "Наведите мышью на сокровище";
}