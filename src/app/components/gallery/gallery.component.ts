import { Component, signal } from '@angular/core';
import { ImgItem } from '../../models/img-model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

public route="../../../assets/img/";

  imgItems=signal<ImgItem[]>([
    {
      name:'gal-1.jpeg',
      alt: 'Gallery 1'
    },
    {
      name:'gal-2.jpeg',
      alt: 'Gallery 2'
    },
    {
      name:'gal-3.jpeg',
      alt: 'Gallery 3'
    },
    {
      name:'gal-4.jpeg',
      alt: 'Gallery 4'
    },
    {
      name:'gal-5.jpeg',
      alt: 'Gallery 5'
    },
    {
      name:'gal-6.jpeg',
      alt: 'Gallery 6'
    },
    {
      name:'gal-7.jpeg',
      alt: 'Gallery 7'
    },
    {
      name:'gal-8.jpeg',
      alt: 'Gallery 8'
    },
    {
      name:'gal-9.jpeg',
      alt: 'Gallery 9'
    },
    {
      name:'gal-10.jpeg',
      alt: 'Gallery 10'
    },
    {
      name:'gal-11.jpeg',
      alt: 'Gallery 11'
    },
    {
      name:'gal-12.jpeg',
      alt: 'Gallery 12'
    },
    {
      name:'gal-13.jpeg',
      alt: 'Gallery 13'
    },
    {
      name:'gal-14.jpeg',
      alt: 'Gallery 14'
    }
  ])


}
