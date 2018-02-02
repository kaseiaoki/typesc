interface Hoge {
    str: string;
    method(): string;
}

class Fuga implements Hoge {
    str: string;
    method(): string {
        return "I'm " + this.str;
    }
}

class Piyo implements Hoge {
    method(): string {
        return "I'm method!";
    }
}

var obj = new Fuga();
obj.str = "method";
window.alert(obj.method());
