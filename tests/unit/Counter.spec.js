import { shallowMount, mount } from '@vue/test-utils';
import { assert } from 'chai';
import Counter from '../../src/components/Counter.vue';

describe('Counter.vue', () => {
    it('increments count when button before click', () => {
        const wrapper = shallowMount(Counter);
        assert.include(wrapper.find('div').text(), '0');
    });
    it('increments count when button is clicked', async () => {
        const wrapper = mount(Counter);
        const button = wrapper.find('button');
        await button.trigger('click');
        assert.include(wrapper.find('div').text(), '1');
    });
});
