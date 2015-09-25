import Ember from 'ember';

export default Ember.Controller.extend({	
	isActive: false,
	curp: '',
	folio: '',
	datos: Ember.ArrayProxy.create({ content: [] }),
	step: 0,
	activePreview: false,
	watchDatos: function() {
		console.log('watcher');
		if( this.get('datos').content.length > 0 ) {
			console.log('get Datos --> ' + JSON.stringify(this.get('datos') ));
			this.set('activePreview', true);
			this.set('step', this.get('step') + 1);
			this.next_step();
		}
	}.observes('datos.content.@each'),
	next_step: function() {
		//alert('this!!!');
		console.log('next_step');
	}
});
