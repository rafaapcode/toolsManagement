import mongoose from 'mongoose';

const toolSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    tags: {
        type: Array,
        require: true,
    }
});

const modelTools = mongoose.model('tools', toolSchema);

export default modelTools;