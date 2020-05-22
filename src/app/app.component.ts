import { Component } from '@angular/core';
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
  staySignedIn: boolean
  constructor(
    private eService: ElectronService
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
      if(this.eService.isElectronApp) {
        this.eService.ipcRenderer.send('sign-in',{username:this.username, password:this.password, staySignedIn:this.staySignedIn});
      }
    }
  }

  signUp(): void {
    this.showSignUp = !this.showSignUp;
  }
}
