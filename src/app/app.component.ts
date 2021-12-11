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
    '1.jpg', '2.jpg', '3.jpg', '4.jpg',
    '5.jpg', '6.jpg', '7.jpg',
    '8.jpg', '9.jpg', '10.jpg', '11.jpg',
    '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'
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
    let chunkSize = 3;
    for(var i = 0; i < this.imageSources.length; i += chunkSize) {
        tmp.push(this.imageSources.slice(i, i + chunkSize));
    }
    return tmp;
  }

}
