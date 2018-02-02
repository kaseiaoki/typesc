var Fuga = /** @class */ (function () {
    function Fuga() {
    }
    Fuga.prototype.method = function () {
        return "I'm " + this.str;
    };
    return Fuga;
}());
var Piyo = /** @class */ (function () {
    function Piyo() {
    }
    Piyo.prototype.method = function () {
        return "I'm method!";
    };
    return Piyo;
}());
var obj = new Fuga();
obj.str = "method";
window.alert(obj.method());
