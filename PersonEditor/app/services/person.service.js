"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import {PERSONS} from './../mock/persons-data';
var http_1 = require('@angular/http');
var PersonService = (function () {
    function PersonService(_http) {
        var _this = this;
        this._http = _http;
        // this.persons = PERSONS;
        this._http.get('http://localhost:8180/api/persons')
            .subscribe(function (data) { return _this.persons = data.json(); });
    }
    PersonService.prototype.getPersons = function () {
        return this.persons;
        // return this._http.get('http://localhost:8180/api/persons')
        //     .map(res => <Person[]>res.json());
        //     var promise = Promise.resolve(this.persons);
        //    let observable = Observable.fromPromise(promise);
        //    return observable;
    };
    PersonService.prototype.getPersonsWithGithubAccount = function () {
        return this.persons.filter(function (f) { return f.githubaccount != null && f.githubaccount != ""; });
        // var promise = Promise.resolve(this.persons);
        // let observable = Observable.fromPromise(promise);
        // return observable
        //     .map(f => f.filter(f => f.githubaccount != null && f.githubaccount != ""));
    };
    PersonService.prototype.getPersonById = function (personId) {
        // return this._http.get('persons.json')
        // .map(res=> <Person[]> res.json())
        // .map(persons => persons.filter(f=>f.id == personId)[0]);
        // var promise = Promise.resolve(this.persons);
        // let observable = Observable.fromPromise(promise);
        return this.persons.filter(function (f) { return f.id == personId; })[0];
        // .map(persons => {
        //     var person = persons.filter(f => f.id == personId)[0]
        //     return new Person(person.id, person.firstname, person.lastname, person.githubaccount);
        // });;
    };
    PersonService.prototype.savePerson = function (person) {
        var dbPerson = this.persons.filter(function (f) { return f.id == person.id; })[0];
        dbPerson.firstname = person.firstname;
        dbPerson.lastname = person.lastname;
        dbPerson.githubaccount = person.githubaccount;
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map