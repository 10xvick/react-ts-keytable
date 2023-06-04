import * as React from 'react';
import { KeyboardControl } from '../utility/keyboardcontrols';

export const tdtemplate = {
  Label: (text) => <td>{text}</td>,
  Number: ({ min, max }) => {
    return (
      <td colSpan={2}>
        <input
          type="number"
          min={min}
          max={max}
          onChange={(e) => {
            const v = e.target.value;
            e.target.value = v > max ? max : v < min ? min : v;
          }}
          onKeyDown={(e) => {
            if (e.key == '.' || e.key == '-') e.preventDefault();
            KeyboardControl(e, 1, 1);
          }}
        />
      </td>
    );
  },
  Number_double: ({ min, max }) => {
    return (
      <td colSpan={2}>
        <input
          type="number"
          min={min}
          max={max}
          onChange={(e) => {
            const v = e.target.value;
            e.target.value = v > max ? max : v < min ? min : v;
            const [whole, dec] = v.split('.');
            if (dec?.length > 2)
              e.target.value = whole + '.' + dec[0] + dec[dec.length - 1];
          }}
          onKeyDown={(e) => {
            if (e.key == '-') e.preventDefault();
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
  Number_select: ({ min, max, options, placeholder }) => {
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
            <input defaultValue={placeholder} />
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
        <tr>
          <td className="calc-btn" colSpan="3">
            <button
              onClick={(e) => {
                const data = {};
                const table =
                  e.target.parentElement.parentElement.parentElement;

                for (let j=0; j<table.rows.length;j++) {
                  const row = table.rows[j];
                  const key = row.children[0].innerText;
                  const value = [];
                  for (let i = 1; i < 3; i++) {
                    const input = row.children[i]?.firstChild;
                    input != undefined && value.push(input.value);
                  }
                  data[key] = value;
                }
                delete data.Calculate;
                console.log(data);
              }}
            >
              Calculate
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
