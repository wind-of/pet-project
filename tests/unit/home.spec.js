import { shallowMount } from '@vue/test-utils'
import HomeHeaderComponent from '@/components/main/Header.vue'


describe('Homepage', () => {
    describe('Header', () => {
        const Header = shallowMount(HomeHeaderComponent);

        describe('Animation', () => {
            it('Navbar animation starts', () => {
                setTimeout(() => {
                    expect(Header.vm.showFirst).toBeTruthy();
                    expect(Header.vm.showSecond).toBeTruthy();
                    expect(Header.vm.showThird).toBeTruthy();
                    expect(Header.vm.showFourth).toBeTruthy();
                }, 0)
            });

            it('Title animation starts', () => {
                setTimeout(() => {
                    expect(Header.vm.showTitleAndContinuation).toBeTruthy();
                }, 0)
            })
        })
    });
});