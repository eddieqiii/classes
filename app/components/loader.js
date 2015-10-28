import React, {PropTypes} from 'react';

let style = document.createElement('style');

style.innerText =
`.__loader__ {
  width: 60px;
  height: 60px;
  margin: 60px;
  animation: rotate 1s infinite ease-in-out, background 4s infinite ease-in-out;
}

@keyframes rotate {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
  }
}

@keyframes background {
  0%   { background-color: #45E185; }
  25%  { background-color: #FEC107; }
  50%  { background-color: #2E74F6; }
  75%  { background-color: #DA4431; }
  100% { background-color: #45E185; }
}`;

document.head.appendChild(style);

export default React.createClass({
  render() {
    return <div className="__loader__" {...this.props}></div>;
  }
});