import { Component, inject, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from "../../../services/auth.service";
import { User } from "@supabase/supabase-js";


@Component({
	selector: "app-header",
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		RouterLink,
		MatToolbarModule,
		MatFormFieldModule,
    MatMenuModule,
		MatInputModule,
		MatButtonModule,
    MatIconModule,
	],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  @Input() sidenavRef: any;

	selectedItem: any;
  user: User | null = null;
  userRole: string | null = null;
  private authService = inject(AuthService);

  constructor() {
    this.authService.currentUser.subscribe((user) => {
      if (user) {
        this.user = user;
        console.log("User:", this.user);
      } else {
        this.user = null;
      }
    });
    this.authService.userRole.subscribe((role) => {
      if (role) {
        this.userRole = role;
      }
    });
  }

  onLogout() {
    this.authService.signOut();
  }
}
