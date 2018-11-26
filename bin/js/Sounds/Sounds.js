/** 游戏音效管理模块 */
var Sounds;
(function (Sounds) {
    /** 音乐播放 */
    var SoundManager = Laya.SoundManager;
    /** 游戏音乐&音效 */
    var gameSounds = (function () {
        function gameSounds() {
            /** 背景音乐地址 */
            this.bgMusicUrl = "res/sounds/bgMusic2.mp3";
            /** 球的撞击音效地址 */
            this.ballSoundsUrl = "res/sounds/ballSounds.mp3";
            /** 白圈的特效地址 */
            this.ovSoundsUrl = "res/sounds/ballSounds.mp3";
            /** 红包音效地址 */
            this.hbSoundsUrl = "res/sounds/hbCome.mp3";
            /** 砖石音效地址 */
            this.doSoundsUrl = "res/sounds/doSound.mp3";
            /** 游戏结束音效地址 */
            this.goSoundsUrl = "res/sounds/goSound.mp3";
        }
        /** 球碰撞音效 */
        gameSounds.prototype.ballSounds = function () {
            SoundManager.playSound(this.ballSoundsUrl, 1);
            return this;
        };
        /** 撞到白圈音效 */
        gameSounds.prototype.ovSounds = function () {
            SoundManager.playSound(this.ovSoundsUrl, 1);
            return this;
        };
        /** 撞到红包音效 */
        gameSounds.prototype.hbSounds = function () {
            SoundManager.playSound(this.hbSoundsUrl, 1);
            return this;
        };
        /** 撞到钻石💎音效 */
        gameSounds.prototype.doSounds = function () {
            SoundManager.playSound(this.doSoundsUrl, 1);
            return this;
        };
        /** 游戏结束音效 */
        gameSounds.prototype.goSounds = function () {
            SoundManager.stopAll();
            SoundManager.playSound(this.goSoundsUrl, 1);
            return this;
        };
        /** 播放背景音乐 */
        gameSounds.prototype.onBgMusic = function () {
            SoundManager.setMusicVolume(0.3);
            SoundManager.playMusic(this.bgMusicUrl, 0);
            return this;
        };
        /** 游戏结束音效 */
        gameSounds.prototype.onGoSounds = function () {
            SoundManager.playSound(this.goSoundsUrl, 1);
            return this;
        };
        return gameSounds;
    }());
    Sounds.gameSounds = gameSounds;
    /** 按钮音效 */
    var buttonSounds = (function () {
        function buttonSounds() {
        }
        return buttonSounds;
    }());
    Sounds.buttonSounds = buttonSounds;
})(Sounds || (Sounds = {}));
//# sourceMappingURL=Sounds.js.map