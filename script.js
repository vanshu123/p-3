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
	var abc= $("<option class='local'></option>").text(product["location_name"]);
	//location=$(location).append(abc);
	$("#dropdown").append(abc);

});
$("#dropdown").change(function(){
	localStorage.setItem("location",this.value);
});

}
	});
	$("#order").click(function(){
		window.location.href="page 2.html";
	});


	$('.locid').append(localStorage.getItem("location"));

	//after clicking order now button


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
				var id=$("<div class='proid'></div>").text(product["id"]);

				
			//console.log(img);
			elem=$(elem).append(img,names,id);
			$(".cuisine").append(elem);

			});
			
			
	
			$(".cont").click(function(){
				var i=$($(this).find(".proid")).text();
				localStorage.setItem("id",i);
				window.location.href="page 3.html";
			});
			$(".drop").change(function() {
				var a=$($(this).find(".proid")).text();
				localStorage.setItem("ida",a);
				window.location.href="page 3.html";
				localStorage.setItem("cuisine",this.value);
			});
	}

		});
		var idvalue=parseInt(localStorage.getItem("id"));

$.ajax({
		url:"http://acadprojects.com/py/fabsos/cuisines?location_id=1",
		type:'GET',
		data:{
"location_id":"1"
		},
		success:function(response) {
			console.log(response);
			var data= response["cuisines"];
			data.forEach(function(product,index){
				var cname=$("<option class='copt'></option>").text(product["cuisine_name"]);
				var cid=$("<option class='aaid'></option>").text(product["id"]);
				$(".drop").append(cname);
			});
			
		}
});
$(".drop").change(function() {
	//var cuopt=localStorage.getItem("id");
	var cuopt=parseInt(localStorage.getItem("ida"));
		$.ajax ({
		url:"https://acadprojects.com/py/fabsos/items?cuisines_id=153",
		type:'GET',
	    data: {
"cuisines_id":cuopt
		},
		success:function(response){
			console.log(response);			
			var data=response["data"];
			data.forEach(function(product,index){	
			
			var elemen="<div class='fooditems col-md-4 col-md-offset-2'></div>";
			var imag=$("<img id='ima'>").attr("src",product["image"]);
			var price=$("<div class='foodp'></div>").text(product["price"]);
			var foodname=$("<div class='foodn'></div>").text(product["item_name"]);
			var sub="<input id='subt1' name='subtract' value='-' type='button'>";
			var box="<input id='qty' name='qty' value='0' style='width: 50px; text-align: center;' type='text'>";
			var add="<input id='add1' name='add' value='+' type='button'>"
			var veg=$("<span class='vegetarianicon'>⊡</span>");
			var nv="<img src='img/nv.jpg' class='nonv'>";
			//var non=$("<div class='abcd'></div>").text(product["is_vegetarian"]);
		    var non= JSON.parse(product["is_vegetarian"]);
			if (non==true) {
			foodname=$(foodname).append(veg);
			}
			else {
			foodname=$(foodname).append(nv);
			}
			foodname=$(foodname).append(sub,box,add);
			elemen=$(elemen).append(imag,price,foodname);
			
			$(".area").append(elemen);
			
			});
		}

	});
});


				
			
	$.ajax ({
		url:"https://acadprojects.com/py/fabsos/items?cuisines_id=153",
		type:'GET',
	    data: {
"cuisines_id":idvalue
		},
		success:function(response){
			console.log(response);			
			var data=response["data"];
			data.forEach(function(product,index){	
			
			var elemen="<div class='fooditems col-md-4 col-md-offset-2'></div>";
			var imag=$("<img id='ima'>").attr("src",product["image"]);
			var price=$("<div class='foodp'></div>").text(product["price"]);
			var foodname=$("<div class='foodn'></div>").text(product["item_name"]);
			var sub="<input id='subt1' name='subtract' value='-' type='button'>";
			var box="<input id='qty' name='qty' value='0' style='width: 50px; text-align: center;' type='text'>";
			var add="<input id='add1' name='add' value='+' type='button'>"
			var veg=$("<span class='vegetarianicon'>⊡</span>");
			var nv="<img src='img/nv.jpg' class='nonv'>";
			//var non=$("<div class='abcd'></div>").text(product["is_vegetarian"]);
		    var non= JSON.parse(product["is_vegetarian"]);
			if (non==true) {
			foodname=$(foodname).append(veg);
			}
			else {
			foodname=$(foodname).append(nv);
			}
			foodname=$(foodname).append(sub,box,add);
			elemen=$(elemen).append(imag,price,foodname);
			
			$(".area").append(elemen);
			
			});
		}

	});


// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
});
