# LimitRepeater

A module for ProcessWire CMS/CMF. Allows limits and restrictions to be placed on selected Repeater fields.

For any Repeater field and for any or all roles, you can limit the number of items that may be added and also prevent the use of drag-sorting, toggling of published state, and the trashing of items.

For example, you could fix a Repeater at some arbitrary number of items for non-superuser roles by setting the limit to 1 and checking "No trash". Then as superuser you can add as many Repeater items as needed but other roles may not change the number of items.

## Usage

[Install](http://modules.processwire.com/install-uninstall/) the LimitRepeater module.

The module configuration screen should be self-explanatory.

You can add rows as needed using the "Add another row" button.

Please note that limits and restrictions are applied with CSS/JS so should not be considered tamper-proof.

## License

Released under Mozilla Public License v2. See file LICENSE for details.
