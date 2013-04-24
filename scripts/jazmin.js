// Jazmin Global Styles

/*--------------
	  Tabs
--------------*/
	// tab setup
	$('.tab-content').addClass('clearfix').not(':first').hide();
	$('ul.tabs').each(function(){
		var current = $(this).find('li.current');
		if(current.length < 1) { $(this).find('li:first').addClass('current'); }
		current = $(this).find('li.current a').attr('href');
		$(current).show();
	});
	
	// tab click
	$('ul.tabs a[href^="#"]').live('click', function(e){
		e.preventDefault();
		var tabs = $(this).parents('ul.tabs').find('li');
		var tab_next = $(this).attr('href');
		var tab_current = tabs.filter('.current').find('a').attr('href');
		$(tab_current).hide();
		tabs.removeClass('current');
		$(this).parent().addClass('current');
		$(tab_next).show();
		return false;
	});
	
/*--------------
	 Icons
--------------*/
	$('.icon').each(function(){
		$(this).append('<span aria-hidden="true">'+$(this).attr('data-icon')+'</span>')
		.css('display', 'inline-block');
	});
	
/*--------------
   Accordions
--------------*/
// WARNING: the accordion feature overrides and replaces the "complete article post" option in the blog module.	
// Use this feature only if you don't have blogs using this option on your site.
// To activate accordions simply uncomment the code below. You can change the sytles for the accordions in jazmin.css
/*
var SHOW_PERMALINKS = false;
var PERMALINK_TEXT = 'Link to this article';

// DO NOT MODIFY BELOW ///////////////////////////////////////////////////////////////
$(document).ready(function() {						   
	$('.display-all h3.article-title a').each(function(){
		if(SHOW_PERMALINKS){
			$(this).parent().siblings('.article-body').append('<a class="article-permalink" href="'+$(this).attr('href')+'">'+PERMALINK_TEXT+'</a>');
		}
		$(this).attr('href','#'+$(this).parents('.article.display-all').attr('id'));
	});
	
	var currenthash = location.hash;
	if(currenthash != '' && $(currenthash).hasClass('display-all')){
		$(currenthash).find('h3.article-title a').addClass('article-open');
		$(currenthash).find('.article-body').slideDown();
	}
	
	$('a').click(function(e){
		var href = $(this).attr('href');
		if(href.charAt(0) == '#' && $(href).length > 0 && $(href).hasClass('display-all')){
			var $item = $(href);
			var $link = $item.find('.post-title a');
			e.preventDefault();
			$('.article-body').slideUp();
			if($link.hasClass('article-open')){
				$link.removeClass('article-open');
			}
			else{
				$('a.article-open').removeClass('article-open');
				$link.addClass('article-open');
				$item.find('.article-body').slideDown();
			}
			$('html,body').stop().animate({scrollTop: $item.offset().top}, 400, function() { location.hash = href.replace('#','');});
		}
	});
	
});
*/	