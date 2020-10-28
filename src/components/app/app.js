import React from 'react';

import './app.css';
import SearchPanel from '../search-panel';
import List from '../list';
import AddBtn from '../add-btn';
import AppHeader from '../app-header';
import FilterBtn from '../filter-btn';
import StorageSaveBtn from '../storage-save-btn';

export default class App extends React.Component {
    
    constructor(){
         super();
         this.counter = 100;
         /*this.state = {
             arrJobs: [
                 this.createItem('Make home work'),
                 this.createItem('Make React App'),
                 this.createItem('Go to school'),
                 this.createItem('Почитать газету)'),
                 this.createItem('Сходить за продуктами'),
                 this.createItem('Приготовить завтрак')
             ],
             filterBtnStatus: 'all',
             searchText: ''
         };*/
         this.state = {
            arrJobs: [],
            filterBtnStatus: 'all',
            searchText: ''
        };
    }

    createItem = (textLabel) => {
        return({
            label: textLabel,
            done: false,
            important: false,
            id: this.counter++
        });
    }

    componentDidMount(){
        this.loadFromLocalStorage();
    }

    delItemJob = (id) => {
        this.setState((state) => {
            const tempArray = state.arrJobs.filter(element => {
                return element.id !== id;
            });
            return{
                arrJobs: tempArray
            };
        });
    }

    addItemJob = (labelText) => {
        this.setState(({arrJobs}) => {
            const arrNew = [...arrJobs, this.createItem(labelText)];
            return {
                    arrJobs: arrNew
                }
            });
    }

    toggleProperty = (arr, id, propertyName) => {
        const idx = arr.findIndex( el => el.id === id );
        const newItem = {...(arr[idx]), [propertyName]: !arr[idx][propertyName]};

        return([
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx+1)
        ]);
    }

    toggleImportant = (id) => {
        this.setState( ({arrJobs}) => {
            return({
                arrJobs: this.toggleProperty(arrJobs, id, 'important')
            });
        });
    }

    toggleDone = (id) => {
        this.setState( ({arrJobs}) => {
            return({
                arrJobs: this.toggleProperty(arrJobs, id, 'done')
            });
        });
    }

    filterBtn =(idBtn) => {
        this.setState({
            filterBtnStatus: idBtn
        });
    }

    onSearchPanel = (text) => {
        this.setState({
            searchText: text
        });
    }

    saveToLocalStorage = () => {
        localStorage.setItem('myState', JSON.stringify(this.state));
        localStorage.setItem('myCounter', this.counter.toString());
    }

    loadFromLocalStorage = () => {
        const arr = JSON.parse(localStorage.getItem('myState'));
        const newCounter = parseInt(localStorage.getItem('myCounter'), 10);

        if ((newCounter < 100) || (arr==null))
            return;

        this.setState({...arr});
    }

    editLabel = (id, value) => {
        this.setState(({arrJobs})=>{
            const idx = arrJobs.findIndex(el => el.id===id);
            const newItem = {...arrJobs[idx], 'label' : value};
            
            return {
                arrJobs : [...arrJobs.slice(0,idx), newItem, ...arrJobs.slice(idx+1)]
            };
        });
    }
    
    render() {
        console.log(this.counter);

        const {arrJobs, filterBtnStatus} = this.state;

        const done = arrJobs.filter ( el => el.done).length;
        const toDo = arrJobs.length - done;

        let arrJobsNew =[];

        switch (this.state.filterBtnStatus){
            case 'all':
                arrJobsNew = [...arrJobs];
                break;
            case 'todo':
                arrJobsNew = arrJobs.filter( el => !el.done);
                break;
            case 'done':
                arrJobsNew = arrJobs.filter( el => el.done);
                break;
            default: break;
        }

        if(this.state.searchText.length > 0){
            arrJobsNew = arrJobsNew.filter( el => {
                return (el.label.toUpperCase().indexOf(this.state.searchText.toUpperCase()) !== -1);
            });
        }

        return (
        <div className='main-div'>
            <AppHeader total={arrJobs.length} toDo={toDo} done={done} />
            <StorageSaveBtn onSaveBtn={this.saveToLocalStorage}/>
            <div className='panel1'>
                <SearchPanel onSearchPanel = {this.onSearchPanel} />
                <FilterBtn filterBtnStatus={filterBtnStatus} onFilterBtn={this.filterBtn} />
            </div>
            
            <List items = {arrJobsNew} onDeleted = {(id) => this.delItemJob(id)} 
            toggleImportant = {(id) => this.toggleImportant(id)}
            toggleDone = {(id) => this.toggleDone(id)}
            editLabel = {(id, value) => this.editLabel(id, value)}/>

            <AddBtn onBtnClick = {this.addItemJob}/>
        </div>
        );
    };
}