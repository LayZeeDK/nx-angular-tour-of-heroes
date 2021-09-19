import { Injectable } from '@angular/core';
import { Crisis } from '@tour-of-heroes/crisis-center/domain';
import { MessageService } from '@tour-of-heroes/shared/data-access-messages';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(
    CRISES
  );

  constructor(private messageService: MessageService) {}

  getCrises() {
    return this.crises$;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map((crises) => crises.find((crisis) => crisis.id === +id)!)
    );
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      const crisis = { id: CrisisService.nextCrisisId++, name };
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}
