import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  @ViewChild('musicPlayer') musicPlayer!: Player;
  @ViewChild('clipPlayer') clipPlayer!: Player;

  ngOnInit() {
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
  }

  async onPageClick() {
    if (this.musicPlayer.playing) {
      this.musicPlayer.pause();
    } else {
      this.musicPlayer.play();
    }
  }

  onSnowFlakeClick() {
    // ToDo: Play one of the voice clips here. 
    // this.clipPlayer.play()
  }

}
