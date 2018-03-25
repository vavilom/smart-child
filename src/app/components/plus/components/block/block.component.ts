import { Component, OnInit, Input } from '@angular/core';
import { Helper } from '../../../../services/helper.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  @Input() value: number;

  constructor(public helper: Helper) { }

  ngOnInit() {
  }

}
