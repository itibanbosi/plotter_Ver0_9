//% color="#3943c6" block="ﾌﾟﾛｯﾀｰ・ｶｰ" icon="\uf1b9"

namespace eureka_plotter_car {
  //% color="#3943c6" weight=71　blockId=plottercar_forward
  //% block="前進 |%F_cm| " group="3　基本の動き"
  export function plottercar_forward(F_cm: number): void {
    for (let index = 0; index < (F_cm / 18.23) * 512; index++) {
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      basic.pause(10);
    }
  }

  //% color="#3943c6" weight=71　blockId=plottercar_L_cycle
  //% block="左回り　角度 |%L_degree| " group="3　基本の動き"
  export function plottercar_L_cycle(L_degree: number): void {
    for (let index = 0; index < (L_degree / 360) * 512 * 1.8; index++) {
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      basic.pause(10);
    }
  }

  //% color="#3943c6" weight=71　blockId=plottercar_rest
  //% block="停止状態（電流ＯＦＦ）" group="3　基本の動き"
  export function plottercar_frest(): void {
    pins.digitalWritePin(DigitalPin.P3, 0);
    pins.digitalWritePin(DigitalPin.P4, 0);
    pins.digitalWritePin(DigitalPin.P6, 0);
    pins.digitalWritePin(DigitalPin.P7, 0);
    pins.digitalWritePin(DigitalPin.P13, 0);
    pins.digitalWritePin(DigitalPin.P14, 0);
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P16, 0);
  }

  //% color="#3943c6" weight=71　blockId=plottercar_R_cycle
  //% block="左回り　角度 |%R_degree| " group="3　基本の動き"
  export function plottercar_R_cycle(R_degree: number): void {
    for (let index = 0; index < (R_degree / 360) * 512 * 1.8; index++) {
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      basic.pause(10);
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      basic.pause(10);
    }
  }
}
