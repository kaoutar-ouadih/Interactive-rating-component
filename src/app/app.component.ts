import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interactive-rating-component';
  selectedRating: number;
  isSubmited: boolean = false;

  onRatingClick(rating: number){
    this.selectedRating = rating;
  }

  onSubmit(){
    if(this.selectedRating){
      this.isSubmited = true;
      console.log(this.isSubmited);
    }
  }
}
