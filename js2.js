jQuery(document).ready(function($) {
	$('input').val('6');
	var ids=[];
	function confirmIentity(num) {
		var identities =[];
		//0
		for(var i=num;i>0;i--) {
			identities.push(0);
		}
		if(6<=num<=8) {
			identities[Math.floor(Math.random()*num)]=1;
		}
		else if(8<num<=11) {
			for(i=2;i>0;i--) {
				identities[Math.floor(Math.random()*num)]=1;
			}
		}
		else if(11<num<=16) {
			for(i=3;i>0;i--) {
				identities[Math.floor(Math.random()*num)]=1;
			}
		}
		else if(16<num<=18) {
			for(i=4;i>0;i--) {
				identities[Math.floor(Math.random()*num)]=1;
			}
		
		}
		return identities;
	}

	function showOnTheScreen(num) {
		var identities=confirmIentity(num);
		ids=identities;
		for(var j=0,i=identities.length;j<i;j++) {
			var id;
			if(!identities[j]) {
				id='平民';
			}
			else {
				id='杀手';
			}
			var $identity='<li>'+Number(j+1)+'号--'+id+'   </li>';
			$('.player_list').append($identity);
		}
	}
	function reDistribute() {
		$('.player_list').empty();
		var num=$('.num').html();
		showOnTheScreen(num);
	}

	//click to re-distribute
	$('.re_distribute').click(function() {
		reDistribute();
	});

	function plus() {
		var num=Number($('.num').html())+1;
		if(num<=18){
			$('.num').html(num);
			$('input').val(num);
		}
	}
	//click to plus one
	$('.plus').click(function(){
		plus();
	})

	function minus() {
		var num=Number($('.num').html())-1;
		if(num>=6){
			$('.num').html(num);
			$('input').val(num);
		}	
	}
	//click to minus one
	$('.minus').click(function(){
		minus();
	})
	//move
	$('.slider').mousemove(function() {
		var num=Number($('#slider').val());
		$('.num').html(num);
	});
	//GO
	$('.begin_bt').click(function(){
		if(!$('li').html()){
			var $text="<p class='alert'>先选身份啊兄弟！<p>";	
			$('body').append($text);
			setTimeout(function(){
				$('.alert').remove()},1000);
		}
		else {
			localStorage.setItem('ids',ids);
			location.href='checkID.html'; 
		}
	})		
});