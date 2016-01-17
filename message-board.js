if (Meteor.isClient) {
    // This code only runs on the client
    Template.body.helpers({
        messages: [
            { text: "My First Post" },
            { text: "What do you think?" },
            { text: "The quick brown fox jumped over the lazy dog." }
        ]
    });
}
