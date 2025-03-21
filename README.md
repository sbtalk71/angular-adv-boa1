# angular-adv-boa1

Pre Test:  https://forms.office.com/r/xExkiwSDk5


ng add @angular-architects/module-federation --project shell --type host --port 4200
ng add @angular-architects/module-federation --project products --type remote --port 4201
ng add @angular-architects/module-federation --project orders --type remote --port 4202


 this.name = toSignal(this.userForm.get('userName')!.valueChanges, { initialValue: '' });

    this.usermail = toSignal(this.userForm.get('email')!.valueChanges, { initialValue: '' });
    this.userAge = toSignal(this.userForm.get('age')!.valueChanges, { initialValue: '' })
    this.info=computed(()=>`${this.name()} ${this.usermail()} ${this.userAge()}`)
	
	
 

Post Assessment(Day-5): https://forms.office.com/r/0XnZMp2Eep

 
Feedback Link (Day-5) : https://forms.office.com/r/yxvMeMfNjB

 