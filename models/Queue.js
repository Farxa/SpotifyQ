const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queueSchema = new Schema({
    selectedDevice: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
	inviteCode: {
        type: String,
        required: true
    },
    tracks: [
		{
			title: {
				type: String,
				required: true
			},
			spotifyId: {
				type: String,
				required: true
			}
		}
	],
    
}, { timestamps: true });

const Queue = mongoose.model('Queue', queueSchema);
module.exports = Queue;


// get token and deviceID and and inviteLink 