import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
=======

>>>>>>> e09160f1b364ce322a40c42d18e1367f6a455936
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
<<<<<<< HEAD
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
=======
        RouterTestingModule
>>>>>>> e09160f1b364ce322a40c42d18e1367f6a455936
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
 
  
=======
  it(`should have as title 'MR-BookingSystem'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MR-BookingSystem');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to MR-BookingSystem!');
  });
>>>>>>> e09160f1b364ce322a40c42d18e1367f6a455936
});
