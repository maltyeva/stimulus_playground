import { Controller } from 'stimulus';
import Rails from '@rails/ujs'; 

export default class extends Controller {
  initialize() {
    let that = this;
    setInterval(() => {
      this.request(function(response) {
        that.handleResponse(response)
      })
    }, 1000)
  }

  request(callback) {
    Rails.ajax({
      type: "GET", 
      url: this.url, 
      success: callback
    })
  }
  handleResponse(data) {
    this.element.innerHTML = new XMLSerrializer().serializeToString(data)
  }
  
  url() {
   return this.element.getAttribute('data-url')
  }
}