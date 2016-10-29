"use strict";
var artista_model_1 = require('./domain/artista.model.');
var app = (function () {
    function app() {
    }
    app.prototype.main = function () {
        var artista1 = new artista_model_1.Artista();
        artista1.presentarse();
    };
    return app;
}());
exports.app = app;
//# sourceMappingURL=app.js.map