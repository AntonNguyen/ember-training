App.ClientsRoute = Ember.Route.extend({
  model: function(){
   return this.store.find('user');
  },

  actions: {
    startTimer: function(model) {
      // this.store.find('user', function(resource) {
      //   resource.set('isTracking', false);
      //   resource.save();
      // });

      model.set('isTracking', true);
      model.save();
    },

    stopTimer: function(model) {
      model.set('isTracking', false);
      model.save();
    }
  }
});
