import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tramite-buscador', 'Integration | Component | tramite buscador', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tramite-buscador}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tramite-buscador}}
      template block text
    {{/tramite-buscador}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
