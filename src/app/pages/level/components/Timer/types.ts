export interface ICountdownTimerProps {
  countdownSeconds: number;
  onTimeout?: () => void;
}
