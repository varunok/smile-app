import {Component, OnInit} from '@angular/core';

import {COLORS} from '../colors';

@Component({
  selector: 'head-app',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  private _logo_en = 'Smile Kids!';
  private _logo_ua = 'Смайлик!';
  private _logo_center = 'Дитячий садок';

  protected _generateArrayColors(len: number): Array<string> {
    const arrayColors: Array<string> = [];
    let color = 0;
    for (let i = 0; i < len; i++) {

      if (!COLORS[color]) {
        color = 0;
      }
      arrayColors.push(COLORS[color]);
      color++;
    }

    return arrayColors;
  }

  protected _createWidget(char: string, selector: string, color_name: string = ''): string {
    if (color_name) {
      color_name = 'style="color:' + color_name + '"';
    }

    return '<' + selector + ' ' + color_name + '>' + char + '</' + selector + '>';
  }

  protected _getColorLogo(name: string): string {
    const arrayWidgets: Array<string> = [];
    const arrayColors: Array<string> = this._generateArrayColors(name.length);

    for (let i = 0; i < name.length; i++) {
      arrayWidgets.push(this._createWidget(name[i], 'span', arrayColors[i]));
    }
    return arrayWidgets.join('');
  }

  public getEnLogo(): string {
    return this._createWidget(this._getColorLogo(this._logo_en), 'h1');
  }

  public getUaLogo(): string {
    return this._createWidget(this._getColorLogo(this._logo_ua), 'h1');
  }
  public getCenterLogo(): string {
    return this._createWidget(this._getColorLogo(this._logo_center), 'h1');
  }
}
