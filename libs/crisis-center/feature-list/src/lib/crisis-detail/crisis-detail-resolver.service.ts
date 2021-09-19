import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { CrisisService } from '@tour-of-heroes/crisis-center/data-access';
import { Crisis } from '@tour-of-heroes/crisis-center/domain';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private cs: CrisisService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Crisis> | Observable<never> {
    const id = route.paramMap.get('id')!;

    return this.cs.getCrisis(id).pipe(
      take(1),
      mergeMap((crisis) => {
        if (crisis) {
          return of(crisis);
        } else {
          // id not found
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
