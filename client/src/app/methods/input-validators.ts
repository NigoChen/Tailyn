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

	// console.log(Object.keys(ErrorValidators).length);
	// console.log(Object.keys(fbGroup.value).length);
	
	Object.keys(fbGroup.controls).forEach((key: any, num: number) => {		
		// FormArray
		if(fbGroup.controls[key] instanceof FormArray)
		{			
			const fbArray: FormArray = <FormArray>fbGroup.controls[key];
			
			if(ErrorValidators[key] === undefined)
			{
				ErrorValidators[key] = [];

				for(let i=0; i<fbArray.length; i++)
				{						
					ErrorValidators[key].push('');
				}
			}
			else if(fbArray.length > ErrorValidators[key].length)
			{			
				for(let i=ErrorValidators[key].length; i<fbArray.length; i++)
				{						
					ErrorValidators[key].push('');
				}				
			}
			else if(index && (fbArray.length < ErrorValidators[key].length))
			{
				ErrorValidators[key].splice(index, 1);
			}
		}
		else
		{
			ErrorValidators[key] = '';
		}  
	});

	// Delete Others Key When router Active
	// if(Object.keys(ErrorValidators).length != Object.keys(fbGroup.value).length)
	// {			
	// 	for (const key in ErrorValidators)
	// 	{
	// 		if(fbGroup.value[key] === undefined)
	// 		{

	// 			console.log(key);
				
	// 			// delete ErrorValidators[key];
	// 		}			
	// 	}
	// }


	// console.log(fbGroup.value);
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
export const InputValidators = (fbGroup: FormGroup, key: string = '') => {

	if(key.length && fbGroup.controls[key].touched)
	{		
		error_Check(fbGroup, key);
	}
	else
	{
		Object.keys(fbGroup.value).forEach((key, i) => {
			error_Check(fbGroup, key);
		});
	}
}

const error_Check = (fbGroup: FormGroup, key: string) => {	
	if(fbGroup.controls[key] instanceof FormControl)
	{					
		const errorKey: ValidationErrors = fbGroup.controls[key].errors; 
		const otherErrorKey: boolean = fbGroup.hasError('passWordMatch');

		ErrorValidators[key] = '';

		if(errorKey)
		{        
			if(errorKey.required)
			{
				ErrorValidators[key] = '未輸入';
			}
			else if(errorKey.pattern)
			{
				ErrorValidators[key] = '格式錯';
			}
			else
			{
				ErrorValidators[key] = '異常';
			}								
		}
		else if(otherErrorKey && key == 'e_ConfirmPassword')
		{
			ErrorValidators[key] = '密碼不符';            
		}
	}
	else
	{		
		// FormArray
		const fbArray: FormArray = <FormArray>fbGroup.controls[key];

		for(const i in fbArray.controls)
		{
			// FormArray
			const fbControls: AbstractControl = fbArray.controls[i];
			
			ErrorValidators[key][i] = '';

			if((key != 'e_Date') && (key != 'w_OCheckBox') && fbArray.valid)
			{
				const values: string = fbControls.value.toString();								
				const replaceVal: string = values.replace(/[\,\][\!\|\~\`\(\)\#\@\%\+\=\/\'\$\%\^\&\*\{\}\:\;\"\L\<\>\?\\]/g, '');
				fbControls.patchValue(replaceVal);
			}						

			// Error Key
			const errorKey: ValidationErrors = fbControls.errors; 				
			
			if(errorKey)
			{           		
				if(errorKey.required)
				{
					ErrorValidators[key][i] = '未輸入';
				}
				else if(errorKey.pattern)
				{
					ErrorValidators[key][i] = '格式錯';
				}
				else
				{
					ErrorValidators[key][i] = '異常';
				}
			}
		}				
	}
}
