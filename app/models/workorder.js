import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  dateCreated: DS.attr('date'),
  dateCompleted: DS.attr('date'),
  assignedTo: DS.attr('string'),
  createdBy: DS.attr('string'),
  priority: DS.attr('string'),
  status: DS.attr('string'),
  state: DS.attr('string')
});
