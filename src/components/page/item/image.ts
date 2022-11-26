import { BaseComponent } from '../../component';

/**
 * 이미지 컴포넌트는 생성자함수에서 title과 url을 전달받아서
 * 내부적으로 template 태그를 사용해서 image 요소를 동적으로 만든다.
 */
export class ImageComponent extends BaseComponent<HTMLElement> {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    super(`
    <section class="image">
      <div class="image__holder">
        <img src="" alt="" class="image__thumbnail" />
      </div>
      <p class="image__title"></p>
    </section>`);

    // title과 url을 사용자에게 직접 입력받은 값으로 innerHTML에 사용하는건 안전하지 않기 때문에
    // 이런식으로 직접 따로 설정해준다.
    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  // attachTo 는 외부에서 사용할 수 있는 api
  // 추가하고 싶은 element와 position을 인자로 받는다.
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
