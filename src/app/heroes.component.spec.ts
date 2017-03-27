// import { RouterTestingModule } from '@angular/router/testing';
// import { BaseRequestOptions, Http } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
// import { TestBed, ComponentFixture, async } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { HeroService } from './hero.service';
// import { HeroesComponent } from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';
// import { FormsModule } from '@angular/forms';
// import { Hero } from './hero';

// let MockHero: Hero = <Hero>{id: 1, name: 'Superman'};
// let MockHero2: Hero = <Hero>{id: 2, name: 'IronMan'};
// let MockHeroesArray: Array<Hero> = [ MockHero, MockHero2 ];
// let MockEvent: any = {
//   stopPropagation: function () {
//     return;
//   }
// };

// describe('Component: HeroSearch', () => {
//   let fixture: ComponentFixture<HeroesComponent>;
//   let heroService: HeroService;
//   let heroSearchComponent: HeroesComponent;
//   let router: Router;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         HeroService,
//         MockBackend,
//         BaseRequestOptions,
//         {
//           provide: Router,
//           useClass: class {
//             navigate = jasmine.createSpy('navigate');
//           }
//         },
//         {
//           provide: Http,
//           useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
//           deps: [ MockBackend, BaseRequestOptions ]
//         }
//       ],
//       declarations: [
//         HeroesComponent,
//         HeroDetailComponent
//       ],
//       imports: [
//         FormsModule,
//         RouterTestingModule
//       ]
//     })
//     .compileComponents()
//     .then(() => {
//       fixture = TestBed.createComponent(HeroesComponent);
//       heroSearchComponent = fixture.componentInstance;
//       heroService = TestBed.get(HeroService);
//       router = TestBed.get(Router);
//     })
//     .catch(err => console.log('err', err))
//   }));

//   describe('Functional: ', () => {
//     it('should call getHeroes and set heroes to the returned object', (done) => {
//       spyOn(heroService, 'getHeroes').and.callFake(() => {
//         return Promise.resolve(MockHeroesArray);
//       });

//       heroSearchComponent.getHeroes().then(() => {
//         expect(heroService.getHeroes).toHaveBeenCalled();
//         expect(heroService.getHeroes).toHaveBeenCalledTimes(1);
//         expect(heroSearchComponent.heroes).toBe(MockHeroesArray);
//         done();
//       });
//     });
//   });
// });







