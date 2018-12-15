import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-accommodation-pictures-viewer',
  templateUrl: './accommodation-pictures-viewer.component.html',
  styleUrls: ['./accommodation-pictures-viewer.component.css']
})
export class AccommodationPicturesViewerComponent implements OnInit, AfterViewInit {

	isViewInitiated = false;
	RIGHT_BUTTON_CLICK_CODE = 0;
	LEFT_BUTTON_CLICK_CODE = 1;
	pictureSelectedIndex = 0;
	PREVIEW_PICTURES = ['../../assets/previewPhotos/104033522.jpg', '../../assets/previewPhotos/115449694.jpg', '../../assets/previewPhotos/104137110.jpg', '../../assets/previewPhotos/104733470.jpg'];
  	constructor() {
		this.NUMBER_OF_PREVIEW_PICTURES = this.PREVIEW_PICTURES.length;
	}

	ngOnInit() {}
	
	ngAfterViewInit() {
      	this.isViewInitaited = true;
		document.getElementById('preview-picture').style.height = window.innerHeight - document.getElementById('bar-container').offsetHeight + "px";
    }
	
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		if(this.isViewInitaited) {
			document.getElementById('preview-picture').style.height = window.innerHeight - document.getElementById('bar-container').offsetHeight + "px";
		}
	}

	onArrowClick(buttonClickedCode) {
		this.pictureSelectedIndex = ((((buttonClickedCode === this.RIGHT_BUTTON_CLICK_CODE ? 1 : -1) +  this.pictureSelectedIndex) % this.NUMBER_OF_PREVIEW_PICTURES)+ this.NUMBER_OF_PREVIEW_PICTURES) % this.NUMBER_OF_PREVIEW_PICTURES;
		document.getElementById("preview-picture").style.backgroundImage = `url(\"${this.PREVIEW_PICTURES[this.pictureSelectedIndex]}\")`;
	}

}
