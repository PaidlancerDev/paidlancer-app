import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy } from "@angular/core";
import { FooterComponent } from "../../layout/footer/footer.component";
import { RouterLink, RouterOutlet } from "@angular/router";

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";


@Component({
	selector: "app-client-dashboard",
	standalone: true,
	imports: [
    RouterLink,
    RouterOutlet,
		FooterComponent,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
	],
	templateUrl: "./client-dashboard.component.html",
	styleUrl: "./client-dashboard.component.scss",
})
export class ClientDashboardComponent implements OnDestroy {
	mobileQuery: MediaQueryList;

	navItems = [
    { name: "Projects", route: "/client" },
    { name: "New Project", route: "/client/new" },
    { name: "Matches", route: "/client/matches" },
    { name: "All Talents", route: "/talent" },
    { name: "Settings", route: "settings" },
  ];

	fillerContent = Array.from(
		{ length: 5 },
		() =>
			`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
	);

	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia("(max-width: 600px)");
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}