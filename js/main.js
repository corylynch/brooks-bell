jQuery(document).ready(function($) {
	//Initiate home page slider
	var mySwiper = new Swiper('.swiper-container', {
		speed: 400,
		spaceBetween: 100,
		pagination: ".swiper-pagination",
		paginationClickable: true
	});
	//Initiate services slider
	var serviceSwiper = new Swiper('#clients .swiper-container', {
		speed: 400,
		spaceBetween: 100,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});
	//Click on a hex, slide to correct slide
	$(".hex-s").click(function() {
		var slideNum = $(this).find("svg").attr("slider-target");
		mySwiper.slideTo($(".slide" + slideNum).index(), 1000, false);
		$(".hex-s").removeClass("active");
		$(this).toggleClass("active");
	});
	//Mobile Accordion
	var acc = $(".accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
			$(this).toggleClass("active");
			if ($(this).hasClass("active") == true) {
				$(this).find("i").removeClass("fa-plus-circle");
				$(this).find("i").addClass("fa-minus-circle");
			} else {
				$(this).find("i").addClass("fa-plus-circle");
				$(this).find("i").removeClass("fa-minus-circle");
			}
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		}
	}
	document.getElementById("open-add").onclick = function() {
		$(this).toggleClass("active");
		if ($(this).hasClass("active") == true) {
			$(this).removeClass("fa-chevron-down");
			$(this).addClass("fa-chevron-up");
		} else {
			$(this).addClass("fa-chevron-down");
			$(this).removeClass("fa-chevron-up");
		}
		var panel = document.getElementById("address");
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}
	$("#close").click(function() {
		$(".contact-box").fadeOut();
	});
});
/* Service page select boxes */
$("select").change(function() {
	$(this).closest("div").addClass("selected");
	//Check if all both select boxes have the class of .selected
	$("select").click(function() {
		$(this).closest("div").addClass("selected");
		if ($(".input-group .select-inp").length == $(".input-group .select-inp.selected").length) {
			$("#submit").addClass("active");
			$("#submit").prop("disabled", false);
		}
	})
});
$("#approach").change(function() {
	var val = $(this).val();
	var chal = $("#challenge");
	$(this).find(".default").hide();
	if (val == "one") {
		chal.html("<option value='1'>Testing Backlog</option> <option value='2'>Test Ideation and Strategy</option> <option value='3'>Analytics and Post-Test Analysis</option> <option value='4'>Maturing an Existing Program</option> <option value='5' disabled>Starting a Program</option> <option value='6'>Personalization</option> <option value='7' disabled>Ongoing Guidance</option> <option value='8' disabled>Training</option> <option value='9'>Mobile and App Testing</option> <option value='10'>No Dedicated Testing Team</option>");
	} else if (val == "two") {
		chal.html("<option value='1'>Testing Backlog</option> <option value='2'>Test Ideation and Strategy</option> <option value='3'>Analytics and Post-Test Analysis</option> <option value='4'>Maturing an Existing Program</option> <option value='5'>Starting a Program</option> <option value='6'>Personalization</option> <option value='7'>Ongoing Guidance</option> <option value='8'>Training</option> <option value='9'>Mobile and App Testing</option> <option value='10' disabled>No Dedicated Testing Team</option>");
	} else if (val == "three") {
		chal.html("<option value='1'>Testing Backlog</option> <option value='2'>Test Ideation and Strategy</option> <option value='3'>Analytics and Post-Test Analysis</option> <option value='4'>Maturing an Existing Program</option> <option value='5'>Starting a Program</option> <option value='6'>Personalization</option> <option value='7'>Ongoing Guidance</option> <option value='8'>Training</option> <option value='9'>Mobile and App Testing</option> <option value='10'>No Dedicated Testing Team</option>");
	} else {
		chal.html("<option value=''>--select one--</option>");
	}
});
// Array of combinations for all results. Ex. one6 is where "one" represents the first select box val, and "6" represents the second select box
var one1 = ["Full-Service Experimentation", "Staff Augmentation"];
var one2 = ["Staff Augmentation"];
var one3 = ["Staff Augmentation"];
var one4 = ["Personalization Jumpstart", "Staff Augmentation"];
var one5 = [];
var one6 = ["Personalization Jumpstart"];
var one7 = [];
var one8 = [];
var one9 = ["Full-Service Experimentation", "Staff Augmentation"];
var one10 = ["Staff Augmentation"];
var two1 = ["Test Strategy Prioritization Training"];
var two2 = ["Analytics Bootcamp", "Customer Exploration", "Competitor Analysis", "Program Advisement", "Personalization Strategy Consulting", "Test Strategy Prioritization Training", "Specialized Training", "UserView (SM)", "UX Funnel Analysis", "Experimentation Roadmap", "User Research"];
var two3 = ["Analytics Bootcamp", "Program Advisement", "Specialized Training", "Experimentation Roadmap"];
var two4 = ["Analytics Bootcamp", "Digital Experimentation Performance Assessment", "Program Advisement", "Customer Exploration", "Center of Excellence Boot Camp", "Program Advisement", "Specialized Training", "Personalization Strategy Consulting", "Test Strategy Prioritization Training", "Experimentation Process Development", "Experimentation Roadmap"];
var two5 = ["Digital Experimentation Performance Assessment", "Center of Excellence Boot Camp", "Program Advisement", "Specialized Training", "Test Strategy Prioritization Training", "Experimentation Roadmap"];
var two6 = ["Customer Exploration", "Competitor Analysis", "Program Advisement", "Personalization Strategy Consulting", "User Research", "UserView (SM)", "UX Funnel Analysis"];
var two7 = ["Program Advisement"];
var two8 = ["Analytics Bootcamp", "Center of Excellence Boot Camp", "Test Strategy Prioritization Training", "Specialized Training"];
var two9 = ["Program Advisement"];
var two10 = [];
var three1 = ["Full-Service Experimentation", "Staff Augmentation", "Test Strategy Prioritization Training"];
var three2 = ["Staff Augmentation", "Analytics Bootcamp", "Customer Exploration", "Competitor Analysis", "Program Advisement", "Personalization Strategy Consulting", "Test Strategy Prioritization Training", "Specialized Training", "UserView (SM)", "UX Funnel Analysis", "Experimentation Roadmap", "User Research"];
var three3 = ["Staff Augmentation", "Analytics Bootcamp", "Program Advisement", "Specialized Training", "Experimentation Roadmap"];
var three4 = ["Personalization Jumpstart", "Staff Augmentation", "Analytics Bootcamp", "Digital Experimentation Performance Assessment", "Program Advisement", "Customer Exploration", "Center of Excellence Boot Camp", "Program Advisement", "Specialized Training", "Personalization Strategy Consulting", "Test Strategy Prioritization Training", "Experimentation Process Development", "Experimentation Roadmap"];
var three5 = ["Digital Experimentation Performance Assessment", "Center of Excellence Boot Camp", "Program Advisement", "Specialized Training", "Test Strategy Prioritization Training", "Experimentation Roadmap"];
var three6 = ["Personalization Jumpstart", "Customer Exploration", "Competitor Analysis", "Program Advisement", "Personalization Strategy Consulting", "User Research", "UserView (SM)", "UX Funnel Analysis"];
var three7 = ["Program Advisement"];
var three8 = ["Analytics Bootcamp", "Center of Excellence Boot Camp", "Test Strategy Prioritization Training", "Specialized Training"];
var three9 = ["Full-Service Experimentation", "Staff Augmentation", "Program Advisement"];
var three10 = ["Staff Augmentation"];
// End array combinations
$(document).on('click', "#submit.active", function() { //class added dynamically. Check on click
	//get values from each select
	var val1 = $("#approach").val();
	var val2 = $("#challenge").val();
	var list = $("#list");
	//Clear the list before appending
	list.html("");
	//assemble the array name
	var name = val1 + val2;
	//convert string to array reference, store in variable "array"
	var array = eval(name);
	$(array).each(function(i, l) {
		i = i + 1;
		list.append("<li>" + i + ". <a href='#'>" + l + "</a></li>")
	});
	$("#results").fadeIn();
});