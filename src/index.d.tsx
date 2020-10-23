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
    
    interface IChannelState {
        channel: string
     }   
}

 export {};