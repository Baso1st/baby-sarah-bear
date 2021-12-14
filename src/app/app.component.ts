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


  imageSources1 = [
    '(1).png',
    '(2).png',
    '(33).png',
    '(3).png',
    '(4).png',
    '(5).png',
    '(6).png',
    'poem2.png',
    '(34).png',
    '(8).png',
    '(9).png',
    '(10).png',
    '(11).png',
    '(18).png'
  ];
  imageSources2 = [
    '(15).png',
    'poem1.png',
    '(19).png',
    '(20).png',
    '(21).png',
    '(13).png',
    '(22).png',
    '(25).png',
    '(26).png',
    '(39).png',
    '(38).png',
    '(37).png'
  ];
  imageSources3 = [
    '(23).png',
    '(27).png',
    '(28).png',
    '(29).png',
    '(30).png',
    '(31).png',
    '(32).png',
    '(7).png',
    '(35).png',
    '(36).png',
    '(12).png'
  ]

  onPageClick() {
    // return;

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
