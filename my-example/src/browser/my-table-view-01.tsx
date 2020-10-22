import * as React from "react";
import MaterialTable from 'material-table';


function SimpleAction() {
    return (
        <MaterialTable
            title="Simple Action Preview"
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Surname', field: 'surname' },
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                    title: 'Birth Place',
                    field: 'birthCity',
                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
            ]}
            data={[
                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Nelson', surname: 'Firmani', birthYear: 2000, birthCity: 20 },
                { name: 'Paola', surname: 'Fida', birthYear: 2003, birthCity: 20 },
                { name: 'Alessia', surname: 'Taccone', birthYear: 2003, birthCity: 20 },
                { name: 'Elena', surname: 'Paterno', birthYear: 2003, birthCity: 20 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
            ]}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: () => alert('You saved')
                }
            ]}
        />
    )
}

export interface Greeting {
    name: string
    at: string
}

export class Table01View extends React.Component<{}, Greeting> {
    render(): JSX.Element {

        return (
            <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>

                <SimpleAction />

            </div>);

    }
}
