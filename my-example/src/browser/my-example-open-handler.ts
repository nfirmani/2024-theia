import { WidgetOpenHandler } from "@theia/core/lib/browser";
import { MyExampleFormWidget, MyExampleFormWidgetOptions } from "./my-example-widget";
import URI from "@theia/core/lib/common/uri";
import { injectable, inject } from "inversify";
import { EditorManager } from "@theia/editor/lib/browser";

@injectable()
export class MyExampleFormOpenHandler extends WidgetOpenHandler<MyExampleFormWidget> {

    readonly id = MyExampleFormWidget.id;
    readonly label = "Form di prova";

    @inject(EditorManager)
    protected readonly editorManager: EditorManager;

    canHandle(uri: URI): number {
        if (uri.path.ext !== '.json') {
            return 0;
        }
        if (uri.path.name.endsWith('-data')) {
             console.log('valore data ' + uri + ' ' + (this.editorManager.canHandle(uri) * 2));
            return this.editorManager.canHandle(uri) * 2;

        }
        console.log('valore non data ' + uri + (this.editorManager.canHandle(uri) / 2));
        return this.editorManager.canHandle(uri) / 2;
    }

    protected createWidgetOptions(uri: URI): MyExampleFormWidgetOptions {
        return { uri: uri.withoutFragment().toString() };
    }

}
