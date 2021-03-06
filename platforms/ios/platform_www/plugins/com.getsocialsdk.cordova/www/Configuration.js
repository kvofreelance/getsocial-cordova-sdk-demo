cordova.define("com.getsocialsdk.cordova.Configuration", function(require, exports, module) {

  var NATIVE_BRIDGE_NAME = "GetSocialConfiguration"

  var SCALE_MODE = {
      SCALE_WITH_SCREEN_SIZE: 1
  }

  var ANIMATION_STYLE = {
      NONE: 0,
      SCALE: 1,
      FADE: 2,
      FADEANDSCALE: 3
  }

  var Configuration = function() {}

  var Configuration = function() {
      this.instance = null;

      this.onSuccess = function() {}
      this.onErrorPlugin = function(err) {
          console.log(err);
      }
  }

  Configuration.getInstance = function () {
      if (!this.instance) {
          this.instance = new Configuration();
      }
      return this.instance;
  }

  /// <summary>
  /// Sets the UI configuration file to use.
  /// </summary>
  /// <param name="configFile">Relative path to the configuration file in <c>/assets/</c>folder or URL.
  Configuration.prototype.setConfiguration = function(fileOrUrl, onResult) {
    if(fileOrUrl == null || fileOrUrl == "") {
        console.log("Configuration path is null or empty");
        return;
    }

    cordova.exec(onResult, this.onFailure, NATIVE_BRIDGE_NAME, "setConfiguration", [fileOrUrl]);
  }

  /// <summary>
  /// Clear all GetSocial UI configurations and set them to default. Invoke outside of transaction.
  /// </summary>
  Configuration.prototype.clear = function(onResult) {
    cordova.exec(onResult, this.onFailure, NATIVE_BRIDGE_NAME, "clear", []);
  }
  /// <summary>
  /// All GetSocial UI configuration changes should start with call to <c><see cref="BeginTransaction"/></c>.
  /// </summary>
  Configuration.prototype.beginTransaction = function() {
    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "beginTransaction", []);
  }
  /// <summary>
  /// All GetSocial UI configuration changes should end with call to <c><see cref="EndTransaction"/></c>.
  /// </summary>
  Configuration.prototype.endTransaction = function() {
    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "endTransaction", []);
  }
  /// <summary>
  /// Base path relative to <c>/assets/</c> folder,
  /// e.g. if all resources are in <c>/assets/getsocial/</c>, call method
  /// <c>SetBasePath("getsocial/")</c>;
  /// </summary>
  /// <param name="basePath">Base path for assets relative to <c>/assets/</c> folder.</param>
  Configuration.prototype.setBasePath = function(basePath) {
    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "setBasePath", [basePath]);
  }
  /// <summary>
  /// Sets the image path.
  /// </summary>
  /// <param name="id">Id of the element to customize.</param>
  /// <param name="path">Image path relative to <c>/assets/</c> folder.</param>
        
  Configuration.prototype.setImagePath = function(id, path) {
    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "setImagePath", [id, path]);
  }
  Configuration.prototype.setBaseDesign = function(width, height, ppi, scaleMode) {
    var scaleModeString = "";
    switch(scaleMode) {
       case SCALE_MODE.SCALE_WITH_SCREEN_SIZE:
          scaleModeString = "scale-with-screen-size";
          break;

       default:
          console.log("Specified scale mode is not valid");
          scaleModeString = "scale-with-screen-size";
          break;
    }
    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "setBaseDesign", [width, height, ppi, scaleModeString]);
  }
  Configuration.prototype.setDimension = function(id, dimension) {
    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "setDimension", [id, dimension]);
  }
  Configuration.prototype.setAspectRatio = function(id, aspectRatio) {
    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "setAspectRatio", [id, aspectRatio]);
  }
  Configuration.prototype.setTextStyle = function(id, typefacePath, textSize, textColor, strokeColor, strokeSize, strokeXOffset, strokeYOffset) {
    var mStrokeColor = 0
    if(strokeColor != null) {
        mStrokeColor = strokeColor
    }
    var mStrokeSize = 0
    if(strokeSize != null) {
        mStrokeSize = strokeSize
    }
    var mStrokeXOffset = 0
    if(strokeXOffset != null) {
        mStrokeXOffset = strokeXOffset
    }
    var mStrokeYOffset = 0
    if(strokeYOffset != null) {
        mStrokeYOffset = strokeYOffset
    }
    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "setTextStyle", [id, typefacePath, textSize, textColor, mStrokeColor, mStrokeSize, mStrokeXOffset, mStrokeYOffset]);
  }
  Configuration.prototype.setAnimationStyle = function(id, animationStyle) {
    var animationStyleResult = -1;
    for (var k in ANIMATION_STYLE) {
      if (!ANIMATION_STYLE.hasOwnProperty(k)) continue;
      if (ANIMATION_STYLE[k] === animationStyle) {
        animationStyleResult = animationStyle
      }
    }
    if(animationStyle == -1) {
        console.log("Wrong animationStyle value");
        return;
    }

    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "setAnimationStyle", [id, animationStyle]);
  }
  Configuration.prototype.setInsets = function( id, top, right, bottom, left) {
    cordova.exec(this.onSuccess, this.onFailure, NATIVE_BRIDGE_NAME, "setInsets", [id, top, right, bottom, left]);
  }

  module.exports = Configuration;
  module.exports.SCALE_MODE = SCALE_MODE;
  module.exports.ANIMATION_STYLE = ANIMATION_STYLE;

});
