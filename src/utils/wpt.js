const wpt = {
  closeApp (success, fail) {
    console.log('点击关闭应用')
    if (!success || !fail) {
      console.warn('丢失成功或者失败回调函数')
      return false
    }
    window.cordova.exec(success, fail, 'Activity', 'closeApp', []);
  },
  //弹出选择窗口(底下)
	showSheet (params) {
    console.log('点击showSheet')
		window.cordova.exec(
      function (e) {
        alert("你选择了第" + e.index);
        return Promise.resolve(e.index)
      },
      function (e) {
        alert("Error: " + e);
        return Promise.reject(e)
		  }, "Alert", "showSheet", [ params ]);
	}
}
export default wpt;
