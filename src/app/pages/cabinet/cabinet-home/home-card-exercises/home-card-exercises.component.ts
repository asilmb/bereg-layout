import { Component, OnInit } from '@angular/core';
import {Urls} from '../../../../enums/urls.enum';
import {CardsExercise, EXERCISE} from '../../../../models/cards.model';
import {ExercisesService} from '../../../../services/exercises.service';
import {Exercise} from '../../../../models/exercises.model';

@Component({
  selector: 'app-home-card-exercises',
  templateUrl: './home-card-exercises.component.html',
  styleUrls: ['./home-card-exercises.component.scss']
})
export class HomeCardExercisesComponent implements OnInit {
  public urls = Urls;
  public done = false;
  public dailyProgress = 0;
  public exercises!: Exercise[];

  constructor(
    private exerciseService: ExercisesService
  ) { }

  ngOnInit(): void {
    this.getDaysExercises();
  }

  public setExerciseDone(): void {
    this.dailyProgress += 25;
  }

  public getDaysExercises(): void {
    this.exerciseService.getAllExercisesForDay('?day=1')
      .subscribe(response => {
        this.exercises = response;
        console.log(response);
      });
  }

}
