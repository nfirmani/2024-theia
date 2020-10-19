
import { ContainerModule } from "inversify";

import { Elemento2CommandContribution, 
         Elemento3CommandContribution, 
         MyExampleFormCommandContribution, 
         MyExampleFormMenuContribution} from './my-example-contribution';

import { CommandContribution, MenuContribution } from "@theia/core/lib/common";
import { OpenHandler, WidgetFactory } from "@theia/core/lib/browser";


//import { SampleViewUnclosableView } from './sample-unclosable-view';

//import { SampleUnclosableFormOpenHandler } from './my-example-open-handler';
import { MyExampleFormWidget, MyExampleFormWidgetOptions } from "./my-example-widget";
import { MyExampleFormOpenHandler } from "./my-example-open-handler_myexample";




export default new ContainerModule(bind => {
    // add your contribution bindings here
    

    bind(CommandContribution).to(MyExampleFormCommandContribution).inSingletonScope();
    //bind(MenuContribution).to(MyExampleFormMenuContribution).inSingletonScope();
    bind(CommandContribution).to(Elemento2CommandContribution).inSingletonScope();

    bind(CommandContribution).to(Elemento3CommandContribution).inSingletonScope();

    bind(MenuContribution).to(MyExampleFormMenuContribution).inSingletonScope();
      
    bind(OpenHandler).to(MyExampleFormOpenHandler).inSingletonScope();
   // bind(OpenHandler).to(SampleUnclosableFormOpenHandler).inSingletonScope();

   
    bind(WidgetFactory).toDynamicValue(({ container }) => ({
        id: MyExampleFormWidget.id,
        createWidget: (options: MyExampleFormWidgetOptions) => {
            const child = container.createChild();
            child.bind(MyExampleFormWidgetOptions).toConstantValue(options);
            child.bind(MyExampleFormWidget).toSelf();
            return child.get(MyExampleFormWidget);
        }
    }));

/*
         
    bind(WidgetFactory).toDynamicValue(({ container }) => ({
        id: SampleViewUnclosableView.ID,
        createWidget: () => {
            const child = container.createChild();
            //child.bind(MyExampleFormWidgetOptions).toConstantValue(options);
            child.bind(SampleViewUnclosableView).toSelf();
            return child.get(SampleViewUnclosableView);
        }
    }));


    bindViewContribution(bind, GettingStartedContribution);
    bind(FrontendApplicationContribution).toService(GettingStartedContribution);
    bind(GettingStartedWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(context => ({
        id: GettingStartedWidget.ID,
        createWidget: () => context.container.get<GettingStartedWidget>(GettingStartedWidget),
    })).inSingletonScope();

*/
});   




