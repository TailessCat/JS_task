jQuery(document).ready(function($) {
	var run;
	$('#bt_1').click(function() {
		//start to change
		run=window.setInterval(function(){
			//func of change color
			function changeColor() {
				//func of check repetition
				function chaChong(array,num) {
					for(var i=array.length-1;i>=0;i--) {
						if(array[i]==num) {
						return false;
						}//if
					}//for
					return true;
				}//cc
				var positions=['a','b','c'];
				for(var i=0;i<3;i++) {
					var position = Math.floor(Math.random()*9+1);
					if(chaChong(positions,position)) {
						positions[i]=position;
						var rgb1 = Math.floor(Math.random()*256);
						var rgb2 = Math.floor(Math.random()*256);
						var rgb3 = Math.floor(Math.random()*256);
						$('#g'+positions[i]).css('background','rgb('+rgb1+','+rgb2+','+rgb3+')');
					}//if
					else {
						i--;
						continue;
					}//else
				}//for
			}//fuc ccr
			changeColor();
		},1000);
		
		
		
		
	});//click
	$('#bt_2').click(function() {
		window.clearInterval(run);
		console.log('b');
		for (var i=1; i<10; i++) {
			$('#g'+i).css('background','black')
		}//for
	});//click
});