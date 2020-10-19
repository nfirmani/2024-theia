import { ContainerModule } from 'inversify';
import '../../src/browser/style/index.css';
//import { bindSampleUnclosableView } from './sample-unclosable-view-contribution';
import { OpenHandler, WidgetFactory } from '@theia/core/lib/browser';
import { SampleUnclosableFormOpenHandler } from './my-cmd01-open-handler';
import { SampleViewUnclosableView } from './sample-unclosable-view';


export default new ContainerModule(bind => {

   bind(OpenHandler).to(SampleUnclosableFormOpenHandler).inSingletonScope();
    
   bind(WidgetFactory).toDynamicValue(({ container }) => ({
        id: SampleViewUnclosableView.ID,
        createWidget: () => {
            const child = container.createChild();
            //child.bind(MyExampleFormWidgetOptions).toConstantValue(options);
            child.bind(SampleViewUnclosableView).toSelf();
            return child.get(SampleViewUnclosableView);
        }
    }));

    
   
});
