App.ClientsController = Ember.ArrayController.extend({
  query: '',

  filterModel: function() {
    var query = this.get('query').toLowerCase();
    var filteredModels = this.get('model').filter(function(item) {
      return query === '' || item.get('name').toLowerCase().indexOf(query) > -1;
    });

    this.set('filteredModel', filteredModels);
  }.observes('query', 'model.@each.name'),

  clientsCount: function() {
    return this.get('filteredModel.length');
  }.property('filteredModel.length')
});