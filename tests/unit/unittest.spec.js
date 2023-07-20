// Import the required dependencies and functions for testing
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld.vue';

// Mock the necessary dependencies
jest.mock('vue-router', () => ({
  push: jest.fn(),
}));

describe('HelloWorld', () => {
  it('should navigate to HomeHome when all fields are filled', () => {
    // Mount the component
    const wrapper = shallowMount(HelloWorld);

    // Set the necessary data properties
    wrapper.setData({
      name: 'John',
      email: 'john@example.com',
      phoneno: '1234567890',
      address: '123 Main St',
      gender: 'male',
      Dateofbirth: '1990-01-01',
    });

    // Trigger the next() function
    wrapper.vm.next();

    // Assert that the router push method was called with the expected arguments
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
      name: 'HomeHome',
      params: {
        name: 'John',
        email: 'john@example.com',
        phoneno: '1234567890',
        address: '123 Main St',
        gender: 'male',
        Dateofbirth: '1990-01-01',
      },
    });
  });

  it('should display an alert when any field is missing', () => {
    // Mount the component
    const wrapper = shallowMount(HelloWorld);

    // Trigger the next() function without setting any data properties
    wrapper.vm.next();

    // Assert that the alert method was called
    expect(alert).toHaveBeenCalledWith('please fill the value');

    // Assert that the router push method was not called
    expect(wrapper.vm.$router.push).not.toHaveBeenCalled();
  });
});
