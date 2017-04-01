
var helpers = module.exports = (function () {
    var my = {};

    // public properties
    my.Reset      = "\x1b[0m";
    my.Bright     = "\x1b[1m";
    my.Dim        = "\x1b[2m";
    my.Underscore = "\x1b[4m";
    my.Blink      = "\x1b[5m";
    my.Reverse    = "\x1b[7m";
    my.Hidden     = "\x1b[8m";

    my.FgBlack   = "\x1b[30m";
    my.FgRed     = "\x1b[31m";
    my.FgGreen   = "\x1b[32m";
    my.FgYellow  = "\x1b[33m";
    my.FgBlue    = "\x1b[34m";
    my.FgMagenta = "\x1b[35m";
    my.FgCyan    = "\x1b[36m";
    my.FgWhite   = "\x1b[37m";

    my.BgBlack   = "\x1b[40m";
    my.BgRed     = "\x1b[41m";
    my.BgGreen   = "\x1b[42m";
    my.BgYellow  = "\x1b[43m";
    my.BgBlue    = "\x1b[44m";
    my.BgMagenta = "\x1b[45m";
    my.BgCyan    = "\x1b[46m";
    my.BgWhite   = "\x1b[47m";
    
    // public methods
    my.writeError = (functionName, errorMessage) => {
        console.error(this.FgRed + "Error (" + this.Bright + functionName + this.Reset + this.FgRed + "): " + this.Reset + errorMessage);
    };
    my.writeDebug = (functionName, debugMessage) => {
        console.debug(this.FgYellow + "Debug (" + this.Bright + functionName + this.Reset + this.FgYellow + "): " + this.Reset + debugMessage);
    };
    my.writeInfo = (functionName, infoMessage) => {
        console.info(this.FgGreen + "Info (" + this.Bright + functionName + this.Reset + this.FgGreen + "): " + this.Reset + infoMessage);
    };
    my.writeLog = (functionName, logMessage) => {
        console.log(this.FgWhite + "Log (" + this.Bright + functionName + this.Reset + this.FgWhite + "): " + this.Reset + logMessage);
    };

    return my;
}(helpers));