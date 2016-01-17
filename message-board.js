Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
    // This code only runs on the client
    Template.body.helpers({
        messages: function () {
            return Messages.find({}, {sort: {createdAt: 1}});
        }
    });

    Template.body.events({
        "submit .new-message": function (event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var text = event.target.text.value;

            // Insert a task into the collection
            Messages.insert({
                text: text,
                createdAt: new Date() // current time
            });

            // Clear form
            event.target.text.value = "";
        }
    });
}
