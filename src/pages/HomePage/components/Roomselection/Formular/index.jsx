import './style.css';

export const Formular = () => {

  return (<>
    <form>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Field 1:
        </label>
        <input id="field1" className="field-input" type="text" />

        <label htmlFor="field2" className="field-label">
          Field 2:
        </label>
        <input id="field2" className="field-input" type="text" />

        <label htmlFor="select" className="field-label">
          Select:
        </label>
        <select id="select" className="field-input">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Checkbox 1:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
      </div>
      <button className="wide">Submit</button>
    </form></>
  );
};
