import { shallowMount } from '@vue/test-utils'
import HomeHeaderComponent from '@/components/home/Header.vue'


describe('Homepage', () => {
    describe('Header', () => {
        const Header = shallowMount(HomeHeaderComponent);
        const { showFirst, showSecond, showThird, showFourth, showOther} = Header.vm;

        describe('Animation', () => {
            it('Navbar animation starts', () => {
                setTimeout(() => {
                    expect(showFirst && showSecond && showThird && showFourth).toBeTruthy();
                }, 0)
            });

            it('Title animation starts', () => {
                setTimeout(() => {
                    expect(showOther).toBeTruthy();
                }, 0)
            })
        })
    });
});