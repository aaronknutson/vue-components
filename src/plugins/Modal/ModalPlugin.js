import Component from './Component';

let modal = {
    install: function (app) {
        // eslint-disable-next-line vue/component-definition-name-casing
        app.component('ModalPlugin', Component);

        app.config.globalProperties.showModal = name => {
            location.hash = name;
        } 

        app.config.globalProperties.hideModal = () => {
            location.hash = '#';
        } 

    }
};

export default modal;