import React from 'react';

export class Child extends React.Component {
  handleChange(e){
    const name = e.target.value;
    this.props.onChange(name);
  }
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange = {this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
