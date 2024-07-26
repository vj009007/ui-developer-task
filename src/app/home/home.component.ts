import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isMigrationActive = false;
  migrationProgress = 0;
  migrationComplete = false;
  isMigrationStarted = false;
  intervalId: any;

  startMigration() {
    if (!this.isMigrationStarted) {
      this.migrationProgress = 0;
      this.migrationComplete = false;
      this.isMigrationStarted = true;
      this.isMigrationActive = true;
      this.runMigration();
    }
  }

  toggleMigration() {
    if (this.isMigrationActive) {
      clearInterval(this.intervalId);
      this.isMigrationActive = false;
    } else {
      this.isMigrationActive = true;
      this.runMigration();
    }
  }

  runMigration() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      if (this.migrationProgress < 100) {
        this.migrationProgress += 5; 
      } else {
        clearInterval(this.intervalId);
        this.migrationComplete = true;
        this.isMigrationActive = false; 
        setTimeout(() => {
          this.migrationComplete = false;
          this.migrationProgress = 0;
          this.isMigrationStarted = false;
        }, 3000); 
      }
    }, 1000); 
  }
  closeSuccessPopup() {
    this.migrationComplete = false;
  }
}
