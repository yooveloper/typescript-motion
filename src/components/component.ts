export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPostion): void;
}

/**
 * HTML 엘리먼트를 만드는것을 캡슐화 한다.
 */

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  // attachTo 는 외부에서 사용할 수 있는 api
  // 추가하고 싶은 element와 position을 인자로 받는다.
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
