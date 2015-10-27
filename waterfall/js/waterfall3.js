//jQuery代码实现
$(window).on('load',function(){
	//waterfall();
	var dataInt={'data':[{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'},{'src':'30.jpg'},{'src':'31.jpg'},{'src':'32.jpg'},{'src':'33.jpg'},{'src':'34.jpg'},{'src':'35.jpg'},{'src':'36.jpg'},{'src':'37.jpg'},{'src':'38.jpg'}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide()){
			$.each(dataInt.data,function(key,value) {//value是js原生对象Object
				var oBox=$('<div>').addClass('box').appendTo($('#main'));//jQ两大优点：支持连缀，饮食迭代
				var oPic=$('<div>').addClass('pic').appendTo($(oBox));
				$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(oPic));
			});
			//waterfall();//插入html后渲染
			//由于是浏览器自动渲染新加入的元素因此不需要waterfall函数了。
			//d但是存在问题，由于图片增加，列高增加，从第二列开始每列的图片都变化了位置。。。
		}
	});
});


function checkScrollSlide(){
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	return(lastBoxDis<scrollTop+documentH)?true:false;
}