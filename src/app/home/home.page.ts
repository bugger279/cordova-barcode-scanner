import { Component } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  encodedData: any;
  scannedData: {};
  barcodeScannerOption: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner) {
    this.encodedData = 'This is the data to be encoded!';
    // Options
    this.barcodeScannerOption = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  scanCode() {
    this.barcodeScanner
    .scan()
    .then(barcodeData => {
      alert(`Barcode Data ${JSON.stringify(barcodeData)}`);
      this.scannedData = barcodeData;
    })
    .catch(err => {
      console.log('Error Occurred', err);
    });
  }

  ecodedData() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.ecodedData)
    .then(encodedData => {
      console.log(encodedData);
      this.encodedData = encodedData;
    })
    .catch(err => console.log('Error occured: ' + err));
  }

}
