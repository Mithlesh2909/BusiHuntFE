import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  templateUrl: "./footer.html",
  styleUrls: ["./footer.css"],
})
export class Footer {
  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    // If already on /home, just scroll
    if (this.router.url.startsWith('/home')) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to /home first, then scroll
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      });
    }
  }
}
