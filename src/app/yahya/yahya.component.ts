import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-yahya',
  templateUrl: './yahya.component.html',
  styleUrls: ['./yahya.component.scss'],
})
export class YahyaComponent implements OnInit, OnChanges {
  @Input() myname: any;
  @Output() voted = new EventEmitter<boolean | null>();

  ngOnInit() {
    console.log(this.myname);
  }

  ngOnChanges() {
    this.vote(null);
  }

  vote(agreed: boolean | null) {
    this.voted.emit(agreed);
  }
}
