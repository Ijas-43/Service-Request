import { Component, OnInit  ,ElementRef, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  HttpClient, HttpHeaders, HttpParams,
} from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signup: FormGroup | any;
  role: any;
  cities: any;
  countries: any;
  states: any;
  hide = true;
  showOtp: boolean = false;
  displayme: boolean = false;
  showSignupForm: boolean = false;
  @ViewChild('file')file!:ElementRef;

  public settings = {
    length: 6,
    numbersOnly: true,
    timer: 60,
  };
  encripted_otp: any;
  user_otp: any;
  constructor( private router: Router, private http: HttpClient) { }
  // private api: ApiserviceService, private toastr: ToastrService,
  public onInputChange(e: any) {
    if (e.length == this.settings.length) {
      // e will emit values entered as otp and,
      this.user_otp = e;
    } else if (e == -1) {
      // if e == -1, timer has stopped
    } else if (e == -2) {
      // e == -2, button click handle
    }
  }

  ngOnInit(): void {
    // this.getRole();
    // this.country()
    this.signup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address1: new FormControl('', Validators.required),
      address2: new FormControl('', Validators.required),
    //  address3: new FormControl('', Validators.required),
      phone_otp: new FormControl('', Validators.required),
      phone2: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      countryid: new FormControl('', Validators.required),
      stateid: new FormControl('', Validators.required),
      cityid: new FormControl('', Validators.required),
    });
    
    const prevBtns :any= document.querySelectorAll(".btn-prev");
    const nextBtns :any= document.querySelectorAll(".btn-next");
    const progress :any= document.getElementById("progress");
    const formSteps :any= document.querySelectorAll(".form-step");
    const progressSteps:any = document.querySelectorAll(".progress-step");
    
    let formStepsNum = 0;
    
    nextBtns.forEach((btn:any) => {
      btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
      });
    });
    
    prevBtns.forEach((btn:any) => {
      btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
      });
    });
    
    function updateFormSteps() {
      formSteps.forEach((formStep:any) => {
        formStep.classList.contains("form-step-active") &&
          formStep.classList.remove("form-step-active");
      });
    
      formSteps[formStepsNum].classList.add("form-step-active");
    }
    
    function updateProgressbar() {
      progressSteps.forEach((progressStep:any, idx:any) => {
        if (idx < formStepsNum + 1) {
          progressStep.classList.add("progress-step-active");
        } else {
          progressStep.classList.remove("progress-step-active");
        }
      });
    
      const progressActive = document.querySelectorAll(".progress-step-active");
    
      progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
    }



    var myInput:any = document.getElementById("password");
var letter:any = document.getElementById("letter");
var capital:any = document.getElementById("capital");
var number:any = document.getElementById("number");
var length:any = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
 const mess:any= document.getElementById("message");
 mess.style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  const mess1:any=document.getElementById("message");
  mess1.style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
  }
  openPassword() {
    var x :any= document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  // Register() {
  //   console.log(this.signup.value)
  //   // const formData = new FormData();
  //   // const data=formData.getAll(this.signup.value);
  //   // console.log('test',data)
  //   this.api.Register(this.signup.value).subscribe((result: any) => {
  //     if (result.data.success = "1") {
  //       this.toastr.success('Account Created Succesfully')
  //       this.router.navigate(['/authenticate/login'])
  //     }
  //     else {
  //       this.toastr.error('Failed to create account')
  //     }
  //   })
  // }

  // country() {
  //   this.api.getCountry().subscribe((res: any) => {
  //     this.countries = res.data;
  //   })
  // }

  // getcity() {
  //   const data = { stateid: this.signup.value.stateid }
  //   this.api.getCityById(data).subscribe((res: any) => {
  //     this.cities = res.data;
  //   })
  // }

  // getstate() {
  //   const data = { countryid: this.signup.value.countryid }
  //   this.api.getStateById(data).subscribe((res: any) => {
  //     this.states = res.data;
  //   })
  // }

  validateOtp() {
    if (this.user_otp !== null && this.user_otp !== '')
      this.http
        .get(
          `https://2factor.in/API/V1/f05654b5-f2fa-11eb-8089-0200cd936042/SMS/VERIFY/${this.encripted_otp}/${this.user_otp}`
        )
        .subscribe((res) => {
          this.showSignupForm = true;
          this.showOtp = false;
        });
  }

  onSubmit(): void {
    this.http.get(
      `https://2factor.in/API/V1/f05654b5-f2fa-11eb-8089-0200cd936042/SMS/${this.signup.value.phone_otp}/AUTOGEN`
    )
      .subscribe((res: any) => {
        if (res.status === 200)
          this.showOtp = true;
        this.encripted_otp = res.Details;
      });
  }
}
