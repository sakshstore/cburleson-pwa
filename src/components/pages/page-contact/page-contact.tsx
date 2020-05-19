import { Component, Element, h, State } from '@stencil/core';
import { SITENAME } from '../../../helpers/utils';

@Component({
  tag: 'page-contact'
})
export class PageAbout {

  @Element() el: HTMLElement;

  @State() name: string;
  @State() from: string;
  @State() subject: string;
  @State() text: string;

  apiKey = "keZhYU*zg%vjEZe3!se@BXr";

  title = 'Contact Cody Burleson';

  async componentWillLoad() {
    document.title = this.title + ' | ' + SITENAME;
  }

  toggleSearch() {
    if (this.el.querySelector("#searchbar").classList.contains(`hidden`)) {
      this.el.querySelector("#searchbar").classList.remove('hidden');
    } else {
      this.el.querySelector("#searchbar").classList.add('hidden');
    }
  }

  checkAndHandleHttpErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  presentAlert(header, subheader, message) {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.subHeader = subheader;
    alert.message = message;
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    return alert.present();
  }

  handleSubmit(e) {

    var self = this;

    e.preventDefault()

    if (typeof this.subject == 'undefined' || this.subject.length == 0) {
      self.presentAlert('OOPS! Required Field Error...', 'Subject is a required field.', 'Please fill out the Subject field and submit the form again.');
    } else {

      if (typeof this.text == 'undefined' || this.text.length == 0) {
        self.presentAlert('OOPS! Required Field Error...', 'Message is a required field.', 'Please fill out the Message field and submit the form again.');
      } else {

        // *********************

        // Build the formData object
        let formData = new FormData();
        formData.append('name', this.name);
        formData.append('from', this.from);
        formData.append('subject', this.subject);
        formData.append('text', this.text);
        formData.append('key', this.apiKey);

        // See: https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
        fetch("//codyburleson.cloud/send-mail",
          {
            body: formData,
            method: "post"
          })
          .then(this.checkAndHandleHttpErrors)
          .then(function (response) {
            console.log("ok: " + response);

            // Present confirmation alert:

            const alert = document.createElement('ion-alert');
            alert.header = 'Message submitted successfully!';
            alert.subHeader = 'Thank you for contacting me! I read every message and typically respond within 48 hours if a reply is required.';
            alert.message = '';
            if (typeof self.name !== 'undefined') {
              alert.message += '<p>Name: ' + self.name + '<br/>';
            } else {
              alert.message += '<p>Name: GUEST<br/>';
            }

            if (typeof self.from !== 'undefined') {
              alert.message += 'Email or Phone: ' + self.from + '<br/>';
            } else {
              alert.message += 'Email or Phone: ANONYMOUS<br/>';
            }

            alert.message += 'Subject: ' + self.subject + '<br/>';
            if (self.text.length > 250) {
              alert.message += 'Message (truncated): ' + self.text.substring(1, 250) + '...</p>';
            } else {
              alert.message += 'Message: ' + self.text + '</p>';
            }

            // alert.buttons = ['OK'];

            alert.buttons = [
              {
                text: 'OK',
                handler: () => {
                  self.name = '';
                  self.from = '';
                  self.subject = '';
                  self.text = '';
                }
              }
            ];

            document.body.appendChild(alert);
            return alert.present();

          }).catch(function (error) {
            // console.log(error);
            self.presentAlert('Error', 'Message submission failed.', "Sorry, but the system failed to submit your message.<br/>System error message: " + error);

          });


      }


    }

  }

  handleNameChange(event) {
    this.name = event.target.value;
  }
  handleFromChange(event) {
    this.from = event.target.value;
  }
  handleSubjectChange(event) {
    this.subject = event.target.value;
  }
  handleTextChange(event) {
    this.text = event.target.value;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Contact Cody Burleson</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.toggleSearch()}>
              <ion-icon slot="icon-only" name="search-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <gls-gcse-searchbox-only id="searchbar" class="hidden" />
      </ion-header>,

      <ion-content class="ion-padding">

        <h4>Thanks for your interest in reaching me!</h4>

        <p>To contact me or provide site feedback, please use the form below. I prefer that you include your name and an email address or phone number (especially if you want me to respond), however, anonymous feedback is accepted.</p>

        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <ion-item>
                <ion-label position="floating">Name <span class="optionalFieldText">(optional)</span></ion-label>
                <ion-input id="name" name="name" type="text" placeholder="GUEST" value={this.name} onInput={(event) => this.handleNameChange(event)}></ion-input>
              </ion-item>
            </div>
            <div>
              <ion-item>
                <ion-label position="floating">Email or Phone Number <span class="optionalFieldText">(optional)</span></ion-label>
                <ion-input id="from" name="from" inputmode="text" placeholder="ANONYMOUS" value={this.from} onInput={(event) => this.handleFromChange(event)}></ion-input>
              </ion-item>
            </div>
            <div>
              <ion-item>
                <ion-label position="floating">Subject <span class="requiredFieldText">(required)</span></ion-label>
                <ion-input id="subject" name="subject" inputmode="text" placeholder="Your subject here..." value={this.subject} onInput={(event) => this.handleSubjectChange(event)}></ion-input>
              </ion-item>
            </div>
            <div>
              <ion-item>
                <ion-label position="floating">Message <span class="requiredFieldText">(required)</span></ion-label>
                <ion-textarea id="text" name="text" placeholder="Your message here..." value={this.text} onInput={(event) => this.handleTextChange(event)}></ion-textarea>
              </ion-item>
            </div>
            <p><br /></p>
            <div class="clear">
              <ion-button id="submit-button" type="submit">Submit</ion-button>
            </div>
          </form>
        </div>

      </ion-content>
    ];
  }
}
