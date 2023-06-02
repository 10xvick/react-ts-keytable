import * as React from 'react';
import './style.css';
import Table, { tdtemplate } from './table/Table';

const todaysdate = new Date().toISOString().split('T')[0];

const tabledata = {
  'Interest On': { template: tdtemplate.Select, prop: { options: ['day', 'month', 'year'] } },
  'Date criteria': { template: tdtemplate.number, prop: { min: 0, max: 366 } },
  'Starting Date': {
    template: tdtemplate.Date,
    prop: { min: '2022-01-01', max: todaysdate },
  },
  'Settlement Date': {
    template: tdtemplate.Date,
    prop: { min: '2022-01-01', max: todaysdate },
  },
  'Rate of interest': {
    template: tdtemplate.number,
    prop: { min: 0, max: 366 },
  },
  'Interest Period': {
    template: tdtemplate.Number_select,
    prop: { min: 0, max: 366, options: ['day', 'month', 'year'] },
  },
  'Period basis': { template: tdtemplate.number, prop: { min: 0, max: 366 } },
  // 'Int on balance': tdtemplate.number({min:0,max:366}),
  // 'Compounding period': tdtemplate.Number_select({min:0,max:366,options:['day','month','year']}),

  // 'Compounding from': tdtemplate.Number_select({min:0,max:366,options:['day','month','year']}),
  // 'Rounding method': tdtemplate.Number_select({min:0,max:366,options:['day','month','year']}),
  // 'Int Paymenet Period': tdtemplate.Number_select({min:0,max:366,options:['day','month','year']})
};

export default function App() {
  return <Table data={tabledata} />;
}
