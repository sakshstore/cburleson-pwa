import { Component, Element, h, Listen, Prop } from '@stencil/core';
import { isLocal } from '../../../helpers/utils';

@Component({
  tag: 'page-lifetime-modal',
})
export class PageLifetimeModal {
  @Element() el: any;

  //@State() stateData: { 
    //birthdate: '1971-06-08', 
    //sex: 'male' 
  //};

  // @State() birthday = '1971-06-08'
  // @Prop({ context: 'config' }) config: Config;

  @Prop() birthday: string;
  @Prop() gender: string;

  async componentWillLoad() {
    if (isLocal()) {
      console.log('> PageLifetimeModal.componentWillLoad');
    }
  }

  apply() {
    if (isLocal()) {
      console.log('> PageLifetimeModal.apply');
    }
    this.dismiss();
  }

  dismiss(data?: any) {
    if (isLocal()) {
      console.log('> PageLifetimeModal.dismiss > data: %o', data);
    }
    // dismiss this modal and pass back data
    // This can be captured, with the passed back data in page-lifetime.tsx under this annotation...
    // @Listen('ionModalDidDismiss', { target: 'body' })
    // But in this case, it is captured by modal.onDidDismiss() after const modal is defined in 
    // page.lifetime.tsx
    (this.el.closest('ion-modal') as any).dismiss({birthday:this.birthday,gender:this.gender});
  }

  @Listen('ionChange')
  onToggleChanged(ev: CustomEvent) {
    //if (isLocal()) {
      //console.log('- PageLifetimeModal.onToggleChanged: %o',  (ev.target as any).value);
    //}
    if( (ev.target as any).value == 'female' || (ev.target as any).value == 'male' ) {
      this.gender = (ev.target as any).value;
    } else {
      // Since the value is not male or female, it has to be the birthday...
      this.birthday = (ev.target as any).value;
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="primary">
            <ion-button onClick={() => this.dismiss()}>Cancel</ion-button>
          </ion-buttons>
          <ion-title>Personalize</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.apply()} strong>Done</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="outer-content">

        <ion-label>
        <p style={{padding:`10px`, backgroundColor:`#fff`}}>Your birthday is used to show how much life you've lived and your gender is used to show your life expectancy, which differs by gender.</p>
        </ion-label>
        
        <ion-list>
          <ion-item>
            <ion-label position="floating">Birthday</ion-label>
            <ion-datetime display-format="MMM/DD/YYYY" min="1930-01-01" max="2014-01-01" value={this.birthday}></ion-datetime>
          </ion-item>
          <ion-radio-group>
            <ion-list-header>Gender</ion-list-header>
            <ion-item>
              <ion-label>Male</ion-label>
              <ion-radio value="male" checked={this.gender=='male' ? true : false}></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Female</ion-label>
              <ion-radio value="female" checked={this.gender=='female' ? true : false}></ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-list>
      </ion-content>
    ];
  }
}
