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


    getDefaultProps: function() {
        console.log('ustawienie domyślnych wartości propsów')
    },

    componentWillMount: function() {
        console.log('wywołanie metody przed renderowaniem')
    },

    render: function() {
        console.log('renderowanie');
    },

    componentDidMount: function() {
        console.log('np.załadować dane z serwera');
    },

    componentWillReceiveProps: function() {
        console.log('otrzymanie nowych właściwości')
    },

    shouldComponentUpdate: function() {
        console.log('optymalizowanie aplikacji')
        return true;
    },

    componentWillUpdate: function() {
        console.log('przygotowanie na ponowne zmiany')
    },

    render: function() {
        console.log('renderowanie')
    },

    componentDidUpdate: function() {
        console.log('usuwanie')
    },


    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', { className: 'btn btn-info', onClick: this.increment }, '+'),
            React.createElement('button', { className: 'btn btn-info', onClick: this.decrement }, '-'),
        );
    }
});

var CountersList = React.createClass({
    render: function() {
        return React.createElement('div', {},
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter),
        )
    }

});

var element = React.createElement(CountersList);
ReactDOM.render(element, document.getElementById('app'));