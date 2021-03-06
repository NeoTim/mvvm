;(function() {

    'use strict';

    angular
        .module('<%= module %>')
        .service('<%= names.classed %>', <%= names.classed %>);

    /* @inject */
    function <%= names.classed %>(<%=providers%>) {

        this._storage = {};

        ////////////////////////////////
        <% _.forEach( functions, function(func) { %>
        /**
         *      <%= func %>
         *      @description
         *      @param  {Object}        description
         *      @return {Object}        description
         */
        this.<%=func%> = function (param) {}
        <% }) %>
    }

}).call(this);