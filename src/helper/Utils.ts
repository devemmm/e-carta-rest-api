import moment from 'moment';

class Utils {
  constructor() {
    return this;
  }

  rightNow() {
    return moment().format("YYYY-MM-DD :: hh:mm:ss");
  }
}

export default Utils;