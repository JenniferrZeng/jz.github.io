$(document).ready(function () {
	var _winwidth = $(window).width();
	var _winheight = $(window).height();
	$("html").css("fontSize",_winwidth/160*3+"px");

$(window).on('resize',function(){                          
	var _winwidth = $(window).width();
	$("html").css("fontSize",_winwidth/160*3+"px");
});
// JavaScript Document
//瀹氫箟Beautifier鐨勬瀯閫犲嚱鏁�
var DialogFx = function(ele, opt) {
    this.$element = ele,
    this.defaults = {
		'id': 'somedialog',
		'dialogFx': '0',
    },
    this.options = $.extend({}, this.defaults, opt)
}
//瀹氫箟DialogFx鐨勬樉绀烘柟娉�
DialogFx.prototype = {
    Show: function() {
		$("#"+this.options.id).removeClass("dialog--close");
		$("#"+this.options.id).addClass("dialog--open");	
    },
	Hidden: function() {
		$("#"+this.options.id).removeClass("dialog--open");
		$("#"+this.options.id).addClass("dialog--close");
    }
}
//鍦ㄦ彃浠朵腑浣跨敤DialogShow瀵硅薄
$.fn.DialogShow = function(options) {
    //鍒涘缓Beautifier鐨勫疄浣�
    var dialogFx = new DialogFx(this, options);
	if(options.dialogFx == "0"){
		return dialogFx.Hidden();
	} else {
		//璋冪敤鍏舵柟娉�
    	return dialogFx.Show();			
	}
}
});
