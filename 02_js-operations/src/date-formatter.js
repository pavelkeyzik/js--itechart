var MONTH = [
  {
    name: 'Jan',
    countOfDays: 31
  },
  {
    name: 'Feb',
    countOfDays: 28
  },
  {
    name: 'Mar',
    countOfDays: 31
  },
  {
    name: 'Apr',
    countOfDays: 30
  },
  {
    name: 'May',
    countOfDays: 31
  },
  {
    name: 'Jun',
    countOfDays: 30
  },
  {
    name: 'Jul',
    countOfDays: 31
  },
  {
    name: 'Aug',
    countOfDays: 31
  },
  {
    name: 'Sep',
    countOfDays: 30
  },
  {
    name: 'Oct',
    countOfDays: 31
  },
  {
    name: 'Nov',
    countOfDays: 30
  },
  {
    name: 'Dec',
    countOfDays: 31
  }
];

function DateFormatter(date) {
  if(typeof date === 'number') {
    this._day = new Date(date).getDate().toString().substring(0, 2).padStart(2, '0');
    this._year = new Date(date).getFullYear().toString();
    this._month = (new Date(date).getMonth()+1).toString().padStart(2, '0');
  } else {
    this._day = date.substring(0, 2).padStart(2, '0');
    this._year = date.substring(4);
    this._month = date.substring(2, 4).padStart(2, '0');
  }

  this.isValid = function() {
    let dateForCheck = `${this._month}-${this._day}-${this._year}`;
    return !isNaN(new Date(dateForCheck).getTime());
  }
};

DateFormatter.prototype.format = function(param) {
  if(!this.isValid()) return 'Invalid Date';
  
  let d = this._day;
  let m = this._month;
  let M = MONTH[this._month-1].name;
  let y = this._year.substr(-2);
  let Y = this._year;

  switch(param) {
  case 'dots':
    return `${d}.${m}.${Y}`;
  case 'full':
    return `${d} ${MONTH[this._month-1].name} ${this._year}`;
  case 'DD/MM/YYYY':
    return `${d}/${m}/${Y}`;
  case 'DD/MM/YY':
    return `${d}/${m}/${y}`;
  default:
    return `${d}-${m}-${Y}`;
  }
}

DateFormatter.prototype.fromNow = function() {
  let currentYear = new Date().getFullYear();
  let countOfYears = currentYear - this._year;

  if(countOfYears == 0) {
    return `This year`; 
  } else if (countOfYears < 0) {
    return `In ${Math.abs(countOfYears)} years from now`; 
  } else {
    return `${countOfYears} years ago`; 
  }
}

export default DateFormatter;