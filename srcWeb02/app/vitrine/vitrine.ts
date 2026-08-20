import { Component } from '@angular/core';
import { Produto } from '../.model/produto';

@Component({
  selector: 'app-vitrine',
  imports: [],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  obj:Produto = new Produto();
}
