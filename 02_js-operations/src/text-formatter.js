function TextFormatter(text, maxSizeOfRow = 0, maxCountOfRow = 0, formatType = null) {
  
  switch(formatType) {
  case 'word':
    text = text.split(' ').join('\n');
    break;
  case 'sentence':
    text = text.replace(/([.!?])\s*([A-Z-])/g, '$1\n$2');
    break;
  case 'symbol':
    text = text.split('').join('\n');
    break;
  case 'without':
    text = text.replace('\n', ' ');
    break;
  }

  if(maxSizeOfRow > 0) {
    text = cutBySizeOfRow(text, maxSizeOfRow);
  }

  if(maxCountOfRow > 0) {
    text = cutByCountOfRow(text, maxCountOfRow);
  }

  return text;
}

function cutBySizeOfRow(text, maxSizeOfRow) {
  text = text.replace(/\s/g, '').split('').map((letter, index) => {
    if((index + 1) % maxSizeOfRow === 0) {
      return `${letter}\n`;
    }
    return letter;
  }).join('');

  return text;
}

function cutByCountOfRow(text, maxCountOfRow) {
  text = text.split('\n');
  text.length = maxCountOfRow;
  text = text.join('\n');

  return text;
}

export default TextFormatter;