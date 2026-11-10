import { Routes } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DeferrableViewsComponent } from './deferrable-views/deferrable-views.component';
import { SignalsComponent } from './signals/signals.component';

export const routes: Routes = [
  { path: "control-flow", component: ControlFlowComponent },
  { path: "deferrable-views", component: DeferrableViewsComponent },
  { path: "signals", component: SignalsComponent },
];
