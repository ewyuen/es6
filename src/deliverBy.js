/**
 * Created by edward.yuen on 10/13/2016.
 */
var deliverBy = {
    name: "John",

    handleMessage: function (message, handler) {
        handler(message);
    },

    receive: function () {
      this.handleMessage("Hello", message => console.log(message + this.name));
    }
}

deliverBy.receive();
