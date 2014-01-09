App.TimeTrackerComponent = Ember.Component.extend({
  isTracking: Ember.computed.alias('model.isTracking'),

  actions: {
    start: function() {
      this.sendAction('start', this.get('model'));
    },

    stop: function() {
      this.sendAction('stop', this.get('model'));
    }
  }
});