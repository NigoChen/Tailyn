import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from "@angular/forms";
/**
 * ErrorValidators
 *
 * Class ex:
 * 
 * [class.text-danger]="errorValidators['w_WorkOrder'][i].length"
 * 
 * Html ex:
 * 
 * {{errorValidators['w_WorkOrder'][i]}}
 */
export let ErrorValidators: {[key: string]: any} = {};
/**
 * Reset_Validators(FormGroup, index)
 * 
 * Type FormGroup
 * 
 * Type number or null for FormArray Reomve index
 */
export const Reset_Validators = (fbGroup: FormGroup, index: any = null): void => {   
 
	Object.keys(fbGroup.controls).forEach((key: any, i: number) => {

		if(fbGroup.controls[key] instanceof FormArray)
		{			
			const fbArray: FormArray = <FormArray>fbGroup.controls[key];

			if(fbArray.controls instanceof Array)
			{				
				if(index == null && ErrorValidators[key] == undefined && fbArray.length == 1)
				{		
					ErrorValidators[key] = [''];					
				}
				else
				{			
					if(fbArray.length == 1)
					{						
						ErrorValidators[key] = [''];					
					}
					else if(fbArray.length > ErrorValidators[key].length)
					{
						for(let i=0; i<fbArray.length; i++)
						{
							ErrorValidators[key].push('');
						}
					}
					else if(index)
					{
						ErrorValidators[key].splice(index, 1);						
					}
				}
			}
		}
		else
		{
			ErrorValidators[key] = '';
		}  
	});
}
/**
 * Input (onBlur)="InputValidators(FormGroup, Controls Name, index)"
 * 
 * Type FormGroup
 * 
 * Type String FormControl Name
 * 
 * Type Number For FormArray By Index Value
 */
export const InputValidators = (fbGroup: FormGroup, key: string = '', index: number = 0): any => {
	
	if(key.length)
	{
		if(fbGroup.controls[key] instanceof FormControl)
		{			
			const errorKey: ValidationErrors = fbGroup.controls[key].errors; 
			const otherErrorKey: boolean = fbGroup.hasError('passWordMatch');

			ErrorValidators[key] = ''; 
		
			if(errorKey != null)
			{                        
				if(errorKey.required)
				{
					ErrorValidators[key] = '未輸入';
				}

				if(errorKey.pattern)
				{
					ErrorValidators[key] = '格式錯';
				}
			}
			else if(otherErrorKey && key == 'e_ConfirmPassword')
			{
				ErrorValidators[key] = '密碼不符';            
			}
			return ErrorValidators[key];
		}
		else
		{
			const fbArray: FormArray = <FormArray>fbGroup.controls[key];
				
			// if(fbArray.controls instanceof Array)
			// {				
			// 	fbArray.controls.forEach((c, i) => {

				// value
				const values: string = fbArray.controls[index].value.toString();								
				
				if(key != 'e_Date')
				{
					const replaceVal: string = values.replace(/[\,\][\!\|\~\`\(\)\#\@\%\+\=\/\'\$\%\^\&\*\{\}\:\;\"\L\<\>\?\\]/g, '');
					fbArray.controls[index].patchValue(replaceVal);
				}				

				// Error Key
				const errorKey: ValidationErrors = fbArray.controls[index].errors; 
				
				ErrorValidators[key][index] = '';
				
				if(errorKey)
				{                        
					if(errorKey.required)
					{
						ErrorValidators[key][index] = '未輸入';
					}
					else if(errorKey.pattern)
					{
						ErrorValidators[key][index] = '格式錯';
					}
					else
					{
						ErrorValidators[key][index] = '字過多';
					}
				}
				// });		
		}
	}
	// }

	return ErrorValidators[key];
}
