const AppCodeMessages = Object.freeze({
    taskRateLimit: {code: "taskRateLimit", message: 'taskRateLimit'},
});


const RequestTypes = Object.freeze({
    generateTopic: 'generateTopic',
    generateContents: 'generateContents',
    generateContent: 'generateContent',
    generatePics: 'generatePics',
    generateAllFromText: 'generateAllFromText',
    generateGenerateContentsPrompt: 'generateGenerateContentsPrompt',
    generateGenerateTopicPrompt: 'generateGenerateTopicPrompt',
});


const AppMessageQueues = Object.freeze({
    bizRequestQ: 'bizRequestQ',
});


module.exports = {
    AppCodeMessages,
    RequestTypes,
    AppMessageQueues,
};
