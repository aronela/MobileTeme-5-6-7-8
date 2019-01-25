import { Component } from '@angular/core';

import { Tema5Page } from '../tema5/tema5';
import { Tema6Page } from '../tema6/tema6';
import { Tema7Page } from '../tema7/tema7';
import { Tema8Page } from '../tema8/tema8';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Tema5Page;
  tab2Root = Tema6Page;
  tab3Root = Tema7Page;
  tab4Root = Tema8Page;

  constructor() {

  }
}
