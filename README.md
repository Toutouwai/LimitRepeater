# LimitRepeater

Allows restrictions and limits to be placed on Repeater fields.

For any Repeater field you can limit the number of items that may be added and also prevent the use of drag-sorting, toggling of published state, and the trashing of items. There is also an option to hide the clone button when the limit is reached.

## Usage

[Install](http://modules.processwire.com/install-uninstall/) the LimitRepeater module.

Since v0.2.0 the module settings are configured at Setup > Fields > [your Repeater field]. The settings are contained within the "Restrictions" fieldset on the "Details" tab.

![Module config](https://user-images.githubusercontent.com/1538852/153341023-a0b48ef9-3463-4261-b1d6-f97f8c987b23.png)


Please note that the restrictions limits are applied in Page Edit with CSS/JS so should not be considered tamper-proof.

### Setting restrictions via a hook

Besides setting restrictions in the field settings, you can also apply or modify restrictions by [hooking](https://processwire.com/api/hooks/) `LimitRepeater::checkRestrictions`. This allows for more focused restrictions, for example, applying restrictions depending on the template of the page being edited or depending on the role of the user.

The `checkRestrictions()` method receives the following arguments:

* `$field` This Repeater field
* `$inputfield` This Repeater inputfield
* `$page` The page that is open in ProcessPageEdit

The method returns an array of restrictions for the Repeater field. An example of a returned array:

![Restrictions](https://user-images.githubusercontent.com/1538852/153341551-bfb7f75a-a4e7-4e9d-bb16-fa7f9dc780de.png)

#### Example hook

Prevent non-superusers from trashing any items in "my_repeater_field":

```php
$wire->addHookAfter('LimitRepeater::checkRestrictions', function(HookEvent $event) {
    $field = $event->arguments('field');
    $restrictions = $event->return;
    if($field->name === 'my_repeater_field' && !$this->user->isSuperuser()) {
        $restrictions['notrash'] = true;
    }
    $event->return = $restrictions;
});
```

## Upgrading from < v0.2.0

There are two major changes to be aware of when upgrading from earlier versions of the module.

1. The settings are no longer defined on the module config page, but rather in the field settings of each Repeater field: Setup > Fields > [your Repeater field]. If you visit the module config page you'll find shortcuts to the settings for each Repeater field.
2. In earlier versions you could apply restrictions to a particular role. This is still possible but is now handled by hooking `LimitRepeater::checkRestrictions` as this is a more flexible and powerful approach. If you were applying restrictions to a particular role or roles you'll need to add hook code to achieve the same effect after you upgrade the module. See the hook information above in this readme.