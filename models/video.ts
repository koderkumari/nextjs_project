import mongoose, {Schema, model, models} from "mongoose";
export  const VIDEO_DIMENSIONS = {
    width : 1280,
    height: 720
} as const;
export interface IVideo {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    videourl: string;
    thumbnailurl: string;
    control?: boolean
    transformations?: {
        height: number;
        width: number;
        quality: number;
    };
}
const VideoSchema = new Schema<IVideo>(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        videourl: {type: String, required: true},
        thumbnailurl: {type: String, required: true},
        control: {type: Boolean, default: false},
        transformations: {
            height: {type: Number, default: VIDEO_DIMENSIONS.height},
            width: {type: Number, default: VIDEO_DIMENSIONS.width},
            quality: {type: Number, min:1, max:100 },

        },

    },
    {
        timestamps: true
    }
);
const Video = models?.Video || model<IVideo>("Video", VideoSchema);
export default Video;


