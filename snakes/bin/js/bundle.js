(function () {
    'use strict';

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 1136;
    GameConfig.height = 640;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "view/GameMain.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var view;
        (function (view) {
            class GameMainUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(GameMainUI.uiView);
                }
            }
            GameMainUI.uiView = { "type": "View", "props": {}, "compId": 1, "child": [{ "type": "Image", "props": { "var": "map", "skin": "map/tile_map.png", "pivotY": 750, "pivotX": 1500 }, "compId": 2 }, { "type": "Label", "props": { "y": 10, "x": 10, "text": "长度：", "styleSkin": "comp/label.png" }, "compId": 4 }, { "type": "Label", "props": { "y": 10, "x": 44, "var": "text_length", "text": "0", "styleSkin": "comp/label.png" }, "compId": 5 }, { "type": "Label", "props": { "y": 26, "x": 10, "text": "击杀：", "styleSkin": "comp/label.png" }, "compId": 6 }, { "type": "Label", "props": { "y": 26, "x": 44, "var": "text_kill", "text": "0", "styleSkin": "comp/label.png" }, "compId": 7 }, { "type": "Image", "props": { "y": 10, "x": 489, "width": 102, "var": "mask_rank", "skin": "images/mask.png", "height": 133 }, "compId": 8 }, { "type": "Button", "props": { "y": 321, "x": 511, "var": "ctrl_flash", "stateNum": 2, "skin": "images/control-flash.png", "pivotY": 40, "pivotX": 40 }, "compId": 9 }, { "type": "Image", "props": { "y": 329, "x": 85, "var": "ctrl_back", "skin": "images/control-back.png", "pivotY": 40, "pivotX": 40 }, "compId": 10, "child": [{ "type": "Image", "props": { "y": 40, "x": 40, "var": "ctrl_rocker", "skin": "images/control-rocker.png", "pivotY": 17.5, "pivotX": 17.5 }, "compId": 11 }] }, { "type": "Image", "props": { "y": 357, "x": -32, "visible": false, "var": "ctrl_rocker_move", "skin": "images/control-rocker.png", "pivotY": 17.5, "pivotX": 17.5 }, "compId": 12 }], "loadList": ["map/tile_map.png", "comp/label.png", "images/mask.png", "images/control-flash.png", "images/control-back.png", "images/control-rocker.png"], "loadList3D": [] };
            view.GameMainUI = GameMainUI;
            REG("ui.view.GameMainUI", GameMainUI);
            class GameStartUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(GameStartUI.uiView);
                }
            }
            GameStartUI.uiView = { "type": "View", "props": { "skin": "images/head2.png" }, "compId": 1, "child": [{ "type": "Image", "props": { "y": 103, "x": 388, "var": "background", "skin": "images/s1-background.jpg", "pivotY": 297, "pivotX": 594, "name": "background" }, "compId": 4, "child": [{ "type": "Image", "props": { "y": 204.5, "x": 394.5, "width": 399, "skin": "images/s1-option-background.png", "name": "option_background", "height": 211 }, "compId": 8, "child": [{ "type": "RadioGroup", "props": { "y": 50, "x": 51, "var": "skinRadio", "space": -3, "skin": "images/s1-radio.png", "selectedIndex": 0, "labels": "  红色,  蓝色,  绿色,  紫色,  棕色", "labelPadding": "4", "direction": "vertical" }, "compId": 7 }, { "type": "Image", "props": { "y": 54, "x": 133, "width": 12, "skin": "images/head1.png", "rotation": 90, "height": 12 }, "compId": 9 }, { "type": "Image", "props": { "y": 75, "x": 133, "width": 12, "skin": "images/head2.png", "rotation": 90, "height": 12 }, "compId": 15 }, { "type": "Image", "props": { "y": 97, "x": 133, "width": 12, "skin": "images/head3.png", "rotation": 90, "height": 12 }, "compId": 16 }, { "type": "Image", "props": { "y": 118, "x": 133, "width": 12, "skin": "images/head4.png", "rotation": 90, "height": 12 }, "compId": 17 }, { "type": "Image", "props": { "y": 139, "x": 133, "width": 12, "skin": "images/head5.png", "rotation": 90, "height": 12 }, "compId": 18 }, { "type": "Button", "props": { "y": 14, "x": 234, "var": "btn_single", "stateNum": 1, "skin": "images/s1-btn1.png", "labelPadding": "-20", "labelBold": true, "label": "单人模式" }, "compId": 21 }, { "type": "Button", "props": { "y": 113, "x": 234, "var": "btn_net", "stateNum": 1, "skin": "images/s1-btn2.png", "labelPadding": "-20", "labelBold": true, "label": "多人模式" }, "compId": 22 }, { "type": "Button", "props": { "y": 13, "x": 46, "width": 126, "var": "nickname", "stateNum": 1, "skin": "images/s1-input.png", "label": "昵称", "height": 24 }, "compId": 23 }, { "type": "Button", "props": { "y": 166, "x": 46, "width": 126, "var": "neturl", "stateNum": 1, "skin": "images/s1-input.png", "label": "192.168.1.60", "height": 24 }, "compId": 24 }, { "type": "Label", "props": { "y": -31, "x": 139.5, "text": "贪吃蛇小作战", "styleSkin": "comp/label.png", "fontSize": 20, "font": "Microsoft Yahei", "color": "#226eaa", "bold": true }, "compId": 25 }, { "type": "TextInput", "props": { "y": 190.5, "x": 161.5, "text": "TextInput", "skin": "comp/textinput.png" }, "compId": 26 }] }] }], "loadList": ["images/head2.png", "images/s1-background.jpg", "images/s1-option-background.png", "images/s1-radio.png", "images/head1.png", "images/head3.png", "images/head4.png", "images/head5.png", "images/s1-btn1.png", "images/s1-btn2.png", "images/s1-input.png", "comp/label.png", "comp/textinput.png"], "loadList3D": [] };
            view.GameStartUI = GameStartUI;
            REG("ui.view.GameStartUI", GameStartUI);
        })(view = ui.view || (ui.view = {}));
    })(ui || (ui = {}));

    var Browser = Laya.Browser;
    var LocalStorage = Laya.LocalStorage;
    class GameStart extends ui.view.GameStartUI {
        constructor() {
            super();
            this.init();
        }
        init() {
            this.nickname.label = "游客" + Math.floor(Math.random() * (9999 - 1 + 1) + 1);
            this.skinRadio.selectedIndex = Math.floor(Math.random() * (4 - 0 + 1) + 0);
            this.neturl.label = "192.168.1.60";
            LocalStorage.getItem("nickname") && (this.nickname.label = LocalStorage.getItem("nickname"));
            LocalStorage.getItem("neturl") && (this.neturl.label = LocalStorage.getItem("neturl"));
            LocalStorage.getItem("skin") && (this.skinRadio.selectedIndex = parseInt(LocalStorage.getItem("skin")));
            this.nickname.on("click", this, this.changeNickName);
            this.neturl.on("click", this, this.changeNetUrl);
            this.skinRadio.on("click", this, this.onSelectSkin);
        }
        changeNickName() {
            let nickname = window.prompt("请输入您的昵称！", this.nickname.label);
            if (nickname != null && nickname != "") {
                this.nickname.label = nickname;
            }
            else {
                Browser.window.alert("请输入昵称！");
            }
        }
        changeNetUrl() {
            let neturl = window.prompt("请输入服务器地址！", this.neturl.label);
            if (neturl != null && neturl != "") {
                this.neturl.label = neturl;
            }
            else {
                Browser.window.alert("请输入服务器地址！");
            }
        }
        onSelectSkin() {
        }
    }

    class GameMain extends ui.view.GameMainUI {
        constructor() {
            super();
            this.game = Game.ins();
            this.keySpaceDown = false;
            this.init();
        }
        init() {
            Laya.stage.on("mouseup", this, this.ctrlRockerUp);
            Laya.stage.on("mousemove", this, this.ctrlRockerDown);
        }
        keyUp(e) {
            if (e.keyCode == 32) {
                this.ctrlFlashUp();
            }
        }
        keyDown(e) {
            if (e.keyCode == 32) {
                this.ctrlFlashDown();
            }
        }
        ctrlFlashDown() {
            this.game.snakeSelf.speedNow = "fast";
        }
        ctrlFlashUp() {
            this.game.snakeSelf.speedNow = "slow";
        }
        ctrlRockerUp() {
            if (Laya.stage.mouseX <= this.game.stageW / 1.5) {
                this.ctrl_rocker.visible = true;
                this.ctrl_rocker_move.visible = false;
            }
        }
        ctrlRockerDown() {
            if (Laya.stage.mouseX <= this.game.stageW / 1.5) {
                this.ctrl_rocker.visible = false;
                this.ctrl_rocker_move.visible = true;
                if (distance(Laya.stage.mouseX, Laya.stage.mouseY, this.ctrl_back.x, this.ctrl_back.y) <= (this.ctrl_back.width / 2 - this.ctrl_rocker.width / 2)) {
                    this.ctrl_rocker_move.pos(Laya.stage.mouseX, Laya.stage.mouseY);
                }
                else {
                    this.ctrl_rocker_move.pos(this.ctrl_back.x + (this.ctrl_back.width / 2 - this.ctrl_rocker.width / 2) * Math.cos(Math.atan2(Laya.stage.mouseY - this.ctrl_back.y, Laya.stage.mouseX - this.ctrl_back.x)), this.ctrl_back.y + (this.ctrl_back.width / 2 - this.ctrl_rocker.width / 2) * Math.sin(Math.atan2(Laya.stage.mouseY - this.ctrl_back.y, Laya.stage.mouseX - this.ctrl_back.x)));
                }
                this.game.snakeSelf.targetR = Math.atan2(Laya.stage.mouseY - this.ctrl_back.y, Laya.stage.mouseX - this.ctrl_back.x) * 180 / Math.PI;
            }
        }
    }

    var Sprite = Laya.Sprite;
    var Handler = Laya.Handler;
    class Snake extends Laya.Sprite {
        constructor(colorNum = Math.floor(Math.random() * (5 - 1 + 1) + 1), x = Game.ins().gameMainUI.map.width / 2, y = Game.ins().gameMainUI.map.height / 2) {
            super();
            this.game = Game.ins();
            this.speedObj = { "slow": 2, "fast": 4, "rotation": 10 };
            this.speedNow = "slow";
            this.snakeInitSize = 0.45;
            this.snakeLength = 24;
            this.kill = 0;
            this.bodyArr = [];
            this.pathArr = [];
            this.eatBean = 0;
            this.bodyBeanNum = 6;
            this.bodyMaxNum = 500;
            this.initWidth = 40;
            this.AI = false;
            this.speed = this.speedObj[this.speedNow];
            this.targetR = this.rotation;
            this.colorNum = colorNum;
            this.visible = false;
            this.snakeSize = this.snakeInitSize;
            this.loadImage("images/head" + this.colorNum + ".png", new Handler(this, this.loaded, [x, y]));
        }
        loaded(x, y) {
            this.zOrder = 11000;
            this.initWidth = this.width;
            this.rotationTemp = this.rotation;
            this.snakeScale(this);
            this.pivot(this.width / 2, this.height / 2);
            this.pos(x, y);
            this.visible = true;
            this.bodySpace = Math.floor(this.width / 10 * 8);
            for (let index = 1; index <= this.getBodyNum(); index++) {
                this.addBody(this.x - index * this.bodySpace, this.y, this.rotation);
            }
            for (let index = 0; index < this.bodySpace * this.getBodyNum(); index++) {
                this.pathArr.push({
                    x: this.x - index,
                    y: this.y
                });
            }
        }
        move() {
            this.bodySpace = Math.floor(this.width / 10 * 8);
            this.headMove();
            this.bodyMove();
            this.speedChange();
            this.rotationChange();
            this.bodyCheck();
        }
        moveOut() {
        }
        headMove() {
            let x = this.speed * Math.cos(this.rotation * Math.PI / 180);
            let y = this.speed * Math.sin(this.rotation * Math.PI / 180);
            this.rotation = this.rotationTemp;
            let pos = { x: this.x, y: this.y };
            let posBefore = { x: this.x, y: this.y };
            if (!(this.x + x >= this.game.gameMainUI.map.width - this.width / 2 || this.x + x <= this.width / 2)) {
                this.x += x;
                pos.x = this.x;
            }
            else {
                this.moveOut();
            }
            if (!(this.y + y >= this.game.gameMainUI.map.height - this.width / 2 || this.y + y <= this.width / 2)) {
                this.y += y;
                pos.y = this.y;
            }
            else {
                this.moveOut();
            }
            for (let index = 1; index <= this.speed; index++) {
                this.pathArr.unshift({
                    x: index * Math.cos(Math.atan2(pos.y - posBefore.y, pos.x - posBefore.x)) + posBefore.x,
                    y: index * Math.sin(Math.atan2(pos.y - posBefore.y, pos.x - posBefore.x)) + posBefore.y
                });
            }
        }
        bodyMove() {
            for (let index = 0; index < this.bodyArr.length; index++) {
                let element = this.bodyArr[index];
                if (this.pathArr[(index + 1) * this.bodySpace]) {
                    element.rotation = Math.atan2(this.pathArr[(index + 1) * this.bodySpace]["y"] - element.y, this.pathArr[(index + 1) * this.bodySpace]["x"] - element.x) / Math.PI * 180;
                    element.pos(this.pathArr[(index + 1) * this.bodySpace]["x"], this.pathArr[(index + 1) * this.bodySpace]["y"]);
                }
                if (this.pathArr.length > this.bodyArr.length * (1 + this.bodySpace)) {
                    this.pathArr.pop();
                }
            }
        }
        snakeScale(ele, eleType = "head") {
            let x = ele.x, y = ele.y, zOrder = ele.zOrder;
            ele.pivot(ele.width / 2, ele.height / 2);
            ele.graphics.clear();
            ele.loadImage("images/" + eleType + this.colorNum + ".png");
            ele.pivot(ele.width / 2, ele.height / 2);
            ele.pos(x, y);
            this.speedObj["rotation"] = 4 / this.snakeSize;
        }
        speedChange() {
            this.speed = this.speedNow == 'slow' ?
                (this.speed > this.speedObj[this.speedNow] ? this.speed - 1 : this.speedObj[this.speedNow])
                : (this.speed < this.speedObj[this.speedNow] ? this.speed + 1 : this.speedObj[this.speedNow]);
        }
        rotationChange() {
            let perRotation = Math.abs(this.targetR - this.rotationTemp) < this.speedObj['rotation'] ? Math.abs(this.targetR - this.rotationTemp) : this.speedObj['rotation'];
            if (this.targetR < -0 && this.rotationTemp > 0 && Math.abs(this.targetR) + this.rotationTemp > 180) {
                perRotation = (180 - this.rotationTemp) + (180 + this.targetR) < this.speedObj['rotation'] ? (180 - this.rotationTemp) + (180 + this.targetR) : this.speedObj['rotation'];
                this.rotationTemp += perRotation;
            }
            else {
                this.rotationTemp += this.targetR > this.rotationTemp && Math.abs(this.targetR - this.rotationTemp) <= 180 ? perRotation : -perRotation;
            }
            this.rotationTemp = Math.abs(this.rotationTemp) > 180 ? (this.rotationTemp > 0 ? this.rotationTemp - 360 : this.rotationTemp + 360) : this.rotationTemp;
        }
        addBody(x, y, r) {
            let body = new Sprite();
            let zOrder = this.zOrder - this.bodyArr.length - 1;
            body.visible = false;
            body.alpha = 0;
            body.zOrder = zOrder;
            body.loadImage("images/body" + this.colorNum + ".png", new Handler(this, () => {
                this.snakeScale(body, "body");
                body.pos(x, y);
                body.rotation = r;
                this.game.gameMainUI.map.addChild(body);
                body.visible = true;
                body.alpha = 1;
            }));
            this.bodyArr.push(body);
        }
        bodyCheck() {
            if (this.eatBean >= this.bodyBeanNum && this.bodyArr.length < this.bodyMaxNum) {
                let addBodyNum = Math.floor(this.eatBean / this.bodyBeanNum);
                let x = this.bodyArr[this.bodyArr.length - 1].x;
                let y = this.bodyArr[this.bodyArr.length - 1].y;
                let r = this.bodyArr[this.bodyArr.length - 1].rotation;
                for (let index = 0; index < addBodyNum; index++) {
                    this.addBody(this.bodySpace * Math.cos(r * Math.PI / 180), this.bodySpace * Math.sin(r * Math.PI / 180), r);
                    console.log(this.bodySpace);
                }
                for (let index = 0; index < this.bodySpace * addBodyNum; index++) {
                    this.pathArr.push({
                        x: this.x - index * Math.cos(r * Math.PI / 180),
                        y: this.y - index * Math.sin(r * Math.PI / 180)
                    });
                }
                this.eatBean = this.eatBean % this.bodyBeanNum;
                if (this.snakeSize < 1) {
                    this.snakeSize = this.snakeInitSize + (1 - this.snakeInitSize) / this.bodyMaxNum * this.bodyArr.length;
                    this.bodyArr.forEach(element => {
                        this.snakeScale(element, "body");
                    });
                    this.snakeScale(this);
                }
                else {
                    this.snakeSize = 1;
                }
            }
        }
        getBodyNum() {
            return Math.floor(this.snakeLength / this.bodyBeanNum);
        }
        reverseRotation() {
            this.targetR = this.rotation > 0 ? this.rotation - 180 : this.rotation + 180;
        }
    }

    var Handler$1 = Laya.Handler;
    class Bean extends Laya.Sprite {
        constructor(x = Math.random() * Game.ins().gameMainUI.map.width, y = Math.random() * Game.ins().gameMainUI.map.height, colorNum = Math.floor(Math.random() * (6 - 1 + 1) + 1)) {
            super();
            this.game = Game.ins();
            this.haveEaten = false;
            this.speed = 2;
            this.eatenTargetPos = { x: 0, y: 0 };
            this.haveEatenDis = 4;
            this.eatenPos = { x: 0, y: 0 };
            this.eatenInitPos = { x: 0, y: 0 };
            this.colorNum = colorNum;
            this.zOrder = 0;
            this.visible = false;
            this.eatenInitPos["x"] = x;
            this.eatenInitPos["y"] = y;
            this.init(x, y);
        }
        init(x, y) {
            this.loadImage("images/bean" + this.colorNum + ".png", new Handler$1(this, this.loaded, [x, y]));
        }
        loaded(x, y) {
            this.zOrder = 0;
            this.pivot(this.width / 2, this.height / 2);
            this.pos(x, y);
            this.visible = true;
        }
    }

    var Browser$1 = Laya.Browser;
    var Stat = Laya.Stat;
    var TextFiled = Laya.Text;
    class Game {
        constructor() {
            this.stageW = Browser$1.onQQBrowser ? Browser$1.width / Browser$1.pixelRatio : Browser$1.clientWidth;
            this.stageH = Browser$1.onQQBrowser ? Browser$1.height / Browser$1.pixelRatio : Browser$1.clientHeight;
            this.beanSingleNumInit = 300;
            this.beanMaxNum = 600;
            this.beanNum = 0;
            this.beanOrder = 0;
            this.beans = {};
            this.SnakeAINum = 5;
            this.snakeAIArr = [];
            this._init();
            Stat.show(200, 10);
        }
        _init() {
            this.stageW = 600;
            this.stageH = Browser$1.height / Browser$1.width * this.stageW;
            Laya.init(this.stageW, this.stageH, Laya.WebGL);
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            Laya.stage.bgColor = "#555555";
            this._load();
            Browser$1.window.onresize = onWindowResize;
        }
        static ins() {
            if (!this._ins) {
                this._ins = new Game();
            }
            return this._ins;
        }
        _onresizeAction() {
            this.loading && this.loading.pos(this.stageW / 2, this.stageH / 2);
            this.gameStartUI && this.gameStartUI.pos(this.stageW / 2, this.stageH / 2);
            this.gameMainUI && (this.gameMainUI.mask_rank.x = (this.stageW - this.gameMainUI.mask_rank.width - 10));
            this.gameMainUI && this.gameMainUI.ctrl_flash.pos(this.stageW - this.gameMainUI.ctrl_flash.width, this.stageH - this.gameMainUI.ctrl_flash.height);
            this.gameMainUI && this.gameMainUI.ctrl_back.pos(this.gameMainUI.ctrl_back.width, this.stageH - this.gameMainUI.ctrl_back.height);
        }
        _load() {
            this.loading = new TextFiled();
            this.loading.text = "正在加载资源，请稍后...";
            this.loading.color = "#000000";
            this.loading.font = "Microsoft YaHei";
            this.loading.pos(this.stageW / 2, this.stageH / 2);
            this.loading.pivot(this.loading.width / 2, this.loading.height / 2);
            Laya.stage.addChild(this.loading);
            Laya.loader.load("res/atlas/images.atlas", Laya.Handler.create(this, () => {
                this.gameMain();
            }), null, Laya.Loader.ATLAS);
            Laya.loader.load("map/tile_map.png");
            Laya.loader.load("images/head1.png");
            Laya.loader.load("images/head2.png");
            Laya.loader.load("images/head3.png");
            Laya.loader.load("images/head4.png");
            Laya.loader.load("images/head5.png");
        }
        gameStartSence() {
            this.gameStartUI = new GameStart();
            this.gameStartUI.pos(this.stageW / 2, this.stageH / 2);
            this.gameStartUI.btn_single.on("click", this, this.gameStart, [0]);
            this.gameStartUI.btn_net.on("click", this, this.gameStart, [1]);
            Laya.stage.addChild(this.gameStartUI);
            Laya.stage.removeChild(this.loading);
            this.loading.destroy();
        }
        gameStart(gameMode) {
            this.nickname = this.gameStartUI.nickname.label;
            this.neturl = this.gameStartUI.neturl.label;
            this.skin = this.gameStartUI.skinRadio.selectedIndex;
            this.gameMode = gameMode;
            Laya.stage.removeChild(this.gameStartUI);
            this.gameMain();
        }
        gameMain() {
            this.gameMainUI = new GameMain();
            this.gameMainUI.map.pos(this.stageW / 2, this.stageH / 2);
            this.gameMainUI.mask_rank.x = this.stageW - this.gameMainUI.mask_rank.width - 10;
            this.gameMainUI.ctrl_flash.pos(this.stageW - this.gameMainUI.ctrl_flash.width - 30, this.stageH - this.gameMainUI.ctrl_flash.height);
            this.gameMainUI.ctrl_back.pos(this.gameMainUI.ctrl_back.width + 30, this.stageH - this.gameMainUI.ctrl_back.height);
            Laya.stage.addChild(this.gameMainUI);
            for (let _bean_i = 0; _bean_i < this.beanSingleNumInit; _bean_i++) {
                this.beanOrder++;
                this.addBean(this.beanOrder);
            }
            this.addBeanRandom();
            this.snakeSelf = new Snake();
            this.gameMainUI.map.addChild(this.snakeSelf);
            for (let index = 0; index < this.SnakeAINum; index++) {
                let snakeAI = new Snake(Math.floor(Math.random() * (5 - 1 + 1) + 1), this.gameMainUI.map.width * Math.random(), this.gameMainUI.map.height * Math.random());
                this.snakeAIArr.push(snakeAI);
                this.gameMainUI.map.addChild(snakeAI);
            }
            this.snakeAIRotation();
            Laya.timer.frameLoop(1, this, this.gameLoop);
        }
        gameLoop() {
            this.snakeSelf.move();
            this.snakeAIMove();
            this.mapMove();
            this.eateBean();
            this.gameMainUI.text_length.text = this.snakeSelf.snakeLength + "";
        }
        eateBean() {
            for (let key in this.beans) {
                let bean = this.beans[key];
                if (distance(bean.x, bean.y, this.snakeSelf.x, this.snakeSelf.y) <= this.snakeSelf.width / 2) {
                    bean.destroy();
                    this.beans[key] = undefined;
                    delete this.beans[key];
                    this.snakeSelf.snakeLength++;
                    this.snakeSelf.eatBean++;
                    this.beanNum--;
                }
                else if (distance(bean.x, bean.y, this.snakeSelf.x, this.snakeSelf.y) <= (this.snakeSelf.width / 2) + 20) {
                    bean.x += (this.snakeSelf.speed + 0.1) * Math.cos(Math.atan2(this.snakeSelf.y - bean.y, this.snakeSelf.x - bean.x));
                    bean.y += (this.snakeSelf.speed + 0.1) * Math.sin(Math.atan2(this.snakeSelf.y - bean.y, this.snakeSelf.x - bean.x));
                }
                for (let index = 0; index < this.snakeAIArr.length; index++) {
                    let element = this.snakeAIArr[index];
                    if (distance(bean.x, bean.y, element.x, element.y) <= element.width / 2) {
                        bean.destroy();
                        this.beans[key] = undefined;
                        delete this.beans[key];
                        element.snakeLength++;
                        element.eatBean++;
                        this.beanNum--;
                    }
                    else if (distance(bean.x, bean.y, element.x, element.y) <= (element.width / 2) + 20) {
                        bean.x += (bean.speed) * Math.cos(Math.atan2(element.y - bean.y, element.x - bean.x));
                        bean.y += (bean.speed) * Math.sin(Math.atan2(element.y - bean.y, element.x - bean.x));
                    }
                }
            }
        }
        mapMove() {
            let mapScale = this.snakeSelf.snakeInitSize / this.snakeSelf.snakeSize < 0.7 ? 0.7 : this.snakeSelf.snakeInitSize / this.snakeSelf.snakeSize;
            this.gameMainUI.map.x = -1 * (this.snakeSelf.x + this.snakeSelf.width / 2 - this.gameMainUI.map.width / 2) * mapScale + this.stageW / 2;
            this.gameMainUI.map.y = -1 * (this.snakeSelf.y + this.snakeSelf.height / 2 - this.gameMainUI.map.height / 2) * mapScale + this.stageH / 2;
            this.gameMainUI.map.scale(mapScale, mapScale);
        }
        addBean(beanOrder, x, y, colorNum) {
            let bean = new Bean(x, y, colorNum);
            bean.orderNum = beanOrder;
            this.beans[beanOrder] = bean;
            this.gameMainUI.map.addChild(bean);
            this.beanNum++;
        }
        addBeanRandom() {
            this.beanRandomTimer = setInterval(() => {
                if (this.beanNum < this.beanMaxNum) {
                    for (let index = 0; index < 20; index++) {
                        this.beanOrder++;
                        this.addBean(this.beanOrder);
                    }
                }
            }, 100);
        }
        snakeAIMove() {
            for (let index = 0; index < this.snakeAIArr.length; index++) {
                let snakeAI = this.snakeAIArr[index];
                snakeAI.move();
                let hitDis = 90 / snakeAI.speedObj["rotation"] * snakeAI.speed + snakeAI.width / 2;
                let hitPos = { x: 0, y: 0 };
                hitPos["x"] = hitDis * Math.cos(snakeAI.rotation * Math.PI / 180) + snakeAI.x;
                hitPos["y"] = hitDis * Math.sin(snakeAI.rotation * Math.PI / 180) + snakeAI.y;
                let hiten = false;
                if (hitPos["x"] >= this.gameMainUI.map.width - snakeAI.width / 2 || hitPos["x"] <= snakeAI.width / 2
                    || hitPos["y"] >= this.gameMainUI.map.height - snakeAI.width / 2 || hitPos["y"] <= snakeAI.width / 2) {
                    snakeAI.reverseRotation();
                }
                if (distance(hitPos["x"], hitPos["y"], this.snakeSelf.x, this.snakeSelf.y) <= this.snakeSelf.width) {
                    snakeAI.reverseRotation();
                    hiten = true;
                }
                for (let index = 0; index < this.snakeSelf.bodyArr.length; index++) {
                    if (hiten)
                        break;
                    let element = this.snakeSelf.bodyArr[index];
                    if (distance(hitPos["x"], hitPos["y"], element.x, element.y) <= element.width) {
                        snakeAI.reverseRotation();
                        hiten = true;
                    }
                }
                for (let i = 0; i < this.snakeAIArr.length; i++) {
                    if (hiten)
                        break;
                    let elementSnakeAI = this.snakeAIArr[i];
                    if (index == i)
                        continue;
                    if (distance(hitPos["x"], hitPos["y"], elementSnakeAI.x, elementSnakeAI.y) <= elementSnakeAI.width) {
                        snakeAI.reverseRotation();
                        hiten = true;
                    }
                    for (let index = 0; index < elementSnakeAI.bodyArr.length; index++) {
                        if (hiten)
                            break;
                        let element = elementSnakeAI.bodyArr[index];
                        if (distance(hitPos["x"], hitPos["y"], element.x, element.y) <= element.width) {
                            snakeAI.reverseRotation();
                            hiten = true;
                        }
                    }
                }
            }
        }
        snakeAIRotation() {
            for (let index = 0; index < this.snakeAIArr.length; index++) {
                this.snakeAIArr[index].targetR = 180 - Math.random() * 360;
                this.snakeAIArr[index].speedNow = Math.random() > 0.9 ? "fast" : "slow";
            }
            setInterval(() => {
                for (let index = 0; index < this.snakeAIArr.length; index++) {
                    this.snakeAIArr[index].targetR = 180 - Math.random() * 360;
                    this.snakeAIArr[index].speedNow = Math.random() > 0.9 ? "fast" : "slow";
                }
            }, 3000);
        }
    }
    function onWindowResize() {
    }
    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Game.ins();
        }
    }
    new Main();

}());
