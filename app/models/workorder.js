import DS from 'ember-data';

var Workorder = DS.Model.extend({
  dateCreated: DS.attr('date'),
  dateCompleted: DS.attr('date'),
  assignedTo: DS.attr('string'),
  createdBy: DS.attr('string'),
  priority: DS.attr('string'),
  status: DS.attr('string'),
  state: DS.attr('string')
});

Workorder.reopenClass({
	FIXTURES: [
		{
			id: 1,
			dateCreated: "2015-02-13T16:44:57.000Z",
			dateCompleted: "2015-01-07T16:44:57.000Z",
			assignedTo: "Mike Miller",
			createdBy: "Mario",
			priority: "TOP",
			status: "OPEN",
			state: "DEFAULT"
		},
		{
			id: 2,
			dateCreated: "2015-01-13T16:44:57.000Z",
			dateCompleted: "2015-02-07T16:44:57.000Z",
			assignedTo: "Mr Schmidth",
			createdBy: "Luigi",
			priority: "MID",
			status: "OPEN",
			state: "IDLE"
		},
		{
			id: 3,
			dateCreated: "2015-02-13T16:44:57.000Z",
			dateCompleted: "2014-12-10T16:44:57.000Z",
			assignedTo: "John Doe",
			createdBy: "Toad",
			priority: "LOW",
			status: "CLOSED",
			state: "DEFAULT"
		}
	]
});

export default Workorder;
