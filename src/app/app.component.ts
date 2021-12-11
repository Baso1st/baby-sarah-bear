import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMainAudioPlaying = false;
  clipNumber = 1;
  maximumClipCount = 6;

  
  imageSources = [
    '(1).png',
    '(2).png',
    '(3).png',
    '(4).png',
    '(5).png',
    '(6).png',
    '(7).png',
    '(8).png',
    '(9).png',
    '(10).png',
    '(11).png',
    '(12).png',
    '(13).png',
    '(14).png',
    '(15).png',
    '(16).png',
    '(17).png',
    '(18).png',
    '(19).png',
    '(20).png',
    '(21).png',
    '(22).png',
    '(23).png',
    '(24).png',
    '(25).png',
    '(26).png',
    '(27).png',
    '(28).png',
    '(29).png',
    '(30).png',
    '(31).png',
    '(32).png',
    '(33).png',
    '(34).png',
    '(35).png',
    '(36).png',
    '(37).png',
    '(38).png',
    '(39).png'
  ]

  onPageClick() {
    return;

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

  get2dImageSourcesArray() {
    let tmp = [];
    let chunkSize = 13;
    for(var i = 0; i < this.imageSources.length; i += chunkSize) {
        tmp.push(this.imageSources.slice(i, i + chunkSize));
    }
    return tmp;
  }

}
