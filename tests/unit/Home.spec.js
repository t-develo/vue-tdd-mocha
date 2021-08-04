import { shallowMount } from '@vue/test-utils';
import { assert } from 'chai';
import Home from '../../src/views/Home.vue';

suite('Home.vue', () => {
    test('Mount Instance', () => {
        const wrapper = shallowMount(Home);
        assert.isNotNull(wrapper.vm);
    });
});
