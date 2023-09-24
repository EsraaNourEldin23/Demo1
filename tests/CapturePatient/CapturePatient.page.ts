import {Page, Locator} from '@playwright/test'
export class CapturePatient{

    readonly page:Page;
    readonly CapturePatientField:Locator;
    readonly AddPatientName:Locator;
    readonly ChoosePatientName:Locator;
    
}