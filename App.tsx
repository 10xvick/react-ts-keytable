import * as React from 'react';
import './style.css';
import Table, { tdtemplate } from './table/Table';

const tabledata = {
  'Interest On': { template: tdtemplate.number, prop: { min: 0, max: 366 } },
  'Date criteria': { template: tdtemplate.number, prop: { min: 0, max: 366 } },
  'Starting Date': { template: tdtemplate.Date, prop: { min: 0, max: 366 } },
  'Settlement Date': { template: tdtemplate.Date, prop: { min: 0, max: 366 } },
  'Rate of interest': { template: tdtemplate.number, prop: { min: 0, max: 366 } },
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
