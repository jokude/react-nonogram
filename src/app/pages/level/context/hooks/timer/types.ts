export interface ITimerInput {
  countdownSeconds: number;
  onTimeout: () => void;
}

export interface ITimerOutput {
  elapsedTime: ITimer;
}

export interface ITimer {
  minutes: string;
  seconds: string;
}
