import { Component } from "react";
import time from './time.png';

export class SpisokList extends Component {
    state = {
        userInput: "",
        spisokList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert('Пожалуста введите текст')
        }
        else {
        let listArry = this.state.spisokList;
        listArry.push(input)
        this.setState({spisokList: listArry, userInput: ""}) 
        console.log(listArry)
        }   
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed')
    }

    deleteItem() {
        let listArry = this.spisokList;
        listArry =[];
        this.setState({spisokList: listArry})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="loma"> 
                    <input type="text"
                    placeholder="Что ты хочешь сделать?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput} />
                </div>
                <div className="loma">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">ДОБАВИТЬ</button>
                </div>
                <div className="loma">
                <ol>
                    {this.state.spisokList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={time} width={30} alt="check"/>{item}</li>
                    ))}
                </ol>
                </div>
                <div className="loma">
                    <button onClick={() => this.deleteItem()} className="btn del">УДАЛИТЬ</button>
                </div>
                </form>
            </div>
        )
    }
}