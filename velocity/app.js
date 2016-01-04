	var pingouin = {
		p1 :function(){
			$("#bloc1").click(function(){
				$(this).velocity
				({translateX: '1000px'},10000);
			});
			$("#bloc2").click(function(){
				$(this).velocity
				({translateX: '1200px', rotateZ: '-1080deg'},10000);
			});
			$("#bloc3").click(function(){	
				$(this).velocity
				({width: "100%"},10000);
			});
			$("#bloc4").click(function(){
				$(this).velocity
				({translateX: "1400px", opacity: 0},10000);
			});
		},
		p2 :function(){
			$("#bloc1").on('click', function(){
				$(this).velocity(
				{translateX: '1000px'}).velocity
				({translateY: '500px'}).velocity
				({rotateZ: '-1080deg'}).velocity
				({translateX: '0', translateY: '0'}).velocity
			});
		}
	};


$(function(){
	var page = $('[x-page]').attr('x-page');
	pingouin[page]();
});
