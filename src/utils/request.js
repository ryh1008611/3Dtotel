
export default(params) => {

    uni.showLoading({
        title: '加载中...'
    })
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            success(res){
                resolve(res);
            },
            fail(res){
                reject(res);
            },
            complete() {
                uni.hideLoading();
            }
        })
    })
}