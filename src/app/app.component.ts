import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

    @ViewChild('player') player!: Player;

    ngOnInit() {
    }

    async ngOnChanges(changes: SimpleChanges): Promise<void> {
    }

    async onPageClick() {
        var canPlay = await this.player.canAutoplay();
        if (canPlay) {
            if (this.player.playing) {
                this.player.pause();
            } else {
                this.player.play();
            }
        }
    }

}
