import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ['activate'],
	isActive: false,
	watchActive: function() {
		console.log('starting....');
	}.observes('activate')
});
