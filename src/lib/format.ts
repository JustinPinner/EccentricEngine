// Formatting helper functions

class Formatter {
  constructor() {};

  leftPad(num: number, padChar: string, maxLen: number) {
    // don't rely on implicit conversion
    const str = num.toString();
    // protect against negative padding length
    const padLen = ((maxLen || str.length) - str.length < 0) ? 0 : (maxLen || str.length) - str.length;
    const padChars = padChar.repeat(padLen);
    return `${padChars}${str}`;
  };

  time(dateVal?: Date, includeMillis?: boolean) {
    const when = dateVal || new Date();
    const hh = this.leftPad(when.getHours(), '0', 2);
    const mm = this.leftPad(when.getMinutes(), '0', 2);
    const ss = this.leftPad(when.getSeconds(), '0', 2);
    const mi = this.leftPad(when.getMilliseconds(), '0', 3);
    return `${hh}:${mm}:${ss}${includeMillis ? `.${mi}` : ''}`;
  };

  date(dateVal?: Date) {
    const when = dateVal || new Date();
    const yyyy = when.getFullYear();
    const mm = this.leftPad(when.getMonth(), '0', 2);
    const dd = this.leftPad(when.getDate(), '0', 2);
    return `${yyyy}-${mm}-${dd}`;
  };

  dateTime(dateVal?: Date, includeMillis?: boolean) {
    return `${this.date(dateVal)} ${this.time(dateVal, includeMillis)}`;
  };
};

export {
  Formatter
};