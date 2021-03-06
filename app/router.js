import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('workorders', function() {
    this.route('details', {path: ":workorder_id"});
  });
});

export default Router;
