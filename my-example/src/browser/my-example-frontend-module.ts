import { ContainerModule } from "inversify";
import { Elemento2CommandContribution, MyExampleFormCommandContribution, MyExampleFormMenuContribution } from './my-example-contribution';
import { CommandContribution, MenuContribution } from "@theia/core/lib/common";
import { OpenHandler, WidgetFactory } from "@theia/core/lib/browser";
import { MyExampleFormWidget, MyExampleFormWidgetOptions } from './my-example-widget';
import { MyExampleFormOpenHandler } from './my-example-open-handler';

export default new ContainerModule(bind => {
    // add your contribution bindings here

    bind(CommandContribution).to(MyExampleFormCommandContribution).inSingletonScope();
    //bind(MenuContribution).to(MyExampleFormMenuContribution).inSingletonScope();
    bind(CommandContribution).to(Elemento2CommandContribution).inSingletonScope();

    bind(MenuContribution).to(MyExampleFormMenuContribution).inSingletonScope();

    
    
    
    bind(OpenHandler).to(MyExampleFormOpenHandler).inSingletonScope();
    bind(WidgetFactory).toDynamicValue(({ container }) => ({
        id: MyExampleFormWidget.id,
        createWidget: (options: MyExampleFormWidgetOptions) => {
            const child = container.createChild();
            child.bind(MyExampleFormWidgetOptions).toConstantValue(options);
            child.bind(MyExampleFormWidget).toSelf();
            return child.get(MyExampleFormWidget);
        }
    }));

});