// Formatting helper functions

const leftPad = function(unpadded, char, maxLen) {
  // don't rely on implicit conversion
  const str = !isNaN(unpadded) ? unpadded.toString() : unpadded;
  // protect against negative padding length
  const padLen = ((maxLen || str.length) - str.length < 0) ? 0 : (maxLen || str.length) - str.length;
  const padChars = char.repeat(padLen);
  return `${padChars}${str}`;
};

const time = function(dateVal, includeMillis) {
  const when = dateVal || new Date();
  const hh = leftPad(when.getHours(), '0', 2);
  const mm = leftPad(when.getMinutes(), '0', 2);
  const ss = leftPad(when.getSeconds(), '0', 2);
  const mi = leftPad(when.getMilliseconds(), '0', 3);
  return `${hh}:${mm}:${ss}${includeMillis ? `.${mi}` : ''}`;
};

const date = function(dateVal) {
  const when = dateVal || new Date();
  const yyyy = when.getFullYear();
  const mm = leftPad(when.getMonth(), '0', 2);
  const dd = leftPad(when.getDate(), '0', 2);
  return `${yyyy}-${mm}-${dd}`;
}

const dateTime = function(dateVal, includeMillis) {
  return `${date(dateVal)} ${time(dateVal, includeMillis)}`;
};

class Formatter {
  constructor() {
    this.leftPad = leftPad;
    this.formatTime = time;
    this.formatDate = date;
    this.formatDateTime = dateTime;
  }
};

export {
  Formatter
};