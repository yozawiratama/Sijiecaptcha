if (Meteor.isClient) {
    Template.hello.greeting = function () {
        return "Welcome to kinetic-captcha. v0.1.5";
    };
    Template.hello.developedby = function () {
        return "Developed by Sijie Team from Indonesia";
    };

    Template.formcaptcha.rendered = function () {
        CreateCaptcha('captcha', 7);


    };

    
    Template.formcaptcha.events({
        'submit': function (e) {
            e.preventDefault();
            var capRes = $("#inpCapRes").val();
            var capText = Session.get("sijiecaptcha");
            if (capRes == capText) {
                alert("Success");
                CreateCaptcha('captcha', 7);
                $("#inpCapRes").val("");
            } else {
                alert("fail");
                CreateCaptcha('captcha', 7);
                $("#inpCapRes").val("");
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}