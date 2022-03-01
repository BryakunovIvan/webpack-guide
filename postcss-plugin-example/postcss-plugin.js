const postcss = require('postcss');

module.exports = postcss.plugin('TestPlugin', function (opts) {
    opts = opts || {};
    return function (css, result) {
        css.walkRules(function(rule) {
            rule.selector = rule.selector + ', new-selector';
        });
    };
});