import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Header from './index';

suite('header', () => {
  test('that the header renders', () => {
    const sponsor = any.string();
    const location = any.string();

    const wrapper = shallow(<Header sponsor={sponsor} location={location} />);
    const link = wrapper.find('a');

    assert.equal(link.prop('href'), '/');
    assert.isTrue(link.find('Logo').exists());
    assert.isTrue(wrapper.find('DsmJsBar').exists());
    assert.isTrue(wrapper.find('RecurrenceBar').exists());
    assert.equal(wrapper.find('SponsorBar').prop('sponsor'), sponsor);
    assert.equal(wrapper.find('LocationBar').prop('location'), location);
  });
});
