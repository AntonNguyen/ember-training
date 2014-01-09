App.User = DS.Model.extend({
  email: DS.attr('string'),
  fname: DS.attr('string'),
  lname: DS.attr('string'),
  level: DS.attr('number'),
  prefGmail: DS.attr('boolean'),

  name: function(key, value) {
    // Edit mode!
    if (arguments.length > 1) {
      var firstSpaceIndex = value.indexOf(' '),
         fname = value.substring(0, firstSpaceIndex),
         lname = value.substring(firstSpaceIndex, value.length);

      this.setProperties({
       'fname': fname,
       'lname': lname
      });

      return value;

    // Get mode!
    } else {
      return this.get('fname') + ' ' + this.get('lname');
    }
  }.property('fname', 'lname'),

  isTracking: Ember.computed.alias('prefGmail'),

  role: function () {
    return {
      3: 'admin',
      1: 'staff',
      0: 'client'
    }[this.get('level')];
  }.property('level')
});
