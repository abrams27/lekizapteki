export class Logger {
  static logRequest(requestName: string, requestUrl: string) {
    const logMsg = 'Log: ' + requestName + ': ' + requestUrl;
    console.log(logMsg);
  }
}
