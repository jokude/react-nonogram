export interface ITimerInput {
  countdownSeconds: number;
  onTimeout: () => void;
}

export interface ITimerOutput {
  elapsedTime: ITimer;
  substractMinute: () => void;
}

export interface ITimer {
  minutes: string;
  seconds: string;
}
