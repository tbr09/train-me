import { Observable, defer } from 'rxjs';
import { BasicUserProfileModel } from 'src/app/main/dashboard/models/userprofile.model';
import { Injectable } from '@angular/core';



export interface IUserService {
    userProfile(): Observable<BasicUserProfileModel>;
}


@Injectable()
export class UserClient implements IUserService {
 
    userProfile() : Observable<BasicUserProfileModel> {
        const returnValue = { 
            id: '1hr45hr4bfh35hrn',
            firstName: 'Will',
            lastName: 'Smith'
        };
        return defer(() => Promise.resolve(returnValue));
    }
    
}