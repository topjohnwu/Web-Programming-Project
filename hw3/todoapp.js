import React from 'react';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    this.insert = this.insert.bind(this);
    this.clear = this.clear.bind(this);
    this.remain = this.remain.bind(this);
    this.genToggle = this.genToggle.bind(this);
    this.genRemove = this.genRemove.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.id = 0;
  }
  
  insert(event) {
    if(event.keyCode !== 13) return;
    if(event.target.value === "") return;
    this.state.items.push( {id: this.id++, checked: false, removed: false, label: event.target.value});
    this.setState({items: this.state.items});
    event.target.value = "";
  }
  
  clear() {
    for(let i = 0; i < this.state.items.length; ++i) {
      if(this.state.items[i].checked)
        this.state.items[i].removed = true;
    }
    this.setState({items: this.state.items});
  }
  
  remain() {
    let undone = 0, present = 0;
    for(let i = 0; i < this.state.items.length; ++i) {
      if(!this.state.items[i].removed) {
        present++;
        if(!this.state.items[i].checked) ++undone;
      }
    }
    return [present, undone];
  }
  
  toggleAll() {
    let remain = !!this.remain()[1];
    for(let i = 0; i < this.state.items.length; ++i) {
      this.state.items[i].checked = remain;
    }
    this.setState({items: this.state.items});
  }
  
  genToggle(key) {
    function toggle() {
      this.state.items[key].checked = !this.state.items[key].checked;
      this.setState({items: this.state.items});
    }
    toggle = toggle.bind(this);
    return toggle;
  }
  
  genRemove(key) {
    function remove() {
      this.state.items[key].removed = true;
      this.setState({items: this.state.items});
    }
    remove = remove.bind(this);
    return remove;
  }
  
  render() {
    return <section className="todoapp">
      <Header insert={this.insert}/>
      <Main items={this.state.items} genToggle={this.genToggle} genRemove={this.genRemove} toggleAll={this.toggleAll} remain={this.remain}/>
      <Footer clear={this.clear} remain={this.remain} />
    </section>
  }
}

class Header extends React.Component {
  render() {
    return <header className="header">
      <h1>todos</h1>
      <NewToDo insert={this.props.insert}/>
    </header>
  }
}

class NewToDo extends React.Component {
  render() {
    return <input className="new-todo" placeholder="What needs to be done?" autofocus onKeyDown={this.props.insert}/>
  }
}

class Main extends React.Component {
  render() {
    return <section className="main">
      <ToggleAll toggleAll={this.props.toggleAll} remain={this.props.remain}/>
      <TodoList items={this.props.items} genToggle={this.props.genToggle} genRemove={this.props.genRemove} />
    </section>
  }
}

class ToggleAll extends React.Component {
  render() {
    return <div>
      <input className="toggle-all" type="checkbox" onClick={this.props.toggleAll} checked={!!this.props.remain()[0] && !this.props.remain()[1]} />
			<label htmlFor="toggle-all">Mark all as complete</label>
    </div>
  }
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.mapItem = this.mapItem.bind(this);
  }
  mapItem(item) {
    return <ListItem key={item.id} checked={item.checked} label={item.label} removed={item.removed}
             toggle={this.props.genToggle(item.id)} remove={this.props.genRemove(item.id)}/>
  }
  render() {
    return <ul className="todo-list">
      { this.props.items.map(this.mapItem) }
    </ul>
  }
}

class ListItem extends React.Component {
  render() {
    return <li className={this.props.removed ? "removed": (this.props.checked ? "completed" : "")}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={this.props.checked} onClick={this.props.toggle}/>
        <label>{this.props.label}</label>
        <button className="destroy" onClick={this.props.remove} ></button>
      </div></li>
  }
}

class Footer extends React.Component {
  render() {
    let count = this.props.remain()[1];
    return <footer className="footer">
      <TodoCount remain={(count === 0) ? "No item left" : (count === 1) ? count + " item left" : count + " items left"} />
      <ClearComplete clear={this.props.clear}/>
    </footer>
  }
}

class TodoCount extends React.Component {
  render() {
    return <span className="todo-count">{this.props.remain}</span>
  }
}

class ClearComplete extends React.Component {
  render() {
    return <button className="clear-completed" onClick={this.props.clear}>Clear completed</button>
  }
}

export default TodoApp;