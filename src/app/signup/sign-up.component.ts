import { Component, Output, EventEmitter } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { MatSnackBar } from '@angular/material';
import { 
    faTimesCircle,
    faFileContract
} from '@fortawesome/free-solid-svg-icons';

// models
import { Profile } from '../models/profile';
@Component({
    selector: 'quest-sing-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent {
    profile: Profile = new Profile();
    legalAge = false;
    privacyPolicy = false;
    @Output() closeEvent = new EventEmitter<boolean>();

    faTimesCircle = faTimesCircle;
    faFileContract = faFileContract;
    constructor(
        private eService: ElectronService,
        private snackbar: MatSnackBar
    ) {}

    signUp(): void {
        if(this.legalAge) {
            if(this.privacyPolicy) {
                if(this.validations()) {
                    console.log(this.profile);
                    if(this.eService.isElectronApp) {
                        this.eService.ipcRenderer.send('sign-up', this.profile);
                    }
                }
            } else {
                this.snackbar.open('You must agree to the privacy policy & term of services', 'X');
            }
        } else {
            this.snackbar.open('You must verified that you are at least 13 years old','X');
        }
    }
    close(): void {
        this.closeEvent.emit(false);
    }
    validations(): boolean {
        let valid = this.profile.firstname && this.profile.firstname !== '' ? true : false;
        if (!valid) {
            this.snackbar.open('First name is not valid', 'X');
            return valid;
        };
        valid = this.profile.lastname && this.profile.lastname !== '' ? true : false;
        if (!valid) {
            this.snackbar.open('Last name is not valid', 'X');
            return valid;
        }
        valid = this.profile.username && this.profile.username !== '' ? true : false;
        if (!valid) {
            this.snackbar.open('Username is not valid', 'X');
            return valid;
        }
        valid = this.profile.password && this.profile.password !== '' ? true : false;
        if (!valid) this.snackbar.open('Password is not valid', 'X');
        return valid;
    }
}