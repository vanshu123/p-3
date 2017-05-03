$(document).ready(function(){
	$.ajax({
		url:"http://acadprojects.com/py/fabsos/location?city_id=1",
		type:'GET',
		data:{
"city_id":"1"
		},
success:function(response){
console.log(response);
var data=response["data"]
data.forEach(function(product,index){
	// var location= "<option class='location' ></div>";
	var abc= $("<option class='dddd'></option>").text(product["location_name"]);
	//location=$(location).append(abc);
	$("#dropdown").append(abc);
});
}
	});
	
	
	
	//after clicking order now button
	$("#order").click(function(){
		
	
	$.ajax({
		url:"http://acadprojects.com/py/fabsos/cuisines?location_id=1",
		type:'GET',
		data:{
"location_id":"1"
		},
		
		success:function(response){
			console.log(response);
			var data=response["cuisines"]
			data.forEach(function(product,index){
				var names=$("<div class='name'></div>").text(product["cuisine_name"]);
			console.log(names)
			
		});
		}
		
		
	});
	window.location.href="page 2.html";
	});
	
		
});

	