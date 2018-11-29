/** API对接 */
class ApiDocking {
    /** 用户数据 */
    public userData;
    /** 用户token */
    private userToken: string;
    /** 用户信息 */
    private userInfo;
    /** API接口地址 */
    private ApiUrl: string = "https://wdz.f11911f.cn/api/"
    constructor() {
        this.wxLogin();
    }
    /** 初始化登录获得数据 */
    public wxLogin(): ApiDocking {
        let that = this;
        wx.login({
            //wx.login成功
            success(res) {
                if (res.code) {
                    console.log("code OK!\t$$$$");
                    wx.request({
                        url: that.ApiUrl + "login",
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
                        success(res) {
                            that.userData = res.data;
                            that.userToken = res.data.data.token;
                            console.log("成功 结果↓↓↓↓↓↓");
                            console.log(that.userData.data);
                            let is_auth = res.data.data.user.is_auth;
                            if (!is_auth) {
                                that.authLogin(is_auth);
                            }

                        }
                    })
                } else {
                    console.log("code NotOK! 登录失败!\t$$$$");
                }
            },
            //wx.login失败
            fail(res) {
                console.log("wx.login 失败");
            }
        });
        return this;
    };

    /**
     * 获取用户信息
     */
    private getUser(): any {
        let that = this;
        // 发起请求
        wx.request({
            //请求地址
            url: that.ApiUrl + "getUser",
            //请求参数
            data: {
                query: wx.getLaunchOptionsSync().query,
                shareTicket: wx.getLaunchOptionsSync().shareTicket,
                object: wx.getLaunchOptionsSync().object
            },
            //头信息
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            // 请求方式
            method: "POST",
            //获取用户信息成功
            success(res) {
                console.log("获取用户信息成功 结果↓↓↓↓↓↓");
                console.log(res.data);
                return res.data;
            },
            //获取用户信息失败
            fail(res) {
                console.log(res.data);
            }
        });
    };

    /** 检测今日是否领取签到红包*/
    public checkTodaySignRedPacket(): boolean {
        let that = this;
        let res_data: boolean;
        wx.request({
            url: that.ApiUrl + "checkTodaySignRedPacket",
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            // 请求成功
            success(res) {
                console.log("成功检测今日是否领取红包  结果↓↓↓↓↓↓")
                console.log(res.data);
                return res.data;
            },
            // 请求失败
            fail(res) {
                console.log("检测今日签到失败");
            }
        });
    };

    /** 获取每星期签到列表 */
    public getSign(): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "getSign",
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            //请求成功
            success(res) {
                console.log("获取每星期签到列表成功 结果↓↓↓↓↓↓");
                console.log(res.data);
                return res.data;
            },
            fail(res) {
                console.log("获取每星期签到列表失败");
            }
        });
    };

    /** 添加签到 */
    public addSign(): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "addSign",
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            success(res) {
                console.log("添加签到成功");
                return res.data;
            },
            fail(res) {
                console.log("添加签到失败");
            }
        });
    };

    /** 打开红包 */
    public openRedPacket(): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "openRedPacket",
            data: {
                id: 555
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            success(res) {
                console.log("成功打开红包");
                console.log("res.data");
                return res.data;
            },
            fail(res) {
                console.log("打开红包失败");
            }
        });
    };

    /** 获取分享素材 */
    public getShare(): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "getshare",
            data: {
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            success(res) {
                console.log("获取分享素材成功");
                return res.data;
            },
            fail(res) {
                console.log("获取分享素材失败");
            }

        })
    }

    /** 游戏分数上传 */
    public ScoreUpload(newScore: number): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "gameOver",
            data: {
                score: newScore
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            success(res) {
                console.log("分数上传成功");
                return res.data;
            },
            fail(res) {
                console.log("分数上传失败")
            }
        })
    }

    /** 游戏金币设置 */
    public setGold(): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "setGold",
            
        })
    }


    /**
     * 保存用户授权信息
     * @param is_auth  boolean服务器是否保存信息
     */
    public authLogin(is_auth: boolean): ApiDocking {
        /** 指向ApiDocking */
        let that: ApiDocking = this;

        if (!is_auth) {
            console.log("用户没有授权");
            // console.log(that.userToken);
            let wx_button = wx.createUserInfoButton({
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
            wx_button.onTap((res) => {
                console.log("按钮按下了");
                console.log(res);
                that.userInfo = res.userInfo;
                console.log(that.userInfo);
                let userInfo = res.userInfo;
                wx.request({
                    url: that.ApiUrl + "authLogin",
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
                    success(res) {
                        console.log("用户数据更新完成");
                        console.log(res.data);
                        that.userData = res.data;
                        // this.wx_button.hide();
                    }
                })
            })
        } else {
            console.log("用户已经授权");
        }
        return this;
    };
}