var speedOnfoot = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedplane = 800;

var elForm = document.querySelector(".form");

var userDistances =  Number(document.querySelector('.input').value); 

var error = document.querySelector('.error')
 
var onfootResult = document.querySelector(".onfoot_result");  

var bikeResult = document.querySelector(".bike_result");

var carResult = document.querySelector(".car_result");

var planeResult = document.querySelector(".plane_result");

function time(num){
   var hour = Math.floor(num);
   var minute = Math.floor((num - hour) * 60);

   if(hour > 0 && minute > 0){
      return `${hour} soat ${minute} minut`
   }else if(hour > 0){
      return `${hour} soat`
   }else if(minute > 0){
      return `${minute} minut`
   }else{
      return ""
   }
}

elForm.addEventListener('submit', function (evt) {
   evt.preventDefault();

   var userDistances =  Number(document.querySelector('.input').value); 

   userDistances.value = null;

   if (userDistances <= 0 || isNaN(userDistances)) {
		error.textContent = 'Raqam kiriting birodar!'   ;
		return;
	} else {
      error.textContent = ''
	}

   var resultOnfoot = time(userDistances / speedOnfoot);
   var resultBike = time(userDistances / speedBike);
   var resultCar = time(userDistances / speedCar);
   var resultPlane = time(userDistances / speedplane);

   onfootResult.textContent = resultOnfoot;
   bikeResult.innerHTML = resultBike;
   carResult.innerHTML = resultCar;
   planeResult.innerHTML = resultPlane;
})


