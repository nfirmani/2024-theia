import { GettingStartedContribution } from './gs-contribution';
import { ContainerModule, interfaces } from 'inversify';
import { GettingStartedWidget } from './gs-widget';
import { WidgetFactory, FrontendApplicationContribution, bindViewContribution } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule((bind: interfaces.Bind) => {
    bindViewContribution(bind, GettingStartedContribution);
    bind(FrontendApplicationContribution).toService(GettingStartedContribution);
    bind(GettingStartedWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(context => ({
        id: GettingStartedWidget.ID,
        createWidget: () => context.container.get<GettingStartedWidget>(GettingStartedWidget),
    })).inSingletonScope();
});


