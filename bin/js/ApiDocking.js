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
                    var wx_sys = wx.getSystemInfoSync();
                    wx.request({
                        url: "https://wdz.f11911f.cn/api/login",
                        data: {
                            code: res.code,
                            sys: wx_sys,
                            query: wx.getLaunchOptionsSync().query,
                            shareTicket: null,
                            referrerInfo: null
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
                                that.sysData(is_auth);
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
     * 保存用户信息
     * @param is_auth  boolean服务器是否保存信息
     */
    ApiDocking.prototype.sysData = function (is_auth) {
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