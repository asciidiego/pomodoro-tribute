(function () {
    'use strict';

    angular
        .module('codeRed', [
            // Insert dependencies here...
        ])
        .controller('MainViewController', MainViewController)

    /** @ngInject */
    function MainViewController() {
        let main = this;

        init();

        function init() {
            // Enable global popovers.
            $('[data-toggle="popover"]').popover()
            console.log("Controller successfully initialized.");
            main.title = "Hello, world."
        }

    };

}());