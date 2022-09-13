import SendbirdChat from '@sendbird/chat'
import {
    GroupChannelHandler,
    GroupChannelModule,
} from '@sendbird/chat/groupChannel';
import { v4 as uuidv4 } from 'uuid';


class Sendbird {
    constructor(appId) {
        this.sb = SendbirdChat.init({
            appId,
            localCacheEnabled: false,
            modules: [new GroupChannelModule()]
        });
    }
    async setUp() {
        const userId = localStorage.getItem('sb-user-id');
        if (false) {
            const user = await this.sb.connect(userId);

            const marketplaceChannel = await this.sb.groupChannel.getChannel(`Marketplace-${userId}`);


            return [user, marketplaceChannel];
        } else {
            const newUserId = uuidv4();
            const user = await this.sb.connect(newUserId);

            const marketplaceChannel = await this.createChannel("Matt", newUserId, user);


            localStorage.setItem('sb-user-id', user.userId);

            return [user, marketplaceChannel];

        }
    }

    async createChannel(name, newUserId, user) {
        const groupChannelParams = {};
        groupChannelParams.channelUrl = `Marketplace-${newUserId}`;
        groupChannelParams.addUserIds = [user.userId];
        groupChannelParams.name = name;
        groupChannelParams.isDistinct = false;
        groupChannelParams.operatorUserIds = [user.userId];

        const groupChannel = await this.sb.groupChannel.createChannel(groupChannelParams);
        return groupChannel;
    }
    reset() {
        localStorage.removeItem('sb-user-id');
    }
}

export default Sendbird;