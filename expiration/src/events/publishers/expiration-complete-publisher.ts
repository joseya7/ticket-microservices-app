import { Subjects, Publisher, ExpirationCompleteEvent } from '@jotickets/common'

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}
