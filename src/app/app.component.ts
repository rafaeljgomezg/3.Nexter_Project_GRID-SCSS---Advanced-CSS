import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { RealtorsComponent } from "./components/realtors/realtors.component";
import { FeaturesComponent } from "./components/features/features.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomesComponent } from "./components/homes/homes.component";
import { StoryPicturesComponent } from "./components/story-pictures/story-pictures.component";
import { StoryContentComponent } from "./components/story-content/story-content.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule, 
      RouterOutlet, 
      SidebarComponent, 
      HeaderComponent, 
      RealtorsComponent, 
      FeaturesComponent, 
      GalleryComponent, 
      FooterComponent, 
      HomesComponent, 
      StoryPicturesComponent, 
      StoryContentComponent
    ]
})
export class AppComponent {
  title = '3.Nexter_Project';
}
