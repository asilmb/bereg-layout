import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Exercise} from '../models/exercises.model';
import {Urls} from '../enums/urls.enum';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(
    private httpService: HttpService
  ) { }

  public getAllExercisesForDay(day: string): Observable<Exercise[]> {
    return this.httpService.get(Urls.dayExercises + day)
      .map(response => {
        return this.convertDataToExercises(response);
      });
  }
  private convertDataToExercises(data: any): Exercise[] {
    return data.map((exercise: any) => this.convertDataToExercise(exercise));
  }
   private convertDataToExercise(data: any): Exercise {
    return new Exercise(
      data.id,
      data.uuid,
      data.day,
      data.title,
      data.description,
      data.type,
      data.sets,
      data.reps,
      data.kcal,
      data.completed,
      data.update,
      data.create
    );
  }
}
