export const myMixin = {
    created() {
      console.log('Component created - mixin hook called');
    },
    methods: {
      commonMethod() {
        console.log('This is a common method from the mixin');
      },
      anotherCommonMethod() {
        console.log('Another method from the mixin');
      }
    }
  };