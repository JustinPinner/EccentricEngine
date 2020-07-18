interface ColourComponent {
  value: number;
}

class Rgba {
  red: ColourComponent;
  green: ColourComponent;
  blue: ColourComponent;
  alpha: ColourComponent;

  private setComponent(component, val: number, min: number = 0, max: number = 255){
    switch(true) {
      case (val < min): 
        component.value = min;
        break;
      case (val > max):
        component.value = max;
        break;
      default:
        component.value = val;
        break;
    }
  }

  constructor(red: number, green: number, blue: number, alpha: number) {
    this.setComponent(this.red, red);
    this.setComponent(this.green, green);
    this.setComponent(this.blue, blue);
    this.setComponent(this.alpha, alpha, 0.0, 1.0);
  }
}

export {
  Rgba
};
