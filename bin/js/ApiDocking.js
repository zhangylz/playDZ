/** API对接 */
var ApiDocking = (function () {
    function ApiDocking() {
        this.wxLogin();
    }
    /** 初始化登录获得数据 */
    ApiDocking.prototype.wxLogin = function () {
        var that = this;
        wx.login({
            //wx.login成功
            success: function (res) {
                if (res.code) {
                    console.log("code OK!\t$$$$");
                    wx.request({
                        url: "https://wdz.f11911f.cn/api/login",
                        data: {
                            code: res.code,
                            sys: wx.getSystemInfoSync(),
                            query: wx.getLaunchOptionsSync().query,
                            shareTicket: wx.getLaunchOptionsSync().shareTicket,
                            referrerInfo: wx.getLaunchOptionsSync().referrerInfo
                        },
                        header: {
                            'Accept': 'application/json',
                            'content-type': 'application/json'
                        },
                        method: "POST",
                        success: function (res) {
                            that.userData = res.data;
                            that.userToken = res.data.data.token;
                            console.log("成功");
                            console.log(that.userData.data);
                            var is_auth = res.data.data.user.is_auth;
                            if (!is_auth) {
                                that.authLogin(is_auth);
                            }
                        }
                    });
                }
                else {
                    console.log("code NotOK! 登录失败!\t$$$$");
                }
            },
            //wx.login失败
            fail: function (res) {
                console.log("wx.login 失败");
            }
        });
        return this;
    };
    /**
     * 获取用户信息
     */
    ApiDocking.prototype.getUser = function () {
        // 发起请求
        wx.request({
            //请求地址
            url: "https://wdz.f11911f.cn/api/getUser",
            //请求参数
            data: {
                query: wx.getLaunchOptionsSync().query,
                shareTicket: wx.getLaunchOptionsSync().shareTicket,
                object: wx.getLaunchOptionsSync().object
            },
            //头信息
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            // 请求方式
            method: "POST",
            //获取用户信息成功
            success: function (res) {
                console.log("获取用户信息成功");
                console.log(res.data);
            },
            //获取用户信息失败
            fail: function (res) {
                console.log(res.data);
            }
        });
        return this;
    };
    /**
     * 保存用户授权信息
     * @param is_auth  boolean服务器是否保存信息
     */
    ApiDocking.prototype.authLogin = function (is_auth) {
        /** 指向ApiDocking */
        var that = this;
        if (!is_auth) {
            console.log("用户没有授权");
            // console.log(that.userToken);
            var wx_button = wx.createUserInfoButton({
                type: "text",
                text: "获取用户信息",
                style: {
                    left: 10,
                    top: 76,
                    width: 200,
                    height: 40,
                    lineHeight: 40,
                    backgroundColor: '#ff0000',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: 16,
                    borderRadius: 4
                },
                withCredentials: false,
                lang: "zh_CN"
            });
            wx_button.onTap(function (res) {
                console.log("按钮按下了");
                console.log(res);
                that.userInfo = res.userInfo;
                console.log(that.userInfo);
                var userInfo = res.userInfo;
                wx.request({
                    url: "https://wdz.f11911f.cn/api/authLogin",
                    data: {
                        avatarUrl: userInfo.avatarUrl,
                        city: userInfo.city,
                        country: userInfo.country,
                        gender: userInfo.gender,
                        nickName: userInfo.nickName
                    },
                    header: {
                        'Accept': 'application/json',
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + that.userToken
                    },
                    method: "POST",
                    success: function (res) {
                        console.log("用户数据更新完成");
                        console.log(res.data);
                        that.userData = res.data;
                        // this.wx_button.hide();
                    }
                });
            });
        }
        else {
            console.log("用户已经授权");
        }
        return this;
    };
    return ApiDocking;
}());
//# sourceMappingURL=ApiDocking.js.map