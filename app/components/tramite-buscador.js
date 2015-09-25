import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
	attributeBindings: ['model'],
	isActive: true,
	actions: {
		search: function() {
			var controller = this;
			var payload = Ember.Object.create({});

			var shaObj = new jsSHA("SHA-1", "TEXT");
			shaObj.update("PRESIDENCIA" + this.get('curp') );
			var hash = shaObj.getHash("HEX");

			payload.set('dependencia', 'PRESIDENCIA' );
			payload.set('curp', this.get('curp') );
			payload.set('hash', hash);
			payload.set('isImg', 0);

			//this.set('isActive', false);
			
			console.log('buscar ---> ' + JSON.stringify(payload));

			Ember.$.ajax({
				url: config.APP.REST_WS + 'byCURP',
				type: 'POST',
				dataType: 'json',
				contentType: 'application/json',
				data: JSON.stringify(payload)
			})
			.done(function(data) {
				console.log("success-entro");

				var datos = Ember.ArrayProxy.create({ content: [] });
				for( var i = 0; i < data.return.nacimientos.length; i++) {
					var datosJSON = data.return.nacimientos[i];

					var dataSet = Ember.Object.create({});

					dataSet.set('curp', datosJSON.curp );
					dataSet.set('cadena', datosJSON.cadena );
					dataSet.set('estadoNacNombre', datosJSON.estadoNacNombre );
					dataSet.set('fechaNacimiento', datosJSON.fechaNacimiento );
					dataSet.set('foja', datosJSON.foja );
					dataSet.set('folio', datosJSON.folio );
					dataSet.set('libro', datosJSON.libro );
					dataSet.set('nacionalidadTxt', datosJSON.nacionalidadTxt );
					dataSet.set('noActa', datosJSON.noActa );
					dataSet.set('nombre', datosJSON.nombre );
					dataSet.set('nombrePrimeraPersona', datosJSON.nombrePrimeraPersona );
					dataSet.set('nombreSegundaPersona', datosJSON.nombreSegundaPersona );
					dataSet.set('oficialia', datosJSON.oficialia );
					dataSet.set('primerApellido', datosJSON.primerApellido );
					dataSet.set('primerApellidoPrimeraPersona', datosJSON.primerApellidoPrimeraPersona );
					dataSet.set('primerApellidoSegundaPersona', datosJSON.primerApellidoSegundaPersona );
					dataSet.set('segundoApellido', datosJSON.segundoApellido );
					dataSet.set('segundoApellidoPrimeraPersona', datosJSON.segundoApellidoPrimeraPersona );
					dataSet.set('segundoApellidoSegundaPersona', datosJSON.segundoApellidoSegundaPersona );
					dataSet.set('sexo', datosJSON.sexo );
					dataSet.set('vivoMuerto', datosJSON.vivoMuerto );
					
					controller.get('model').pushObject(dataSet)					
				}
				//console.log('datos --> ' + JSON.stringify(controller.get('model')) );
				//controller.sendAction('action');

			})
			.fail(function() {
				console.log("ERROR");
			});
			
		}
	}
});
