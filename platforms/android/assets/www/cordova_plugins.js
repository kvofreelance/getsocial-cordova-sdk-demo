cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.getsocialsdk.cordova/www/Configuration.js",
        "id": "com.getsocialsdk.cordova.Configuration",
        "clobbers": [
            "Configuration"
        ]
    },
    {
        "file": "plugins/com.getsocialsdk.cordova/www/GetSocial.js",
        "id": "com.getsocialsdk.cordova.GetSocial",
        "clobbers": [
            "GetSocial"
        ]
    },
    {
        "file": "plugins/com.getsocialsdk.cordova/www/plugin/InvitePlugin.js",
        "id": "com.getsocialsdk.cordova.InvitePlugin",
        "clobbers": [
            "InvitePlugin"
        ]
    },
    {
        "file": "plugins/com.getsocialsdk.cordova/www/plugin/Plugin.js",
        "id": "com.getsocialsdk.cordova.Plugin",
        "clobbers": [
            "Plugin"
        ]
    },
    {
        "file": "plugins/com.getsocialsdk.cordova/www/FacebookInvitePlugin.js",
        "id": "com.getsocialsdk.cordova.FacebookInvitePlugin",
        "clobbers": [
            "FacebookInvitePlugin"
        ]
    },
    {
        "file": "plugins/com.getsocialsdk.cordova/www/SmartInviteViewBuilder.js",
        "id": "com.getsocialsdk.cordova.SmartInviteViewBuilder",
        "clobbers": [
            "SmartInviteViewBuilder"
        ]
    },
    {
        "file": "plugins/com.getsocialsdk.cordova/www/view/ViewBuilder.js",
        "id": "com.getsocialsdk.cordova.ViewBuilder",
        "clobbers": [
            "ViewBuilder"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});