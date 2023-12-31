import { LightningElement,api } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import barcode from "@salesforce/resourceUrl/barcode"; 

export default class ProductBarCodeGenerator extends LightningElement {
    @api recordId;
    isScriptLoaded=false;
    renderedCallback() {
        Promise.all([
            loadScript(this, barcode)
        ]).then(() =>{
            console.log('script loaded');
           this.generateBarcode();
            
        }).catch(error => {
            window.console.log("Error " + error);
        });
    }
     
    renderButtons(){
        
        this.boolShowSpinner = false;
    }

    generateBarcode(){
        const canvas = this.template.querySelector('[data-id="barcode"]');  
        JsBarcode(canvas, this.recordId, {
            format: "CODE39"
          });        
          JsBarcode(".barcode").init(); 
    }  

}