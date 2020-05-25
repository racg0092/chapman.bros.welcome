import { Component, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { 
  faSignInAlt,
  faMinus,
  faTimes ,
  faQuestion
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  faSignInAlt = faSignInAlt;
  faMinus = faMinus;
  faTimes = faTimes;
  faQuestion = faQuestion;
  showSignUp = false;
  username: string;
  password: string;
  staySignedIn: boolean;
  loginResult: string;
  loading = false;
  constructor(
    private eService: ElectronService,
    private ngZone: NgZone 
  ) {}

  minimize(): void {
    if(this.eService.isElectronApp) {
      this.eService.ipcRenderer.send('minimize-welcome-window');
    }
  }

  close(): void {
    if(this.eService.isElectronApp) {
      this.eService.ipcRenderer.send('close-welcome-window');
    }
  }

  signIn(): void {
    if (this.username !== undefined && this.username !== '' && this.password !== undefined && this.password !== '') {
      this.loading = true;
      if(this.eService.isElectronApp) {
        this.eService.ipcRenderer.send('sign-in',{username:this.username, password:this.password, staySignedIn:this.staySignedIn});
        this.eService.ipcRenderer.on('login-result', (event, message) => {
          this.ngZone.run(_=> {
            this.loginResult = message;
            this.loading = false;
          })
        })
      }
    }
  }
  submit(event): void {
    if (event.keyCode === 13) {
      this.signIn();
    }
  }

  signUp(): void {
    this.showSignUp = !this.showSignUp;
  }
}
