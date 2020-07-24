import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  session: service,

  beforeModel() {
    return this.session.fetch().catch(function() {});
  },

  @action
  signIn(provider) {
    this.session.open('firebase', { provider: provider}).then(function(data) {
      console.log(data.currentUser);
    });
  },

  @action
  signOut() {
    this.session.close();
  }
});