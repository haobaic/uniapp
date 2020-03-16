export default {
	common: {
		baseUrl: "http://192.168.1.101:3000/api",
		// baseUrl: "http://192.168.0.112:3000/api",
		data: {},
		header: {
			"Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		method: "GET",
		dataType: "json"
	},
	request(options = {}) {
		uni.showLoading({
			title: '加载中'
		});
		options.url = this.common.baseUrl + options.url;
		options.data = options.data || this.common.data;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		return new Promise((res, rej) => {
			uni.request({
				...options,
				success: (result) => {
					if (result.statusCode != 200) {
						return rej();
					}
					setTimeout(function() {
						uni.hideLoading();
					}, 2000);
					let data = result.data.data;
					res(data);
				}
			})
		})
	}
}
