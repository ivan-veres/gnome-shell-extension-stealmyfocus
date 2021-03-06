const Main = imports.ui.main;
const WindowAttentionHandler = imports.ui.windowAttentionHandler;
const Shell = imports.gi.Shell;
const Lang = imports.lang;

function StealMyFocus() {
    this._init();
    this.blacklist = ["Skype","Viber"];
}

StealMyFocus.prototype = {
    _init : function() {
        this._tracker = Shell.WindowTracker.get_default();
        global.display.disconnect(Main.windowAttentionHandler._windowDemandsAttentionId);
        this._handlerid = global.display.connect('window-demands-attention', Lang.bind(this, this._onWindowDemandsAttention));
    },

    _onWindowDemandsAttention: function(display, window) {
        for (var i = 0; i < this.blacklist.length; i++) {
            var name = this.blacklist[i].toLowerCase();
            if (window.title.toLowerCase().indexOf(name) != -1) {
                // app in blacklist, return and do nothing
                return;
            }
        }
        Main.activateWindow(window);
    },

    destroy: function () {
        global.display.disconnect(this._handlerid);
    }
}

let stealmyfocus;

function init() {
}

function enable() {
    stealmyfocus = new StealMyFocus();
}

function disable() {
    stealmyfocus.destroy();
}
