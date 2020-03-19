import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectable, inject, postConstruct } from "inversify";
import { BaseWidget } from "@theia/core/lib/browser";
import URI from "@theia/core/lib/common/uri";
import { Disposable } from "@theia/core";
//import { MyExampleFormView } from "./my-example-view";
//import { GrafoView } from "./my-example-view-03";
//import { Clock } from "./my-example-view-01";
//import { CircleView } from "./my-example-view-02";
//import { Form01View } from "./my-example-view-04";
//import { Login01View } from "./my-example-view-05";
//import { CheckoutView } from "./my-example-checkout-view";
import { Rest01View } from "./my-example-view-06";

export const MyExampleFormWidgetOptions = Symbol('MyexampleFormWidgetOptions');
export interface MyExampleFormWidgetOptions {
    uri: string
}

@injectable()
export class MyExampleFormWidget extends BaseWidget {

    static id = 'myexample-form-widget';

    @inject(MyExampleFormWidgetOptions)
    protected readonly options: MyExampleFormWidgetOptions;

    @postConstruct()
    protected async init(): Promise<void> {
        const { uri } = this.options;
        this.id = MyExampleFormWidget.id + ':' + uri
        this.title.label = 'Form ' + new URI(uri).displayName;
        this.title.closable = true;

        this.node.style.padding = '0px 15px';
        this.node.style.color = 'red'; // 'var(--theia-ui-font-color1)';
        this.toDispose.push(Disposable.create(() => ReactDOM.unmountComponentAtNode(this.node)));
        //ReactDOM.render(<MyExampleFormView />, this.node);
        //ReactDOM.render(<GrafoView />, this.node);
        //ReactDOM.render(<Clock />, this.node);
        //ReactDOM.render(<CircleView />, this.node);
        //ReactDOM.render(<Form01View />, this.node);
        //ReactDOM.render(<Login01View />, this.node);
        ReactDOM.render(<Rest01View />, this.node);
    }

}
