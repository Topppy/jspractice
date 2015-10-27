//jQuery代码实现
$(window).on('load',function(){
	waterfall();
	var dataInt={'data':[{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'},{'src':'30.jpg'},{'src':'31.jpg'},{'src':'32.jpg'},{'src':'33.jpg'},{'src':'34.jpg'},{'src':'35.jpg'},{'src':'36.jpg'},{'src':'37.jpg'},{'src':'38.jpg'}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide()){
			$.each(dataInt.data,function(key,value) {//value是js原生对象Object
				var oBox=$('<div>').addClass('box').appendTo($('#main'));//jQ两大优点：支持连缀，饮食迭代
				var oPic=$('<div>').addClass('pic').appendTo($(oBox));
				$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(oPic));
			});
			waterfall();//插入html后渲染
		}
	});
});

function waterfall(){
	var $boxs=$('#main>div');//选择器不用空格是因为会将所有子元素找出来，》只匹配1级div
	var w=$boxs.eq(0).outerWidth();//outerWidth会获取包括padding在内的宽度
	var cols=Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin','0 auto');//不需要单位px
	var hArr=[];
	$boxs.each(function(index,value){//value是个DOM对象，不能使用jQ的方法
		var h=$boxs.eq(index).outerHeight();
		if(index<cols){
			hArr[index]=h;
		}else{
			var minH=Math.min.apply(null,hArr);
			var minHIndex=$.inArray(minH,hArr);
			$(value).css({//用$将valueDOM对象转换为jQ对象
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			});
			hArr[minHIndex]+=$boxs.eq(index).outerHeight();
		}
	})
}

function checkScrollSlide(){
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	return(lastBoxDis<scrollTop+documentH)?true:false;
}