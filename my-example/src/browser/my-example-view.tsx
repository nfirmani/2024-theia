import * as React from "react";
import Tree from "react-d3-tree";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);



const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
      keyD: 'val D',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },

      {
        name: 'Level 2: C',
        attributes: {
          keyA: 'val T',
          keyB: 'val E',
          keyC: 'val R',

        },
      },

    ],
  },
];




export interface Greeting {
    name: string
    at: string
}
export class GreetingView extends React.Component<Greeting> {
    render(): JSX.Element {

//const classes = useStyles();


        return (
/*
        <div>
             <button className="square" onClick={() => {console.log('premuto'); alert('click-2')}}>
        {this.props.name}
        </button>
      <Tree data={myTreeData} />
       <h1>Hello {this.props.name} at {this.props.at}!</h1>
        </div>
*/

/*
        <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
        <h1>Hello {this.props.name} at {this.props.at}!</h1>
        <Tree data={myTreeData} />
        </div>
*/

        <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
        <h1>Hello {this.props.name} at {this.props.at}!</h1>



        <TextField
          id="standard-basic"

          //className={classes.textField}
        style={{
            backgroundColor: "blue"
                }}
            InputProps={{
            style: {
            color: "red"
            }
        }}


          label="Standard"
          margin="normal"
        />


        <Tree data={myTreeData} />
        </div>

        );

    }
}

export class MyExampleFormView extends React.Component<{}, Greeting> {


    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'World',
            at: 'Theia Workshop'
        }
    }

    render(): JSX.Element {




  //      const classes = useStyles(1);

        return <React.Fragment>
            <GreetingView name={this.state.name} at={this.state.at} />
            Greet <input value={this.state.name} onChange={this.updateName} /> at <input value={this.state.at} onChange={this.updateAt} />
        </React.Fragment>;

/*
 return  <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Standard"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="filled-basic"
          className={classes.textField}
          label="Filled"
          margin="normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Outlined"
          margin="normal"
          variant="outlined"
        />
      </div>
    </form>

*/

    }

    protected updateName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        name: e.currentTarget.value
    });

    protected updateAt = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        at: e.currentTarget.value
    });


  protected BasicTextFields() {



  const classes = useStyles(1);

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Standard"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="filled-basic"
          className={classes.textField}
          label="Filled"
          margin="normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Outlined"
          margin="normal"
          variant="outlined"
        />
      </div>
    </form>
  );
}


}

