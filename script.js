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
	window.location.href="page 2.html";
	
	});
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
				var elem=$("<div class='cont col-md-4'></div>");
				var img=$("<img id='img1'>").attr("src",product["image"]);
				var names=$("<div class='name'></div>").text(product["cuisine_name"]);
		
			//console.log(img);
			elem=$(elem).append(img,names);
			$(".cuisine").append(elem);
			//var name=$($(this).find("names")).text();
			//var imgf=$($(this).find("img")).attr();
			//localStorage.setItem("cuisinename",name);
			//localStorage.setItem("images",imgf);
					
			
		});
		}
		
		
	
	});
	
		
});

	