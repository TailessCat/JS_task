jQuery(document).ready(function($) {
	//begin
	var begin=false;
	//back
	$('.x').click(function() {
		localStorage.clear();
		location.href='distribute.html';
	})
	//get information
	var ids=localStorage.getItem('ids');
	var id=[];
	for(var i=0;i<ids.length;i++) {
		id.push(Number(ids[i]));
		i++;
	}
	var num=id.length;
	//establish a table
	function establishTable(num) {
		for(var j=1,i=num;j<=i;j++) {
			var $player='<div class="box ">'+j+'</div>';
			$('.players').append($player);
		}
	}
	establishTable(num);
	//check id by mouse
	$('.box').mouseover(function() {
		var number=Number($(this).html())-1;
		var position=String(number+1);
		if(id[number]) {
			$(this).addClass('killer').removeClass('box').addClass(position).html('杀手');
		}
		else {
			$(this).addClass('saltfish').removeClass('box').addClass(position).html('咸鱼');
		}
	});
	$('.box').mouseout(function() {
		var number=$(this).attr('class');
		number=number[number.length-1];
		$(this).removeClass('killer').removeClass('saltfish').removeClass(number).addClass('box').html(number);
	});
	$('.go').click(function() {
		if(!begin) {
			begin=true;
			$('.players').empty();
			var $words1='<div class= title style="color: #E62E2E;margin:5%">FBI Warning</div>';
			var $words2='<div class= title style="color: #E62E2E;margin:5%">黑夜</div>';
			var $words3='<div class= words>·杀手上街砍人</div>';
			var $words4='<div class= title style="color: #E62E2E;margin:5%">白天</div>';
			var $words5='<div class= words style="margin:1%">·死者留遗言</div>';
			var $words6='<div class= words style="margin:1%">·玩家轮流发言</div>';
			var $words7='<div class= words style="margin-bottom:5%">·投票</div>';
			$('.players').append($words1).append($words2).append($words3).append($words4).append($words5).append($words6).append($words7);
		}
		else {
			begin=false;
			location.href='game.html';
		}
	})
});