import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChennaiChapter } from "./chennai-chapter";

describe("ChennaiChapter", () => {
  let component: ChennaiChapter;
  let fixture: ComponentFixture<ChennaiChapter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChennaiChapter],
    }).compileComponents();

    fixture = TestBed.createComponent(ChennaiChapter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
