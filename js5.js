jQuery(document).ready(function($) {
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
	//prepare
	var results=[];
	var day=1;
	var dark=true;
	var light=false;
	var num=id.length;
	establishTable(num);
	var $date='<div class="title date" style="font-size:80%;margin:10%">第'+day+'天</div>';
	$('.title').append($date);
	var iswin=false;
	var isselect=true;
	var iskill=true;
	var isvote=false;
	var ischeat=false;
	$('.players').hide();
	results.push('第'+day+'天')
	//establish a table
	function establishTable(num) {
		for(var j=1,i=num;j<=i;j++) {
			var $player='<div class="box box2">'+j+'</div>';
			$('.players').append($player);
		}
	}
	function win() {
		var length=Number(id.length);
		var killers=0;
		var saltfish=0;
		for(var i=0;i<length;i++) {
			if(id[i]==1) {
				killers++;
			}
			else if(id[i]==0) {
				saltfish++;
			}
		}
		if(!killers){
			iswin=true;
			var $words='<div class="title warning" style="font-size:80%;margin:5%">总结</div>';
			$('.date').html('平民获胜').append($words);
			$('.go').html('再来一盘')
			for(i=0,length=results.length;i<length;i++) {
				$words='<div class="title warning" style="font-size:70%;margin:5% 15%">'+results[i]+'</div>';
				$('.date').append($words);
			}
			localStorage.clear();
		}//saltfishes also have hope
		else if(saltfish-killers<=1&&dark) {
			iswin=true;
			var $words='<div class="title warning" style="font-size:80%;margin:5%">总结</div>';
			$('.date').html('杀手获胜').append($words);
			$('.go').html('再来一盘')
			for(i=0,length=results.length;i<length;i++) {
				$words='<div class="title warning" style="font-size:70%;margin:5% 15%">'+results[i]+'</div>';
				$('.date').append($words);
			}
			localStorage.clear();
		}//nice babe!
	}
	//kill
	function kill() {
		if(iskill){
			iskill=false
			$('.date').html('入夜').css('color','#E62E2E');
			var $words='<div class="title warning" style="font-size:80%;margin:5%">请选择击杀目标</div>';
			$('.date').append($words);
			$('.players').show(500);
		}
		
		
		select();
	}
		

	function cheat() {
		ischeat=false;
		var $words='<div style="margin:5%">然后请轮流发言</div>';
		$('.date').html('请死者发表遗言').css('color','#FF5825').append($words);
		isvote=true;
		light=true;
	}
	function vote() {
		if(light){
			light=false;
			$('.date').html('投票').css('color','#E62E2E');
			var $words='<div class="title warning" style="font-size:80%;margin:5%">请选择抗推目标</div>';
			$('.date').append($words);
			$('.players').show(500);
		}
		select();
	}
	//select
	function select() {
		var run;
		if(dark) {
			if(!$('.tag').length) {
				clearTimeout(run);
				$('.warning').css('color','#E62E2E');
				run=setTimeout(function(){
					$('.warning').css('color','#FF5825');
				},2000)
			}//select a target
			else if(id[Number($('.tag').html())-1]) {
				clearTimeout(run);
				$('.lier').remove();
				var $words='<div class="title lier" style="font-size:80%;margin:5%;color:#E62E2E">拒绝申请，我最讨厌你这种自刀的人了</div>';
				$('.date').append($words);
				run=setTimeout(function(){
					$('.lier').remove();
				},3000)
			}//select a correct target
			else {
				day+=1;
				$('.players').hide('fast');
				var result=$('.tag').html()+'号玩家被砍死在街头,他的身份是平民';
				var $result='<div id="night" style="margin:5%;color:#FF5825">昨夜，'+result+'</div>';
				$('.date').html('第'+day+'天').append($result);
				results.push($('#night').html().slice(3));
				results.push('第'+day+'天');
				id[Number($('.tag').html())-1]='dead';
				$('.tag').addClass('dead').removeClass('tag');
				dark=false;
				ischeat=true;
			}
		}
		else {
			if(!$('.tag').length) {
				clearTimeout(run);
				$('.warning').css('color','#E62E2E');
				run=setTimeout(function(){
					$('.warning').css('color','#FF5825');
				},2000)
			}//select a target
			else if(id[Number($('.tag').html())-1]=='dead') {
				clearTimeout(run);
				$('.lier').remove();
				var $words='<div class="title lier" style="font-size:80%;margin:5%;color:#E62E2E">他已经死了，放过他吧</div>';
				$('.date').append($words);
				run=setTimeout(function(){
					$('.lier').remove();
				},3000)
			}//select a correct target
			else {
				var identity;
				if(id[Number($('.tag').html())-1]) {
					identity='杀手';
				}
				else {
					identity='平民';
				}
				$('.players').hide('fast');
				var result=$('.tag').html()+'号玩家被抗推了,他的身份是'+identity;
				var $result='<div id="morning" style="margin:5%;color:#FF5825">'+result+'</div>';
				$('.date').append($result);
				results.push($('#morning').html());
				id[Number($('.tag').html())-1]='dead';
				$('.tag').addClass('dead').removeClass('tag');
				dark=true;
				isvote=false;
				iskill=true;
			}
		}
	}
	$('.box').click(function() {
			$('.box').removeClass('tag');
			$(this).addClass('tag');
		})
	$('.go').click(function() {
		if(iswin) {
			location.href='distribute.html';
		}
		if(dark) {
			kill();
			win()
		}
		else if(ischeat) {
			cheat();
			win()
		}
		else if(isvote) {
			vote();
			win()
		}

	})

});