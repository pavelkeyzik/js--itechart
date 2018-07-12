import arrayHandler from './array-processing.js';
import dateFormat from './date-formatter';
import textFormat from './text-formatter';

var subSumSlowResultBlock = document.getElementById('sub-sum-slow');
var subSumFastResultBlock = document.getElementById('sub-sum-fast');
var numbersMinMaxBlock = document.getElementById('numbers-min-max');
var selectionTaskBlock = document.getElementById('selection-task');
var dateDisplayBlock = document.getElementById('date-display');
var textFormatterBlock = document.getElementById('text-formatter');

var timerStartSlow = performance.now();
subSumSlowResultBlock.innerHTML = `
<ul>
  <li>arrayHandler.subSum([-1, 2, 3]) = ${arrayHandler.subSum([-1, 2, 3])}</li>
  <li>arrayHandler.subSum([2, -1, 2, 3, -9]) = ${arrayHandler.subSum([2, -1, 2, 3, -9])}</li>
  <li>arrayHandler.subSum([-1, 2, 3, -9, 11]) = ${arrayHandler.subSum([-1, 2, 3, -9, 11])}</li>
  <li>arrayHandler.subSum([-2, -1, 1, 2]) = ${arrayHandler.subSum([-2, -1, 1, 2])}</li>
  <li>arrayHandler.subSum([100, -9, 2, -3, 5]) = ${arrayHandler.subSum([100, -9, 2, -3, 5])}</li>
  <li>arrayHandler.subSum([1, 2, 3]) = ${arrayHandler.subSum([1, 2, 3])}</li>
  <li>arrayHandler.subSum([-1, -2, -3]) = ${arrayHandler.subSum([-1, -2, -3])}</li>
</ul>
<b>Работы выполнена за ${performance.now() - timerStartSlow}ms</b>
`;

var timerStartFast = performance.now();
subSumFastResultBlock.innerHTML = `
<ul>
  <li>arrayHandler.subSumFast([-1, 2, 3]) = ${arrayHandler.subSumFast([-1, 2, 3])}</li>
  <li>arrayHandler.subSumFast([2, -1, 2, 3, -9]) = ${arrayHandler.subSumFast([2, -1, 2, 3, -9])}</li>
  <li>arrayHandler.subSumFast([-1, 2, 3, -9, 11]) = ${arrayHandler.subSumFast([-1, 2, 3, -9, 11])}</li>
  <li>arrayHandler.subSumFast([-2, -1, 1, 2]) = ${arrayHandler.subSumFast([-2, -1, 1, 2])}</li>
  <li>arrayHandler.subSumFast([100, -9, 2, -3, 5]) = ${arrayHandler.subSumFast([100, -9, 2, -3, 5])}</li>
  <li>arrayHandler.subSumFast([1, 2, 3]) = ${arrayHandler.subSumFast([1, 2, 3])}</li>
  <li>arrayHandler.subSumFast([-1, -2, -3]) = ${arrayHandler.subSumFast([-1, -2, -3])}</li>
</ul>
<b>Работы выполнена за ${performance.now() - timerStartFast}ms</b>
`;

var forSearchMedianEven = [23, 76, 34, 115, 6, 58, 88, 39, 17, 25, 7, 54, 49, 52];
var forSearchMedianOdd = [123, 78, 11, 95, 34, 67, 101, 356, 44, 73, 47];
var forSearchMinMax = [67, 101, 356];

numbersMinMaxBlock.innerHTML = `
  <ul>
    <li>Минимальное из чисел <b>[${forSearchMinMax.toString()}]</b>: ${arrayHandler.searchMinNumber(forSearchMinMax)}</li>
    <li>Максимальное из чисел <b>[${forSearchMinMax.toString()}]</b>: ${arrayHandler.searchMaxNumber(forSearchMinMax)}</li>
    <li>Медиана чисел <b>[${forSearchMedianEven.toString()}]</b>: ${arrayHandler.searchMedianNumber(forSearchMedianEven)}</li>
    <li>Медиана чисел <b>[${forSearchMedianOdd.toString()}]</b>: ${arrayHandler.searchMedianNumber(forSearchMedianOdd)}</li>
  </ul>
`;

var forSearchSequence = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1];

selectionTaskBlock.innerHTML = `
  <ul>
    <li>Sequence of <b>[${forSearchSequence}]</b>: ${arrayHandler.searchMaxLengthOfIncreasingSequence(forSearchSequence)}</li>
  </ul>
`;

dateDisplayBlock.innerHTML = `
  <ul>
    <li>'02012018'.format(): <b>${new dateFormat('02012018').format()}</b></li>
    <li>'02012018'.format('dots'): <b>${new dateFormat('02012018').format('dots')}</b></li>
    <li>'02012018'.format('full'): <b>${new dateFormat('02012018').format('full')}</b></li>
    <li>'02012018'.format('DD/MM/YYYY'): <b>${new dateFormat('02012018').format('DD/MM/YYYY')}</b></li>
    <li>'02012018'.format('DD/MM/YY'): <b>${new dateFormat('02012018').format('DD/MM/YY')}</b></li>
    <li>'02012018'.fromNow(): <b>${new dateFormat('02012018').fromNow()}</b></li>
    <li>'02012015'.fromNow(): <b>${new dateFormat('02012015').fromNow()}</b></li>
    <li>'02012019'.fromNow(): <b>${new dateFormat('02012019').fromNow()}</b></li>
    <li>81212412461.fromNow(): <b>${new dateFormat(81212412461).fromNow()}</b></li>
  </ul>
`;

textFormatterBlock.innerHTML = `
  <ul>
    <li>textFormat('Hi boy!', 0, 0, 'symbol'): <pre>${textFormat('Hi boy!', 0, 0, 'symbol')}</pre></li>
    <li>textFormat('Hi boy!\\nHow are you?', 0, 0, 'without'): <pre>${textFormat('Hi boy!\nHow are you?', 0, 0, 'without')}</pre></li>
    <li>textFormat('Are you kidding me?', 0, 0, 'word'): <pre>${textFormat('Are you kidding me?', 0, 0, 'word')}</pre></li>
    <li>textFormat('Hello my and etc. name is Pasha. I"m Full stack developer. How are you? - I"m fine', 4, 8, 'word'): <pre>${textFormat('Hello my and etc. name is Pasha. I"m Full stack developer. How are you? - I"m fine', 4, 8, 'word')}</pre></li>
  </ul>
`;
