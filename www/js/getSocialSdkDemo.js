var getSocialCordovaVersion = "";
var getSocialCordovaApiVersion = "";
var getSocialCordovaEnvironment = "";

var LogType = {
    DEBUG:1,
    ERROR:0
}

function updateMetaData() {
    window.GetSocial.getInstance().getVersion(
        function(version) {
            getSocialCordovaVersion = version;
            document.getElementById('version').innerText = version;
            log(LogType.DEBUG, "Version: "+version)
        });

    window.GetSocial.getInstance().getApiVersion(
        function(apiVersion) {
            getSocialCordovaApiVersion = apiVersion;
            document.getElementById('apiversion').innerText = apiVersion;
            log(LogType.DEBUG, "ApiVersion: "+apiVersion)
        });

    window.GetSocial.getInstance().getEnvironment(
        function(environment) {
            getSocialCordovaEnvironment = environment;
            document.getElementById('environment').innerText = environment;
            log(LogType.DEBUG, "Environment: "+environment)
        });

}

function log(logType, msg) {
    var type = ""
    if(logType = LogType.DEBUG)
        type = "[DEBUG]"
    if(logType = LogType.ERROR)
        type = "[ERROR]"

    console.log(type+" --- "+msg);
    var oldValue = document.getElementById('logs').innerText;
    document.getElementById('logs').innerText = oldValue+"\n"+type+" --- "+msg;
}

function initGetSocialSdk() {
    log(LogType.DEBUG, "Start init GetSocial")
    updateMetaData();

    var facebookInvitePlugin = new FacebookInvitePlugin();

    window.GetSocial.getInstance().registerPlugin(
        function(data){
           log(LogType.DEBUG, "Facebook successfully registered with id "+data)
        }, facebookInvitePlugin);

    window.GetSocial.getInstance().setOnInviteFriendsListener(
        function(){
            log(LogType.DEBUG, "Invite intent")
        }, function(numberOfInvites){
            log(LogType.DEBUG, "Number of invites: "+numberOfInvites)
        });

    window.GetSocial.getInstance().setOnReferralDataReceivedListener(
        function(referralData){
            log(LogType.DEBUG, referralData)
        })

    window.GetSocial.getInstance().init('4We9Uqq8SR04tNXqV10M0000000s8i7N997ga98n',
        function(data){
            log(LogType.DEBUG, "GetSocial successfully initialized.")
        }, function(data){
            log(LogType.ERROR, "GetSocial initialization FAILED")
        })
}

function createSmartInviteView() {
    var smartInviteView = new SmartInviteViewBuilder()
    .setTitle("Custom Title")
    .setSubject("Custom Subject")
    .setText("Custom Text")
    .show();
}

function registerFacebookInvitePlugin() {

}

function defaultUICustomization() {
    window.Configuration.getInstance().clear(
    function() {
        updateConfigurationUILabel();
    });
}

function ruzzleUICustomization() {
    var path = "www/getsocial/ruzzle/ruzzle.json"
    window.Configuration.getInstance().setConfiguration(path,
    function() {
        updateConfigurationUILabel();
    } );
}

function updateConfigurationUILabel() {
    log(LogType.DEBUG, "UI cutomization changed");
}

