jQuery(document).ready(function($) {
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
		for(var j=1,i=identities.length;j<=i;j++) {
			var id;
			if(identities[j]==0) {
				id='平民';
			}
			else {
				id='杀手';
			}
			var $identity='<li>'+j+'号--'+id+'   </li>';
			$('.player_list').append($identity);
		}
	}
	function reDistribute() {
		$('.player_list').empty();
		var num=Number($('.num').html());
		showOnTheScreen(num);
	}

	//click to re-distribute
	$('.re_distribute').click(function() {
		reDistribute();
	});

	function plus() {
		var num=Number($('.num').html())+1;
		if(num<=18){
			left=(num-6)*5.4;
			$('.slider').css('margin-left',left+'%');
			$('.num').html(num);
		}	
	}
	//click to plus one
	$('.plus').click(function(){
		plus();
	})

	function minus() {
		var num=Number($('.num').html())-1;
		if(num>=6){
			left=(num-6)*5.4;
			$('.slider').css('margin-left',left+'%');
			$('.num').html(num);
		}	
	}
	//click to minus one
	$('.minus').click(function(){
		minus();
	})
	//move
	$('.slider').mousedown(function(event) {

	});
});