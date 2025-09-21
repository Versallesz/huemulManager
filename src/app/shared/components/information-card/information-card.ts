import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-information-card',
  imports: [FontAwesomeModule],
  templateUrl: './information-card.html',
  styleUrl: './information-card.css'
})
export class InformationCard {
  title = input<string>('');
  data = input<string>('');
  image = input<IconDefinition>(faSpinner);
}
