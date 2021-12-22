import { Component, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMainAudioPlaying = false;
  clipNumber = 1;
  maximumClipCount = 6;
  shouldShowToTheTopButton = false;

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
    '(18).png',
    '(40).png',
    '(41).png',
    '(42).png'
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
    '(37).png',
    '(44).png',
    '(45).png',
    '(46).png'
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
    '(12).png',
    '(47).png',
    '(43).png',
    '(48).png',
    'poem3.png'
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


  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
      this.shouldShowToTheTopButton = true;
    } else {
      this.shouldShowToTheTopButton = false;
    }
  }

  onToTheTopClicked() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
