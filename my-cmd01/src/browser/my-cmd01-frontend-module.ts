import { GettingStartedContribution } from './cmd01-contribution';
import { ContainerModule, interfaces } from 'inversify';
import { GettingStartedWidget } from './cmd01-widget';
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


