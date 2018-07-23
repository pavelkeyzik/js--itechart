import ListController from './controller/ListController';
import ListModel from './model/ListModel';
import ListView from './view/ListView';

const listModel = new ListModel(['first', 'second', 'third']);
const listView = new ListView(listModel, {
  list: document.getElementById('promise'),
});
const listController = new ListController(listModel, listView);

listView.render();