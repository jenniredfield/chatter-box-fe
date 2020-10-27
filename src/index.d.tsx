declare global {
    interface Message {
        message: string;
        dateStamp: number;
        user: string;
    }

    interface IThemes {
        light: IThemeColours;
        dark: IThemeColours;
    }

    interface IThemeColours {
        foreground: string;
        background: string;
        id: string;
    }
    
    interface User {
        username: string;
        active: boolean;
    }

    interface IChannelState {
        channel: string
     }
     
     interface IChannel {
         channelName: string;
         messages: Message[];
         users: User[]
         id: string;
     }
}


 export {};