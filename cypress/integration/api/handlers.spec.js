/* eslint-disable no-undef */
import { addToLocalStorage, getLinksFromLocalStorage } from '../../../api/handlers';

// context('Shorten URL', () => {
//   it('If valid url, It returns an object that contains details on shortened URL', () => {
//     shortenURL('https://rvysion.com').then((response) => {
//       expect(response.status).to.be.equal('OK');
//       expect(response.data).to.have.property('originalLink');
//       expect(response.data).to.have.property('fullShortLink');
//       expect(response.data).to.have.property('isCopied').and.be.oneOf([true, false]);
//     });
//   });
// });

context('Local Storage', () => {
  it('User visits page for the first time', () => {
    const value = localStorage.getItem('shortly');
    expect(value).to.be.equal(null);
  });

  it('Add Link To Local Storage', () => {
    const value = localStorage.getItem('shortly');
    expect(value).to.be.equal(null);
    addToLocalStorage({
      originalLink: 'https://hello.com',
      fullShortLink: 'https://goo.gl/536wu2',
      isCopied: false,
    });
    const newValue = localStorage.getItem('shortly');
    const formattedValue = JSON.parse(newValue);
    expect(formattedValue).to.have.length(1);
    expect(formattedValue[0]).to.have.property('originalLink').and.to.not.equal('');
    expect(formattedValue[0]).to.have.property('fullShortLink').and.to.not.equal('');
    expect(formattedValue[0]).to.have.property('isCopied').and.be.oneOf([true, false]);
  });

  it('Get Links From Local Storage if present', () => {
    const value = localStorage.getItem('shortly');
    expect(value).to.be.equal(null);
    addToLocalStorage({
      originalLink: 'https://finnauto.com',
      fullShortLink: 'https://goo.gl/536wf2',
      isCopied: false,
    });
    addToLocalStorage({
      originalLink: 'https://finnauto.com',
      fullShortLink: 'https://goo.gl/536wa2',
      isCopied: false,
    });

    const formattedValue = getLinksFromLocalStorage();
    expect(formattedValue).to.have.length(2);
    expect(formattedValue[0]).to.have.property('originalLink').and.to.not.equal('');
    expect(formattedValue[0]).to.have.property('fullShortLink').and.to.not.equal('');
    expect(formattedValue[0]).to.have.property('isCopied').and.be.oneOf([true, false]);
  });

  it('Get Empty Array from Local Storage if links are absent', () => {
    const value = localStorage.getItem('shortly');
    expect(value).to.be.equal(null);

    const formattedValue = getLinksFromLocalStorage();
    expect(formattedValue).to.have.length(0);
  });
});
