import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClubEvents } from "./club-events";

describe("ClubEvents", () => {
  let component: ClubEvents;
  let fixture: ComponentFixture<ClubEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
