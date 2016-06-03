$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled-2");
	$('#menu ul').hide();
});

$("#menu-toggle-2").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled-2");
	$('#menu-mine ul').hide();
});


function initMenu() {
	$('#menu ul').hide();
	$('#menu ul').children('.current').parent().show();
	//$('#menu ul:first').show();
	$('#menu li a').click(function() {
		var checkElement = $(this).next();
		if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			return false;
		}
		if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('#menu ul:visible').slideUp('normal');
			checkElement.slideDown('normal');
			return false;
		}
	});
}

function initMenuMine() {
	$('#menu-mine ul').hide();
	$('#menu-mine ul').children('.current').parent().show();
	$('#menu-mine li a').click(function() {
		var checkElement = $(this).next();
		if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			return false;
		}
		if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('#menu-mine ul:visible').slideUp('normal');
			checkElement.slideDown('normal');
			return false;
		}
	});
}

function toggleSidebar(){
	$("#sidebarToggleBtn").click(function(e){
		e.preventDefault();
		if($("#menu").is(":visible")){
			$("#menu").hide();
			$("#menu-mine").show();
			$("#sidebar-wrapper").width(50);
			$(".sidebar-nav").width(70);
			$("#wrapper").css("padding-left","50px");
			$("#sidebarToggleBtn-ico").attr("class","fa fa-th-list");
		}else{
			$("#menu-mine").hide();
			$("#menu").show();
			$("#sidebar-wrapper").width(250);
			$(".sidebar-nav").width(250);
			$("#wrapper").css("padding-left","250px");
			$("#sidebarToggleBtn-ico").attr("class","fa fa-square");
		}		
	});
}

$(document).ready(function() {
	initMenu();
	toggleSidebar();
	initMenuMine();
});