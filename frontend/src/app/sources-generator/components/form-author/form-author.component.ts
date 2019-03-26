import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-form-author',
  templateUrl: './form-author.component.html',
  styleUrls: ['./form-author.component.scss']
})
export class FormAuthorComponent implements OnInit {
  @Input('group') group;
  @Input('remove') remove: void;
  @Input('deletable') isDeletable: boolean;
  @Input('id') id: number;
  public authorForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
