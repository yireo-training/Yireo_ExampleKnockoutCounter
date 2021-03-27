define(['uiComponent', 'ko'], function(Component, ko) {
    return Component.extend({
        counter: ko.observable(1),
        increment: function() {
            this.counter(this.counter() + 1);
        }
    });
});
