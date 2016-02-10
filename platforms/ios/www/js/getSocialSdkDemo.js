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
    //.setImage("www/img/logo.png")
    .setImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/0AAADsCAMAAAARgzbxAAAAY1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////7+/v////7+/v///////////+9vb3///9SkS3aAAAAIHRSTlMAgMBAECDxYNEwoOCwkFBweBiIqpgI6Gi4SihaON3I+BdD9+4AACJOSURBVHja7N2LcpswEAXQXQkkIQF2nXeazuz/f2XdsacPA4qJJRDuPT/QacLVatGi0Cre6nd9ZE++66O6/kYAcL+0ZaXk6IdrHx75kv2u37EIANwbvfNOLrjXhwMPvPQNlgCAO9Gwkik/lOeh/fcPrAAAG1dZbyTOqAcesevfCQA2qrKtxMUXgD0WAIBN6luZ4fm1G18AagKALak7I3Mpz2N2H08EABuhW/kS53lUj3eAAJtggxylzb9FAwBQvFP2kX+A/40NcjPXIf8AW2ODJPF6QP4BtkQrSeXZ87i+IgAoTOUlJXfgUXtNAFCUnZG0jOdxO2z/AQpSK0lPHXjcG8Z/AEqxM5LDj0eUf4Ci1UoyMQ+M8g9Qrt5IPoonvGD4F2BtnWTlDjxu3xAArKhyklk48IQeu3+A9TRGsjOPPOEFoz8Aa7ESsUD892j+Aa61qZb/ivgzmn+As1prvVggvEQsFf8PAoC+c3LiuobGbOx933Xx7wng/3Z5j54a5H/L4Uf8AWZ8X2cs/WPb4Uf8AeaM2f8T/62HX+T5gPgDXDtmr+m37YdfJCD+ANeO2YeKzu4h/CKOEX+AK8/cmU7uI/wir4XFv9InuG4I1lB5iTCUhZO1+GLi31z8RXLld1gD4FNLVmFLZ9sc8hkwHZcw9df7IGNa3DoCEcuGX1o62+B476jA095pERUHmaYsvjyCiFzhj2/9t/VhzyTFvOonPxUbiTMdNgCQn5JP1ZRYIyvzPGn3RAOZsh/nkX/IzMvnNKVVGVlTfOiHLeVlg1zHMP1vKt0zs/pLx1ajDcqE5QpMaSlZneJpbxSx6OWlQdOatA8i0ja0gEpz62SCUYwlIL1eVkg/SwH8Om/+WOZhWk3VyllPedXWB/mUwzUMZ8teqdVRSlpK8MzT9hUNrHVruapoHfWfQBrKqOmcXCt0WACOlh23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")
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

