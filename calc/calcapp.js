import React from 'react';

class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "0",
      tempnum: 0,
      mode: 0,
      valid: true,
    };
    this.resetState = this.resetState.bind(this);
    this.genAppend = this.genAppend.bind(this);
    this.genMode = this.genMode.bind(this);
    this.calculate = this.calculate.bind(this);
    this.invert = this.invert.bind(this);
    this.percent = this.percent.bind(this);
  }
  
  updateState() {
    this.setState({
      num: this.state.num,
      tempnum: this.state.tempnum,
      mode: this.state.mode,
      valid: this.state.valid,
    })
  }

  resetState() {
    this.state.num = "0";
    this.state.mode = 0;
    this.state.tempnum = 0;
    this.state.valid = true;
    this.updateState();
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }
  
  genAppend(num) {
    function append() {
      if(this.state.num === "0" || this.state.num === "-0") this.state.num = this.state.num.slice(0,-1);
      if(!this.state.valid) {
        this.state.num = "";
        this.state.valid = true;
      }
      this.state.num += num;
      this.updateState();
    }
    append = append.bind(this);
    return append;
  }
  
  genMode(key) {
    function mode() {
      this.calculate();
      if(!key) {
        let str = this.state.num;
        this.resetState();
        this.state.num = str;
      }
      else this.state.mode = key;
      this.updateState();
    }
    mode = mode.bind(this);
    return mode;
  }
  
  calculate() {
    if(!this.state.valid) return;
    if(this.state.mode === 0) {
      this.state.tempnum = +this.state.num;
    }
    else if(this.state.mode === 1) {
      this.state.tempnum += +this.state.num;
    }
    else if(this.state.mode === 2) {
      this.state.tempnum -= +this.state.num;
    }
    else if(this.state.mode === 3) {
      this.state.tempnum *= +this.state.num;
    }
    else if(this.state.mode === 4) {
      this.state.tempnum /= +this.state.num;
    }
    else if(this.state.mode === 5) return;
    
    this.state.num = this.state.tempnum.toString();
    
    this.state.valid = false;
  }
  
  invert() {
    if(!this.state.valid) this.state.num = "0";
    if(this.state.num[0] !== '-') this.state.num = "-" + this.state.num;
    else this.state.num = this.state.num.substr(1);
    this.updateState();
  }
  
  percent() {
    if(!this.state.valid) this.state.num = "0";
    this.state.num = +this.state.num / 100;
    this.updateState();
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.num}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.invert}>+/-</CalcButton>
            <CalcButton onClick={this.percent}>%</CalcButton>
            <CalcButton onClick={this.genMode(4)} className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.genAppend(7)} className="calc-number">7</CalcButton>
            <CalcButton onClick={this.genAppend(8)} className="calc-number">8</CalcButton>
            <CalcButton onClick={this.genAppend(9)} className="calc-number">9</CalcButton>
            <CalcButton onClick={this.genMode(3)} className="calc-operator">×</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.genAppend(4)} className="calc-number">4</CalcButton>
            <CalcButton onClick={this.genAppend(5)} className="calc-number">5</CalcButton>
            <CalcButton onClick={this.genAppend(6)} className="calc-number">6</CalcButton>
            <CalcButton onClick={this.genMode(2)} className="calc-operator">-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.genAppend(1)} className="calc-number">1</CalcButton>
            <CalcButton onClick={this.genAppend(2)} className="calc-number">2</CalcButton>
            <CalcButton onClick={this.genAppend(3)} className="calc-number">3</CalcButton>
            <CalcButton onClick={this.genMode(1)} className="calc-operator">+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.genAppend(0)} className="calc-number-0">0</CalcButton>
            <CalcButton onClick={this.genAppend(".")} className="calc-number">.</CalcButton>
            <CalcButton onClick={this.genMode(0)} className="calc-operator">=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}


class CalcButton extends React.Component {
  render() {
    const { className, children, onClick } = this.props;
    return (
      <div
        className={'calc-btn ' + (className ? className : '')}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

CalcButton.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};

CalcButton.defaultProps = {
  onClick: () => {}
};


export default CalcApp;