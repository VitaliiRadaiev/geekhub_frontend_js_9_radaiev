function openMenu() {
	$('.overlay_background').fadeIn();
	$('.overlay_menu').fadeIn();
}

function closeMenu() {
	$('.overlay_background').fadeOut();
	$('.overlay_menu').fadeOut();
}

function openForm() {
	$('.overlay_background').fadeIn();
	$('.overlay_form').fadeIn();
}

function closeForm() {
	$('.overlay_background').fadeOut();
	$('.overlay_form').fadeOut();
}

function openFullViewWork() {
	$('.overlay_background').fadeIn();
	$('.full_view_work').fadeIn();
}

function closeFullViewWork() {
	$('.overlay_background').fadeOut();
	$('.full_view_work').fadeOut();
}

$('#nav_burg').click(openMenu);
$('.overlay_menu_btn_close').click(closeMenu);

$('.btn_hire-me').click(openForm);
$('.overlay_form_btn_close').click(closeForm);

$('.latest_works_item_active').click(openFullViewWork);
$('.full_view_work_btn_close').click(closeFullViewWork);

	$('.latest_works_item_active').wrap('<a href="#portfolio"></a>');



$(document).ready(function() {
  $("a.bb").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 600);
    return false;
  });
});