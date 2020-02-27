import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

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
    }
}