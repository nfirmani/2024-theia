
import { AbstractViewContribution, bindViewContribution, WidgetFactory } from '@theia/core/lib/browser';
import { SampleViewUnclosableView } from './sample-unclosable-view';
import { injectable, interfaces } from 'inversify';

@injectable()
export class SampleUnclosableViewContribution extends AbstractViewContribution<SampleViewUnclosableView> {

    static readonly SAMPLE_UNCLOSABLE_VIEW_TOGGLE_COMMAND_ID = 'sampleUnclosableView:toggle';

    constructor() {
        super({
            widgetId: SampleViewUnclosableView.ID,
            widgetName: 'Sample Unclosable View',
            toggleCommandId: SampleUnclosableViewContribution.SAMPLE_UNCLOSABLE_VIEW_TOGGLE_COMMAND_ID,
            defaultWidgetOptions: {
                area: 'main'
            }
        });
    }
}

export const bindSampleUnclosableView = (bind: interfaces.Bind) => {
    bindViewContribution(bind, SampleUnclosableViewContribution);
    bind(SampleViewUnclosableView).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: SampleViewUnclosableView.ID,
        createWidget: () => ctx.container.get<SampleViewUnclosableView>(SampleViewUnclosableView)
    }));
};
