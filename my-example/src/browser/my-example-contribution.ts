import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService, MAIN_MENU_BAR } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
import { EditorMainMenu } from "@theia/editor/lib/browser";

import { MonacoMenus } from "@theia/monaco/lib/browser/monaco-menu";

export const MyExampleFormCommand = {
    id: 'MyexampleForm',
    label: "Shows a message"
};

export const Elemento2Command = {
    id: 'Elemento2',
    label: "Mostra qualcosa"
};

export const Elemento3Command = {
    id: 'Elemento3',
    label: "Test visualizza"
};

const MY_MAIN_MENU = [...MAIN_MENU_BAR, 'my-menu'];


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
export class Elemento2CommandContribution implements CommandContribution {

/*
    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }
*/

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(Elemento2Command, {
            execute: () => {alert('Elemento 2 command!')}
        });
    };

}

@injectable()
export class Elemento3CommandContribution implements CommandContribution {

/*
    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }
*/

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(Elemento3Command, {
            execute: () => {alert('Test Elemento 3 command!')}
        });
    };

}



@injectable()
export class MyExampleFormMenuContribution implements MenuContribution {

 
    registerMenus(menus: MenuModelRegistry): void {       
        
        menus.registerSubmenu(MY_MAIN_MENU, 'My Menu');       
        
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: MyExampleFormCommand.id,
            label: 'My-Example Hello'
        });

     
        menus.registerMenuAction(MY_MAIN_MENU, {
            commandId: MyExampleFormCommand.id,
            label: 'My-Example-Hello'
        });        

        menus.registerMenuAction(MY_MAIN_MENU, {
            commandId: Elemento2Command.id,
            //label: 'Label elemento 2'
        });       

        menus.registerMenuAction(MY_MAIN_MENU, {
            commandId: Elemento3Command.id,
            label: 'Label elemento 3'
        });       

        

        //menus.unregisterMenuAction(CommonMenus.HELP[CommonMenus.HELP.length - 1], CommonMenus.HELP);
        //menus.unregisterMenuAction(CommonCommands.ABOUT_COMMAND);
        //menus.unregisterMenuAction(CommonMenus.HELP.slice(-1)[0]);
        menus.unregisterMenuAction(CommonMenus.VIEW.slice(-1)[0]);
        menus.unregisterMenuAction(CommonMenus.EDIT_UNDO[CommonMenus.EDIT_UNDO.length - 1]);
        //menus.unregisterMenuAction(DebugMenus.DEBUG.slice(-1)[0]);
        menus.unregisterMenuAction(EditorMainMenu.GO.slice(-1)[0]);
        menus.unregisterMenuAction(MonacoMenus.SELECTION.slice(-1)[0] );         


    };



}