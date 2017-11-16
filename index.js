window.onload = function(){
	
	 mui.plusReady(function(){
                var self = plus.webview.currentWebview();
                var name = self.name;
                console.log(name);
                //关闭等待框
                plus.nativeUI.closeWaiting();
                //显示当前页面
                mui.currentWebview.show();
           });
}
