import * as React from 'react';
import './style.css';
import Table, { tdtemplate } from './table/Table';

const todaysdate = new Date().toISOString().split('T')[0];

const tabledata = {
  'Interest On': { template: tdtemplate.Select, prop: { options: ['Selected date', 'Selected parties', 'Quick interest'] } },
  'Date criteria': { template: tdtemplate.Select, prop: { options: ['Tran. date', 'Value date'] } },
  'Starting Date': {
    template: tdtemplate.Date,
    prop: { min: '2022-01-01', max: todaysdate },
  },
  'Settlement Date': {
    template: tdtemplate.Date,
    prop: { min: '2022-01-01', max: todaysdate },
  },
  'Rate of interest': {
    template: tdtemplate.Number,
    prop: { min: 0, max: 366 },
  },
  'Interest Period': {
    template: tdtemplate.Number_select,
    prop: { min: 0, max: 366, options: ['day', 'month', 'year'], placeholder:'per' },
  },
  'Period basis':{ template: tdtemplate.Select, prop: { options: ['days','months','years'] } },
  'Int on balance': { template: tdtemplate.Select, prop: { options: ['all','debit only','crdit only'] } },
  'Compounding period':{ template: tdtemplate.Number_select, prop:{min:0,max:366,options:['day','month','year'],placeholder:'Per'}},
  
  'Compounding from': {template: tdtemplate.Date,
  prop: { min: '2022-01-01', max: todaysdate }},
  'Rounding method':{ template: tdtemplate.Select, prop: { options: ['decimal Rounding','Nearest Multiple'] } },
  'Int Paymenet Period':{ template: tdtemplate.Number_select, prop:{min:0,max:366,options:['day','month','year'],placeholder:'Every'}}

}

export default function App() {
  return <Table data={tabledata} />;
}
