import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
import { EditorMainMenu } from "@theia/editor/lib/browser";

export const MyExampleFormCommand = {
    id: 'MyexampleForm',
    label: "Shows a message"
};

@injectable()
export class MyExampleFormCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(MyExampleFormCommand, {
            execute: () => this.messageService.info('Ciao my-example modificato!')
        });
    }
}

@injectable()
export class MyExampleFormMenuContribution implements MenuContribution {

 
    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: MyExampleFormCommand.id,
            label: 'My-Example Hello'
        });

        //menus.unregisterMenuAction(CommonMenus.HELP[CommonMenus.HELP.length - 1], CommonMenus.HELP);
        //menus.unregisterMenuAction(CommonCommands.ABOUT_COMMAND);
        menus.unregisterMenuAction(CommonMenus.HELP.slice(-1)[0]);
        menus.unregisterMenuAction(CommonMenus.VIEW.slice(-1)[0]);
        menus.unregisterMenuAction(CommonMenus.EDIT_UNDO[CommonMenus.EDIT_UNDO.length - 1]);
        //menus.unregisterMenuAction(DebugMenus.DEBUG.slice(-1)[0]);
        menus.unregisterMenuAction(EditorMainMenu.GO.slice(-1)[0]);       


    };



}