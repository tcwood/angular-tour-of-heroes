// import { HeroDetailComponent } from './app.component';
// // Will need hero service, route, location

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// describe('HeroDetailComponent', function () {
//   let de: DebugElement;
//   let comp: HeroDetailComponent;
//   let fixture: ComponentFixture<HeroDetailComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HeroDetailComponent ],
//       schemas: [ CUSTOM_ELEMENTS_SCHEMA ]   // This is needed b/c  of <router-outler> 
//     })
//     .compileComponents()
//     .catch((err) => {
//       console.log('error in beforeEach in app.component.spec', err);
//     })
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeroDetailComponent);
//     comp = fixture.componentInstance;
//     de = fixture.debugElement.query(By.css('h1'));
//   });

//   it('should create component', () => expect(comp).toBeDefined() );

//   it('should have expected <h1> text', () => {
//     fixture.detectChanges();
//     const h1 = de.nativeElement;
//     expect(h1.innerText).toMatch(/heroes/i,
//       '<h1> should say something about "Heroes"');
//   });
// });
