import * as React from "react";


export class Clock extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
  }

  render(): JSX.Element {

    return (
      <div>
        <h1>Ciao, mondo!</h1>
        <h2>Sono le {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

