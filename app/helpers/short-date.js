import Ember from 'ember';

export function shortDate(params/*, hash*/) {
  return moment(params[0]).format("YYYY-M-D");
}

export default Ember.Helper.helper(shortDate);
