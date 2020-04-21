import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})


export class DropdownListComponent implements OnInit {

  diseases = [];

  selectedDiseaseId: number;
  public potwierdzonko = '';
  public placeholder = '';

  constructor() {
    this.create10kDiseases();
    this.placeholder = 'Wybierz chorobę';
  }

  private create10kDiseases() {

    this.diseases = Array.from({length: 10000}, (value, key) => key)
    .map(val => ({
      id: val,
      name: `disease ${val}`
    }));
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Tu pewnie bedzie jakas inna metoda, ale abrams kc, jakos sie udalo');
    this.potwierdzonko = 'Jakos sie udalo. Buziaczek. Id:' + this.selectedDiseaseId.toString();

  }
  disapearPlaceholder() {
    this.placeholder = '';
    this.selectedDiseaseId = null;
  }

}
