/** 请求接口 */
interface requestFace {
    url: string,
    data: string | Object,
    header: Object,
    method: string,
    success: (res: any) => void,
    fail?: (res: any) => void,
    dataType?: string,
    complete?: (res: any) => void
};

/** res.data 数据 */
interface res_Data {
    "config": Object,
    "share": Array<any>,
    "token": string,
    "user": userData
}


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
    /** 游戏中控 */
    public Game: Game;

    constructor(game: Game) {
        this.wxLogin();
        this.Game = game;
    };

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
                            that.Game.dataCenter.token = res.data.data.token;
                            console.log("wx.login 成功 结果  ↓↓↓↓↓↓");
                            console.log(that.userData.data);
                            let is_auth = res.data.data.user.is_auth;
                            if (!is_auth) {
                                that.authLogin(is_auth);
                            } else {
                                that.Game.gameHome.starGame.visible = true;
                                that.Game.dataCenter.receive(that.userData.data.user).then(() => {
                                    console.log("成功保存好数据 查看数据中心的数据  ↓↓↓↓↓↓");
                                    console.log(that.Game.dataCenter.userData);
                                    console.log("保存数据用户成功，开始同步数据");
                                    that.Game.dataCenter.sytsData();
                                    that.Game.gameHome.synchronousData();

                                });
                            };
                        },
                        fail(res) {
                            console.log("微信请求失败")
                        },
                    })
                } else {
                    console.log("code NotOK! 登录失败!\t$$$$");
                }
            },

            //wx.login失败
            fail(res) {
                console.log("wx.login 失败");
                console.log(res);
            }
        });
        return this;
    };

    /**
     * 获取用户信息
     */
    public getUser(): any {
        let that = this;
        // 发起请求
        wx.request({
            //请求地址
            url: that.ApiUrl + "getUser",
            //请求参数
            data: {
                sys: wx.getSystemInfoSync(),
                query: wx.getLaunchOptionsSync().query,
                shareTicket: wx.getLaunchOptionsSync().shareTicket,
                object: wx.getLaunchOptionsSync().referrerInfo
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
                console.log("获取用户信息成功 结果    ↓↓↓↓↓↓");
                console.log(res.data);
                that.Game.dataCenter.receive(res.data.data.user).then(() => {
                    console.log("保存数据用户成功，开始同步数据");
                    that.Game.dataCenter.sytsData();
                    that.Game.gameHome.synchronousData();
                });
            },
            //获取用户信息失败
            fail(res) {
                console.log(res);
            }
        });
    };

    /** 检测今日是否领取签到红包*/
    public checkTodaySignRedPacket(): any {
        let that = this;
        let res_data: boolean;
        console.log(that.userToken);
        wx.request({
            url: that.ApiUrl + "checkTodaySignRedPacket",
            data: {
                sys: wx.getSystemInfoSync()
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            // 请求成功
            success(res) {
                console.log("成功检测今日是否领取红包  结果   ↓↓↓↓↓↓")
                console.log(res.data);
                return res.data;
            },
            // 请求失败
            fail(res) {
                console.log("检测今日签到失败");
                console.log(res);
            }
        });
    };

    /** 获取每星期签到列表 */
    public getSign(): any {
        let that = this;

        wx.request({
            url: that.ApiUrl + "getSign",
            data: {
                sys: wx.getSystemInfoSync()
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            //请求成功
            success(res) {
                console.log("获取每星期签到列表成功 结果 ↓↓↓↓↓↓");
                console.log(res.data);
                return res.data;
            },
            fail(res) {
                console.log("获取每星期签到列表失败");
                console.log(res);
            }
        });
    };

    /** 添加签到 */
    public addSign(): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "addSign",
            data: {
                sys: wx.getSystemInfoSync()
            },
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
                console.log(res);
            }
        });
    };

    /** 打开红包 */
    public openRedPacket(): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "openRedPacket",
            data: {
                id: 555,
                sys: wx.getSystemInfoSync()
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
                console.log(res);
            }
        });
    };

    /** 获取分享素材 */
    public getShare(): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "getshare",
            data: {
                sys: wx.getSystemInfoSync()
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            success(res) {
                console.log("获取分享素材成功");
                console.log(res.data)
                return res.data;
            },
            fail(res) {
                console.log("获取分享素材失败");
                console.log(res);
            }

        })
    }

    /** 游戏分数上传
     * @param newScore 上传新的分数
     */
    public ScoreUpload(newScore: number): any {
        let that = this;
        let tObj = {
            url: that.ApiUrl + "gameOver",
            data: {
                score: newScore,
                sys: wx.getSystemInfoSync()
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            success(res) {
                console.log("分数上传成功");
                console.log(res);
                return res.data;
            },
            fail(res) {
                console.log("分数上传失败")
                console.log(res);
            },
        }
        wx.request(tObj);
    }

    /** 游戏金币设置 */
    public setGold(newGold: number): any {
        let that = this;
        let key: string = "hvOapDPFm7sEv$uQle@A627zqKNkBzMhR5Tr!0NWmaox60itf@5ZspzeQSQ6wTzL";
        /** 金币数量 */
        let gold = newGold;
        /** 签名 */
        let sign: string = md5.hex_md5(gold + key + gold + key);
        wx.request({
            url: that.ApiUrl + "setGold",
            data: {
                gold: gold,
                sign: sign,
                sys: wx.getSystemInfoSync()
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            success(res) {
                console.log("金币设置成功");
                console.log(res.data);
                return res.data;
            },
            fail(res) {
                console.log("金币上传失败");
                console.log(res);
            }
        })
    }

    /** 
     * 游戏其他数据设置
     * @param Data 要设置的Data, 类型object
     * */
    public setData(Data): any {
        let that = this;
        let key = "hvOapDPFm7sEv$uQle@A627zqKNkBzMhR5Tr!0NWmaox60itf@5ZspzeQSQ6wTzL";
        let data = Data
        let sign = md5.hex_md5(JSON.stringify(data) + key + JSON.stringify(data) + key);
        wx.request({
            url: that.ApiUrl + "setData",
            data: {
                data: data,
                sign: sign,
                sys: wx.getSystemInfoSync()
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            success(res) {
                console.log("游戏的其他数据设置成功");
                console.log(res.data);
                return res.data;
            },
            fail(res) {
                console.log("游戏其他数据设置失败");
                console.log(res);
            }
        })
    }

    /** 获取下线列表 */
    public getFriendList(): any {
        let that = this;
        wx.request({
            url: that.ApiUrl + "getFriendList",
            data: {
                sys: wx.getSystemInfoSync()
            },
            header: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + that.userToken
            },
            method: "POST",
            success(res) {
                console.log("成功获取下线列表");
                console.log(res.data);
                return res.data;
            },
            fail(res) {
                console.log("获取谢爱西安列表失败");
                console.log(res.data);
            }
        })
    }

    /**
     * 保存用户授权信息
     * @param is_auth  boolean服务器是否保存信息
     */
    public authLogin(is_auth: boolean): void {
        /** 指向ApiDocking */
        let that: ApiDocking = this;
        if (!is_auth) {
            console.log("用户没有授权");
            // console.log(that.userToken);
            let wx_button = wx.createUserInfoButton({
                type: "image",
                image: Laya.ResourceVersion.addVersionPrefix(this.Game.gameHome.starGame.skin),
                style: {
                    left: 100,
                    top: 300,
                    width: 200,
                    height: 40,
                    backgroundColor: '#ffffff',
                    borderColor: '#ffffff',
                    borderWidth: 0,
                    borderRadius: 0,
                    textAlign: 'center',
                    fontSize: 0,
                    lineHeight: 1,
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
                        nickName: userInfo.nickName,
                        sys: wx.getSystemInfoSync()
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
                        that.checkTodaySignRedPacket();
                        // this.wx_button.hide();
                    },
                    fail(res) {
                        console.log("用户数据保存失败");
                    }
                })
            })
        } else {
            console.log("用户已经授权");
        };
        // return this;
    };
}

