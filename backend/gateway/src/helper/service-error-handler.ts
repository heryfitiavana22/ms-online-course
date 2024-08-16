import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

export function seh(observable: Observable<any>) {
  return observable.pipe(
    catchError((error) => throwError(() => new RpcException(error.response))),
  );
}
