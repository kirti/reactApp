'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SampleApp = function (_React$Component) {
  _inherits(SampleApp, _React$Component);

  function SampleApp(props) {
    _classCallCheck(this, SampleApp);

    var _this = _possibleConstructorReturn(this, (SampleApp.__proto__ || Object.getPrototypeOf(SampleApp)).call(this, props));

    _this.state = {
      title: 'Sample Text',
      subtitle: 'Enjoy life with learning something new.',
      options: ['1', '2', '3']
    };

    _this.handleRemoveAllOption = _this.handleRemoveAllOption.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    return _this;
  }

  _createClass(SampleApp, [{
    key: 'handleRemoveAllOption',
    value: function handleRemoveAllOption() {
      console.log('handleRemoveAllOption clicked');
      this.setState(function (prevState) {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      console.log('handleRemoveAllOption clicked', option);
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
        React.createElement(Action, { IsOptionsExist: this.state.options.length > 0, handleRemoveAllOption: this.handleRemoveAllOption }),
        React.createElement(Options, { options: this.state.options }),
        React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return SampleApp;
}(React.Component);
// Header class with title and Subtitle 
// can make it statless component 

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      ' ',
      props.subtitle,
      ' '
    )
  );
};

// button disable if no option and show when option exist 

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action(props) {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handleRemoveAllOption },
          'Remove All Options'
        ),
        React.createElement(
          'button',
          { disabled: !this.props.IsOptionsExist },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

// List of options and  remove button


var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options(props) {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.options && this.props.options.map(function (option, index) {
          return React.createElement(
            'p',
            { key: index },
            option
          );
        })
      );
    }
  }]);

  return Options;
}(React.Component);
// Add option with form input and submit button


var AddOptions = function (_React$Component4) {
  _inherits(AddOptions, _React$Component4);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this4 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    console.log(props);
    _this4.handleSubmitOption = _this4.handleSubmitOption.bind(_this4);
    return _this4;
  }

  _createClass(AddOptions, [{
    key: 'handleSubmitOption',
    value: function handleSubmitOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value;
      this.props.handleAddOption(option);
      //console.log(handleSubmitOption,e);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'AddOptions'
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmitOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            { name: 'add new Option' },
            ' add new Option'
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(SampleApp, null), document.getElementById('app'));
