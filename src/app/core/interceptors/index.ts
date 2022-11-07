import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "../authentication/token-interceptor.service";
import { BearerTokenInterceptor } from "./bearer-token.interceptor";

export const interceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
]
