import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return ["Workorder 1", "Workorder 2", "Workorder 3", "Workorder 4", "Workorder 5"];
	}
});
