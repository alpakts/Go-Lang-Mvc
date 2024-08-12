import Header from './layout/header/index';
import './styles.scss';
export class IndexTemplate {

  constructor() {
    this.init();
   
   
  }
  init(){
    console.log('IndexTemplate init'); 
    new Header();
  }
}
        

document.addEventListener('DOMContentLoaded', () => {
  new IndexTemplate();
}
);