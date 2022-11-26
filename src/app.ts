import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  // 생성자함수에서 해당 element를 받아서 page 컴포넌트를 생성하고 attachTo 메서드로 해당 element를 추가해준다.
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    image.attachTo(appRoot, 'beforeend');
  }
}

// 프로그램이 실행되면 App 클래스의 인스턴스를 생성하고 인자로 document class를 가진 element를 넘긴다.
new App(document.querySelector('.document')! as HTMLElement);
