import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retro-barcode',
  templateUrl: './retro-barcode.component.html',
  styleUrls: ['./retro-barcode.component.css']
})
export class RetroBarcodeComponent implements OnInit {

  title = 'Retro Barcode Generator';

  colors = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','BlachedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGrey','DarkKhaki','DarkMagenta','DarkOrange','DarkOrchid'];

  bars = [];
  
  constructor() { }

  ngOnInit() {
    for(let i = 0; i <= 9; i++){
      this.bars[i] = this.colors[Math.floor(Math.random() * this.colors.length-1) + 1];
    }
  }

}

