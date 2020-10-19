
import { ReactWidget } from '@theia/core/lib/browser';
import { injectable, postConstruct } from 'inversify';
import * as React from 'react';

@injectable()
export class SampleViewUnclosableView extends ReactWidget {
  static readonly ID = 'sampleUnclosableView';

  @postConstruct()
  init(): void {
    this.id = SampleViewUnclosableView.ID;
    this.title.caption = 'Sample Unclosable View';
    this.title.label = 'Sample Unclosable View';
    this.title.iconClass = 'fa fa-window-maximize';
    this.title.closable = false;
    this.update();
  }

  protected render(): React.ReactNode {
    return (
      <div>
        Closable
        <input type="checkbox" defaultChecked={this.title.closable} onChange={e => this.title.closable = e.target.checked} />        
      </div>
    );
  }
}
