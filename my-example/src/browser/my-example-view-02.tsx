import React = require("react");
import d3 = require("d3");



export  class CircleView extends React.Component<{}> {
  ref: SVGSVGElement;

  componentDidMount() {
    d3.select(this.ref)
    .append("circle")
    .attr("r", 40)
    .attr("cx", 1000 / 2)
    .attr("cy", 1000 / 2)
    .attr("fill", "red");
  }

  render() {
    return (
      <svg className="container" ref={(ref: SVGSVGElement) => this.ref = ref}
        width={1000} height={1000}>
      </svg>
    );
  }
}
