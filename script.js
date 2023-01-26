import { Observable } from 'rxjs'

const observable = new Observable((subscriber) => {
  subscriber.next(10)
})

observable.subscribe((val) => console.log(val))
observable.subscribe((val) => console.log(val))
