import { Game } from "./Game";
import { Snake } from "./Snake";

/**
 * Bean extends Laya.Sprite
 */
import Sprite = Laya.Sprite
import Handler = Laya.Handler
export class Bean extends Laya.Sprite {
    private game: Game = Game.ins();
    colorNum: number
    orderNum: number

    haveEaten: boolean = false
    eatenTarget: Snake
    speed: number = 2
    eatenTargetPos: Object = { x: 0, y: 0 }
    haveEatenDis: number = 4
    eatenPos: Object = { x: 0, y: 0 }
    eatenInitPos: Object = { x: 0, y: 0 }

    constructor(
        x: number = Math.random() * Game.ins().gameMainUI.map.width
        , y: number = Math.random() * Game.ins().gameMainUI.map.height
        , colorNum: number = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    ) {
        super()
        this.colorNum = colorNum
        this.zOrder = 0
        this.visible = false
        this.eatenInitPos["x"] = x
        this.eatenInitPos["y"] = y
        this.init(x, y)
    }

    init(x: number, y: number): void {
        this.loadImage("images/bean" + this.colorNum + ".png", new Handler(this, this.loaded, [x, y]))
    }

    loaded(x: number, y: number): void {
        this.zOrder = 0
        this.pivot(this.width / 2, this.height / 2)
        this.pos(x, y)
        this.visible = true
    }
}