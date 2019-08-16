import React, { Component } from "react";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            input1: '',
            input2: '',
            operator: '',
            result: '0',
            isBtn1Focus: false,
            isBtn2Focus: false,

            history: [],
            memory: 0
        };
    }

    setFocus(btn){
        console.log(btn);
        if(btn==1){
            this.setState({isBtn1Focus: true, isBtn2Focus: false})
        }
        else if(btn==2){
            this.setState({isBtn1Focus: false, isBtn2Focus: true})
        }
    }
    calcualte() {
        console.log("Calculate");
        console.log(this.state.operator);
        let result = 0;
        if (this.state.operator == "+") {
            result = parseInt(this.state.input1) + parseInt(this.state.input2);
        }
        else if (this.state.operator == "-") {
            result = parseInt(this.state.input1) - parseInt(this.state.input2);
        }
        else if (this.state.operator == "*") {
            result = parseInt(this.state.input1) * parseInt(this.state.input2);
        }
        else if (this.state.operator == "/") {
            result = parseInt(this.state.input1) / parseInt(this.state.input2);
        }
        this.setState({ result });
        console.log(this.state.result);
        let history = this.state.history;
        history.push(`${this.state.input1} ${this.state.operator} ${this.state.input2} = ${result}`)
        this.setState({ history });
    }

    clear() {
        console.log("Clear");
        this.setState({
            input1: '',
            input2: '',
            operator: '',
            result: '0'
        })
    }

    saveMemory() {
        console.log("Save Memory");
        this.setState({ memory: this.state.result });
    }

    readMemory() {
        console.log("Read Memory");
        if(this.state.isBtn1Focus){
            console.log("Call memory to input 1");
            console.log(this.state.memory);
            this.setState({input1: this.state.memory});
        }
        else if(this.state.isBtn2Focus){
            console.log("Call memory to input 2");
            console.log(this.state.memory);
            this.setState({input2: this.state.memory});
        }
    }

    render() {
        return (
            <div className="page-container" align="center">
                <div className="inner-container">
                    <div className="calculator-container">
                        <div className="input-container">
                            <input id="txtInput1" onFocus={()=>this.setFocus(1)} value={this.state.input1} className="input-text" type="number" placeholder="Input 1" onChange={(e) => {
                                this.setState({ input1: e.target.value })
                            }
                            } />
                        </div>
                        <div className="input-container">
                            <input id="txtOperator" value={this.state.operator} className="input-text" type="text" placeholder="Operator" onChange={(e) => {
                                this.setState({ operator: e.target.value })
                            }
                            } />
                        </div>
                        <div className="input-container">
                            <input id="txtInput2" onFocus={()=>this.setFocus(2)} value={this.state.input2} className="input-text" type="number" placeholder="Input 2" onChange={(e) => {
                                this.setState({ input2: e.target.value })
                            }} />
                        </div>
                        <div className="input-container equal-text bold">
                            =
                        </div>
                        <div id="divResult" className="input-container label-result bold">
                            {this.state.result}
                        </div>
                        <button id="btnCalculate" className="button calculate" onClick={() => { this.calcualte() }}>=</button>
                        <button id="btnMemory" className="button memory" onClick={() => { this.saveMemory() }}>M</button>
                        <button id="btnRead" className="button read" onClick={() => { this.readMemory() }}>R</button>
                        <button id="btnClear" className="button clear" onClick={() => { this.clear() }}>C</button>
                    </div>
                    <div className="history-container">
                        <div className="history-section inline-block">
                            <div className="history-title bold">
                                History
                            </div>
                            <table className="history-result">
                                <tbody>
                                    {this.state.history.map((o, index) => {
                                        return <tr key={index}>{o}</tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="memory-section inline-block">
                            <div className="history-title bold">
                                Memory
                            </div>
                            <table>
                                <tbody>
                                    
                                </tbody>
                            </table>
                            {this.state.memory}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
