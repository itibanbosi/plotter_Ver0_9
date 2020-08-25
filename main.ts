//% color="#3943c6" block="ﾌﾟﾛｯﾀｰ・ｶｰ" icon="\uf1b9"

namespace eureka_plotter_car {
  //% color="#ff3d03" weight=function 前進 (距離ｃｍ: number) {
  for (let index = 0; index < 距離ｃｍ / 18.23 * 512; index++) {
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
  }
}
input.onButtonPressed(Button.B, function () {
  pins.servoWritePin(AnalogPin.P2, 90)
  モーターOFF()
})
function 時計回り(角度: number) {
  for (let index = 0; index < 角度 / 360 * 512 * 1.8; index++) {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
  }
}
function モーターOFF() {
  pins.digitalWritePin(DigitalPin.P3, 0)
  pins.digitalWritePin(DigitalPin.P4, 0)
  pins.digitalWritePin(DigitalPin.P6, 0)
  pins.digitalWritePin(DigitalPin.P7, 0)
  pins.digitalWritePin(DigitalPin.P13, 0)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
}
function 反時計回り(角度: number) {
  for (let index = 0; index < 角度 / 360 * 512 * 1.8; index++) {
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < wait; index++) {
      dummy = 0
    }
  }
}
let dummy = 0
let wait = 0
wait = 400
led.enable(false)
pins.digitalWritePin(DigitalPin.P3, 0)
pins.digitalWritePin(DigitalPin.P4, 0)
pins.digitalWritePin(DigitalPin.P6, 0)
pins.digitalWritePin(DigitalPin.P7, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
let list = [1, 2]
59 blockId=plottercar_front block="|f_distance| 前に進む" group="1_基本の動き"
  export function plottercar_front(f_distance:number) {
    pins.analogSetPitchPin(AnalogPin.P0);
  }
  

/*
  //% color="#ffa800" weight=99　blockId=servos_condition
  //% block="左右バランス調整 左へ |%le| 右へ" group="2　調整"
  //% le.min=-100 le.max=100
  export function condition(le: number): void {
    con_le = le;
  }

  //% color="#ffa800" weight=97　blockId=servos_op
  //% block="出力調整 |%op|" group="2　調整"
  //% op.min=-100 op.max=0
  export function servo_op(op: number): void {
    con_op = op;
  }

  //% color="#3943c6" weight=70　blockId=servos_forward
  //% block="前 " group="3　基本の動き"
  export function forward(): void {
    if (con_le >= 0) {
      pins.servoWritePin(AnalogPin.P14,90 - (90 * (con_op + 100)) / 100 + con_le);
      pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100);
    }
    if (con_le < 0) {
      pins.servoWritePin(AnalogPin.P14, 90 - (90 * (con_op + 100)) / 100);
      pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100 + con_le);
    }
  }

  //% color="#3943c6" weight=69 blockId=servos_backward
  //% block="後ろ" group="3　基本の動き"
  export function backward(): void {
    if (con_le >= 0) {
      pins.servoWritePin( AnalogPin.P14,90 + (90 * (con_op + 100)) / 100 - con_le );
      pins.servoWritePin(AnalogPin.P13, 90 - (90 * (con_op + 100)) / 100);
    }
    if (con_le < 0) {
      pins.servoWritePin(AnalogPin.P14, 90 + (90 * (con_op + 100)) / 100);
      pins.servoWritePin(AnalogPin.P13, 90 - (90 * (con_op + 100)) / 100 - con_le );
    }
  }

  //% color="#3943c6" weight=67 blockId=servos_left
  //% block="左" group="3　基本の動き"
  export function left(): void {
      pins.servoWritePin(AnalogPin.P14,90 - (90 * (con_op + 100)) / 100 );
      pins.servoWritePin(AnalogPin.P13, 90 );
  }

  //% color="#3943c6" weight=66 blockId=servos_right
  //% block="右" group="3　基本の動き"
  export function right(): void {
      pins.servoWritePin(AnalogPin.P14,90 );
      pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100 );
  }

  //% color="#3943c6" weight=65 blockId=servos_forward_right
  //% block="ななめ右前" group="3　基本の動き"
  export function forward_right(): void {
    if (con_le >= 0) {
      pins.servoWritePin(AnalogPin.P14,80);
      pins.servoWritePin(AnalogPin.P13, 120);
    }
  }

      //% color="#3943c6" weight=64 blockId=servos_forward_left
  //% block="ななめ左前" group="3　基本の動き"
  export function forward_left(): void {
    if (con_le >= 0) {
      pins.servoWritePin(AnalogPin.P14,60 );
      pins.servoWritePin(AnalogPin.P13, 100);
    }
  }

  //% color="#3943c6" weight=61 blockId=servos_stop
  //% block="止まる" group="3　基本の動き"
  export function stop(): void {
    pins.servoWritePin(AnalogPin.P13, 90);
    pins.servoWritePin(AnalogPin.P14, 90);
  }
  //% color="#3943c6" weight=63blockId=servos_left_rotation
  //% block="左回転" group="3　基本の動き"
  export function left_rotation(): void {
      pins.servoWritePin(AnalogPin.P14,90 - (90 * (con_op + 100)) / 100 );
      pins.servoWritePin(AnalogPin.P13, 90 - (90 * (con_op + 100)) / 100);
    }

  //% color="#3943c6" weight=62 blockId=servos_right_rotation
  //% block="右回転" group="3　基本の動き"
  export function right_rotation(): void {
      pins.servoWritePin(AnalogPin.P14,90 + (90 * (con_op + 100)) / 100 );
      pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100);
    }

  //% color="#3943c6" weight=59　blockId=servo_pro_lr
  //% block="前進バランス 左へ |%set_lr| 右へ" group="3　基本の動き"
  //% set_lr.min=-90 set_lr.max=90
  export function pro_lr(set_lr: number): void {
      pins.servoWritePin(AnalogPin.P14,90 - (90 * (con_op + 100)) / 100 );
      pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100);
    }

  //% color="#3943c6" weight=58　blockId=servo_pro_l
  //% block="左車輪 出力 |%set_l| " group="3　基本の動き"
  //% set_l.min=-100 set_l.max=100
  export function pro_l(set_l: number): void {
    pins.servoWritePin(AnalogPin.P13, 90 + (90 * set_l) / 100);
  }

  //% color="#3943c6" weight=56　blockId=servo_pro_r
  //% block="右車輪 出力 |%set_r| " group="3　基本の動き"
  //% set_r.min=-100 set_r.max=100
  export function pro_r(set_r: number): void {
    pins.servoWritePin(AnalogPin.P14, 90 - (90 * set_r) / 100);
  }

  //% color="#3943c6" weight=60 blockId=servos_neutral
  //% block="サーボをニュートラルする" group="3　基本の動き"
  export function neutral(): void {
    pins.digitalWritePin(DigitalPin.P13, 0);
    pins.digitalWritePin(DigitalPin.P14, 0);
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P16, 1);
    for (let index = 0; index < wait; index++) {
      dummy = 0;
    }
    pins.digitalWritePin(DigitalPin.P3, 0);
    pins.digitalWritePin(DigitalPin.P4, 0);
    pins.digitalWritePin(DigitalPin.P6, 1);
    pins.digitalWritePin(DigitalPin.P7, 1);
    pins.digitalWritePin(DigitalPin.P13, 0);
    pins.digitalWritePin(DigitalPin.P14, 0);
    pins.digitalWritePin(DigitalPin.P15, 1);
    pins.digitalWritePin(DigitalPin.P16, 1);
    for (let index = 0; index < wait; index++) {
      dummy = 0;
    }
    pins.digitalWritePin(DigitalPin.P3, 0);
    pins.digitalWritePin(DigitalPin.P4, 0);
    pins.digitalWritePin(DigitalPin.P6, 1);
    pins.digitalWritePin(DigitalPin.P7, 0);
    pins.digitalWritePin(DigitalPin.P13, 0);
    pins.digitalWritePin(DigitalPin.P14, 0);
    pins.digitalWritePin(DigitalPin.P15, 1);
    pins.digitalWritePin(DigitalPin.P16, 0);
    for (let index = 0; index < wait; index++) {
      dummy = 0;
    }
    pins.digitalWritePin(DigitalPin.P3, 1);
    pins.digitalWritePin(DigitalPin.P4, 1);
    pins.digitalWritePin(DigitalPin.P6, 1);
    pins.digitalWritePin(DigitalPin.P7, 0);
    pins.digitalWritePin(DigitalPin.P13, 1);
    pins.digitalWritePin(DigitalPin.P14, 1);
    pins.digitalWritePin(DigitalPin.P15, 1);
    pins.digitalWritePin(DigitalPin.P16, 0);
    for (let index = 0; index < wait; index++) {
      dummy = 0;
    }
    pins.digitalWritePin(DigitalPin.P3, 0);
    pins.digitalWritePin(DigitalPin.P4, 1);
    pins.digitalWritePin(DigitalPin.P6, 0);
    pins.digitalWritePin(DigitalPin.P7, 0);
    pins.digitalWritePin(DigitalPin.P13, 0);
    pins.digitalWritePin(DigitalPin.P14, 1);
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P16, 0);
    for (let index = 0; index < wait; index++) {
      dummy = 0;
    }
    pins.digitalWritePin(DigitalPin.P3, 1);
    pins.digitalWritePin(DigitalPin.P4, 1);
    pins.digitalWritePin(DigitalPin.P6, 0);
    pins.digitalWritePin(DigitalPin.P7, 0);
    pins.digitalWritePin(DigitalPin.P13, 1);
    pins.digitalWritePin(DigitalPin.P14, 1);
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P16, 0);
    for (let index = 0; index < wait; index++) {
      dummy = 0;
    }
    pins.digitalWritePin(DigitalPin.P3, 1);
    pins.digitalWritePin(DigitalPin.P4, 0);
    pins.digitalWritePin(DigitalPin.P6, 0);
    pins.digitalWritePin(DigitalPin.P7, 0);
    pins.digitalWritePin(DigitalPin.P13, 1);
    pins.digitalWritePin(DigitalPin.P14, 0);
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P16, 0);
    for (let index = 0; index < wait; index++) {
      dummy = 0;
    }
    pins.digitalWritePin(DigitalPin.P3, 1);
    pins.digitalWritePin(DigitalPin.P4, 0);
    pins.digitalWritePin(DigitalPin.P6, 0);
    pins.digitalWritePin(DigitalPin.P7, 1);
    pins.digitalWritePin(DigitalPin.P13, 1);
    pins.digitalWritePin(DigitalPin.P14, 0);
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P16, 1);
    for (let index = 0; index < wait; index++) {
      dummy = 0;
    }
  }
*/

}
let dummy = 0;
let wait = 0;
wait = 400;
led.enable(false);
pins.digitalWritePin(DigitalPin.P3, 0);
pins.digitalWritePin(DigitalPin.P4, 0);
pins.digitalWritePin(DigitalPin.P6, 0);
pins.digitalWritePin(DigitalPin.P7, 0);
pins.digitalWritePin(DigitalPin.P13, 0);
pins.digitalWritePin(DigitalPin.P14, 0);
pins.digitalWritePin(DigitalPin.P15, 0);
pins.digitalWritePin(DigitalPin.P16, 0);
let list = [1, 2];
