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
  if(!date) {
    return;
  }
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

DateFormatter.prototype.parse = function(date, from, to) {
  const regExpDateParse = /D{2}|M{2}|Y{2|4}|(Y{4})/g;
  const delimiterFrom = from.replace(regExpDateParse, '')[0];
  from = from.replace(/[\\\/\.-?]/g, '');
  const setFrom = new Set(from);

  const newDate = date.split(delimiterFrom);
  let delimiterTo, setTo;
  
  if(to) {
    delimiterTo = to.replace(regExpDateParse, '')[0];
    to = to.replace(/[\\\/\.-?]/g, '');
    setTo = new Set(to);
  }

  let d, m, y;
  let result = [];
  let index = 0;
  
  setFrom.forEach(i => {
    switch(i) {
    case 'D':
      d = newDate[_searchIndexOfSet(setFrom, 'D')];
      result[index] = d;
      break;
    case 'M':
      m =  newDate[_searchIndexOfSet(setFrom, 'M')];
      result[index] = m;
      break;
    case 'Y':
      y = newDate[_searchIndexOfSet(setFrom, 'Y')];
      result[index] = y;
      break;
    }

    index++;
  });


  if(setTo) {
    let index = 0;

    setTo.forEach(i => {
      switch(i) {
      case 'D':
        result[index] = d;
        break;
      case 'M':
        result[index] = m;
        break;
      case 'Y':
        result[index] = y;
        break;
      }
      
      index++;
    });
  }

  let delimiter = delimiterTo || delimiterFrom;
  
  return result.join(delimiter);
}

function _searchIndexOfSet(items, elementToSearch) {
  let index = 0;
  
  for(let item of items) {
    if(item === elementToSearch) {
      return index;
    }
    index++;
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