import BIButton from './button.vue';

BIButton.install = function (Vue) {
  Vue.component(BIButton.name, BIButton);
};

export default BIButton;