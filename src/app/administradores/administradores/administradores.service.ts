import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AdministradoresService {
  // Subjects privados (só o service pode alterar)
  private descontoBloco1Subject = new BehaviorSubject<string>('');
  private descontoBloco2Subject = new BehaviorSubject<string>('');
  private descontoBloco3Subject = new BehaviorSubject<string>('');

  // Observables públicos (outros componentes só podem "ouvir")
  descontoBloco1$: Observable<string> = this.descontoBloco1Subject.asObservable();
  descontoBloco2$: Observable<string> = this.descontoBloco2Subject.asObservable();
  descontoBloco3$: Observable<string> = this.descontoBloco3Subject.asObservable();



  setDesconto2(valor: string) {
    this.descontoBloco2Subject.next(valor);
  }

  setDesconto3(valor: string) {
    this.descontoBloco3Subject.next(valor);
  }

  // Métodos para atualizar os valores
  setDesconto1(valor: string) {
    this.descontoBloco1Subject.next(valor);
    console.log('testando service',valor);
  }
}
