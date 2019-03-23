console.log('kk');
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// add Expense action

const addExpense =({ description = '',note = '',amount = 0,createdAt = 0 } = {} )=>{
 return ({
    type: 'ADD_EXPENSE',
    expense :{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
  
    }
 })
}

const removeExpense = ({id}={}) => {
    return ({
      type:'REMOVE_EXPENSE',
       id
    })
}

const editExpense =({id, updates} ={}) =>{
    return({
  
        type:'EDIT_EXPENSE',
        updates
    })

}

// defailt objbect 
var expenseStateDefaultValue={
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0

}


// default object 
var filterStateDefaultValue={ 
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
}


const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });


// reducer 
var expenseReducer=(state=expenseStateDefaultValue,action)=>{
     switch(action.type){

        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ]

        case 'EDIT_EXPENSE':
        return state.map((expense)=>{

                if (expense.id === action.id) {
                    return [
                        ...expense,
                        ...action.updates
                    ]
                }else {
                    return expense;
                  };

        })
        case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
        default :
        return state;

     }

}
// reducer 
var filterReducer=(state=filterStateDefaultValue,action)=>{

    switch (action.type) {
        case 'SET_TEXT_FILTER':
          return {
            ...state,
            text: action.text
          };
        default:
          return state;
      }
}

// to checj the state of store 
store.subscribe(() => {
    console.log(store.getState());
  });

const expenseOne =store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

// combine store 
var setStore=createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer,
    })
)