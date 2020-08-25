//% color="#3943c6" block="ﾌﾟﾛｯﾀｰ・ｶｰ" icon="\uf1b9"

namespace eureka_plotter_car {
  //% color="#ff3d03" weight=59 blockId=plottercar_front block="|f_distance| 前に進む" group="1_基本の動き"
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
  }

  //% color="#f071bd" weight=30 blockId=auto_photo_R block="右ﾌｫﾄﾘﾌﾚｸﾀｰ" group="4　センサー"
  export function phto_R() {
    return Math.round((pins.analogReadPin(AnalogPin.P2) / 1023) * 100);
  }

  //% color="#f071bd" weight=28 blockId=auto_photo_L block="左ﾌｫﾄﾘﾌﾚｸﾀｰ" group="4　センサー"
  export function phto_L() {
    return Math.round((pins.analogReadPin(AnalogPin.P1) / 1023) * 100);
  }

  //% color="#d4b41f"  weight=26 block="右ﾌｫﾄﾘｸﾚｸﾀｰ値 |%limit_R| より小さい" group="4　センサー"
  //% limit_R.min=0 limit_R.max=100
  export function photo_R(limit_R: number): boolean {
    if ((pins.analogReadPin(AnalogPin.P2) / 1023) * 100 < limit_R) {
      return true;
    } else {
      return false;
    }
  }

  //% color="#d4b41f"  weight=27 block="左ﾌｫﾄﾘｸﾚｸﾀｰ値 |%limit_L| より小さい" group="4　センサー"
  //% limit_L.min=0 limit_L.max=100
  export function photo_L(limit_L: number): boolean {
    if ((pins.analogReadPin(AnalogPin.P1) / 1023) * 100 < limit_L) {
      return true;
    } else {
      return false;
    }
  }

  //% color="#6041f1"  weight=23 block="右が黒線をふんだ" group="3　センサー" group="4　センサー"
  export function photo_R_out(): boolean {
    if (
      (pins.analogReadPin(AnalogPin.P1) / 1023) * 100 > 20 &&
      (pins.analogReadPin(AnalogPin.P2) / 1023) * 100 < 20
    ) {
      return true;
    } else {
      return false;
    }
  }

  //% color="#6041f1"  weight=24 block="左が黒線をふんだ" group="3　センサー" group="4　センサー"
  export function photo_L_out(): boolean {
    if (
      (pins.analogReadPin(AnalogPin.P1) / 1023) * 100 < 20 &&
      (pins.analogReadPin(AnalogPin.P2) / 1023) * 100 > 20
    ) {
      return true;
    } else {
      return false;
    }
  }

  //% color="#6041f1"  weight=25 block="左右どちらも黒線をふんでいない" group="4　センサー"
  export function photo_LR_out(): boolean {
    if (
      (pins.analogReadPin(AnalogPin.P1) / 1023) * 100 > 20 &&
      (pins.analogReadPin(AnalogPin.P2) / 1023) * 100 > 20
    ) {
      return true;
    } else {
      return false;
    }
  }

  //% color="#6041f1"  weight=25 block="左右とも黒線をふんでいる" group="4　センサー"
  export function photo_LR_black(): boolean {
    if (
      (pins.analogReadPin(AnalogPin.P1) / 1023) * 100 < 20 &&
      (pins.analogReadPin(AnalogPin.P2) / 1023) * 100 < 20
    ) {
      return true;
    } else {
      return false;
    }
  }

  //% color="#009A00" weight=22 blockId=sonar_ping_2 block="きょりｾﾝｻ" group="4　センサー"
  export function ping() {
    // send
    basic.pause(20);
    pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
    pins.digitalWritePin(DigitalPin.P8, 0);
    control.waitMicros(2);
    pins.digitalWritePin(DigitalPin.P8, 1);
    control.waitMicros(10);
    pins.digitalWritePin(DigitalPin.P8, 0);
    // read
    const d = pins.pulseIn(DigitalPin.P16, PulseValue.High, 500 * 58);
    return Math.round(Math.idiv(d, 58) * 1.5) ;
  }

  //% color="#009A00" weight=20 block="きょりが |%limit| cmより小さく" group="4　センサー"
  //% limit.min=0 limit.max=50
  export function sonar_ping_3(limit: number): boolean {
    // send
    basic.pause(20);
    pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
    pins.digitalWritePin(DigitalPin.P8, 0);
    control.waitMicros(2);
    pins.digitalWritePin(DigitalPin.P8, 1);
    control.waitMicros(10);
    pins.digitalWritePin(DigitalPin.P8, 0);
    // read
    const d = pins.pulseIn(DigitalPin.P16, PulseValue.High, 500 * 58);
    if (Math.idiv(d, 58) * 1.5 < limit) {
      return true;
    } else {
      return false;
    }
  }

  //% color="#ff3d03" weight=12 blockId=auto_led_off block="ﾏｲｸﾛﾋﾞｯﾄのLEDを無効にする" group="5　ライト"
  export function auto_led_off() {
    led.enable(false);
  }

  //% color="#ff3d03" weight=11 blockId=auto_led_on block="ﾏｲｸﾛﾋﾞｯﾄのLEDを有効にする" group="5　ライト"
  export function auto_led_on() {
    led.enable(true);
  }

  //% color="#40a6ff" weight=10 blockId=auto_white_LED block="前＿白LED |%mode| " group="5　ライト"
  export function white_LED(mode: onoff) {
    if (mode == onoff.ON) {
      pins.digitalWritePin(DigitalPin.P3, 1);
    } else {
      return pins.digitalWritePin(DigitalPin.P3, 0);
    }
  }

  //% color="#ff4940" weight=8 blockId=auto_red_LED block="後ろ＿赤LED |%mode| " group="5　ライト"
  export function red_LED(mode: onoff) {
    if (mode == onoff.ON) {
      pins.digitalWritePin(DigitalPin.P15, 1);
    } else {
      return pins.digitalWritePin(DigitalPin.P15, 0);
    }
  }
*/

}
