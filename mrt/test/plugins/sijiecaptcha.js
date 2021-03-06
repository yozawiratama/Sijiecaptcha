CreateCaptcha = function (containerId, length) {
    var chars = "c1OqJQ5bAxnKICMPDE6HhuTSeya8p7TNi9fVvGg4zWtmr2lk0wsXdB3RFLUZo";
    var result = "";
    for (var ii = 0; ii < length; ii++) {
        var pos = (Math.floor(Math.random() * 331) + 17) % chars.length;

        result += chars.substr(pos, 1);
    }
    Session.set("sijiecaptcha", result);

    var stage = new Kinetic.Stage({
        container: containerId,
        width: 150,
        height: 50
    });
    var layer = new Kinetic.Layer();

    var simpleText = new Kinetic.Text({
        x: 5,
        y: 10,
        text: Session.get("sijiecaptcha"),
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: 'green'
    });
    layer.add(simpleText);
    stage.add(layer);
}