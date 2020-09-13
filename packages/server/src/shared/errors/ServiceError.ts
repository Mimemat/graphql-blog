export class ServiceError {
  public message: string;

  public code = 501;

  constructor(message: string, code?: number) {
    this.message = message;
    if (code) {
      this.code = code;
    }
  }
}
