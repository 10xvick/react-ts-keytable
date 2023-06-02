import * as React from 'react';
import { KeyboardControl } from '../utility/keyboardcontrols';

export const tdtemplate = {
  label: (text) => <td>{text}</td>,
  number: ({ min, max }) => {
    // const [flag,setflag] = React.useState(false);
    return (
      <td colSpan={2}>
        <input
          type="number"
          min={min}
          max={max}
          
          onKeyDown={(e) => {
            KeyboardControl(e, 1, 1);
          }}
        />
      </td>
    );
  },
  Number_double: ({ min, max }) => {
    // const [flag,setflag] = React.useState(false);
    return (
      <td colSpan={2}>
        <input
          type="number"
          min={min}
          max={max}
          onKeyDown={(e) => {
            KeyboardControl(e, 1, 1);
          }}
        />
      </td>
    );
  },
  Select: ({ options }) => {
    return (
      <React.Fragment>
        <td colSpan={2}>
          <select
            className="text-align-e"
            onKeyDown={(e1) => {
              KeyboardControl(e1, 1, 1);
            }}
          >
            <option hidden={true} selected>
              {' '}
            </option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </td>
      </React.Fragment>
    );
  },
  Number_select: ({ min, max, options }) => {
    const [num, setNum] = React.useState(false);

    return (
      <React.Fragment>
        <td>
          <input
            className={num && 'every'}
            type="number"
            min={min}
            max={max}
            onBlur={(e1) => setNum(e1.target.value == '1')}
            onKeyDown={(e1) => {
              KeyboardControl(e1, 1, 2);
            }}
          />
          <div className={'every-text'}>
            <span> Per </span>
          </div>
        </td>
        <td>
          <select
            onKeyDown={(e1) => {
              KeyboardControl(e1, 1, 2);
            }}
          >
            <option hidden={true} selected>
              {' '}
            </option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
                {num ? '' : 's'}
              </option>
            ))}
          </select>
        </td>
      </React.Fragment>
    );
  },
  Date: ({ min, max }) => {
    return (
      <td colSpan={2}>
        <input
          min={min}
          max={max}
          type="date"
          onKeyDown={(e) => {
            KeyboardControl(e, 1, 1);
          }}
        />
      </td>
    );
  },
};

export default function Table({ data }) {
  return (
    <div>
      <table>
        {Object.keys(data).map((row) => {
          return (
            <tr>
              <td>{row}</td>
              {data[row].template(data[row].prop)}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
