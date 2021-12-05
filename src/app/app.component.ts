import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('musicPlayer') musicPlayer!: Player;
  @ViewChild('clipPlayer') clipPlayer!: Player;


  async onPageClick() {
    await this.musicPlayer.play();
    await this.clipPlayer.play();


    // if (!this.musicPlayer.playing) {
    //   this.musicPlayer.play();
    // }

    // var snd1  = new Audio();
    // var src1  = document.createElement("source");
    // src1.type = "audio/mpeg";
    // src1.src  = "/assets/music.mp3";
    // snd1.appendChild(src1);

    // var snd2  = new Audio();
    // var src2  = document.createElement("source");
    // src2.type = "audio/wav";
    // src2.src  = "/assets/1.wav";
    // snd2.appendChild(src2);

    // snd1.play(); 
    // snd2.play(); // Now both will play at the same time

  }

  onSnowFlakeClick() {
    // ToDo: Play one of the voice clips here. 
    // this.musicPlayer.pause();
    // this.clipPlayer.play();
    // this.musicPlayer.play();
  }

}
