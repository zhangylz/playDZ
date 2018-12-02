/** 游戏音效管理模块 */
module Sounds {
    /** 音乐播放 */
    import SoundManager = Laya.SoundManager;
    /** 回调 */
    import Handler = Laya.Handler;

    /** 游戏音乐&音效 */
    export class gameSounds {
        /** 背景音乐地址 */
        private bgMusicUrl: string = "res/sounds/bgMusic.mp3";
        /** 球的撞击音效地址 */
        private ballSoundsUrl: string = "res/sounds/ballSounds.mp3";
        /** 白圈的特效地址 */
        private ovSoundsUrl: string = "res/sounds/ballSounds.mp3";
        /** 红包音效地址 */
        private hbSoundsUrl: string = "res/sounds/hbCome.mp3";
        /** 砖石音效地址 */
        private doSoundsUrl: string = "res/sounds/doSound.mp3";
        /** 游戏结束音效地址 */
        private goSoundsUrl: string = "res/sounds/goSound.mp3";

        /** 球碰撞音效 */
        public ballSounds(): gameSounds {
            SoundManager.playSound(this.ballSoundsUrl, 1);
            return this;
        }

        /** 撞到白圈音效 */
        public ovSounds(): gameSounds {
            SoundManager.playSound(this.ovSoundsUrl, 1);
            return this;
        }

        /** 撞到红包音效 */
        public hbSounds(): gameSounds {
            SoundManager.playSound(this.hbSoundsUrl, 1);
            return this;
        }

        /** 撞到钻石💎音效 */
        public doSounds(): gameSounds {
            SoundManager.playSound(this.doSoundsUrl, 1);
            return this;
        }

        /** 游戏结束音效 */
        public goSounds(): gameSounds {
            SoundManager.stopAll();
            SoundManager.playSound(this.goSoundsUrl, 1);
            return this;
        }
        /** 播放背景音乐 */
        public onBgMusic(): gameSounds {
            SoundManager.setMusicVolume(0.1);
            SoundManager.playMusic(this.bgMusicUrl, 0);
            return this;
        }


        /** 游戏结束音效 */
        public onGoSounds(): gameSounds {
            SoundManager.playSound(this.goSoundsUrl, 1);
            return this;
        }
    }


    /** 按钮音效 */
    export class buttonSounds {

    }
}