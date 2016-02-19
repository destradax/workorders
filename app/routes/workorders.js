import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll("workorder");
	},
	actions: {
		"goToDetails": function (workorder) {
			this.transitionTo("workorders.details", workorder);
		}
	}
});
