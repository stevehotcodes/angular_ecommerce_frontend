import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn, CanDeactivateFn, CanActivate, CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { CartService } from '../services/cart.service';


@Injectable({
	providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {
	constructor(private router: Router, private cartSvc: CartService) { }

	canActivate(): Observable<boolean> {
		return this.cartSvc.getCart().pipe(
			switchMap(result => {
				const canActivate = result.length ? true : false
				if (canActivate) {
					return of(true)
				} else {
					this.router.navigate([''])
					return of(false)
				}
			}),
			catchError(error => {
				this.router.navigate([''])
				return of(false)
			})
		);
	}
}
