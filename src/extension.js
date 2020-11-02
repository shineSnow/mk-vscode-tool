const vscode = require('vscode');

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function (context) {
	console.log('恭喜，您的扩展“vscode-plugin-demo”已被激活！');
	console.log(vscode);
	console.log(context);
	require('./webview')(context); // webview
	// require('./welcome')(context); // 自定义欢迎页
}

exports.deactivate = function () {
	console.log('您的扩展“vscode-plugin-demo”已被释放！')
}