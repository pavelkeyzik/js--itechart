class BinaryConverter {
  
  constructor(number) {
    if(Array.isArray(number)) {
      this._number = parseInt(number.reverse().join(''), 2);
    } else if (Number.isInteger(number)) {
      this._number = parseInt(number.toString(2), 2);
    } else if (number.startsWith('#')) {
      this._number = parseInt(number.substr(1), 16);
    }
  }

  toDec() {
    return this._number;
  }

  toBinary() {
    return parseInt(this._number.toString(2));
  }

  toHex() {
    return `#${this._number.toString(16).padStart(6, '0')}`;
  }
}

export default BinaryConverter;