jQuery(document).ready(function($) {
	//get ids
	var ids=localStorage.getItem('ids');
	var id=[];
	for(var i=0;i<ids.length;i++) {
		id.push(Number(ids[i]));
		i++;
	}
	//checking
	var isChecking=true;
	//number
	var num=Number($('.num').html())-1;
	//back
	$('.x').click(function() {
		localStorage.clear();
		location.href='distribute.html';
	})

	//check and pass
	function candp() {
		if($('.go').html()==='GO'){
			location.href='prepare.html';
		}//jump
		if(isChecking) {
			num=Number($('.num').html())-1;
			isChecking=false;
			$('.num').removeClass('num').addClass('people');
			if(id[num]==='1'){
				$('.go').html('隐藏身份并传给下一个人')
				$(".people").addClass('killer').html('你是杀手');
				var $words='<p class="words">看谁不爽砍谁吧，哈哈哈</p>';
				$('.killer').append($words);
			}//killer
			else {
				$('.go').html('隐藏身份并传给下一个人');
				$(".people").addClass('saltfish').html('你是平民');
				var $words='<p class="words">努力活下去吧咸鱼</p>';
				$('.saltfish').append($words);
			}//salt fish233333

		}//checking
		else{
			if(num==id.length-1) {
				num+=1;
				isChecking=true;
				$('.go').html('GO');
				$('.people').empty().removeClass('people').removeClass('saltfish').addClass('killer').html('现在游戏开始');
			}//ready to go
			else{
				num+=2;
				isChecking=true;
				$('.people').empty().removeClass('people').removeClass('killer').removeClass('saltfish').addClass('num').html(num);
				$('.go').html('查看你的身份');
			}//passing
			
		}//passing
	
	}//candp
	$('.go').click(function() {
		candp();
	})
});
