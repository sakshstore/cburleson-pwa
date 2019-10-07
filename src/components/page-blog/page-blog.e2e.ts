import { newE2EPage } from '@stencil/core/testing';

describe('page-blog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-blog></page-blog>');

    const element = await page.find('page-blog');
    expect(element).toHaveClass('hydrated');
  });

  /*
  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-blog></app-blog>');

    const element = await page.find('app-blog ion-content ion-button');
    expect(element.textContent).toEqual('Profile page');
  });
  */
 
});
