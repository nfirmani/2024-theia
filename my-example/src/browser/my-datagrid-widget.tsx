import * as React from 'react';
import { injectable, postConstruct, inject } from 'inversify';
import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}


@injectable()
export class MyDatagridWidget extends ReactWidget {

    static readonly ID = 'my-datagrid-widget:widget';
    static readonly LABEL = 'My Datagrid Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = MyDatagridWidget.ID;
        this.title.label = MyDatagridWidget.LABEL;
        this.title.caption = MyDatagridWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }


     
    protected render(): React.ReactNode {
        const header = `This is a sample widget which simply calls the messageService
        in order to display an info message to end users.`;
        return <div id='widget-container'>
            <AlertMessage type='INFO' header={header} />
            <h2>My DataGrid</h2>
            <button className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Display Message</button>
            <div style={{display: 'grid', gridTemplateColumns: 'max-content 1fr max-content'}}>
                <div style={{verticalAlign: "center"}}>
                    My Field:
                </div>
                <input type="text"/>
                <button>Browser...</button>

                 <BasicTextFields />
            </div>
        </div>
    }
    
 

    protected displayMessage(): void {
        this.messageService.info('Premuto pulsante!');
    }

}