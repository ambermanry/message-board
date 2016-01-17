Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
    // This code only runs on the client
    Template.body.helpers({
        messages: function () {
            return Messages.find({}, {sort: {createdAt: 1}});
        }
    });
}
