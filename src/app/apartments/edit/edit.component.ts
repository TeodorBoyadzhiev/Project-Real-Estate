import { Component } from '@angular/core';
import { ContentService } from 'src/app/core/services/content.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {


  get apartment() {
    return this.contentService.apartment;
}

  constructor(
    private contentService:ContentService
  ) { }

  

}
