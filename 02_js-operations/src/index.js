import arrayHandler from './array-processing.js';
import dateFormat from './date-formatter';
import textFormat from './text-formatter';
import stringCalculator from './string-calculator';
import arraySorter from './array-sorter';
import binaryConverter from './binary-converter';
import cachingCalculator from './caching-calculator';
import cachingFunction from './caching-functions';

const subSumSlowResultBlock = document.getElementById('sub-sum-slow');
const subSumFastResultBlock = document.getElementById('sub-sum-fast');
const numbersMinMaxBlock = document.getElementById('numbers-min-max');
const selectionTaskBlock = document.getElementById('selection-task');
const dateDisplayBlock = document.getElementById('date-display');
const textFormatterBlock = document.getElementById('text-formatter');
const stringCalculatorBlock = document.getElementById('string-calculator');
const arraySorterBlock = document.getElementById('array-sorter');
const binaryConverterBlock = document.getElementById('binary-converter');
const cachingCalculatorBlock = document.getElementById('caching-calculator');
const cachingCalculatorButton = document.getElementById('caching-calculator__button');
const cachingCalculatorResult = document.getElementById('caching-calculator__result');
const cachingFunctionsResult = document.getElementById('caching-function');

const timerStartSlow = performance.now();
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

const timerStartFast = performance.now();
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

const forSearchMedianEven = [23, 76, 34, 115, 6, 58, 88, 39, 17, 25, 7, 54, 49, 52];
const forSearchMedianOdd = [123, 78, 11, 95, 34, 67, 101, 356, 44, 73, 47];
const forSearchMinMax = [67, 101, 356];

numbersMinMaxBlock.innerHTML = `
  <ul>
    <li>Минимальное из чисел <b>[${forSearchMinMax.toString()}]</b>: ${arrayHandler.searchMinNumber(forSearchMinMax)}</li>
    <li>Максимальное из чисел <b>[${forSearchMinMax.toString()}]</b>: ${arrayHandler.searchMaxNumber(forSearchMinMax)}</li>
    <li>Медиана чисел <b>[${forSearchMedianEven.toString()}]</b>: ${arrayHandler.searchMedianNumber(forSearchMedianEven)}</li>
    <li>Медиана чисел <b>[${forSearchMedianOdd.toString()}]</b>: ${arrayHandler.searchMedianNumber(forSearchMedianOdd)}</li>
  </ul>
`;

const forSearchSequence = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1];

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
    <li>new dateFormat().parse('2018/07/06', 'YYYY/MM/DD', 'DD.YYYY.MM'): <b>${new dateFormat().parse('2018/07/06', 'YYYY/MM/DD', 'DD.YYYY.MM')}</b></li>
    <li>new dateFormat().parse('2018/07/06', 'YYYY/MM/DD'): <b>${new dateFormat().parse('2018/07/06', 'YYYY/MM/DD')}</b></li>
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

stringCalculatorBlock.innerHTML = `
  <ul>
    <li>stringCalculator('2', '4', '+'): ${stringCalculator('2', '4', '+')}</li>
    <li>stringCalculator('4', '2', '-'): ${stringCalculator('4', '2', '-')}</li>
    <li>stringCalculator('14', '4', '*'): ${stringCalculator('14', '4', '*')}</li>
    <li>stringCalculator('14', '4', '/'): ${stringCalculator('14', '4', '/')}</li>
    <li>stringCalculator('0.2', '0.1', '+'): ${stringCalculator('0.2', '0.1', '+')}</li>
    <li>stringCalculator('0.2', '0.1', '-'): ${stringCalculator('0.2', '0.1', '-')}</li>
    <li>stringCalculator('0.2', '0.1', '*'): ${stringCalculator('0.2', '0.1', '*')}</li>
    <li>stringCalculator('0.4', '0.2', '/'): ${stringCalculator('0.4', '0.2', '/')}</li>
  </ul>
`;

const forSortingArray = [3, 5, 1, 3, 4, 5, 4, 2];
const arraySort = new arraySorter(forSortingArray);

arraySorterBlock.innerHTML = `
  <span>${forSortingArray}</span>
  <ul>
    <li>Bubble sort: ${arraySort.bubbleSort(forSortingArray)}</li>
    <li>Insertion sort: ${arraySort.insertionSort(forSortingArray)}</li>
    <li>Quick sort: ${arraySort.quickSort(forSortingArray)}</li>
    <li>Selection sort: ${arraySort.selectionSort(forSortingArray)}</li>
  </ul>
`;

const forBinaryConverter = new binaryConverter([0,0,1]);

binaryConverterBlock.innerHTML = `
  <ul>
    <li>[0, 0, 1] to Dec: ${forBinaryConverter.toDec()}</li>
    <li>[0, 0, 1] to Hex: ${forBinaryConverter.toHex()}</li>
    <li>15 to Binary: ${new binaryConverter(15).toBinary()}</li>
    <li>15 to Hex: ${new binaryConverter(15).toHex()}</li>
    <li>'#000aaf' to Dec: ${new binaryConverter('#000aaf').toDec()}</li>
    <li>'#000aaf' to Binary: ${new binaryConverter('#000aaf').toBinary()}</li>
  </ul>
`;

const calculate = new cachingCalculator();

cachingCalculatorButton.addEventListener('mouseup', () => {
  const firstNumber = +document.querySelector('#caching-calculator__first-number').value;
  const secondNumber = +document.querySelector('#caching-calculator__second-number').value;

  const timeStart = performance.now();
  const result = calculate(firstNumber, secondNumber);
  const timeEnd = performance.now() - timeStart;
  
  cachingCalculatorResult.innerText = result;
  document.querySelector('#caching-calculator__time').innerText = timeEnd;
});

// [START] CODE FOR CACHING FUNCTION TEST
function forCheckCachingFirst(param) {
  return `First function ${param}`;
}

function forCheckCachingSecond(param) {
  return `Second function ${param}`;
}

forCheckCachingFirst = cachingFunction(forCheckCachingFirst);
forCheckCachingSecond = cachingFunction(forCheckCachingSecond);

const timeNoCachingFirstStart = performance.now();
forCheckCachingFirst(1);
const timeNoCachingFirstEnd = performance.now() - timeNoCachingFirstStart;

const timeCachingFirstStart = performance.now();
forCheckCachingFirst(1);
const timeCachingFirstEnd = performance.now() - timeCachingFirstStart;

const timeNoCachingSecondStart = performance.now();
forCheckCachingSecond('eee');
const timeNoCachingSecondEnd = performance.now() - timeNoCachingSecondStart;

const timeCachingSecondStart = performance.now();
forCheckCachingSecond('eee');
const timeCachingSecondEnd = performance.now() - timeCachingSecondStart;

cachingFunctionsResult.innerHTML = `
  <ul>
    <li>forCheckCachingFirst(1)
      <ul>
        <li>NO CACHED: ${timeNoCachingFirstEnd}ms</li>
        <li>__ CACHED: ${timeCachingFirstEnd}ms</li>
      </ul>
    </li>
    <li>forCheckCachingSecond(1)
      <ul>
        <li>NO CACHED: ${timeNoCachingSecondEnd}ms</li>
        <li>__ CACHED: ${timeCachingSecondEnd}ms</li>
      </ul>
    </li>
  </ul>
`;

// [END] CODE FOR CACHING FUNCTION TEST
