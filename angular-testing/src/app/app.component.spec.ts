import { TestBed } from "@angular/core/testing"
import { provideRouter } from "@angular/router"
import { AppComponent } from "./app.component"

xdescribe("App component tests",()=>{
  beforeAll(()=>{
    TestBed.configureTestingModule({
      imports:[],
      declarations:[]
    })
  })
  it('should return true for app compmonent',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const app=fixture.componentInstance;
    expect(app).toBeTruthy();
  })

  it("should return 'angular-testing'",()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const app=fixture.componentInstance;
    expect(app.title).toBe('angular-testing');
  })
  it("should return false",()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const app=fixture.componentInstance;
    expect(app.isLoggedIn).toBe(false);
  })

  it("should return true",()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const app=fixture.componentInstance;
    app.login();
    expect(app.isLoggedIn).toBe(true);
  })

  it("should return angular-testing in HTML",()=>{
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element=fixture.nativeElement as HTMLElement;
    
    expect(element.querySelector('.content h1')?.textContent).toContain('angular');
  })

  it("should return count 3",()=>{
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element=fixture.nativeElement as HTMLElement;
    
    expect(element.getElementsByTagName('h1').length).toBe(3);
  })

 
})