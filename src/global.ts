import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
    public accessToken: string;
    public userId: string;
    public userEmail: string;
    public deviceToken: string;
    public isSubsequent: boolean = true;
    // public baseUrl = 'https://mimobotnode.au-syd.mybluemix.net/';
    public baseUrl = 'http://localhost:8680/';
    // public baseUrl = 'http://101.100.181.52:8680/';

    setIdToken(token) {
        this.accessToken = token;
    }

    setDeviceToken(dToken) {
        this.deviceToken = dToken;
    }
    
    setUserId(userId) {
        this.userId = userId;
    }

    setUserEmail(userEmail) {
        this.userEmail = userEmail;
    }

    setIsSubsequent(isSubsequent) {
        this.isSubsequent = isSubsequent;
    }
}