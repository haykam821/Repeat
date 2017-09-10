exports.onMessageReceived = (function Repeat(bot, doc, user, userID, channelID, message, event) {
    require('./../Onebot.js').registerCmd('repeat <message>', 'Repeats the given message.');
    require('./../Onebot.js').registerCmd('repeatspeech <message>', 'Repeats the given message with Text-to-Speech.');
    require('./../Onebot.js').registerCmd('repeatto <channelID> <message>', 'Repeats the given message to another channel.');
    if(message === undefined){
        return;
    }
    if (message.startsWith(`${doc.prefix}repeat `)) {
        bot.sendMessage({
            to: doc.logchannel,
            message: `<@${userID} made bot repeat: \`${message.match(/^.{8}(.*)/)[1]}\``
        });
        bot.sendMessage({
            to: channelID,
            message: '\u200b' + message.match(/^.{8}(.*)/)[1]
        });
    }
    if (message.startsWith(`${doc.prefix}repeatspeech `)) {
        bot.sendMessage({
            to: doc.logchannel,
            message: `<@${userID} made bot repeat with text-to-speech: \`${message.match(/^.{14}(.*)/)[1]}\``
        });
        bot.sendMessage({
            to: channelID,
            tts: true,
            message: '\u200b' + message.match(/^.{14}(.*)/)[1]
        });
    }
   if (message.startsWith(`${doc.prefix}repeatto `)) {
        bot.sendMessage({
            to: doc.logchannel,
            message: `<@" + userID + "> made bot repeat in channel ID \`${message.match(/^.{10}(.*)/)[1].split(" ")[0]}\`: \`${message.match(/^.{10}(.*)/)[1].split(" ").slice(1).join(" ")}\``
        });
        bot.sendMessage({
            to: message.match(/^.{10}(.*)/)[1].split(" ")[0],
            message: '\u200b' + message.match(/^.{10}(.*)/)[1].split(" ").slice(1).join(" ")
        });
    }

});
