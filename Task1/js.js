jQuery(document).ready(function($) {
	//state
	var run;
	//choose 3 position
	function choosePosition(length) {
		var positions=[];
		for(var i=length;i>0;i--) {
			var position = Math.floor(Math.random()*9+1);
			positions.push(position);
		}
		return positions;
	}//pb
	//check repetition
	function checkRepetion(array) {
		var check=[false,false,false,false,false,false,false,false,false,false];
		for(var i=array.length-1;i>=0;i--) {
			if(check[array[i]]) {
				return true;
			}
			else {
				check[array[i]]=true;
			}
		}//for
		return false;
	}
	//confirm positions
	function confirmPositions(num) {
		var positions;
		while(positions=choosePosition(num)) {
			if(!checkRepetion(positions)){
				return positions;
			}
		}
	}
	//choose color
	function chooseColors(num) {
		var colors=[];
		for(var i=num;i>0;i--) {
			var rgb1 = Math.floor(Math.random()*256);
			var rgb2 = Math.floor(Math.random()*256);
			var rgb3 = Math.floor(Math.random()*256);
			var color ='rgb('+rgb1+','+rgb2+','+rgb3+')';
			colors.push(color);
		}
		return colors;
	}
	//change colors
	function changeColor() {
		//reset
		$('.g').css('background','black');
		var positions =confirmPositions(3);
		console.log(positions);
		var colors =chooseColors(3);
		for(var i=0;i<positions.length;i++) {
			$('#g'+positions[i]).css('background',colors[i]);
		}//for
	}//fuc ccr
	function start() {
		run=setInterval(changeColor,1000);
	}
	function stop() {
		clearInterval(run);
	}
	$('#bt_1').click(function() {
		//the button only permite to click once

		$(this).attr("disabled","disabled");
		//start to change
		start();
	});//click
	$('#bt_2').click(function() {
		stop();
		$('#bt_1').removeAttr('disabled');
		$('.g').css('background','black');
	});//click
});
