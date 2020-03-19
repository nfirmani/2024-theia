import * as React from "react";

export class Rest01View extends React.Component<{}> {  

    state = {
        hasErrors: false,
        planets: {}
    };

 //ESEMPIO PRESO DA:    https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd  
/*
        componentDidMount() {
        fetch('http://localhost:8080/rest/xbrl/C:/BDAP/test/2018/sdb/2017-09-29/2018773942930524179501PREVSDB.xbrl/factTable?media=html')
            .then(res => res.json())
            .then((data) => {
                this.setState({ xbrlData: data })
            })
            .catch(console.log)

            this.res = 'prova';
*/

    componentDidMount() {
        fetch("https://swapi.co/api/planets/3/")
        .then(res => res.json())
        .then(res => this.setState({ planets: res }))
        .catch(() => this.setState({ hasErrors: true }));
    }
    
/*
    render(): JSX.Element {       
         return (
        <div id="treeWrapper" style={{width: '50em', height: '20em'}} >        
        <h1> test </h1>
        {this.res}  
 </div> );    
}
*/

    render() {    
        return <div>{JSON.stringify(this.state.planets)}</div>;    
    }

}
