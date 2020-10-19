import { WidgetOpenHandler } from "@theia/core/lib/browser";

import { MyExampleFormWidget, MyExampleFormWidgetOptions } from "./my-example-widget";

import URI from "@theia/core/lib/common/uri";
import { injectable, inject } from "inversify";
import { FileStat } from '@theia/filesystem/lib/common';
import { EditorManager } from "@theia/editor/lib/browser";


@injectable()
export class MyExampleFormOpenHandler extends WidgetOpenHandler<MyExampleFormWidget> {

    readonly id = MyExampleFormWidget.id;
    //readonly id = SampleViewUnclosableView.ID

    readonly label = "Form di prova";

    @inject(EditorManager)
    protected readonly editorManager: EditorManager;

    canHandle(uri: object): number {
        
        let toCheck = uri;
        if (FileStat.is(toCheck)) {
            toCheck = new URI(toCheck.uri);
        }
        if (toCheck instanceof URI) {
        if (toCheck.path.ext !== '.json') {
            return 0;
        }
        if (toCheck.path.name.endsWith('-schema')) {
             console.log('valore uri -schema ' + uri) ;
            return 1000;

        }
        console.log('valore uri -schema ' + uri);
        return 0;
    } 
    return 0;
}

    protected createWidgetOptions(uri: URI): MyExampleFormWidgetOptions {
        return { uri: uri.withoutFragment().toString() };
    }
       

}
