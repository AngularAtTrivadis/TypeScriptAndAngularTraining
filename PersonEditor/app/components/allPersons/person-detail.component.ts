import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from './../../model/person';
import { PersonService } from './../../services/person.service';

@Component({
  moduleId: module.id,
  templateUrl: 'person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

  @Input()
  person: Person;

  constructor(
    private _personService: PersonService,
    private _route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        let personId = +params['personId'];
        this.getPerson(personId);
      });
  }

  getPerson(id: number) {
    this._personService.getPersonById(id).subscribe(res => this.person = res);
  }

  onSave() {
    this._personService.savePerson(this.person).subscribe(res =>
      this.onBack()
    );
  }

  onBack() {
    this._router.navigate(['/persons'])
  }
}