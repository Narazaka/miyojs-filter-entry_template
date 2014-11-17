// Generated by CoffeeScript 1.8.0
(function() {
  var Miyo, MiyoFilters, chai, chaiAsPromised, expect, sinon;

  if (typeof require !== "undefined" && require !== null) {
    chai = require('chai');
  } else {
    chai = this.chai;
  }

  chai.should();

  expect = chai.expect;

  if (typeof require !== "undefined" && require !== null) {
    chaiAsPromised = require('chai-as-promised');
  } else {
    chaiAsPromised = this.chaiAsPromised;
  }

  chai.use(chaiAsPromised);

  if (typeof require !== "undefined" && require !== null) {
    sinon = require('sinon');
    Miyo = require('miyojs');
    MiyoFilters = require('../entry_template.js');
  } else {
    sinon = this.sinon;
    Miyo = this.Miyo;
    MiyoFilters = this.MiyoFilters;
  }

  describe('template filter', function() {
    var id, ms, request, stash;
    ms = null;
    request = null;
    id = null;
    stash = null;
    beforeEach(function() {
      var dictionary, filter, name;
      dictionary = {
        two: 2,
        four: '${deep_four}',
        deep_four: 4
      };
      ms = new Miyo(dictionary);
      for (name in MiyoFilters) {
        filter = MiyoFilters[name];
        ms.filters[name] = filter;
      }
      ms.filters.value = {
        type: 'data-value',
        filter: function(argument, request, id, stash) {
          return argument.value;
        }
      };
      request = sinon.stub();
      id = 'OnTest';
      return stash = null;
    });
    return it('should process template', function() {
      var entry;
      ms.value_filters.push('entry_template');
      entry = {
        filters: ['value', 'entry_template'],
        argument: {
          value: '1${two}3${four}5'
        }
      };
      return ms.call_filters(entry, request, id, stash).should.eventually.be.equal('12345');
    });
  });

}).call(this);
