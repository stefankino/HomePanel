import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingOptionPage } from './setting-option.page';

describe('SettingOptionPage', () => {
  let component: SettingOptionPage;
  let fixture: ComponentFixture<SettingOptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
