/**
 * @fileoverview Tests for `no-js-extension` rule
 * @author Casey Visco <cvisco@gmail.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var RuleTester = require("eslint").RuleTester,
    fixtures = require("../../fixtures"),
    rule = require("../../../lib/rules/no-js-extension");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ERROR = {
    message: "Don't use .js extension in dependency path.",
    type: "Literal"
};

var ruleTester = new RuleTester();

ruleTester.run("no-js-extension", rule, {

    valid: [
        fixtures.BAD_REQUIRE_EMPTY,
        fixtures.AMD_DEFINE,
        fixtures.AMD_EMPTY_DEFINE,
        fixtures.AMD_EMPTY_REQUIRE,
        fixtures.AMD_EMPTY_REQUIREJS,
        fixtures.AMD_REQUIRE,
        fixtures.AMD_REQUIRE_RELATIVE,
        fixtures.AMD_REQUIRE_WITH_ERRBACK,
        fixtures.AMD_REQUIREJS,
        fixtures.AMD_REQUIREJS_RELATIVE,
        fixtures.AMD_REQUIREJS_WITH_ERRBACK,
        fixtures.CJS_WITH_EXPORTS,
        fixtures.CJS_WITH_MODULE_EXPORTS,
        fixtures.CJS_WITH_RETURN,
        fixtures.NAMED_AMD_DEFINE,
        fixtures.NAMED_AMD_EMPTY_DEFINE,
        fixtures.NAMED_CJS_DEFINE,
        fixtures.DYNAMIC_AMD_REQUIRE_WITH_ERRBACK,
        fixtures.DYNAMIC_AMD_REQUIREJS_WITH_ERRBACK,
        fixtures.DYNAMIC_MIXED_AMD_REQUIRE,
        fixtures.DYNAMIC_MIXED_AMD_REQUIREJS,
        fixtures.DYNAMIC_TERNARY_AMD_REQUIRE,
        fixtures.DYNAMIC_TERNARY_AMD_REQUIREJS,
        fixtures.DYNAMIC_TERNARY_CJS_REQUIRE,
        fixtures.DYNAMIC_TERNARY_CJS_REQUIREJS,
        fixtures.DYNAMIC_VARIABLE_AMD_REQUIRE,
        fixtures.DYNAMIC_VARIABLE_AMD_REQUIREJS,
        fixtures.DYNAMIC_VARIABLE_CJS_REQUIRE,
        fixtures.DYNAMIC_VARIABLE_CJS_REQUIREJS,
        fixtures.CONDITIONAL_AMD_REQUIRE,
        fixtures.CONDITIONAL_AMD_REQUIREJS,
        fixtures.CONDITIONAL_CJS_REQUIRE,
        fixtures.CONDITIONAL_CJS_REQUIREJS,
        fixtures.CONDITIONAL_NESTED_AMD_REQUIRE,
        fixtures.CONDITIONAL_NESTED_AMD_REQUIREJS,
        fixtures.CONDITIONAL_TERNARY_CJS_REQUIRE,
        fixtures.CONDITIONAL_TERNARY_CJS_REQUIREJS,

        // plugins check

        fixtures.AMD_DEFINE_WITH_FOO_PLUGIN_AND_JS_EXT,
        fixtures.AMD_REQUIRE_WITH_FOO_PLUGIN_AND_JS_EXT,
        fixtures.AMD_REQUIREJS_WITH_FOO_PLUGIN_AND_JS_EXT,
        fixtures.CJS_WITH_FOO_PLUGIN_AND_JS_EXT
    ],

    invalid: [
        { code: fixtures.AMD_REQUIRE_WITH_JS_EXT, errors: [ERROR] },
        { code: fixtures.AMD_REQUIREJS_WITH_JS_EXT, errors: [ERROR] },
        { code: fixtures.AMD_REQUIRE_RELATIVE_WITH_JS_EXT, errors: [ERROR] },
        { code: fixtures.AMD_DEFINE_WITH_JS_EXT, errors: [ERROR] },
        { code: fixtures.CJS_WITH_JS_EXT, errors: [ERROR] },
        { code: fixtures.NAMED_AMD_DEFINE_WITH_JS_EXT, errors: [ERROR] },
        { code: fixtures.NAMED_CJS_DEFINE_WITH_JS_EXT, errors: [ERROR] },

        // one plugin check

        {
            code: fixtures.AMD_DEFINE_WITH_FOO_PLUGIN_AND_JS_EXT,
            options: [[ "foo" ]],
            errors: [ERROR]
        },
        {
            code: fixtures.AMD_REQUIRE_WITH_FOO_PLUGIN_AND_JS_EXT,
            options: [[ "foo" ]],
            errors: [ERROR]
        },
        {
            code: fixtures.AMD_REQUIREJS_WITH_FOO_PLUGIN_AND_JS_EXT,
            options: [[ "foo" ]],
            errors: [ERROR]
        },
        {
            code: fixtures.CJS_WITH_FOO_PLUGIN_AND_JS_EXT,
            options: [[ "foo" ]],
            errors: [ERROR]
        },

        // more plugins check

        {
            code: fixtures.AMD_DEFINE_WITH_FOO_PLUGIN_AND_JS_EXT,
            options: [[ "more", "plugins", "foo" ]],
            errors: [ERROR]
        },
        {
            code: fixtures.AMD_REQUIRE_WITH_FOO_PLUGIN_AND_JS_EXT,
            options: [[ "more", "plugins", "foo" ]],
            errors: [ERROR]
        },
        {
            code: fixtures.AMD_REQUIREJS_WITH_FOO_PLUGIN_AND_JS_EXT,
            options: [[ "more", "plugins", "foo" ]],
            errors: [ERROR]
        },
        {
            code: fixtures.CJS_WITH_FOO_PLUGIN_AND_JS_EXT,
            options: [[ "more", "plugins", "foo" ]],
            errors: [ERROR]
        }
    ]

});
