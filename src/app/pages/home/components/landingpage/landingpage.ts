import { Component } from "@angular/core";
import { Carousel } from '../carousel/carousel';


@Component({
  selector: "app-landingpage",
  standalone: true,  
  imports: [Carousel],
  templateUrl: "./landingpage.html",
  styleUrls: ["./landingpage.css"],
})
export class Landingpage {}
