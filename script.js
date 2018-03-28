var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.creaetElement('button', { className: 'btn btn-info', onClick: this.increment }),
            React.creaetElement('button', { className: 'btn btn-info', onClick: this.decrement }),
        );
    }
});

var CountersList = React.createClass({
    render: function() {
        return
        React.createElement('div', {},
            React.creaetElement(Counter, {}),
            React.creaetElement(Counter, {}),
            React.creaetElement(Counter, {})

        )
    }

});

var element = React.createElement(CountersList);
ReactDOM.render(element, document.getElementById('app'));