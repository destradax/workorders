import Ember from 'ember';

export default Ember.Controller.extend({
  searchParams: {},

  actions: {
    "showWorkorder": function (workorder) {
			this.transitionToRoute("workorders.details", workorder);
		},
    "search" :function () {
      this.set("model", this.store.findAll("workorder"));
    }
  }
});
