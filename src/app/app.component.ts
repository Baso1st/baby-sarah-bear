import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMainAudioPlaying = false;
  clipNumber = 1;
  maximumClipCount = 6;

  onPageClick() {
    if (this.isMainAudioPlaying) {
      return
    }

    this.isMainAudioPlaying = true;
    let mainAudio = new Audio();
    mainAudio.src = "/assets/audio/JustBecause.mp3";
    mainAudio.load();
    mainAudio.play();
    mainAudio.loop = true;
  }

  onSnowFlakeClick() {
    let audio = new Audio();
    audio.src = `/assets/audio/clip (${this.clipNumber}).wav`;
    audio.load();
    audio.play();
    this.clipNumber++;
    if (this.clipNumber > this.maximumClipCount) {
      this.clipNumber = 1;
    }
  }

}
