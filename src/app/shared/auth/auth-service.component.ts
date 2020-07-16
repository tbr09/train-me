import { SharedModule } from './../shared.module';
import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/constants/constants';

@Injectable({ providedIn: SharedModule })
export class AuthService {
  private _userManager: UserManager;
  private _user: User;
  private _loginChangedSubject = new Subject<boolean>();

  loginChanged = this._loginChangedSubject.asObservable();

  constructor() {
    const stsSettings = {
      authority: Constants.auth.stsAuthority,
      client_id: Constants.auth.clientId,
      redirect_uri: `${Constants.auth.clientRoot}signin-callback`,
      scope: 'openid profile projects-api',
      //   response_type: 'id_token token', // implicit flow
      response_type: 'code',
      // post_logout_redirect_url: `${Constants.auth.clientRoot}signout-callback`, // used only with local sts
      metadata: {
        issuer: `${Constants.auth.stsAuthority}`,
        authorization_endpoint: `${Constants.auth.stsAuthority}authorize?audience=trainings-api`,
        jwks_uri: `${Constants.auth.stsAuthority}.well-known/jwks.json`,
        token_endpoint: `${Constants.auth.stsAuthority}oauth/token`,
        userinfo_endpoint: `${Constants.auth.stsAuthority}userinfo`,
        end_session_endpoint: `${
          Constants.auth.stsAuthority
        }v2/logout?client_id=${Constants.auth.clientId}&returnTo=${encodeURI(
          Constants.auth.clientRoot
        )}signout-callback`,
      },
    };

    this._userManager = new UserManager(stsSettings);
  }

  login() {
    return this._userManager.signinRedirect();
  }

  isLoggedIn(): Promise<boolean> {
    return this._userManager.getUser().then((user) => {
      const currentUser = !!user && !user.expired;
      if (this._user !== user) {
        this._loginChangedSubject.next(currentUser);
      }
      this._user = user;
      return currentUser;
    });
  }

  completeLogin() {
    return this._userManager.signinRedirectCallback().then((user) => {
      this._user = user;
      this._loginChangedSubject.next(!!user && !user.expired);
      return user;
    });
  }

  logout() {
    this._userManager.signoutRedirect();
  }

  completeLogout() {
    this._user = null;
    return this._userManager.signoutRedirectCallback();
  }

  getAccessToken() {
    return this._userManager.getUser().then((user) => {
      if (!!user && !user.expired) {
        return user.access_token;
      } else {
        return null;
      }
    });
  }
}
