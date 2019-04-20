import { ITimer } from "../../../core/timer/types";

export interface ITimerInput {
  countdownSeconds: number;
  onTimeout: (remainingTime: number) => void;
}

export interface ITimerOutput {
  elapsedTime: ITimer;
  stopped: boolean;
  substractMinute: () => void;
}
