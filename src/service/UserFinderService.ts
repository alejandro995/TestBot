import * as userdata from '../user.json';

export class UserFinderService {
    findUser(name: string) {
        let found = false; 
        (<any>userdata).forEach((element: any) => {
            if (element.name === name) {
             found = true;
            }else{
             found = false;
            }
        });
        return found;
    }
}

