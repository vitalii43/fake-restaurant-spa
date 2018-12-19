import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent implements OnInit {

  @Input() imgSrc: String;
  
  loading: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  onLoad(){
    this.loading = false;
    console.log('onLoad')
  }
  getPlaceholderImg(event){
    console.log('err')
    event.target.src = "./assets/images/placeholder.jpg"
  }
}
