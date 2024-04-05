export type ErrorPageType = {
  error: Error & { digest?: string };
  reset: () => void;
};
