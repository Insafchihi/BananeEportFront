import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDestinatairesComponent } from './list-destinataires.component';

describe('ListDestinatairesComponent', () => {
  let component: ListDestinatairesComponent;
  let fixture: ComponentFixture<ListDestinatairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDestinatairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDestinatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
