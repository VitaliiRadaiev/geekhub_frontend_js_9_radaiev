$('.burger').click(function() {
	$('.burger span:nth-child(1)').toggleClass('first');
	$('.burger span:nth-child(2)').toggleClass('second');
	$('.burger span:nth-child(3)').toggleClass('third');
	$('.burger span:nth-child(4)').toggleClass('fourth');
});


$('.burger').click(function() {
	$('.header_mobile_nav ').slideToggle(600);
});

var arr = ['<a href="#" class="comments_text_link-author">@Crunchetor </a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, fugit.',
 '<a href="#" id="email" class="comments_text_link-author">@BugsAngels </a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta natus quae possimus.',
  '<a href="#" id="email" class="comments_text_link-author">@Bewieral </a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ullam sint, facilis, quas pariatur rem.',
  '<a href="#" id="email" class="comments_text_link-author">@Pixelbuddha </a> Suspendisse sodales sem est, in scelerisque felis scelerisque in. Aenean faucibus mollis risus. Praesent sit amet erat eget eros.'];

  var ll = ['<a href="#" id="email" class="comments_text_link-author">@Crunchetor</a>', '@BugsAngels', '@Bewieral', '@Pixelbuddha'];
var names =['William Moore', 'lily Johnson', 'Amelia Smith', 'Steven Strange'];
var ago = ['4 hours ago', '23 minutes ago', '2 days ago', '2 hours ago'];
var num = -1;

$('.comments_text_control-right').on('click',function() {
	num++;
	$('.comments_text p').fadeOut(500, function() {
		$('.comments_text p').fadeIn(500).html(arr[num]);		
	});

		$('#name').fadeOut(500, function() {
		$('#name').fadeIn(500).html(names[num]);		
	});


		$('#time').fadeOut(500, function() {
		$('#time').fadeIn(500).html(ago[num]);		
	});		


		if(num == 4) {
		num = 3;
	}
	
});


$('.comments_text_control-left').on('click',function() {
	num--;
	
	if(num == -1 || num == -2) {
		num = 0;
	}

		$('.comments_text p').fadeOut(500, function() {
		$('.comments_text p').fadeIn(500).html(arr[num]);		
	});

			$('#name').fadeOut(500, function() {
		$('#name').fadeIn(500).html(names[num]);		
	});


		$('#time').fadeOut(500, function() {
		$('#time').fadeIn(500).html(ago[num]);		
	});		
	
});





  

